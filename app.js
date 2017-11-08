function add(){
	/*tomar texto ingresado en textarea*/
	var comments= document.getElementById('texto').value;

	/*limpiar textarea*/
	document.getElementById('texto').value='';

	/*guardar contenedor html en variable*/
	var cont= document.getElementById('contenedor');

  /*crear div para cada comentario*/
	var newComments= document.createElement('div');

  if (comments.length==0 || comments==null) {
  alert("debes escribir un tweet");
  return false;
  }

	var textNewComment = document.createTextNode(comments);

	/*crear elemento parrafo para contener el texto ingresado*/
	var contenedorComentario = document.createElement('p');

	/*llenar contenedor para nuevo comentario*/
	contenedorComentario.appendChild(textNewComment);
	newComments.appendChild(contenedorComentario);
	cont.appendChild(newComments)
};

/*contador  de caracteres, colorear contador*/
(function charCont(){
	/*encerrar en variable cada carácter ingresado en el text area*/
  var msg = document.getElementsByClassName("txt")[0];
      /*crear variable para contador de carácteres vacío en html*/
      charLeft = document.getElementsByClassName('contador')[0];
      /*establece el máximo de carácteres*/
      maxChar = 140;
   
  	  /*mostrar en html carácteres iniciales*/
  	  charLeft.innerHTML = maxChar;

  	  // actualizar mientras se tipea
  	  msg.onkeydown = function(){

        setTimeout(function(){
        	//actualizar cantidad de carácteres, máximo - largo de lo escrito
          charLeft.innerHTML = maxChar - msg.value.length;
          	//variable para colorear carácteres
          var characters= msg.value.length;
          	//coloreado según cantidad de carácteres
          if (characters>=120 && characters<130) {
          	charLeft.className+= ' purple';
          }else if (characters>=130) {
          	charLeft.className= charLeft.className.replace( /(?:^|\s)purple(?!\S)/g , '' )
          	charLeft.className+= ' red'
          }else{
          	charLeft.className= ' contador';
          }
        }, 1);
        /*bloquear boton cuando sobrepasa máximo de carácteres*/
    var long= msg.value.length;
         var button= document.getElementById('btn');
         if (long>140 || long==0) {
         button.disabled=true;
         }else{
        button.disabled=false;
      }

      };
})();	

      