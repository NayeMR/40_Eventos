function hacerScroll(){
	var textarea = document.getElementById('textarea');
	var btnAgregar = document.getElementById('btnAgregar');
	var ulLista = document.getElementById('lista');
	//btnAgregar.addEventListener('click', onInput);
	var eleminarTarea = function(){
		this.parentNode.removeChild(this);
	};
	function eliminarSpan(){
		for (var i = 0; i <= lista.children.length -1; i++) {
		lista.children[i].addEventListener("click", eleminarTarea);
		}
	}
	var agregarTexto = function(){
		
	}
	var agregarTarea = function(){
		if(textarea.value == true || textarea.value.length > 1){
		var nuevaTarea = document.createElement("li");
		var check = document.createElement("checkbox");
		var enlace = document.createElement("a");
		// Agregamos el contenido al enlace
		enlace.appendChild(textarea);
		// Le establecemos un atributos
		enlace.setAttribute("img", "img/trash.png");
		//A lista se va agregar los li
		ulLista.appendChild(nuevaTarea);
		//agrega a los li un enlace
		nuevaTarea.appendChild(enlace);
		//El check se le agregara al enlace
		check.appendChild(enlace);

		}else if(textarea.value == null || textarea.value.length == 0){
			eliminarSpan();
			alert("Agrega una trea");
		}
	};
	btnAgregar.addEventListener("click", agregarTarea);
}
