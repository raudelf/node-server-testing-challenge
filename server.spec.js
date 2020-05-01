const server = require('./server.js');
const request = require('supertest');

describe('GET /', () => {
    it('Has process.env.DB_ENV as "testing"', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });

    it('Server running correctly', () => {
        return request(server).get('/')
            .expect(200)
            .expect('Content-Type', /json/)
            .then(res => {
                expect(res.body.api).toBe('running');
            });
    });
});