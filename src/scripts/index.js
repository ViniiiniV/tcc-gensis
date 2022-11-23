const ulPlataforma = document.getElementById("listaPlataforma");
const ulTerror = document.getElementById("listaTerror");
const ulAventura = document.getElementById("listaAventura");
const ulSimulacao = document.getElementById("listaSimulacao");
const ulRpg = document.getElementById("listaRpg");
const ulMetroidvania = document.getElementById("listaMetroidvania");
const ulRogueLike = document.getElementById("listaRogueLike");

function listarProdutos(array) {


  for (let i = 0; i < array.length; i++) {
    let produto = array[i];
    let produtoCriado = criarProduto(produto);

    if (produto.categoria == "Plataforma") {
      ulPlataforma.appendChild(produtoCriado);
    } else if (produto.categoria == "Terror") {
      ulTerror.appendChild(produtoCriado);
    } else if (produto.categoria == "Aventura") {
      ulAventura.appendChild(produtoCriado);
    } else if (produto.categoria == "Simulacao") {
      ulSimulacao.appendChild(produtoCriado);
    } else if (produto.categoria == "Rpg") {
      ulRpg.appendChild(produtoCriado);
    } else if (produto.categoria == "Metroidvania") {
      ulMetroidvania.appendChild(produtoCriado);
    } else {
      ulRogueLike.appendChild(produtoCriado);
    }
  }
}
listarProdutos(data);

function criarProduto(jogo) {
  
  let li = document.createElement("li");
  let figure = document.createElement("figure");
  let img = document.createElement("img");
  let p = document.createElement("p");
  let itchIo = document.createElement("a");

  img.src = jogo.imagem;
  p.innerText = jogo.nome;
  itchIo.href = jogo.linkItchiIo;
  itchIo.innerText = "Baixar";
  itchIo.target = "_blank";

  li.appendChild(figure);
  figure.appendChild(img);
  li.appendChild(p);
  li.appendChild(itchIo);

  return li;
}

const menuJogos = document.querySelectorAll("section")

const btnPlataforma = document.getElementById("btnPlataforma");
const btnTerror = document.getElementById("btnTerror");
const btnAventura = document.getElementById("btnAventura");
const btnSimulacao = document.getElementById("btnSimulacao");
const btnRpg = document.getElementById("btnRpg");
const btnMetroidvania = document.getElementById("btnMetroidvania");
const btnRogueLike = document.getElementById("btnRogueLike");
const btnTodos = document.getElementById("btnTodos");

btnPlataforma.addEventListener("click",(event)=>{
const botao = event.target.innerText
for (let i = 0; i<menuJogos.length; i++){
    const listaAtual = menuJogos[i]
   
    if (botao !== listaAtual.id){
        listaAtual.classList.add('hidden')
    }else{
        listaAtual.classList.remove('hidden')
    }
    
}

})
btnTerror.addEventListener('click', (event)=>{
    const botao = event.target.innerText
for (let i = 0; i<menuJogos.length; i++){
    const listaAtual = menuJogos[i]
   
    if (botao !== listaAtual.id){
        listaAtual.classList.add('hidden')
    }else{
        listaAtual.classList.remove('hidden')
    }    
    
}
})
btnAventura.addEventListener('click', (event)=>{
    const botao = event.target.innerText
for (let i = 0; i<menuJogos.length; i++){
    const listaAtual = menuJogos[i]
   
    if (botao !== listaAtual.id){
        listaAtual.classList.add('hidden')
    }else{
        listaAtual.classList.remove('hidden')
    }
}
})
btnRpg.addEventListener('click', (event)=>{
    const botao = event.target.innerText
for (let i = 0; i<menuJogos.length; i++){
    const listaAtual = menuJogos[i]
   
    if (botao !== listaAtual.id){
        listaAtual.classList.add('hidden')
    }else{
        listaAtual.classList.remove('hidden')
    } 
}
})
btnSimulacao.addEventListener('click', (event)=>{
    const botao = event.target.innerText
for (let i = 0; i<menuJogos.length; i++){
    const listaAtual = menuJogos[i]
   
    if (botao !== listaAtual.id){
        listaAtual.classList.add('hidden')
    }else{
        listaAtual.classList.remove('hidden')
    }
}
})
btnMetroidvania.addEventListener('click', (event)=>{
    const botao = event.target.innerText
for (let i = 0; i<menuJogos.length; i++){
    const listaAtual = menuJogos[i]
   
    if (botao !== listaAtual.id){
        listaAtual.classList.add('hidden')
    }else{
        listaAtual.classList.remove('hidden')
    }    
}
})
btnRogueLike.addEventListener('click', (event)=>{
    const botao = event.target.innerText
for (let i = 0; i<menuJogos.length; i++){
    const listaAtual = menuJogos[i]
   
    if (botao !== listaAtual.id){
        listaAtual.classList.add('hidden')
    }else{
        listaAtual.classList.remove('hidden')
    }
    
}
})
btnTodos.addEventListener('click', (event)=>{
    for (let i = 0; i<menuJogos.length; i++){
        const listaAtual = menuJogos[i]
        listaAtual.classList.remove('hidden')
         
    }

})


const abrirModalButton = document.querySelector("#abrirModal");
const fecharModalButton = document.querySelector("#fecharModal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
};

[abrirModalButton, fecharModalButton, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
});

   