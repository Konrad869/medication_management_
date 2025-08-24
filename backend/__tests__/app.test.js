const request = require('supertest');
const app = require('../server');

describe('Medication API', () => {
  beforeEach(() => {
    // Clear the medications array before each test
    app.locals.medications = [];
  });

  describe('GET /medications', () => {
    it('should return an empty array initially', async () => {
      const response = await request(app).get('/medications');
      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual([]);
    });
  });

  describe('POST /medications', () => {
    it('should create a new medication', async () => {
      const newMedication = {
        name: 'Ibuprofen',
        dosage: '200mg',
        schedule: 'Every 6 hours'
      };

      const response = await request(app)
        .post('/medications')
        .send(newMedication);

      expect(response.statusCode).toBe(201);
      expect(response.body).toMatchObject(newMedication);
      expect(response.body).toHaveProperty('id');
      expect(response.body).toHaveProperty('createdAt');
    });
  });
});
