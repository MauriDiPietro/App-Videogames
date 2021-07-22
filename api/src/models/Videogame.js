const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {   //nombre de la tabla
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    description: {
        type: DataTypes.STRING,
        
    },
    released: {
      type: DataTypes.DATE,
      
    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      
    },
    rating:{
      type: DataTypes.INTEGER,
      
    },
    image: {
      type: DataTypes.STRING
    },
   });
};
