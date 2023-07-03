import { addInner } from 'https://jscroot.github.io/element/croot.js';
import { get } from 'https://jscroot.github.io/api/croot.js';
import { getRandomColorName } from './randomcol.js';
import { rowtabel, svg, bsa } from '../template/tabel.js';
import { URLpmb } from '../config/url.js';
get(URLpmb, tabelContent);

function tabelContent(result) {
  userTable(result);
}

function userTable(jsonParse) {
  let row = '';
  jsonParse.forEach((element) => {
    let svgicon = svg.replace('#WARNA#', getRandomColorName());
    let Beasiswa = bsa.replace('#col#', getRandomColorName());
    console.log(Beasiswa);
    row = rowtabel.replace('#jalurtanpates#', element.jalurtanpates).replace('#jalurtes#', element.jalurtes).replace('#bsa#', Beasiswa).replace('#status#', element.status).replace('#SVG#', svgicon);
    addInner('demo', row);
  });
}
