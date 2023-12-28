import {describe, expect, test} from '@jest/globals';
import request from "supertest";
import { databaseTestConfig } from '../src/config/database/database.config';
import { app, closeServer } from '../src/app';
import { HTTP_Codes } from '../src/repository/httpCodes';
import { signJWT } from '../src/services/auth/auth.services';


const authToken = signJWT('test@pluto.com', 15);
describe('expense', () => {
    beforeAll(() => {
    });

    test('new expense', async () => {
        const testData = {
            value: 25,
            date: '2023-12-28',
            name: 'grocery',
            details: 'pandoro, wine',
            idCategory: 1,
            idCategoryDetail: 3
        };

        const response = await request(app)
            .post('/api/expense/newexpense')
            .set('Authorization', `Bearer ${authToken}`)
            .send(testData);

        console.log(response.text);
        expect(response.status).toBe(HTTP_Codes.OK);
    });

    afterAll(async () => {
        databaseTestConfig.end();
        closeServer();
    });
});