const baseFieldDefaults = require('./baseFieldDefaults');

const getPropertiesStub = entName => (_, fieldType) =>
  Object.keys(baseFieldDefaults[entName][fieldType]);

const getDefaultStub = entName => (_, fieldType, field) =>
  baseFieldDefaults[entName][fieldType][field];

module.exports = {
  getPropertiesStub,
  getDefaultStub,
};