const inputNT = document.querySelector('.input-nt');
const btnADD = document.querySelector('.add-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
    const li = document.createElement('li');
    return li;
}

inputNT.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        if (!inputNT.value) return;
    criaTarefa(inputNT.value);
    }
})

function limpaInput() {
    inputNT.value = '';
    inputNT.focus(); 
}

function criaBotaoApagar(li) {
    li.innerText += '  ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'apagar esta tarefa');
    botaoApagar.style.backgroundColor = 'red';
    botaoApagar.style.borderRadius = '10px';
    botaoApagar.style.height = '25px';
    botaoApagar.style.marginBottom = '5px';
    li.appendChild(botaoApagar);
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    li.style.marginBottom = '3px';
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();

}

btnADD.addEventListener('click', function(e) {
    if (!inputNT.value) return;
    criaTarefa(inputNT.value);
});

document.addEventListener('click', function(e) {
    const el = e.target;
    
    if (el.classList.contains('apagar')) {
       el.parentElement.remove();
       salvarTarefas();
    }
});

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    
    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}
adicionaTarefasSalvas();

function mudarBackground(cor) {
    document.body.style.backgroundColor = cor;
}

document.getElementById('btn-vrml').addEventListener('click', function() {
    mudarBackground('red');
});

document.getElementById('btn-azl').addEventListener('click', function() {
    mudarBackground('blue');
});

document.getElementById('btn-grn').addEventListener('click', function() {
    mudarBackground('green');
});

document.getElementById('btn-prt').addEventListener('click', function() {
    mudarBackground('black');
});

document.getElementById('btn-ntr').addEventListener('click', function() {
    mudarBackground('var(--primary-color)');
});