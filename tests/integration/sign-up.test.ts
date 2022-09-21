import { connectToTestMongoDb, disconnectFromTestMongoDb } from './connectToTestDB';
import { UserModel } from '../../src/models/user';


describe('Testing User model', () => {

    beforeAll(async () => {
        await connectToTestMongoDb();
    });

    afterAll(async () => { 
        await disconnectFromTestMongoDb(); 
    });

    test('Testing sign-up', async () => {
        const user = {
            name: 'User',
            email: 'user@mail.com',
            password: 'letMeIn'
        };

        const newUser = new UserModel({...user});
        const result = await newUser.save();
        
        expect(result.name).toEqual('User');
    });

});