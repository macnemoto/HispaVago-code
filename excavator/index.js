"use strict";

const scrappersNeko = require("./scrappersNeko");
const puppeteer = require("puppeteer");
const express = require("express");
const app = express();
var bodyParser = require('body-parser')
const port = 3000;
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 



//app.get("/", function (req, res) {
  //res.send("hello world");
//});

app.listen(port, () => {
  console.log(`la app esta corriendo en http://localhost:${port}`);
});
//metodo get

app.get("/hispachan.org/:board/res/:th.html", function (req, res) {
  let thId = req.params.th.split(".")[0];
  let board = req.params.board;
  
console.log(board);
console.log(thId);
const nekomaster = async () => {
    
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`https://www.hispachan.org/${board}/res/${thId}.html`);
  await page.waitForSelector("blockquote");
  //await page.waitForSelector(".filetitle");

  
  let posts = [];
  await page.waitFor(5000);
  

  posts.push({
    titulo: await page.$eval("span.filetitle", (el) => el.innerText),
    encabezado: await page.$eval("blockquote", (el) => el.innerText),
    imagenPost:  await page.$eval(".thumb", (el) => el.src),
  });

  const elementos = await page.$$("table.respuesta");
  for (const e of elementos)
    posts.push({
      negrito: await e.$eval("blockquote", (el) => el.innerText),
    });



   JSON.stringify(posts);
  
  await browser.close();
  return res.json(posts);
};
//res.send('POST request to the homepage');

 console.log(nekomaster().then((res) => console.log(res)));

});
//metodo post

app.post("/hispachan.org/:board/res/:th.html", function (req, res) {
 // const  thId = req.params.name.th.split(".")[0];
  const  numeros = req.body.name.split(".")[2]
  var convercion = numeros + "/";
  const thId = convercion.split("/")[3]
  const  board = req.body.name.split("/")[3];


 console.log(board);
  console.log(thId);
  res.statusCode = 302;
  res.setHeader("Location", `http://localhost:3000/hispachan.org/${board}/res/${thId}.html`);
  return  res.end();
 
  //Recuperar los post de los negritos
  const nekomaster = async () => {
    
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`https://www.hispachan.org/${board}/res/${thId}.html`);
    await page.waitForSelector("blockquote");

    
    let posts = [];
    await page.waitFor(5000);

    const elementos = await page.$$("table.respuesta");
    for (const e of elementos)
      posts.push({
        negrito: await e.$eval("blockquote", (el) => el.innerText),
      });

      res.statusCode = 302;
      res.setHeader("Location", `https://www.hispachan.org/${board}/res/${thId}.html`);
      return  res.end();

     //JSON.stringify(posts);
    
    await browser.close();
    return //res.json(posts);

 
  };
  //res.send('POST request to the homepage');
 
   console.log(nekomaster().then((res) => console.log(res)));

   
//});
});
