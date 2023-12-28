import {describe, expect, test} from '@jest/globals';
import request from "supertest";
import { databaseTestConfig } from '../src/config/database/database.config';
import { app, closeServer } from '../src/app';
import { HTTP_Codes } from '../src/repository/httpCodes';
import { signJWT } from '../src/services/auth/auth.services';


const authToken = signJWT('test@pluto.com', 15);
describe('category', () => {
    beforeAll(() => {
    });

    test('get all categories', async () => {

        const response = await request(app)
            .get('/api/category/getallcategory')
            .set('Authorization', `Bearer ${authToken}`)
            .send();

        expect(response.status).toBe(HTTP_Codes.OK);
    });

    test('get category by id', async () => {
        const testData = {
            id: 1
        };

        const response = await request(app)
            .post('/api/category/getcategorybyid')
            .set('Authorization', `Bearer ${authToken}`)
            .send(testData);

        expect(response.status).toBe(HTTP_Codes.OK);
    });

    test('wrong get category by id', async () => {
        const testData = {
            id: -4
        };

        const response = await request(app)
            .post('/api/category/getcategorybyid')
            .set('Authorization', `Bearer ${authToken}`)
            .send(testData);

        expect(response.status).toBe(HTTP_Codes.NOT_FOUND);
    });

    test('get category details from id category', async () => {
        const testData = {
            idCategory: 1
        };

        const response = await request(app)
            .post('/api/category/getcategorydetailsbyidcategory')
            .set('Authorization', `Bearer ${authToken}`)
            .send(testData);

        expect(response.status).toBe(HTTP_Codes.OK);
    });

    test('wrong get category details from id category', async () => {
        const testData = {
            idCategory: -1
        };

        const response = await request(app)
            .post('/api/category/getcategorydetailsbyidcategory')
            .set('Authorization', `Bearer ${authToken}`)
            .send(testData);

        expect(response.status).toBe(HTTP_Codes.NOT_FOUND);
    });

    afterAll(async () => {
        databaseTestConfig.end();
        closeServer();
    });
});