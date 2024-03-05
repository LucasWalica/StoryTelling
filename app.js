const personajes = [
    {"nombre":"Espadachin Misterioso", "body":"./PNG/Dark_Elves/Character1_face4.png", "face":"./PNG/Dark_Elves_faces/Character1_face4.png"},
    {"nombre":"Bruja Enfadada" , "body":"./PNG/Dark_Elves/Character2_face4.png", "face":"./PNG/Dark_Elves_faces/Character2_face4.png"},
    {"nombre":"Mercader" , "body":"./PNG/Dark_Elves/Character3_face1.png", "face":"./PNG/Dark_Elves_faces/Character3_face1.png"},
    {"nombre":"Hechicero" , "body":"./PNG/Dark_Elves/Character4_face1.png", "face":"./PNG/Dark_Elves_faces/Character4_face1.png"},
    {"nombre":"Mercenario" , "body":"./PNG/Dark_Elves/Character5_face2.png", "face":"./PNG/Dark_Elves_faces/Character5_face4.png"},
    {"nombre":"Aristocrata" , "body":"./PNG/Dark_Elves/Character6_face1.png", "face":"./PNG/Dark_Elves_faces/Character6_face4.png"},
    {"nombre":"Soldado" , "body":"./PNG/Dark_Elves/Character7_face4.png", "face":"./PNG/Dark_Elves_faces/Character7_face4.png"},
    {"nombre":"Picara" , "body":"./PNG/Dark_Elves/Character8_face1.png", "face":"./PNG/Dark_Elves_faces/Character8_face1.png"},
    {"nombre":"Mercader Magico" , "body":"./PNG/Demon_warriors/Character3_face1.png", "face":"./PNG/Demon_warriors_faces/Character3_face4.png"},
    {"nombre":"Conjurador" , "body":"./PNG/Demon_warriors/Character5_face1.png", "face":"./PNG/Demon_warriors_faces/Character5_face1.png"},
    {"nombre":"Espadachin Demoniaco" , "body":"./PNG/Demon_warriors/Character6_face1.png", "face":"./PNG/Demon_warriors_faces/Character6_face1.png"},
    {"nombre":"Maga Ignea" , "body":"./PNG/Demon_warriors/Character7_face1.png", "face":"./PNG/Demon_warriors_faces/Character7_face1.png"},
    {"nombre":"Leñador" , "body":"./PNG/Demon_warriors/Character8_face1.png", "face":"./PNG/Demon_warriors_faces/Character8_face4.png"},
    {"nombre":"Soldado Magico" , "body":"./PNG/Halflings2/Character2_face1.png", "face":"./PNG/Halflings2_faces/Character2_face1.png"},
    {"nombre":"Rey Enano" , "body":"./PNG/Halflings2/Character3_face1.png", "face":"./PNG/Halflings2_faces/Character3_face1.png"},
    {"nombre":"Panadera" , "body":"./PNG/Halflings2/Character4_face1.png", "face":"./PNG/Halflings2_faces/Character4_face1.png"},
    {"nombre":"Costurera" , "body":"./PNG/Halflings2/Character5_face1.png", "face":"./PNG/Halflings2_faces/Character5_face1.png"},
    {"nombre":"Alquimista" , "body":"./PNG/Halflings2/Character6_face1.png", "face":"./PNG/Halflings2_faces/Character6_face1.png"},
    {"nombre":"Viajero" , "body":"./PNG/Halflings2/Character7_face1.png", "face":"./PNG/Halflings2_faces/Character7_face1.png"},
    {"nombre":"Caballero" , "body":"./PNG/Halflings2/Character8_face1.png", "face":"./PNG/Halflings2_faces/Character8_face1.png"}
]

document.addEventListener("DOMContentLoaded", function() {
    count = 0;
    for(chararcer in personaje){
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
    }
});
  