const produtos = ["Arroz", "Feijão", "Suco", "Tapioca", "Pão", "Malzbier", "Batata Doce", "Cheiro Verde", "Iogurte", "Café", "Alho", "Cebola",
    "Cerveja Normal", "Pipoca Da Vovó"
];
let selecionados = new Set();

const grid = document.querySelector('.grid-produtos');
const listaUl = document.getElementById('itens-selecionados');

// Criar os botões dinamicamente
produtos.forEach(prod => {
    const btn = document.createElement('button');
    btn.innerText = prod;
    btn.classList.add('btn-item');
    btn.onclick = () => alternarItem(prod, btn);
    grid.appendChild(btn);
});

function alternarItem(item, elemento) {
    if (selecionados.has(item)) {
        selecionados.delete(item);
        elemento.classList.remove('selecionado');
    } else {
        selecionados.add(item);
        elemento.classList.add('selecionado');
    }
    atualizarResumo();
}

function atualizarResumo() {
    listaUl.innerHTML = "";
    selecionados.forEach(item => {
        const li = document.createElement('li');
        li.innerText = "✔️ " + item;
        listaUl.appendChild(li);
    });
}

function enviarWhatsApp() {
    if (selecionados.size === 0) {
        alert("Selecione pelo menos um item!");
        return;
    }
    const texto = "Oi! Aqui está minha lista de compras:\n\n" + Array.from(selecionados).join("\n");
    const numero = "55XXXXXXXXXXX"; // COLOQUE SEU NÚMERO COM DDD AQUI
    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(texto)}`);
}