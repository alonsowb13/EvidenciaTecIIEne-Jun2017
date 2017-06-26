angular
    .module('miApp')
    .controller('MovieController',MovieController);

function MovieController() {
    var view = this;
    view.movies = movies;
} 



var movies = [
    {
        "id": "1",
        "titulo": "Como ser un latin lover",
        "director": "Ken Marino",
        "produccion": "Eugenio Derbez",
        "sinopsis": "Máximo, un gigoló especializado en la seducción de mujeres ancianas ricas, se casa con una mujer que le dobla en edad. Veinticinco años después, harto y aburrido de despertar junto a su esposa de 80 años, recibe la sorpresa de su vida cuando ella termina abandonándolo. Forzado a salir de su mansión y buscando desesperadamente dónde quedarse, deberá mudarse con su distante hermana Sara y su adorable hijo nerd Hugo, en su pequeño departamento.",
        "img": "img1.jpg",
        "trailer": "https://www.youtube.com/watch?v=9v9ax53wZAw"
    },
    {
        "id": "2",
        "titulo": "Guardianes de la Galaxia Vol.2",
        "director": "James Gunn",
        "produccion": "Kevin Feige",
        "sinopsis": "El singular héroe Peter Quill, también conocido como Star-Lord, vuelve a embarcarse en un viaje intergaláctico por todo el universo. Le acompañará su heterogéneo equipo formado por Gamora, Drax el Destructor, Rocket Racoon y Baby Groot, además de otras nuevas incorporaciones como Mantis, Yondu Udonta y Nébula. Juntos, ahora que son una recién fundada familia, los Guardianes tendrán que luchar duro, a la vez que intentarán desentrañar los misterios que rodean el pasado de Star-Lord. Y es que, en su aventura conocerán a Ego 'el Planeta Viviente', el temible progenitor de Peter. A medida que el Universo Cinematográfico de Marvel prosigue su expansión, veremos cómo viejos enemigos se volverán aliados y queridos personajes de los cómics clásicos se convertirán en héroes.",
        "img": "img2.jpg",
        "trailer": "https://www.youtube.com/watch?v=12gvJgLE4us"
        
    },
    {
         "id": "3",
        "titulo": "Rápidos y Furiosos 8",
        "director": "F. Gary Gray",
        "produccion": "Neal H. Moritz",
        "sinopsis": "Justo cuando Dom y Letty celebran su luna de miel, Brian y Mia se han retirado del juego y el resto del equipo se ha desintegrado en busca de una vida común y corriente; una misteriosa mujer intentará seducir a Dom para convencerlo de regresar a la vida criminal que tanto lo acecha, traicionando a quienes lo rodean y enfrentándose a retos nunca antes vistos.",
        "img": "img3.jpg",
        "trailer": "https://www.youtube.com/watch?v=12gvJgLE4us"
    }, {
        "id": "4",
        "titulo": "Un Jefe En Pañales",
        "director": "Tom McGrath",
        "produccion": "Ramsey Ann Naito",
        "sinopsis": "Un peculiar bebé, que viste traje y corbata y lleva maletín, y su hermano Tim, de 7 años, tratarán de detener los malvados planes del director de la empresa Puppy Corporation.",
        "img": "img4.jpg",
        "trailer": "https://www.youtube.com/watch?v=12gvJgLE4us"
    } 
    
];