function botonEnviar() {
    var textAreplazar = document.getElementById("textAreplazar");
    var textcontent = document.getElementById("text-content").value;
    console.log(textcontent);


var reGex1 = /(>>..*|>>....... \(OP\)|>>.......|\/#\/ ....... \[X\]|\d{7}|\d{5}|.*png..|.*.....KB ,.*...x....*,|.*jpg..)/gi;


    var textoTerminado

    textoTerminado = (textcontent.replace(reGex1, '<br> <br>'));

    textAreplazar.innerHTML = textoTerminado;

}

