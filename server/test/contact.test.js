const expect = require('chai').expect;
const request = require('supertest'); // For making HTTP requests in tests
const app = require('../index'); // Your Express app

describe('POST /contact', () => {
  it('should create a new contact', (done) => {
    request(app)
      .post('/contact')
      .send({ name: 'Test', email: 'test@example.com', message: 'Hello' })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).to.equal('Contact added!'); 
        done();
      });
  });
});
