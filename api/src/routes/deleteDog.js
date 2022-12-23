const { Router } = require("express");
const { Dog } = require("../db");
const router = Router();

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  if (!id) return res.status(400).send("Error, missing parameters");

  try {
    await Dog.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).send("Successfully deleted");
  } catch (e) {
    res.status(400).send("Error trying to delete");
  }
});
module.exports = router;
