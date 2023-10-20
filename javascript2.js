//frutas
function atualizarLista() {
  var select = document.getElementById("frutas");
  var selecionadosDiv = document.getElementById("selec1");
  var selectedFrutas = "";

  for (var i = 0; i < select.options.length; i++) {
    if (select.options[i].selected) {
      selectedFrutas += select.options[i].text + ", ";
    }
  }

  selectedFrutas = selectedFrutas.replace(/, $/, "");
  selecionadosDiv.textContent = "Fruta: " + selectedFrutas;
}

function atualizarText() {
  var listaDiv = document.getElementById("selec2");
  var inputText = document.getElementById("text").value;

  listaDiv.innerHTML = "";

  var newItem = document.createElement("li");
  newItem.textContent = "Quantidade: " + inputText;
  listaDiv.appendChild(newItem);
}

function atualizarListaTipo() {
  var select = document.getElementById("quantidade");
  var selecionadosDiv = document.getElementById("selec3");
  var selectedTipo = "";

  for (var i = 0; i < select.options.length; i++) {
    if (select.options[i].selected) {
      selectedTipo += select.options[i].text + ", ";
    }
  }

  selectedTipo = selectedTipo.replace(/, $/, "");
  selecionadosDiv.textContent = "Tipo: " + selectedTipo;
}
//Vegetais

function atualizarLista1() {
  var select = document.getElementById("Vegetais");
  var selecionadosDiv = document.getElementById("selec4");
  var selectedFrutas = "";

  for (var i = 0; i < select.options.length; i++) {
    if (select.options[i].selected) {
      selectedFrutas += select.options[i].text + ", ";
    }
  }

  selectedFrutas = selectedFrutas.replace(/, $/, "");
  selecionadosDiv.textContent = "Vegetal: " + selectedFrutas;
}

function atualizarText1() {
  var listaDiv = document.getElementById("selec5");
  var inputText = document.getElementById("text1").value;

  listaDiv.innerHTML = "";

  var newItem = document.createElement("li");
  newItem.textContent = "Quantidade: " + inputText;
  listaDiv.appendChild(newItem);
}

function atualizarListaTipo1() {
  var select = document.getElementById("quantidade1");
  var selecionadosDiv = document.getElementById("selec6");
  var selectedTipo = "";

  for (var i = 0; i < select.options.length; i++) {
    if (select.options[i].selected) {
      selectedTipo += select.options[i].text + ", ";
    }
  }

  selectedTipo = selectedTipo.replace(/, $/, "");
  selecionadosDiv.textContent = "Tipos: " + selectedTipo;
}

//bebidas

function atualizarLista2() {
  var select = document.getElementById("Bebidas");
  var selecionadosDiv = document.getElementById("selec7");
  var selectedFrutas = "";

  for (var i = 0; i < select.options.length; i++) {
    if (select.options[i].selected) {
      selectedFrutas += select.options[i].text + ", ";
    }
  }

  selectedFrutas = selectedFrutas.replace(/, $/, "");
  selecionadosDiv.textContent = "Bebida: " + selectedFrutas;
}

function atualizarText2() {
  var listaDiv = document.getElementById("selec8");
  var inputText = document.getElementById("text2").value;

  listaDiv.innerHTML = "";

  var newItem = document.createElement("li");
  newItem.textContent = "Quantidade: " + inputText;
  listaDiv.appendChild(newItem);
}

function atualizarListaTipo2() {
  var select = document.getElementById("quantidade2");
  var selecionadosDiv = document.getElementById("selec9");
  var selectedTipo = "";

  for (var i = 0; i < select.options.length; i++) {
    if (select.options[i].selected) {
      selectedTipo += select.options[i].text + ", ";
    }
  }

  selectedTipo = selectedTipo.replace(/, $/, "");
  selecionadosDiv.textContent = "Tipos: " + selectedTipo;
}

//temperos

function atualizarLista3() {
  var select = document.getElementById("Temperos");
  var selecionadosDiv = document.getElementById("selec10");
  var selectedFrutas = "";

  for (var i = 0; i < select.options.length; i++) {
    if (select.options[i].selected) {
      selectedFrutas += select.options[i].text + ", ";
    }
  }

  selectedFrutas = selectedFrutas.replace(/, $/, "");
  selecionadosDiv.textContent = "Tempero: " + selectedFrutas;
}

function atualizarText3() {
  var listaDiv = document.getElementById("selec11");
  var inputText = document.getElementById("text3").value;

  listaDiv.innerHTML = "";

  var newItem = document.createElement("li");
  newItem.textContent = "Quantidade: " + inputText;
  listaDiv.appendChild(newItem);
}

function atualizarListaTipo3() {
  var select = document.getElementById("quantidade3");
  var selecionadosDiv = document.getElementById("selec12");
  var selectedTipo = "";

  for (var i = 0; i < select.options.length; i++) {
    if (select.options[i].selected) {
      selectedTipo += select.options[i].text + ", ";
    }
  }

  selectedTipo = selectedTipo.replace(/, $/, "");
  selecionadosDiv.textContent = "Tipos: " + selectedTipo;
}
