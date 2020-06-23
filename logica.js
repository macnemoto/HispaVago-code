const cheerio = require('cheerio');
const request = require('request-promise');

//var ulrchispa = document.getElementById("potsABuscar").value;


async function nekoMinig() {

const $ = await request({
uri: 'https://www.hispachan.org/ve/res/1701415.html', 
transform: body => cheerio.load(body)

})

let reGex1 = /( VE ........ ........ ..:.. \/#\/ |>>..*|>>....... \(OP\)|>>.......|\/#\/ ....... \[X\]|\d{7}|\d{5}|.*png..|.*.....KB ,.*...x....*,|.*jpg..)/gi;
let reGex2 =/^\s+|\s+$|\s+(?=\s)/g
let reGex3 =/(\[X\]|\/#\/|>>.........*|\[★\]|\[S\]|\[A\]|...*.jpg|...*.png|...*.gif|...*.mp4|...*.webm)/gi
let reGex4 =/(.jpg|.png|.webm|.mp4|.gif|\(.....................)/gis
let reGex5 =/(Eliminar..*CP)/gis
let reGex6 =/(>>.An.nimo)/gs
let titulo = $('#delform');
titulo = titulo.text();
//titulo = (titulo.replace(reGex1, ""));
titulo = titulo.replace(reGex1, "").trim()
titulo = titulo.replace(reGex2, "")
titulo = titulo.replace(reGex3, "")
titulo = titulo.replace(reGex4, "")
titulo = titulo.replace(reGex5, "")
console.log(titulo.replace(reGex6, ""))


}
nekoMinig()