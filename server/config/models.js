//caller require('/config/models') get back JSON Obj {model(key):file def location, .....}
module.exports = {
  movie: require('./../models/Movie'),
  categoryRef: require('./../models/CategoryRef')
};
