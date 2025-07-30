let listAmigos = [];

// Funcion para recorrer la lista de amigos y mostrarlos en el html
function recorrerLista(){
   document.getElementById("listaAmigos").innerHTML = "";
   for(let i = 0; i < listAmigos.length; i++){
      let li = document.createElement("li");
      li.textContent = listAmigos[i];
      document.getElementById("listaAmigos").appendChild(li);
   }
}

// Funcion para agregar amigos a la lista, si el input esta vacio, se muestra un alert
function agregarAmigo(){
   if(document.getElementById("amigo").value !== ""){
      let amigo = document.getElementById("amigo").value;
      listAmigos.push(amigo);
   }else{
      alert("Por favor, ingrese un nombre");
   }
   document.getElementById("amigo").value = "";
   recorrerLista();
}

// Funcion para sortear el amigo secreto, si la lista esta vacia, se muestra un alert
function sortearAmigo(){
   if(listAmigos.length > 0){
      let amigo = listAmigos[Math.floor(Math.random() * listAmigos.length)];
      document.getElementById("listaAmigos").innerHTML = "";
      document.getElementById("resultado").innerHTML = `El amigo secreto es: ${amigo}`;
   }else{
      alert("Por favor, ingrese al menos un nombre");
   }
}



