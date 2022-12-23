const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("dog", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    min_height: {
      //altura
      type: DataTypes.STRING,
      allowNull: false,
    },
    max_height: {
      //altura
      type: DataTypes.STRING,
      allowNull: false,
    },
    min_weight: {
      //peso
      type: DataTypes.STRING,
      allowNull: false,
    },
    max_weight: {
      //peso
      type: DataTypes.STRING,
      allowNull: false,
    },

    life_span_min: {
      //vida
      type: DataTypes.STRING,
      allowNull: true,
    },
    life_span_max: {
      //vida
      type: DataTypes.STRING,
      allowNull: true,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  });
};

/* ID *
Nombre *
Altura *(height)
Peso *(weight)
Años de vida (life_span)
*=obligatorio 
+imagen y un identificador de creado en base de datos*/
