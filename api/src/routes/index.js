const { Router } = require("express");
const routerGDogs = require("./routeGDogs");
const routerPDogs = require("./routePDogs");
const routerTemp = require("./routeTemp");
const routerDelete = require("./deleteDog");
const routerAZ = require("./filter A-Z");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/dogs", routerGDogs);
router.use("/create", routerPDogs);
router.use("/temperaments", routerTemp);
router.use("/deleted", routerDelete);
router.use("/AZ", routerAZ); //http://localhost:3001/AZ?order=Z-A

module.exports = router;
