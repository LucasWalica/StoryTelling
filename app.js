
// nombre, body, face, mensaje, dineroTaberna, textoResultadoEntrar
const personajes = [
    {"nombre":"Ardrin", "body":"./PNG/Dark_Elves/Character1_face4.png", "face":"./PNG/Dark_Elves_faces/Character1_face4.png", "mensaje":"Hola soy Ardrin vengo de tierra lejanas, me encanta el vino elfico.", "dineroTaberna":200, "textoJefeEntrar":"Ardrin Compró 20 vinos" , "mensajeRechazar":"Ardrin Se fue enfadado"},
    {"nombre":"Shulima" , "body":"./PNG/Dark_Elves/Character2_face4.png", "face":"./PNG/Dark_Elves_faces/Character2_face4.png", "mensaje":"No estoy acostumbrada a que me pidan informacion al entrar", "dineroTaberna":100, "textoJefeEntrar":"Shulima cenó tranquilamente mientras leia su libro" , "mensajeRechazar":"Te hizo desaparecer los pantalones"},
    {"nombre":"Morrok" , "body":"./PNG/Dark_Elves/Character3_face1.png", "face":"./PNG/Dark_Elves_faces/Character3_face1.png", "mensaje":"Buenos dias, venía a ver a un amigo", "dineroTaberna":-200, "textoJefeEntrar": "Nos ha robado varios Vinos Elficos", "mensajeRechazar":"Hechaste a Morrok"},
    {"nombre":"Wilrym" , "body":"./PNG/Dark_Elves/Character4_face1.png", "face":"./PNG/Dark_Elves_faces/Character4_face1.png", "mensaje":"Soy Wilrym venia a descansar de un largo viaje", "dineroTaberna":1000, "textoJefeEntrar": "Ha conjurado 100 monedas de oro por una comida", "mensajeRechazar":"Se fue enfadado"},
    {"nombre":"Hipor" , "body":"./PNG/Dark_Elves/Character5_face2.png", "face":"./PNG/Dark_Elves_faces/Character5_face4.png", "mensaje":"Hola Criatura soy Hipor el legendario, dejame entrar o te asesinare", "dineroTaberna":-500, "textoJefeEntrar": "Ha consumido 4 comidas y no quiere pagar", "mensajeRechazar":"Los guardias al oir el ruido se lo llevaron al calabozo"},
    {"nombre":"Karina" , "body":"./PNG/Dark_Elves/Character6_face1.png", "face":"./PNG/Dark_Elves_faces/Character6_face4.png", "mensaje":"Soy Karina, noble elfica, quiero entrar en esta famosa posada", "dineroTaberna":300, "textoJefeEntrar": "Una clienta super agradable y educada.", "mensajeRechazar":"Tu taberna ya no sera visitada por personas del barrio rico."},
    {"nombre":"Irina" , "body":"./PNG/Dark_Elves/Character7_face4.png", "face":"./PNG/Dark_Elves_faces/Character7_face4.png", "mensaje":"Vaya día mas duro de guardia, quiero tomar esa cerveza de trigo.", "dineroTaberna":50, "textoJefeEntrar": "Se ha tomado 5 cervezas de trigo", "mensajeRechazar":"Irina no entiende por que no la dejas entrar."},
    {"nombre":"Gemma" , "body":"./PNG/Dark_Elves/Character8_face1.png", "face":"./PNG/Dark_Elves_faces/Character8_face1.png", "mensaje":"Por fin una taberna abierta, necesito descansar mis agotados huesos cariño", "dineroTaberna":-2000, "textoJefeEntrar": "Ha robado gran parte de los ornamentos de la taberna", "mensajeRechazar":"Vaya persona mas desagradecida"},
    {"nombre":"Mirak" , "body":"./PNG/Demon_warriors/Character3_face1.png", "face":"./PNG/Demon_warriors_faces/Character3_face4.png", "mensaje":"Tengo que ver a un amigo", "dineroTaberna":400, "textoJefeEntrar":"Ha traido varias botellas de vino elfico y comprado un venado" , "mensajeRechazar":"Te ha orinado en los zapatos"},
    {"nombre":"Sagrath" , "body":"./PNG/Demon_warriors/Character5_face1.png", "face":"./PNG/Demon_warriors_faces/Character5_face1.png", "mensaje":"Hola mortal, quiero deja paso o te volvere ceniza", "dineroTaberna":0, "textoJefeEntrar":"Ha venido a llevarse a un cliente al infierno." , "mensajeRechazar":"Te intenta convertir en ceniza pero llevas protección anti magia de sangre."},
    {"nombre":"Sir Dremon" , "body":"./PNG/Demon_warriors/Character6_face1.png", "face":"./PNG/Demon_warriors_faces/Character6_face1.png", "mensaje":"Por fin un sitio donde tienen Vino elfico", "dineroTaberna":1000, "textoJefeEntrar": "Parece ser que los demonios beben mucho", "mensajeRechazar":"Te muerde y te convierte en Zombi"},
    {"nombre":"Ignira" , "body":"./PNG/Demon_warriors/Character7_face1.png", "face":"./PNG/Demon_warriors_faces/Character7_face1.png", "mensaje":"No te preocupes mortal, no usare mi magia dentro", "dineroTaberna":-500, "textoJefeEntrar": "Ha quemado la un barril de vino elfico", "mensajeRechazar":"Que miedo teneis los mortales"},
    {"nombre":"Zelvion" , "body":"./PNG/Demon_warriors/Character8_face1.png", "face":"./PNG/Demon_warriors_faces/Character8_face4.png", "mensaje":"No hay nada mejor que un buen trago despues de trabajar", "dineroTaberna":500, "textoJefeEntrar": "Un buen cliente como cualquier otro", "mensajeRechazar":"Te intenta partir con el hacha del enfado"},
    {"nombre":"Sir Elwin" , "body":"./PNG/Halflings2/Character2_face1.png", "face":"./PNG/Halflings2_faces/Character2_face1.png", "mensaje":"Vengo de las tierras de Grindarin, se habla bien allí de esta taberna", "dineroTaberna":400, "textoJefeEntrar": "Los elfos son muy tranquilos", "mensajeRechazar":"Vaya desgracia no poder entrar."},
    {"nombre":"Rey Enano" , "body":"./PNG/Halflings2/Character3_face1.png", "face":"./PNG/Halflings2_faces/Character3_face1.png", "mensaje":"a", "dineroTaberna":"a", "textoJefeEntrar": "a", "mensajeRechazar":"a"},
    {"nombre":"Panadera" , "body":"./PNG/Halflings2/Character4_face1.png", "face":"./PNG/Halflings2_faces/Character4_face1.png", "mensaje":"a", "dineroTaberna":"a", "textoJefeEntrar": "a", "mensajeRechazar":"a"},
    {"nombre":"Costurera" , "body":"./PNG/Halflings2/Character5_face1.png", "face":"./PNG/Halflings2_faces/Character5_face1.png", "mensaje":"a", "dineroTaberna":"a", "textoJefeEntrar": "a", "mensajeRechazar":"a"},
    {"nombre":"Dandromi" , "body":"./PNG/Halflings2/Character6_face1.png", "face":"./PNG/Halflings2_faces/Character6_face1.png", "mensaje":"Vengo a hacer alquimia mientras me relajo con buen vino elfico", "dineroTaberna":200, "textoJefeEntrar": "Tenia miedo de la alquimia, pero es tranquilo.", "mensajeRechazar":"Se marcha triste"},
    {"nombre":"Mredan" , "body":"./PNG/Halflings2/Character7_face1.png", "face":"./PNG/Halflings2_faces/Character7_face1.png", "mensaje":"Espero que se acepten mascotas.", "dineroTaberna":200, "textoJefeEntrar": "Comida para el perro y una venado para él", "mensajeRechazar":"El perro te mira triste y se van."},
    {"nombre":"Sir Rolland" , "body":"./PNG/Halflings2/Character8_face1.png", "face":"./PNG/Halflings2_faces/Character8_face1.png", "mensaje":"No me juzgues por mi tamaño, bebo más que la mayoria de demonios", "dineroTaberna":1000, "textoJefeEntrar": "Se ha bebido dos barriles de vino elfico", "mensajeRechazar":"Se marcha enfadado"}
]

// cada dia 4 personajes -> 3 dias
// cada personaje genera un mensaje del jefe 
// cada persona tiene un mensaje propio  y un outcom en el oro de la taverna y una descripcion 
// idiomas 4 => ingles, español, checo, holandes

// #personaje_dice #char_name #description #body_char #face_hablante #reject #accept   
document.addEventListener("DOMContentLoaded", function() {
    count = 0;
    for(chararcer in personajes){
        let div = document.createElement('div');
        div.innerHTML = personajes[count].mensaje;
        div.innerHTML += "<br/>"+ personajes[count].dineroTaberna;
        div.innerHTML += "<br/>"+ personajes[count].textoJefeEntrar;
        div.innerHTML += "<br/>" + personajes[count].mensajeRechazar;
        
        let img = document.createElement('img');
        img.src = personajes[count].body
        img.height = 400;
        img.width = 200;
        let img_face = document.createElement('img');
        img_face.src  = personajes[count].face
        img_face.height = 100;
        img_face.width = 100;
        count++;
        document.body.appendChild(img)
        document.body.appendChild(img_face)
        document.body.appendChild(div)
    }
});
  