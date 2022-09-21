import { body } from 'express-validator';
import { UserModel } from '../models/user';

export const userRules = [
    body('name').trim().not().isEmpty().isLength({min: 3, max: 50})
    .custom((name) => new Promise((resolve, reject) => {
        UserModel.findOne({ name })
        .then((user) => {
            if (user) {
                reject(new Error('User exists'));
            } else {
                resolve(true);
            }
        })
        .catch((error) => reject(error));
    })),

    body('email').trim().not().isEmpty().isEmail().custom((value) => {
        const query = UserModel.find({ email: value });
        return query.exec().then(user => {
            if(user.length > 0) {
                return Promise.reject('Email already in use');
            }
        });
    }),
 
    body('password').trim().not().isEmpty()
    .isStrongPassword({minLength: 8, minUppercase: 1, minNumbers: 1, minSymbols: 1})
    .withMessage('Password must contain at least 8 characters; one upper case character, one number and one special character'),
]