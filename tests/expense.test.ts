import {describe, expect, test} from '@jest/globals';
import request from "supertest";
import { app, closeServer } from '../src/app';
import { HTTP_Codes } from '../src/repository/httpCodes';
import { signJWT } from '../src/services/auth/auth.services';
import sequelize from '../src/config/database/database.config';


const authToken = signJWT('test@pluto.com', 15);
describe('expense', () => {
    beforeAll(() => {
    });

    test('new expense', async () => {
        const testData = {
            value: 25,
            date: '2023-10-28',
            name: 'grocery',
            details: 'pandoro, wine',
            idCategory: 1,
            idCategoryDetail: 3
        };

        const response = await request(app)
            .post('/api/expense/newexpense')
            .set('Authorization', `Bearer ${authToken}`)
            .send(testData);

        console.log(response.text)
        expect(response.status).toBe(HTTP_Codes.OK);
    });

    test('new expense - no idCategoryDetail', async () => {
        const testData = {
            value: 25,
            date: '2023-12-28',
            name: 'grocery',
            details: 'pandoro, wine',
            idCategory: 1
        };

        const response = await request(app)
            .post('/api/expense/newexpense')
            .set('Authorization', `Bearer ${authToken}`)
            .send(testData);

        expect(response.status).toBe(HTTP_Codes.OK);
    });

    test('wrong new expense - wrong input type', async () => {
        const testData = {
            value: 25,
            date: 2023-12-28,
            name: 'grocery',
            details: 'pandoro, wine',
            idCategory: 1,
            idCategoryDetail: 3
        };

        const response = await request(app)
            .post('/api/expense/newexpense')
            .set('Authorization', `Bearer ${authToken}`)
            .send(testData);

        expect(response.status).toBe(HTTP_Codes.BAD_REQUEST);
    });

    test('wrong new expense - missing field', async () => {
        const testData = {
            value: 25,
            date: '2023-12-28',
            name: 'grocery',
            details: 'pandoro, wine',
            idCategoryDetail: 3
        };

        const response = await request(app)
            .post('/api/expense/newexpense')
            .set('Authorization', `Bearer ${authToken}`)
            .send(testData);

        expect(response.status).toBe(HTTP_Codes.BAD_REQUEST);
    });

    afterAll(async () => {
        sequelize.close();
        closeServer();
    });
});