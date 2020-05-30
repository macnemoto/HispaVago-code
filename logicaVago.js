function botonEnviar() {
    
    var textcontent = document.getElementById("text-content").value;
    var textarea = document.getElementById('textarea');


var reGex1 = /( VE ........ ........ ..:.. \/#\/ |>>..*|>>....... \(OP\)|>>.......|\/#\/ ....... \[X\]|\d{7}|\d{5}|.*png..|.*.....KB ,.*...x....*,|.*jpg..)/gi;


    var textoTerminado

    textoTerminado = (textcontent.replace(reGex1, ""));
    console.log(textcontent);
    textarea.innerHTML = textoTerminado;

}
function copy_to_clipboard(textarea)
{
    document.getElementById(textarea).select();
    document.execCommand('copy');
}