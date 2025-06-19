import express from 'express';
import dishiesRouter from './routes/dishies.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/dishies', dishiesRouter);

app.get('/', (req, res) => {
    res.send('Bienvenue sur l\'API Adalicious ! Le serveur fonctionne.');
});

app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
    console.log(`API des plats accessible sur : http://localhost:${PORT}/dishies`);
});


// essayer comme sur le projet adaction
