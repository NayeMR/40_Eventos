//busca de los elementos boton y formulario
var button = document.getElementById("btnCrear");
var div= document.getElementById("divPapa");
var lista = document.getElementById("lista");
var li = document.createElement("li");

function newLista(){
	ocultar();

var inputTitulo = document.createElement("input");
	var label = document.createElement("label");
	li.appendChild(label);
	inputTitulo.setAttribute('placeholder','Añadir Titulo a la lista');
	inputTitulo.setAttribute('id','titulo');
	div.appendChild(inputTitulo);
	inputTitulo.focus();
	creaElementos();
	//agregar la informacion de textarea al párrafo
	btnGuardarTitulo.onclick=function(){
		var texto = document.createTextNode(inputTitulo.value);
		var label = document.createElement("label");
		label.appendChild(texto);
		li.appendChild(label);
		lista.appendChild(li);
		div.appendChild(lista);
		//llama al elemento button cambiarle con inner
		mostrar();

		document.getElementById('btnGuardarTitulo').style.display = 'none';
		document.getElementById('imagenTach').style.display = 'none';
		document.getElementById('titulo').style.display = 'none';
	}
	button.addEventListener("click",newLista);
};
function newTarjeta(){
	ocultar();
	//crear textarea
	var textarea  = document.createElement("textarea");
	textarea.setAttribute('cols','20');
	textarea.setAttribute('rows','5');
	textarea.setAttribute('class','textarea');
	textarea.setAttribute('id','textarea');
	div.appendChild(textarea);	
	creaElementos();
	textarea.focus();
	document.getElementById('btnCrear').innerHTML= "Añadir una tarjeta";
	//cuando da click en el botonprincipal
	button.addEventListener("click",newTarjeta);
}
function creaElementos(){
	//crear el boton 'guardar' y span
	var btnGuardarTitulo  = document.createElement("input");
	//modifiqueue sus valores
	btnGuardarTitulo.setAttribute('type','button');
	btnGuardarTitulo.setAttribute('value','GUARDAR');
	btnGuardarTitulo.setAttribute('id','btnGuardarTitulo');
	btnGuardarTitulo.setAttribute('class','textarea');

	//el btn lo agregue al div
	div.appendChild(btnGuardarTitulo);
	//crear imagen
	var imageTach = document.createElement("img");
	imageTach.setAttribute('src','img/cancel.png');
	imageTach.setAttribute('id','imagenTach');
	div.appendChild(imageTach);
	//click a imagen, remueve a sus hijos y muestra el boton de añadir lista
	imageTach.onclick = function(){
		mostrar();
		div.removeChild(imagenTach);
		div.removeChild(btnGuardarTitulo);
		document.getElementById('titulo').style.display = 'none';
	}
}
function crearDiv(){
	var div1 = createElement("div");//hijo
	div.appendChild(div1);
	mostrar();
    div.insertBefore(div1,mostrar());
	
}
function ocultar(){
	document.getElementById('btnCrear').style.display = 'none';
};

function mostrar(){
	document.getElementById('btnCrear').style.display = 'block';
};


