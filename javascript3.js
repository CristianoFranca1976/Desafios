let opcoes = document.querySelectorAll('input[name="question-1"]');

opcoes.forEach(function (opcao) {
  opcao.addEventListener("change", resposta);
});

function resposta() {
  const labelElements = document.querySelectorAll('label[for^="question-1-"]');
  labelElements.forEach(function (labelElement) {
    labelElement.style.marginLeft = "";
    labelElement.style.color = "";
    labelElement.textContent = labelElement.textContent.replace("ERRADO", "");
    labelElement.textContent = labelElement.textContent.replace("CERTO", "");
  });

  opcoes.forEach(function (opcao) {
    if (opcao.id !== "question-1-b") {
      opcao.disabled = true;
    }
  });

  if (this.checked) {
    if (this.id === "question-1-b") {
      const labelElement = document.querySelector(
        'label[for="' + this.id + '"]'
      );
      labelElement.style.marginLeft = "10px";
      labelElement.style.color = "green";
      labelElement.textContent += " CERTO";
    } else {
      const labelElement = document.querySelector(
        'label[for="' + this.id + '"]'
      );
      labelElement.style.marginLeft = "10px";
      labelElement.style.color = "red";
      labelElement.textContent += " ERRADO";
    }
  }
}

// resposta 2
let opcoes1 = document.querySelectorAll('input[name="question-2"]');

opcoes1.forEach(function (opcao1) {
  opcao1.addEventListener("change", resposta1);
});

function resposta1() {
  const labelElements1 = document.querySelectorAll('label[for^="question-2-"]');
  labelElements1.forEach(function (labelElement1) {
    labelElement1.style.marginLeft = "";
    labelElement1.style.color = "";
    labelElement1.textContent = labelElement1.textContent.replace("ERRADO", "");
    labelElement1.textContent = labelElement1.textContent.replace("CERTO", "");
  });

  opcoes1.forEach(function (opcao1) {
    if (opcao1.checked) {
      if (opcao1.id === "question-2-d") {
        const labelElement1 = document.querySelector(
          'label[for="' + opcao1.id + '"]'
        );
        labelElement1.style.marginLeft = "10px";
        labelElement1.style.color = "green";
        labelElement1.textContent += " CERTO";
      } else {
        const labelElement1 = document.querySelector(
          'label[for="' + opcao1.id + '"]'
        );
        labelElement1.style.marginLeft = "10px";
        labelElement1.style.color = "red";
        labelElement1.textContent += " ERRADO";
      }

      opcoes1.forEach(function (opcao1) {
        if (opcao1.id !== "question-2-d") {
          opcao1.disabled = true;
        }
      });
    }
  });
}
//resposta 3

let opcoes2 = document.querySelectorAll('input[name="question-3"]');

opcoes2.forEach(function (opcao2) {
  opcao2.addEventListener("change", resposta2);
});

function resposta2() {
  const labelElements2 = document.querySelectorAll('label[for^="question-3-"]');
  labelElements2.forEach(function (labelElement2) {
    labelElement2.style.marginLeft = "";
    labelElement2.style.color = "";
    labelElement2.textContent = labelElement2.textContent.replace("ERRADO", "");
    labelElement2.textContent = labelElement2.textContent.replace("CERTO", "");
  });

  opcoes2.forEach(function (opcao2) {
    if (opcao2.checked) {
      if (opcao2.id === "question-3-a") {
        const labelElement2 = document.querySelector(
          'label[for="' + opcao2.id + '"]'
        );
        labelElement2.style.marginLeft = "10px";
        labelElement2.style.color = "green";
        labelElement2.textContent += " CERTO";
      } else {
        const labelElement2 = document.querySelector(
          'label[for="' + opcao2.id + '"]'
        );
        labelElement2.style.marginLeft = "10px";
        labelElement2.style.color = "red";
        labelElement2.textContent += " ERRADO";
      }

      opcoes2.forEach(function (opcao2) {
        if (opcao2.id !== "question-3-a") {
          opcao2.disabled = true;
        }
      });
    }
  });
}

//resposta4

let opcoes3 = document.querySelectorAll('input[name="question-4"]');

opcoes3.forEach(function (opcao3) {
  opcao3.addEventListener("change", resposta3);
});

function resposta3() {
  const labelElements3 = document.querySelectorAll('label[for^="question-4-"]');
  labelElements3.forEach(function (labelElement3) {
    labelElement3.style.marginLeft = "";
    labelElement3.style.color = "";
    labelElement3.textContent = labelElement3.textContent.replace("ERRADO", "");
    labelElement3.textContent = labelElement3.textContent.replace("CERTO", "");
  });

  opcoes3.forEach(function (opcao3) {
    if (opcao3.checked) {
      if (opcao3.id === "question-4-c") {
        const labelElement3 = document.querySelector(
          'label[for="' + opcao3.id + '"]'
        );
        labelElement3.style.marginLeft = "10px";
        labelElement3.style.color = "green";
        labelElement3.textContent += " CERTO";
      } else {
        const labelElement3 = document.querySelector(
          'label[for="' + opcao3.id + '"]'
        );
        labelElement3.style.marginLeft = "10px";
        labelElement3.style.color = "red";
        labelElement3.textContent += " ERRADO";
      }

      opcoes3.forEach(function (opcao3) {
        if (opcao3.id !== "question-4-c") {
          opcao3.disabled = true;
        }
      });
    }
  });
}

//Falta corrigir aqui  o erro de ao selecionar a opcao errada a certa fic adesabilitada e so envia pro email a  resposta certa
