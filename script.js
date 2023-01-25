// --- DevLists

var objetos = [];

let AddBtn = document.getElementById("btnAdd");
let ordenarBtn = document.getElementById("btnOrdenar");
let excluirBtn = document.getElementById("btnExcluir");

AddBtn.addEventListener('click', adicionar);
ordenarBtn.addEventListener('click', ordenar);
excluirBtn.addEventListener('click', excluir);

function adicionar() {
    let Input = document.getElementById("inputText").value;

    if (Input === '' | Input === null | Input == Number(Input)) {
        alert("Informe um valor válido");
    } else if (objetos.includes(Input)) {
        alert("Objeto já foi adicionado");
    } else {
        objetos.push(Input);
        document.getElementById("inputText").value = '';

        let UlList = document.getElementById("Lista");
        let li = document.createElement("li");
        li.classList.add('capitalized');

        li.innerText = `${Input}`;

        UlList.append(li);

        let removerBtn = document.createElement('a');
        removerBtn.innerHTML = 'Remover';
        removerBtn.classList.add('removerBtn');
        //criar id randomico - 1, 2, 3, 4..
        //pegar o id clicado e excluir.

        li.append(removerBtn);
    }
}

function ordenar() {
    document.getElementById("Lista").innerHTML = ''
    objetos.sort();

    objetos.forEach(element => {
        let UlList = document.getElementById("Lista");
        let li = document.createElement("li");
        li.classList.add('capitalized');

        li.innerHTML = `${element}`;
        UlList.append(li);

        let removerBtn = document.createElement('a');
        removerBtn.innerHTML = 'Remover';
        removerBtn.classList.add('removerBtn');

        li.append(removerBtn);
    });


}

function excluir() {
    let UlList = document.getElementById("Lista");
    let li = document.createElement("li");

    UlList.innerHTML = '';
    objetos = [];
}