const { Router } = require("express");
const { getInfTemp } = require("./Functions");

const router = Router();

router.get("/", async (req, res) => {
  const all = await getInfTemp();

  return res.status(200).json(all);
});
module.exports = router;
/* 


[ ] GET /temperaments:
Obtener todos los temperamentos posibles
En una primera instancia deberán obtenerlos desde la API externa y guardarlos en su propia base de datos y luego ya utilizarlos desde allí
*/
