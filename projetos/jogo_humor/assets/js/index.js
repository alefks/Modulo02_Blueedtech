let elementoButton = document.querySelector('#alterar')
const elementoImg = document.querySelector('#imagem')
const elementoSituacao = document.querySelector('#situacao')


elementoButton.addEventListener('click', () =>{
    if(elementoButton.value == "primeiro"){
        elementoImg.src = "./assets/img/cloudy.jpg"
        elementoButton.value = 'segundo'
        elementoSituacao.innerText = 'Nebuloso! (cheio de nuvens)'
    } else if(elementoButton.value == 'segundo') {
        elementoImg.src = "./assets/img/rainy.jpg"
        elementoButton.value = 'terceiro'
        elementoSituacao.innerText = 'Chuvoso! (escute o conselho da sua mãe e sempre leve o guarda chuva!)'
    } else{
        elementoImg.src = "./assets/img/sunny.jpg"
        elementoButton.value = 'primeiro'
        elementoSituacao.innerText = 'Ensolarado (bom para tomar um sorvete!)'
    }
}) 