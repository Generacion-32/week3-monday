const Article = require("./Article");
const Author = require("./Author");
const City = require("./City");
const Country = require("./Country");

Article.belongsTo(Author) // Article -> authorId
Author.hasMany(Article)

City.belongsTo(Country) //City -> countryId
Country.hasMany(City)