const { Router } = require("express");
const { getAll } = require("./Functions");

const router = Router();

router.get("/", async (req, res) => {
  const name = req.query.name;
  const all = await getAll();
  if (name) {
    const search = await all.filter((dog) =>
      dog.name.toLowerCase().includes(name.toLowerCase())
    );
    const fail = [
      {
        id: "plvkcw pokqgpk.pok. pqk.pkcp.qpcrkcqpokppo12ok231,4",
        name: "I am sorry, your dog does not exist",
        min_weight: "20",
        max_weight: "30",
        image: {
          id: "rkiByeqcfv36.3,m7c47",
          width: 500,
          height: 335,
          url: "https://img.freepik.com/free-vector/404-error-web-template-with-cute-dog_23-2147763341.jpg?w=2000",
        },
      },
    ];
    if (search.length !== 0) {
      return res.status(200).json(search);
    } else {
      res.status(200).json(fail);
    }
  } else {
    return res.status(200).json(all);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const all = await getAll();
  if (id) {
    const searchId = await all.filter((dog) => dog.id == id);

    if (searchId.length !== 0) {
      return res.status(200).json(searchId);
    } else {
      res.status(404).json("Sorry your dog not found");
    }
  }
});

module.exports = router;
