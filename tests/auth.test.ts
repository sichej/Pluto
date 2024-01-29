import {describe, expect, test} from '@jest/globals';
import request from "supertest";
import { app, closeServer } from '../src/app';
import { HTTP_Codes } from '../src/repository/httpCodes';
import { ERROR } from '../src/repository/errors';
import sequelize from '../src/config/database/database.config';

describe('auth', () => {
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

    test('missing user login', async () => {
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

    test('missing data login', async () => {
        const testData = {
            password: 'x'
        };

        const response = await request(app)
            .post('/api/auth/login')
            .send(testData);

        expect(response.status).toBe(HTTP_Codes.BAD_REQUEST);
        expect(response.text).toBe(ERROR.BODY_ERROR);
    });

    test('correct registration', async () => {
        const testData = {
            email: 'new_user@pluto.com',
            name: 'Test',
            password: 'x'
        };

        const response = await request(app)
            .post('/api/auth/register')
            .send(testData);

        expect(response.status).toBe(HTTP_Codes.OK);
        expect(response.header).toHaveProperty('authorization');
        const authHeader = response.header['authorization'];
        expect(authHeader.startsWith('Bearer ')).toBe(true);
    });

    test('user already exists registration', async () => {
        const testData = {
            email: 'test@pluto.com',
            name: 'test',
            password: 'x'
        };

        const response = await request(app)
            .post('/api/auth/register')
            .send(testData);

        expect(response.status).toBe(HTTP_Codes.FOUND);
    });

    test('missing field registration', async () => {
        const testData = {
            email: 'test@pluto.com',
            name: 'test'
        };

        const response = await request(app)
            .post('/api/auth/register')
            .send(testData);

        expect(response.status).toBe(HTTP_Codes.BAD_REQUEST);
        expect(response.text).toBe(ERROR.BODY_ERROR);
    });

    test('logout', async () => {
        const authToken = 'fake_token'; 
    
        const response = await request(app)
            .get('/api/auth/logout')
            .set('Authorization', `Bearer ${authToken}`)
            .send();
    
        expect(response.status).toBe(HTTP_Codes.OK);
        expect(response.header).not.toHaveProperty('authorization');
    });
    

    afterAll(async () => {
        //databaseTestConfig.end();
        sequelize.close()
        closeServer();
    });
});