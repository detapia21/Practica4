
var tareas = 0;
function agregar(){
    var tarea = document.getElementById('tarea');
    var txt = tarea.value;
    console.log(txt);
    var txtTarea = document.createTextNode(txt);
    var list  = document.createElement('li');
    list.setAttribute('id',tareas);
    list.appendChild(txtTarea);
    
    var ul = document.getElementById('lista');
    ul.appendChild(list);

    var btnBorrar = document.createElement('button');
    btnBorrar.setAttribute('id','btnBorrar'+tareas);
    btnBorrar.setAttribute('onclick','borrar('+tareas+');');
    btnBorrar.innerHTML='Borrar';
    btnBorrar.setAttribute('class','btn btn-danger');
    ul.appendChild(btnBorrar);

    var btnEditar = document.createElement('button');
    btnEditar.setAttribute('id','btnEditar'+tareas);
    btnEditar.setAttribute('onclick','editar('+tareas+');');
    btnEditar.setAttribute('class','btn btn-info');
    btnEditar.innerHTML='Editar';
    ul.appendChild(btnEditar);
    tareas++;
}

function borrar(index){
    var tarea = document.getElementById(index);
    tarea.parentElement.removeChild(tarea);

    var btn = document.getElementById('btnBorrar'+index);
    btn.parentElement.removeChild(btn);

    btn = document.getElementById('btnEditar'+index);
    btn.parentElement.removeChild(btn);
    
    /*
    var tarea = document.querySelector('ul li');
    tarea.parentElement.removeChild(tarea);

    var btn = document.querySelector('ul button');
    btn.parentElement.removeChild(btn);
    var btn = document.querySelector('ul button');
    btn.parentElement.removeChild(btn);
    */
}

function editar(index){
    var tarea = document.getElementById(index);

    console.log("tarea: "+tarea.textContent+"sssss"+tareas);
    
    var inputEditar = document.createElement('input');
    inputEditar.setAttribute('type','text');
    inputEditar.setAttribute('id','editar'+index);
    inputEditar.value = tarea.textContent;
    tarea.appendChild(inputEditar);

    var ul = document.getElementById('lista');
    var btnAceptar = document.createElement('button');
    btnAceptar.setAttribute('id','btnAceptar');
    btnAceptar.setAttribute('onclick','modificar('+index+');');
    btnAceptar.setAttribute('class','btn btn-success');
    btnAceptar.innerHTML='Aceptar';
    tarea.appendChild(btnAceptar);
    
}

function modificar(index){
    var input = document.getElementById('editar'+index);
    txt = input.value;

    var tarea = document.getElementById(index)
    tarea.textContent = txt;
}