const fs = require('fs');
const basename = require('path').basename;
const XLSX = require('xlsx');

module.exports = state => {
  const file = XLSX.readFile(state.path, {cellDates:true});
  const sheetNames = file.SheetNames;

  const doc = {};
  doc.fileName = basename(state.path);
  doc.createdAt = file.Props.CreatedDate.toJSON();
  doc.updatedAt = file.Props.ModifiedDate.toJSON();
  doc.importedAt = new Date().toJSON();
  doc.size = fs.statSync(state.path).size;

  doc.sheets = sheetNames.map(sheetName => {
    const sheet = file.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(sheet, {raw:true}); // jshint ignore:line
    const headers = data.length ? Object.keys(data) : [];
    return {
      name: sheetName,
      headers: headers,
      rows: data.map(x => {
            Object.keys(x)
              .map(y => [y, !(x[y].split) ? x : x[y].split(';;').filter(x => !!x)])
              .forEach(values => {
                if(values[1].length > 1) x[values[0]] = values[1];
              });
            return Object.assign({}, x, {$type: sheetName});
          })
    };
  });

  return Promise.resolve(doc);
};
