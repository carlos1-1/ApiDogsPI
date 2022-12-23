const axios = require("axios");
const { Dog, Temperament } = require("../db");
const apiKey =
  "apikey=live_KYMgR10UdXzXrC4KDhwu2pjOiYlnsqIk4lPv9uoQ6l3031UCIaLgwFbgdwm8D7Nw";
//1:obt inf api
//2:obt inf db
//3:obt all inf
//4:obt inf temp
const getApi = () => {
  const apiInfo = axios
    .get(`https://api.thedogapi.com/v1/breeds?api_key=${apiKey}`)
    .then((res) =>
      res.data.map((dog) => {
        let minH = dog.height.metric.split("-")[0];
        let maxH = dog.height.metric.split("-").reverse()[0];
        let minW = dog.weight.metric.split("-")[0];
        let maxW = dog.weight.metric.split("-").reverse()[0];
        let minL = dog.life_span.includes("–")
          ? dog.life_span.split("–")[0]
          : dog.life_span.split("-")[0];
        let maxL = dog.life_span.includes("–")
          ? dog.life_span.split("–").reverse()[0]
          : dog.life_span.split("-").reverse()[0];
        return {
          id: dog.id,
          name: dog.name,
          min_height: minH.replace(/ /g, ""),
          max_height: maxH.replace(/ /g, ""),
          min_weight: minW.replace(/ /g, ""),
          max_weight: maxW.replace(/ /g, ""),
          life_span_min: minL.replace(/ /g, "").replace(/years/g, ""),
          life_span_max: maxL.replace(/ /g, "").replace(/years/g, ""),
          image: dog.image,
          temperament: dog.temperament,
        };
      })
    );
  return apiInfo;
  /*const api = await axios.get(
    `https://api.thedogapi.com/v1/breeds?api_key=${apiKey}`
  );
  const inf = await api.data.map((dog) => {
    let minH = dog.height.metric.split("-")[0];
    let maxH = dog.height.metric.split("-").reverse()[0];
    let minW = dog.weight.metric.split("-")[0];
    let maxW = dog.weight.metric.split("-").reverse()[0];

    return {
      id: dog.id,
      name: dog.name,
      min_height: minH.replace(/ /g, ""),
      max_height: maxH.replace(/ /g, ""),
      min_weight: minW.replace(/ /g, ""),
      max_weight: maxW.replace(/ /g, ""),
      life_span_min: dog.life_span.split("-")[0] + "years",
      life_span_max:
        dog.life_span
          .split("-")
          .reverse()[0]
          .replace(/ /g, "")
          .replace(/years/g, "") + " years",

      image: dog.image,
      temperament: dog.temperament,
    };
  });
  return inf;*/
};
const getDb = () => {
  const db = Dog.findAll({
    include: {
      model: Temperament,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  }).then((res) => {
    return res;
  });
  return db;
};
/*
  return await Dog.findAll({
    include: {
      model: Temperament,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
*/
const getAll = async () => {
  const apiInf = await getApi();
  let dbInf = await getDb();
  dbInf = await dbInf.map((el) => {
    return {
      id: el.id,
      name: el.name,
      min_height: el.min_height,
      max_height: el.max_height,
      min_weight: el.min_weight,
      max_weight: el.max_weight,
      life_span_min: el.life_span_min,
      life_span_max: el.life_span_max,
      image: el.image,
      temperament: el.temperaments
        .map((temp) => {
          return temp.name;
        })
        .join(", "),
    };
  });
  const allInf = apiInf.concat(dbInf);
  return allInf;
};

const getInfTemp = async () => {
  const api = await axios.get(
    `https://api.thedogapi.com/v1/breeds?api_key=${apiKey}`
  );
  const inf = await api.data;
  const temperaments = inf
    .map((dog) => dog.temperament)
    .join() //unir
    .split(",") //arr
    .sort(); //ord

  await temperaments
    .filter((t, i) => temperaments.indexOf(t) === i)
    .forEach(
      (t) =>
        t.trim() !== "" &&
        Temperament.findOrCreate({
          where: {
            name: t.trim(),
          },
        })
    );

  const allTemperaments = await Temperament.findAll({ order: [["name"]] });
  return allTemperaments;
};
module.exports = {
  getApi,
  getDb,
  getAll,
  getInfTemp,
};
