import nock from 'nock';

const target_url = 'http://localhost:3001';

describe('Testing /sign-up route', () => {

    it('/sign-up rejects malformed password', async () => {
        nock(target_url)
            .post('/sign-up', {
                name: 'user',
                email: 'user@mail.com',
                password: 'letmein'
            })
            .replyWithError({
                'msg': 'Password must contain at least 8 characters; one upper case character, one number and one special character'
            });
    });

    it('/sign-up rejects malformed name', async () => {
        const malformedNameInPayload = {
            name: 'Me',
            email: 'me@mail.com',
            password: 'myVerySecurePassword#1'
        };

        nock(target_url)
            .post('/sign-up')
            .replyWithError({
                "value": "Me",
                "msg": "Invalid value",
                "param": "name",
                "location": "body"
            });
    });

    it('/sign-up rejects malformed email', async () => {
        const malformedNameInPayload = {
            name: 'Me',
            email: 'memail.com',
            password: 'myVerySecurePassword#1'
        };

        nock(target_url)
            .post('/sign-up')
            .replyWithError({
                "value": "memail.com",
                "msg": "Invalid value",
                "param": "email",
                "location": "body"
            });
    });

    it('/sign-up accepts payload', async () => {
        const correctPayload = {
            name: 'user',
            email: 'user@mail.com',
            password: 'myVerySecurePassword#1'
        };

        nock(target_url)
            .post('/sign-up', correctPayload)
            .reply(200, {
                access_token: expect.stringMatching(/^(?:[\w-]*\.){2}[\w-]*$/)
            });
    })
});