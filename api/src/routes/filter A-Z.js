const { Router } = require("express");
const { getAll } = require("./Functions");

const router = Router();

router.get("/", async (req, res) => {
  const order = req.query.order; //A-Z o Z-A
  const all = await getAll(); //await
  if (order == "A-Z") {
    const alphabetical = all.sort((first, second) => {
      if (first.name > second.name) {
        return 1;
      }
      if (second.name > first.name) {
        return -1;
      }
      return 0;
    });

    return res.status(200).json(alphabetical);
  } else {
    const alphabetical = all.sort((first, second) => {
      if (first.name > second.name) {
        return -1;
      }
      if (second.name > first.name) {
        return 1;
      }
      return 0;
    });

    return res.status(200).json(alphabetical);
  }
});
/*
case "FILTER_A-Z":
      const alphabetical =
        action.payload === "A-Z"
          ? state.allDogs.sort
          : state.allDogs
      return {
        ...state,
        allDogs: alphabetical,
      };
*/

module.exports = router;
