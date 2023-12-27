import {describe, expect, test} from '@jest/globals';
import request from "supertest";
import { databaseTestConfig } from '../src/config/database/database.config';
import { app, closeServer } from '../src/app';
import { HTTP_Codes } from '../src/repository/httpCodes';
import { ERROR } from '../src/repository/errors';

describe('user', () => {
    beforeAll(() => {
    });

    test('correct login', async () => {
        const testData = {
            email: 'test@pluto.com',
            password: 'x'
        };

        const response = await request(app)
            .post('/api/auth/login')
            .send(testData);

        expect(response.status).toBe(HTTP_Codes.OK);
        expect(response.header).toHaveProperty('authorization');
        const authHeader = response.header['authorization'];
        expect(authHeader.startsWith('Bearer ')).toBe(true);
    });

    test('correct login', async () => {
        const testData = {
            email: 'test_nf@pluto.com',
            password: 'x'
        };

        const response = await request(app)
            .post('/api/auth/login')
            .send(testData);

        expect(response.status).toBe(HTTP_Codes.NOT_FOUND);
        expect(response.header).not.toHaveProperty('authorization');
    });

    afterAll(async () => {
        databaseTestConfig.end();
        closeServer();
    });
});