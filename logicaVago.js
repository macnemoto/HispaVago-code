function botonEnviar() {
    
    var textcontent = document.getElementById("text-content").value;
    var textcontent2 = document.getElementById('text-content2');


var reGex1 = /(>>..*|>>....... \(OP\)|>>.......|\/#\/ ....... \[X\]|\d{7}|\d{5}|.*png..|.*.....KB ,.*...x....*,|.*jpg..)/gi;


    var textoTerminado

    textoTerminado = (textcontent.replace(reGex1, ""));
    console.log(textcontent);
    textcontent2.innerHTML ="<br>" + textoTerminado;

}

