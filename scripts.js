function validar() {

    try {
        var nome = form.campoNome.value;
        var email = form.campoEmail.value;
        var nacionalidade = form.nacionalidade.value;
        var estado = form.campoEstado.value;
        var receberEmail = form.receberemail;
        

        if (nome === "") throw "Campo nome vazio !";
        if (email === "") throw "Campo E-mail vazio !";
        
        if (nacionalidade === "") throw "Nacionalidade está vazio !";
        if (form.nacionalidade[0].checked) {
            if (estado === "") throw "Selecione um estado !";
        }

        if (receberEmail.checked){
            var esportes = form.sumir[0];
            var cinema = form.sumir[1];
            var culinaria = form.sumir[2];
            if(!esportes.checked && !cinema.checked && !culinaria.checked) {
                throw "Escolha uma categoria para ser notificado.";
            }
        }



    } catch (error) {
        var msg = document.getElementById("msg");
        msg.innerHTML = error;
        return false;
    }

}

function notifyEmail() {
    var receberEmail = form.receberemail;
    var selecionados = document.getElementById("selecionados");

    if (receberEmail.checked) {
        selecionados.style.display = "block";
    } else {
        selecionados.style.display = "none";
    }
}

function disabilitarEstado(){
    var estrangeiro = document.getElementById("estrangeiro");
    if (estrangeiro.checked) {
       var todosEstados = document.getElementById("todosEstados");
        todosEstados.style.display = "none";
    }
}

function habilitarEstado(){
    var brasileiro = document.getElementById("brasileiro");
    if (brasileiro.checked) {
        var todosEstados = document.getElementById("todosEstados");
        todosEstados.style.display = "block";
    }
}

function selectAll() {
    var select = document.getElementById("todos");

    if(select.checked) {
        form.sumir[0].checked = true;
        form.sumir[1].checked = true;
        form.sumir[2].checked = true;
    } else {
        form.sumir[0].checked = false;
        form.sumir[1].checked = false;
        form.sumir[2].checked = false;
    }
}