const request = require('supertest');
const app = require('../app.js'); // Correct path to your app.js

describe('Express App', () => {
  let server;

  // Start the Express server before all tests
  beforeAll((done) => {
    server = app.listen(3000, () => {
      done();
    });
  });

  // Stop the Express server after all tests
  afterAll((done) => {
    server.close(() => {
      done();
    });
  });

  // Test the root endpoint
  it('should respond with status 200 and "Hello world" for the root endpoint', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello world');
  });

  // Test the '/about' endpoint
  it('should respond with status 200 and "Welcome to the About Page" for the "/about" endpoint', async () => {
    const response = await request(app).get('/about');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Welcome to the About Page');
  });
});
