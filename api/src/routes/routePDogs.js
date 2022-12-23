const { Router } = require("express");
const { Dog, Temperament } = require("../db");

const router = Router();

router.post("/", async (req, res) => {
  const {
    name,
    min_height,
    max_height,
    min_weight,
    max_weight,
    life_span_min,
    life_span_max,
    image,
    temperament,
  } = req.body;

  let creatorDog = await Dog.create({
    name,
    min_height,
    max_height,
    min_weight,
    max_weight,
    life_span_min,
    life_span_max,
    image,
  });

  const temperamentCreator = await Temperament.findAll({
    where: { name: temperament },
  });

  await creatorDog.addTemperament(temperamentCreator);
  res.status(201).json({ success: "Dog succesfully created!" });
});
module.exports = router;
/* [ ] POST /dogs:
Recibe los datos recolectados desde el formulario controlado de la ruta de creación de raza de perro por body
Crea una raza de perro en la base de datos relacionada con sus temperamentos*/
