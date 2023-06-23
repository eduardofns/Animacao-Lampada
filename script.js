//PODE SER USADO ASSIM...
var quebrada = false
function mudaLampada(tipo) {
    if (!quebrada) {   //Alterar dentro do parênteses no arquivo HTML o caminho da imagem...
        document.getElementById('luz').src = "imagens/" + tipo +".jpg"
        if (tipo == 'lampada-quebrada') {
            quebrada = true
        }
    }      
}

//PODE SER USADO ASSIM...
/*var quebrada = false

function mudaLampada(tipo) {
    if (tipo == 1) {   //Alterar no arquivo HTML dentro dos parênteses (1)
        arquivo = 'imagens/lampada-acesa.jpg'
    }
    if (tipo == 2) {   //Alterar no arquivo HTML dentro dos parênteses (2)
        arquivo = 'imagens/lampada-apagada.jpg'
    }
    if (tipo == 3) {   //Alterar no arquivo HTML dentro dos parênteses (3)
        arquivo = 'imagens/lampada-quebrada.jpg'
    }
    if (!quebrada) {
    document.getElementById('luz').src = arquivo
        if (tipo == 3) {
        quebrada = true
        }
    }
}*?

//OU PODE SER USADO ASSIM TAMBÉM...
/*function mudaLampada() {
    document.getElementById('luz').src = 'imagens/lampada-acesa.jpg'
}
function apagaLampada() {
    document.getElementById('luz').src = 'imagens/lampada-apagada.jpg'
}
function quebraLampada() {
    document.getElementById('luz').src = 'imagens/lampada-quebrada.jpg'
}*/