function capitalizeLetter (string){
  return string.charAt(0).toUpperCase() + string.slice(1);
}

$("#btnCargar").click(function (event) {
    event.preventDefault();

    var nombre_pokemon= $("#txtNombre_pokemon").val();

  console.log(nombre_pokemon)

    var url = "https://pokeapi.co/api/v2/pokemon/"+nombre_pokemon;

  console.log(url)


  //   fetch(url)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });

    fetch(url)
        .then(response => response.json())
        .then(data => 
            {
                var nombre_pokemon_2 = $('<h1>').text(capitalizeLetter(data.name));
                var foto = $("<p><img src='"+data.sprites.other["official-artwork"].front_default+"'>");
                var tipo = $('<h1>').text(capitalizeLetter(data.types[0].type.name));

                  // para limpiar el contedor antes de desplegar
                $("#info").empty();
                $('#info')
                    .append(nombre_pokemon_2)
                    .append(foto)
                    .append(tipo)

            })
        .catch(error => console.error(error));

});