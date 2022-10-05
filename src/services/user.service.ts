import { sha256 } from 'js-sha256';
import jwt from 'jsonwebtoken';
import { UserModel } from '../models/user';

export const signUp = async (user: User): Promise<{access_token: string}> => {
    user.password = sha256(user.password);
    try {
        const newUser = await new UserModel(user).save();
        return generateToken(newUser.id, newUser.email)
    } catch (error) {
        throw new Error(`${error}`);
    }
};

export const generateToken = async (id: string, email: string): Promise<{access_token: string}> => {
    const secret: string = process.env.SECRET as string;

    const payload = {
        sub: id,
        email
    };

    const token = jwt.sign({ payload }, secret, { expiresIn: '2h' });
    return {access_token: token};
};

