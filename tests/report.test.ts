import {describe, expect, test} from '@jest/globals';
import request from "supertest";
import { app, closeServer } from '../src/app';
import { HTTP_Codes } from '../src/repository/httpCodes';
import { signJWT } from '../src/services/auth/auth.services';
import sequelize from '../src/config/database/database.config';


const authToken = signJWT('test@pluto.com', 15);
describe('report', () => {
    beforeAll(() => {
    });

    test('new report', async () => {
        const testData = {
            fromDate: '2023-11-28',
            toDate: '2023-12-28',
            type: 3
        };

        const response = await request(app)
            .post('/api/report/timereport')
            .set('Authorization', `Bearer ${authToken}`)
            .send(testData);
        console.log(response.text)
        expect(response.status).toBe(HTTP_Codes.OK);
    });

    test('new report wrong date', async () => {
        const testData = {
            fromDate: '2023-11-28',
            toDate: '2023-10-28',
            type: 3
        };

        const response = await request(app)
            .post('/api/report/timereport')
            .set('Authorization', `Bearer ${authToken}`)
            .send(testData);
        expect(response.status).toBe(HTTP_Codes.BAD_REQUEST);
    });

    test('new report missing value', async () => {
        const testData = {
            fromDate: '2023-11-28',
            type: 3
        };

        const response = await request(app)
            .post('/api/report/timereport')
            .set('Authorization', `Bearer ${authToken}`)
            .send(testData);
        expect(response.status).toBe(HTTP_Codes.BAD_REQUEST);
    });

    test('new report wrong value type', async () => {
        const testData = {
            fromDate: '2023-11-28',
            toDate: 2023,
            type: 3
        };

        const response = await request(app)
            .post('/api/report/timereport')
            .set('Authorization', `Bearer ${authToken}`)
            .send(testData);
        expect(response.status).toBe(HTTP_Codes.BAD_REQUEST);
    });

    afterAll(async () => {
        sequelize.close()
        closeServer();
    });
});