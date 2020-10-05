import express from 'express';
import appointmentsRouter from './routes/appointments.routes';

const app = express();

app.use(appointmentsRouter);

app.get('/', (req, res) => {
  return res.json({ message: 'Hello World!' });
});

app.listen(3333, () => {
  console.log('🤘Server started on port 3333 🤘');
});

