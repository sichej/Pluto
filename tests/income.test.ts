import {describe, expect, test} from '@jest/globals';
import request from "supertest";
import { app, closeServer } from '../src/app';
import { HTTP_Codes } from '../src/repository/httpCodes';
import { signJWT } from '../src/services/auth/auth.services';
import sequelize from '../src/config/database/database.config';


const authToken = signJWT('test@pluto.com', 15);
describe('income', () => {
    beforeAll(() => {
    });

    test('new income', async () => {
        const testData = {
            value: 1000,
            date: '2024-01-01',
            name: 'salary',
            idCategory: 1
        };

        const response = await request(app)
            .post('/api/income/newincome')
            .set('Authorization', `Bearer ${authToken}`)
            .send(testData);

        expect(response.status).toBe(HTTP_Codes.OK);
    });

    test('new income - no value', async () => {
        const testData = {
            date: '2023-12-28',
            name: 'salary',
            idCategory: 1
        };

        const response = await request(app)
            .post('/api/income/newincome')
            .set('Authorization', `Bearer ${authToken}`)
            .send(testData);

        expect(response.status).toBe(HTTP_Codes.BAD_REQUEST);
    });

    test('get all incomes by user', async () => {
        
        const response = await request(app)
            .post('/api/income/getincomes')
            .set('Authorization', `Bearer ${authToken}`)
            .send();

        expect(response.status).toBe(HTTP_Codes.OK);
    });

    afterAll(async () => {
        sequelize.close();
        closeServer();
    });
});