const pokemons = require("./data/pokemons");
const tags = require("./data/tags");
const users = require("./data/users");
const itemTypes = require("./data/itemTypes");

module.exports = {
  pokemons,
  tags,
  users,
  itemTypes,
};

// const items = require("./data/items");

// module.exports = () => {

//   var tags = items.map((i) => i.tags);
//   tags = [].concat.apply([], tags);
//   tags = [...new Set(tags)];

//   var users = items.map((i) => i.manufacturer);
//   users = [...new Set(users)];

//   var itemTypes = items.map((i) => i.itemType);
//   itemTypes = [...new Set(itemTypes)];

//   return {
//     items,
//     tags,
//     users,
//     itemTypes,
//   };
// };
