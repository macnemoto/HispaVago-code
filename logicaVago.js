"use strict";
const logica = require('logica.js')
function botonEnviar() {
    var textcontent = document.getElementById("textcontent").value;
    var textarea = document.getElementById('textarea');
    
   
    

/* Expreciones Regulares */
var reGex1 = /( VE ........ ........ ..:.. \/#\/ |>>..*|>>....... \(OP\)|>>.......|\/#\/ ....... \[X\]|\d{7}|\d{5}|.*png..|.*.....KB ,.*...x....*,|.*jpg..)/gi;
var reGex2 = /(<)/gm;

var textoTerminado
    
    textoTerminado = (textcontent.replace(reGex1, ""));
    textoTerminado = (textoTerminado.replace(reGex2, ""));
    textoTerminado = textoTerminado.trim();
    textarea.innerHTML = textoTerminado;

}
function botonEnviar2() {
  /* Expreciones Regulares */
var reGex1 = /( VE ........ ........ ..:.. \/#\/ |>>..*|>>....... \(OP\)|>>.......|\/#\/ ....... \[X\]|\d{7}|\d{5}|.*png..|.*.....KB ,.*...x....*,|.*jpg..)/gi;
var reGex2 = /(<)/gm;  
const linkPost = document.getElementById('potsABuscar').value;

    const  numeros = linkPost.split(".")[2]
    var convercion = numeros + "/";
    const thId = convercion.split("/")[3]

    const  board = linkPost.split("/")[3];
  console.log(board);
  console.log(thId);
    
const url = `http://localhost:3000/hispachan.org/${board}/res/${thId}.html`;

fetch(url) 
  .then(response => response.json())
  .then(data => {
    let comentariosAnones = []
  

  comentariosAnones.push("Nombre del Hilo" + `\n` + `${data[0].titulo}` + `\n`);
  comentariosAnones.push("Contexto del hilo" + `\n` + `${data[0].encabezado}` + `\n` + "Respuestas de los Negritos" + `\n`)
 
    for (let i = 0; i <  data.length; i++) {
    
      comentariosAnones.push(`${data[i].negrito}`);

     }
     //console.log(comentariosAnones)
     //console.log(`${data[0].titulo}`)
    // console.log(`${data[0].encabezado}`)
     var comentariosAnones2 = comentariosAnones.toString();


     comentariosAnones2 = (comentariosAnones2.replace(reGex1, ""));
     comentariosAnones2 = (comentariosAnones2.replace(reGex2, "Menor Que "));
     comentariosAnones2 = comentariosAnones2.trim();
     textarea.innerHTML =  comentariosAnones2

     var h1lol = document.getElementById('h1lol');
     h1lol.innerText = ("Hilo Encontrado! "+ `\n` + `${data[0].titulo}`);
     
     var h3lol = document.getElementById('h3lol');
     h3lol.innerText = ("");


     var imagenPost = document.getElementById('imagenPost');
     imagenPost.src = (`${data[0].imagenPost}`);










     //codigo descargado
      // let comentarios = document.getElementById("pruebas");
      //comentarios.innerHTML = `<p>${data[i].negrito}</p>`
    //  comentariosAnones.push(`${data[i].negrito}`); 
      // var x = comentariosAnones.toString();
      //textarea.innerHTML = comentariosAnones.length
     //textarea.innerHTML =(i + `<p>${data[i].negrito}</p>` + "<br>")

  // console.log(data)

//-------------------------------------------------------------------------
    
   // var textcontent = document.getElementById("textcontent").value;
  //  var textarea = document.getElementById('textarea');

/* Expreciones Regulares */
//var reGex2 = /(Anónimo...*|>>...*|\(..*,{1}x{1}..*|Archivo...*)/gi;
/*/(Anónimo...*|>>...*|\(..*,{1}x{1}..*|Archivo...*|... KB|.....^MB)/gi;*/ 


//var textoTerminado

   // textoTerminado = (textcontent.replace(reGex2, ""));
    //console.log(textcontent);
   // textoTerminado = textoTerminado.trim();
    //textarea.innerHTML = textoTerminado;
    //---------------------------
  })
    
  .catch(err=>console.log(err))

}




function copy_to_clipboard(textarea)
{
    document.getElementById(textarea).select();
    document.execCommand('copy');
}
function nekoVoz(){
 
    var textarea = document.getElementById('textarea').value;
    responsiveVoice.speak(textarea, "Spanish Male", {rate: 1.1});


}
function nekoVozCacelar() {
    responsiveVoice.cancel();

}
function nekoVozPausa() {
    responsiveVoice.pause();

}

function nekoVozSeguir() {
    responsiveVoice.resume();

}

