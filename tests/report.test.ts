import {describe, expect, test} from '@jest/globals';
import request from "supertest";
import { databaseTestConfig } from '../src/config/database/database.config';
import { app, closeServer } from '../src/app';
import { HTTP_Codes } from '../src/repository/httpCodes';
import { signJWT } from '../src/services/auth/auth.services';


const authToken = signJWT('test@pluto.com', 15);
describe('report', () => {
    beforeAll(() => {
    });

    test('new report', async () => {
        const testData = {
            from: '2023-11-28',
            to: '2023-12-28'
        };

        const response = await request(app)
            .post('/api/report/timereport')
            .set('Authorization', `Bearer ${authToken}`)
            .send(testData);
        expect(response.status).toBe(HTTP_Codes.OK);
    });

    test('new report wrong date', async () => {
        const testData = {
            from: '2023-11-28',
            to: '2023-10-28'
        };

        const response = await request(app)
            .post('/api/report/timereport')
            .set('Authorization', `Bearer ${authToken}`)
            .send(testData);
        expect(response.status).toBe(HTTP_Codes.BAD_REQUEST);
    });

    test('new report missing value', async () => {
        const testData = {
            from: '2023-11-28'
        };

        const response = await request(app)
            .post('/api/report/timereport')
            .set('Authorization', `Bearer ${authToken}`)
            .send(testData);
        expect(response.status).toBe(HTTP_Codes.BAD_REQUEST);
    });

    test('new report wrong value type', async () => {
        const testData = {
            from: '2023-11-28',
            to: 2023
        };

        const response = await request(app)
            .post('/api/report/timereport')
            .set('Authorization', `Bearer ${authToken}`)
            .send(testData);
        expect(response.status).toBe(HTTP_Codes.BAD_REQUEST);
    });

    test('new report category', async () => {
        const testData = {
            from: '2022-12-28',
            to: '2023-12-28',
            idCategory: 2
        };

        const response = await request(app)
            .post('/api/report/timecategoryreport')
            .set('Authorization', `Bearer ${authToken}`)
            .send(testData);
        console.log(response.text)
        expect(response.status).toBe(HTTP_Codes.OK);
    });

    afterAll(async () => {
        databaseTestConfig.end();
        closeServer();
    });
});