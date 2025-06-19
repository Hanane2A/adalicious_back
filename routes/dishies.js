// route get dishies

// const express = require("express");
// const router = express.router();
// const pool = require("../prisma.js")


// routes/dishies.js
import express from 'express';
import { PrismaClient } from '@prisma/client'; // Importe l'instance de PrismaClient depuis le fichier prisma.js à la racine

const router = express.Router();

const prisma = new PrismaClient();

// Route GET pour récupérer tous les plats (dishies)
router.get('/', async (req, res) => {
    try {
        // *** Utilise 'prisma.dishies' car ton modèle dans schema.prisma s'appelle 'dishies' ***
        const dishes = await prisma.dishies.findMany();
        res.json(dishes);
    } catch (error) {
        console.error('Erreur lors de la récupération des plats :', error);
        res.status(500).json({ error: 'Erreur interne du serveur' });
    }
});

export default router;