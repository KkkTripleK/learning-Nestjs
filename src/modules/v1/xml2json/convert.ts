import { parseString } from 'xml2js';
import * as fs from 'fs';
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const xl = require('excel4node');
import * as xl from 'excel4node';

export function convert2json() {
  const text = fs.readFileSync('./src/modules/v1/xml2json/test.xml', 'utf-8');

  parseString(text, function (err, result) {
    const jsonTextArray = [];
    for (let i = 0; i < result.employees.employee.length; i++) {
      const tempArr = {
        id: result.employees.employee[i].id,
        firstName: result.employees.employee[i].firstName,
        lastName: result.employees.employee[i].lastName,
      };
      jsonTextArray.push(tempArr);
    }

    console.log(jsonTextArray);

    const wb = new xl.Workbook();
    const ws = wb.addWorksheet('Worksheet Name');

    const headingColumnNames = ['id', 'firsName', 'lastName'];

    let headingColumnIndex = 1;
    headingColumnNames.forEach((heading) => {
      ws.cell(1, headingColumnIndex++).string(heading);
    });

    let rowIndex = 2;
    jsonTextArray.forEach((record) => {
      let columnIndex = 1;
      Object.keys(record).forEach((columnName) => {
        ws.cell(rowIndex, columnIndex++).string(record[columnName]);
      });
      rowIndex++;
    });

    wb.write('filename.xlsx');
  });
}

/*
  https://medium.com/technogise/how-to-save-json-data-in-excel-file-using-node-js-a4a4e5f40226
*/
