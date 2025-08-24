const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());


// Initialize app locals for state management
app.locals.medications = [];
app.locals.history = [];



app.get('/medications', (req, res) => {
  res.json(app.locals.medications);
});

app.post('/medications', (req, res) => {
  const newMedication = {
    id: Date.now().toString(),
    ...req.body,
    createdAt: new Date().toISOString()
  };
  app.locals.medications.push(newMedication);
  res.status(201).json(newMedication);
});

app.put('/medications/:id', (req, res) => {
  const { id } = req.params;
  const index = medications.findIndex(m => m.id === id);
  
  if (index === -1) {
    return res.status(404).json({ error: 'Medication not found' });
  }
  
  medications[index] = { ...medications[index], ...req.body, updatedAt: new Date().toISOString() };
  res.json(medications[index]);
});

app.delete('/medications/:id', (req, res) => {
  const { id } = req.params;
  medications = medications.filter(m => m.id !== id);
  res.status(204).send();
});


app.get('/history', (req, res) => {
  res.json(app.locals.history);
});

app.post('/history', (req, res) => {
  const newEntry = {
    id: Date.now().toString(),
    ...req.body,
    timestamp: new Date().toISOString()
  };
  app.locals.history.push(newEntry);
  res.status(201).json(newEntry);
});


// Only start the server if this file is run directly
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;
