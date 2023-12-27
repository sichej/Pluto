import {describe, expect, test} from '@jest/globals';
import request from "supertest";
import { databaseTestConfig } from '../src/config/database/database.config';
import { app, closeServer } from '../src/app';
import { HTTP_Codes } from '../src/repository/httpCodes';

describe('user', () => {
    beforeAll(() => {
    });

    test('get user by email', async () => {
        const testData = {
            email: 'test@pluto.com'
        };

        const response = await request(app)
            .post('/api/user/getbyemail')
            .send(testData);

        expect(response.status).toBe(HTTP_Codes.OK);
    });

    test('user not found', async () => {
        const testData = {
            email: 'test_nf@pluto.com'
        };

        const response = await request(app)
            .post('/api/user/getbyemail')
            .send(testData);

        expect(response.status).toBe(HTTP_Codes.NOT_FOUND);
    });

    afterAll(async () => {
        databaseTestConfig.end();
        closeServer();
        //await new Promise(res => setTimeout(res, 10));
    });
});