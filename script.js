const passwordInput = document.querySelector("#passwordinput");

passwordInput.addEventListener("input", function () { 
    const password = this.value;
    const strengthIndicador = document.querySelector("#password-strength-indicador");

    const stregthText = document.querySelector("#password-strength-text");

    const strengths = {
        0: "Muito fraca",
        1: "Fraca",
        2: "Moderada",
        3: "Forte",
        4: "Muito Forte",
    };

    let score = 0;

    // Requisitos
    if(password.length >= 8) score++;
    if(password.match(/[a-z]/)) score++;
    if(password.match(/[A-Z]/)) score++;
    if(password.match(/[0-9]/)) score++;
    if(password.match(/^a-zA-Z0-9/)) score++;

    // Calculo da %, pq a largura vai ser em %
    const width = (score / 4) * 100;

    strengthIndicador.style.width = `${width}%`;

    switch(score){
        case 1:
            strengthIndicador.style.backgroundColor = "#e70b0b"
            break
        case 2:
            strengthIndicador.style.backgroundColor = "#FFB74D"
            break
        case 3:
            strengthIndicador.style.backgroundColor = "#FFF176"
            break
        case 4:
            strengthIndicador.style.backgroundColor = "#81C784"
            break
        default:
            strengthIndicador.style.backgroundColor = "transparent";
            break
    }

    if(password.length > 0) {
        stregthText.innerHTML = `Força: ${strengths[score]}`
    } else{
        stregthText.innerHTML = "";
    }
})