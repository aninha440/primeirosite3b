document.addEventListener('DOMContentLoaded',function() {
const aumentaFonteBotao = document-this.getElementById('aumentar-fonte');
const diminuirFonteBotao = document-this.getElementById('diminuir-fonte');

let tamanhoAtualFonte = 1 ;
aumentaFonteBotao.addEventListerner("click" function (){
    tamanhoAtualFonte += 0.1;
    document.body.style.fontSize= '${tamanhoAtualFonnte}rem';

});


dimunuiFonteBotao.addEventListerner("click" function (){
    tamanhoAtualFont -= 0.1;
    document.body.style.fontSize= '${tamanhoAtualFonnte}rem';
});

})



