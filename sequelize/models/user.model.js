const { DataTypes } = require('sequelize');

// We export a function that defines the model.
// This function will automatically receive as parameter the Sequelize connection object.
module.exports = (sequelize) => {
	sequelize.define('users', {
		// The following specification of the 'id' attribute could be omitted
		// since it is the default.
		user_id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		user_name: {
			allowNull: false,
			type: DataTypes.STRING,
		},
    	user_email: {
			allowNull: false,
			type: DataTypes.STRING,
		},
    	user_password: {
			allowNull: false,
			type: DataTypes.STRING,
		},
		// created_at: {
		// 	allowNull: false,
		// 	type: DataTypes.TIME,
		// },
		// updated_at: {
		// 	allowNull: false,
		// 	type: DataTypes.TIME,
		// }
	});
};