const advertencia = document.getElementById("advertencia");
const btn = document.querySelector("#btn");
let campoImput = document.getElementById("email");
const erro = document.querySelector("#img-erro");

btn.addEventListener("click",
    () => {
/*         e.preventDefault(); */
        validar();
    }
);

function validar() {
    let posicaoArroba = campoImput.value.indexOf("@");
    let tamanho = campoImput.value.length;

/* bol */let vazio = campoImput.value == "";
/* bol */let temArroba = posicaoArroba != -1;
/* bol */let eOPrimeiro = posicaoArroba === 0;
/* bol */let eOUltimo = tamanho === posicaoArroba + 1;

    if (!vazio && !eOPrimeiro && !eOUltimo) {

        if (temArroba) {
        /* bol */let soUmArroba = campoImput.value.match(/@/g).length == 1;
            let posicaoCom = campoImput.value.indexOf(".com");
        /* bol */let temCom = posicaoCom != -1;
        /* bol */let comDepoisDeArroba = posicaoCom > posicaoArroba;
            if (soUmArroba && temCom && comDepoisDeArroba) {
                /* procura posicao do arroba */
        /* bol */pontoAposArroba = campoImput.value[posicaoArroba + 1] == ".";
                if (!pontoAposArroba) {
                    console.log("ok");
                    let troca = document.getElementById("mostra-advertencia");
                    troca.id = "advertencia";
                    erro.id = "img-erro";
                }
                else {
                    advertencia.id = "mostra-advertencia";
                    erro.id = "mostra-img-erro";
                }
            }
            else {
                advertencia.id = "mostra-advertencia";
                erro.id = "mostra-img-erro";
            }
        }
        else {
            advertencia.id = "mostra-advertencia";
            erro.id = "mostra-img-erro";
        }

    }
    else {
        advertencia.id = "mostra-advertencia";
        erro.id = "mostra-img-erro";
    }
}
