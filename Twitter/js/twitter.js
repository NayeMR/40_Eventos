function agregarTarea(){

	var textarea = document.getElementById('textarea');
	var btnAgregar = document.getElementById('btnAgregar');
	var ulLista = document.getElementById('lista');

	if(textarea.value == true || textarea.value.length > 1){
		//converti el texto del textarea en string
		var texto = document.createTextNode(textarea.value);
		//cree una imagen y le cambie los valores src y su direccion
		var imagen = document.createElement("img");
		imagen.setAttribute('src','img/trash.png');
		imagen.setAttribute('class','pull-right, imageInfo');
		
		//imagen.setAttribute('class','img-responsive');
		
		//cree el label y le agregue el texto insertado
		var tareaSubrayada = document.createElement("label");
		tareaSubrayada.setAttribute('id','myLabel');
		tareaSubrayada.appendChild(texto);

		//cree un li y le da atributo id
		var li = document.createElement("li");
		li.setAttribute('id','lista');
		//a la lista se le agrega los li
		ulLista.appendChild(li);
		//se crea el input con atributos checkbox
		var checkInput = document.createElement("input");
		checkInput.setAttribute('type','checkbox');
		//agrego el check y el texto al li
		li.appendChild(checkInput);
		li.appendChild(tareaSubrayada);
		//al label le agrego una imagen
		li.appendChild(imagen);
	}
	//li.parentNode.removeChild(imagen);
	if(textarea.value = ""){
		alert("Agrega una tarea");
	}
	//dar click a imagen y borra el checkInput y eltexto
	imagen.onclick = function(){
		checkInput.parentElement.removeChild(checkInput);
		li.parentElement.removeChild(li);
	}
	//check esta en true
		
	checkInput.onclick = function () {
		var strike = document.createElement("strike");
		if(checkInput.checked == true) {
			//alert("holaaa");
			strike.appendChild(texto);
			tareaSubrayada.appendChild(strike);
		 	}else if(checkInput.checked == false) {
		 		li.appendChild(texto);
		 		li.appendChild(imagen);
	 	}
	}
	btnAgregar.addEventListener("click", agregarTarea);
	
};