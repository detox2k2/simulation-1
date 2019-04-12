import './controller.js';
import express from 'express';

const app = express();

app.listen(PORT, () => console.log(`Listening on ${PORT}`));