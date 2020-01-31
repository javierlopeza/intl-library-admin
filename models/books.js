// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v5/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v5/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const Books = sequelize.define('Books', {
    bookFormat: {
      type: DataTypes.STRING,
    },
    datePublished: {
      type: DataTypes.DATE,
    },
    description: {
      type: DataTypes.STRING,
    },
    goodreadsUrl: {
      type: DataTypes.STRING,
    },
    imageUrl: {
      type: DataTypes.STRING,
    },
    isbn: {
      type: DataTypes.STRING,
    },
    language: {
      type: DataTypes.STRING,
    },
    pages: {
      type: DataTypes.INTEGER,
    },
    publisher: {
      type: DataTypes.STRING,
    },
    ratingAverage: {
      type: DataTypes.INTEGER,
    },
    ratingCount: {
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'Books',
    schema: process.env.DATABASE_SCHEMA,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v5/reference-guide/relationships#adding-relationships.
  Books.associate = (models) => {
    Books.belongsTo(models.Authors, {
      foreignKey: {
        name: 'authorIdKey',
        field: 'authorId',
      },
      as: 'author',
    });
  };

  return Books;
};
