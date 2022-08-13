const helpers = require('./plop-config/helpers');
const component = require('./plop-config/component');

module.exports = (
  /** @type {import('plop').NodePlopAPI} */
  plop
) => {
  Object.keys(helpers).forEach((helperName) => {
    plop.setHelper(helperName, helpers[helperName]);
  });

  plop.setGenerator(component.name, component.options);
};
