module.exports = (sequelize, DataTypes) => {
    const Tasks = sequelize.define('Tasks', {
        descricao: DataTypes.STRING,
        status: DataTypes.STRING,
    });

    return Tasks;
};
