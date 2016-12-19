const fs = require('fs');
const basename = require('path').basename;
const XLSX = require('xlsx');

module.exports = state => {
  const file = XLSX.readFile(state.path);
  const sheetNames = file.SheetNames;

  const doc = {};
  doc.fileName = basename(state.path);
  doc.createdAt = file.Props.CreatedDate.toJSON();
  doc.updatedAt = file.Props.ModifiedDate.toJSON();
  doc.importedAt = new Date().toJSON();
  doc.size = fs.statSync(state.path).size;

  doc.sheets = sheetNames.map(sheetName => {
    const sheet = file.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(sheet); // jshint ignore:line
    const headers = data.length ? Object.keys(data) : [];
    return {
      name: sheetName,
      headers: headers,
      rows: data
    };
  });

  return Promise.resolve(doc);
};
