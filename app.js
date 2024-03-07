

// cada dia 4 personajes -> 3 dias
// cada personaje genera un mensaje del jefe 
// cada persona tiene un mensaje propio  y un outcom en el oro de la taverna y una descripcion 
// idiomas 4 => ingles, español, checo, holandes

// #personaje_dice #char_name #description #body_char #face_hablante #reject #accept   
document.addEventListener("DOMContentLoaded", function() {

    
    // para diseñar los estilos de quedarse sin vinos y quedarse sin vidas
    const hud = document.getElementById('test')
    hud.style.display= 'none';
    
    // start
    let sign = document.querySelector('#sign');
    sign.addEventListener('click', function(){
        hud.style.display = 'block'
        const start = document.querySelector('.start');
        start.parentElement.removeChild(start);
    })

    // count_personajes pasados
    let count = 0;

    // recursos popUP
    let vidasPopUp = document.querySelector('#vidas');
    let vinosPopUp = document.querySelector('#wines');
    let monedasPopUp = document.querySelector('#coins');  
    // recursos barra superior 
    let vidas_superior = document.querySelector('#heart_count')
    let vinos_superior = document.querySelector('#wine_count')
    let coin_document = document.querySelector('#amount');
    // recursos juego
    let count_monedas = 0;  
    let count_vidas = 10;
    let count_vinos = 100;
    
    vidas_superior.innerHTML = count_vidas;
    vinos_superior.innerHTML = count_vinos;
    coin_document.innerHTML = count_monedas;
    
    let message =  document.querySelector('#personaje_dice')
    let name = document.querySelector('#char_name')
    let body = document.querySelector('#body_char')
    let face = document.querySelector('#face_hablante')
    let text_jefe = document.querySelector("#text_jefe");
    message.innerHTML = personajes[count].mensaje
    name.innerHTML = personajes[count].nombre
    body.style.backgroundImage = `url('${personajes[count].body}')`;
    face.src = personajes[count].face


    let acceptBut = document.querySelector('#accept')
    acceptBut.addEventListener('click', function(event){
        event.preventDefault();
        checkFinal();
        count++;
        cargarCuerpo()
        count_monedas += personajes[count-1].dineroTaberna
        coin_document.innerHTML = count_monedas;
        loadCommentEntrar();
        check()
    })


    // popUP
    function loadCommentEntrar(){
  
        let popUp = document.querySelector('#popUp');
        popUp.style.visibility = "visible";
        
        text_jefe.innerHTML = personajes[count-1].textoJefeEntrar;
        vidasPopUp.innerHTML = 0
        
        vinosPopUp.innerHTML = personajes[count-1].vinos
        monedasPopUp.innerHTML = personajes[count-1].dineroTaberna
        vinosPopUp.innerHTML = personajes[count-1].vinos
        vinos_superior.innerHTML -= personajes[count-1].vinos
    }

    function loadCommentNoEntrar(){
        let popUp = document.querySelector('#popUp');
        popUp.style.visibility = "visible";
        text_jefe.innerHTML = personajes[count-1].mensajeRechazar;
        vidas_superior.innerHTML -= personajes[count-1].vidaRes
        vidasPopUp.innerHTML = personajes[count-1].vidaRes
        
        vinosPopUp.innerHTML = 0;
        monedasPopUp.innerHTML = 0;
    }

    function cargarCuerpo(){
        message.innerHTML = personajes[count].mensaje
        name.innerHTML = personajes[count].nombre
        body.style.backgroundImage = `url('${personajes[count].body}')`;
        face.src = personajes[count].face
    }

    let rejectBut = document.querySelector('#reject')
    rejectBut.addEventListener('click', function(event){
        event.preventDefault();
        checkFinal();
        count++;
        cargarCuerpo()
        loadCommentNoEntrar();
        check();        
    })

    // aceptar popUp
    let acceptInform = document.querySelector('#acceptInform');
    acceptInform.addEventListener('click', function(){
        let popUp = document.querySelector('#popUp');
        popUp.style.visibility = "hidden";
    })

  
    function remove(){
        const hud = document.getElementById('test')
        hud.parentElement.removeChild(hud);
        let popUp = document.querySelector('#popUp');
        popUp.style.visibility = "hidden";
    }

    function check(){
        checkFinal()
        checkResources()
    }
    function checkFinal(){
        if(count>=personajes.length && coin_document.innerHTML>0){
            remove();
            document.body.innerHTML += taberna_positivo;
        }
        if(count>=personajes.length && coin_document.innerHTML<=0){
            remove();
            document.body.innerHTML += taberna_no_dinero;
        }
    }
      // mejorar con addChildern popChildren
      function checkResources(){
        if(vinos_superior.innerHTML<=0){
            alert("Fin de los vinos")
            remove()
            document.body.innerHTML+=vino_no_restante
        }
        if(vidas_superior.innerHTML<=0){
            alert("Fin de las vidas")
            remove()
            document.body.innerHTML+= vidas_no_restante
        }
    } 

});
  

// divs de final de partida
const vino_no_restante = '<div class="wine_lost"><h1>Nos hemos quedado sin vino elfico</h1><h2>Ha sido un dia muy exigente para los camareros y los bardos, la clientela ha sido muy amplia y han consumido todo</h2></div>'
const vidas_no_restante = ' <div class="life_lost"><h1>Has muerto tras tantos incidentes con clientes insatisfechos</h1><h2>Como te dijo Erdiran es un trabajo dificil por el trato con personas de todo tipo</h2></div>'
const taberna_no_dinero  = '<div class="negative_coins"><h1>Tras todo el dia te das cuenta de que la tienda ha perdido dinero</h1><h2>Has dejado pasar a todo tipo de personas no deseables que han aruinado la taberna mas famosa de todo el reino</h2></div>'
const taberna_positivo = '<div class="positive_coins"><h1>Tras todo el dia y el recuento de caja has ganado dinero</h1><h2>Erdiran está feliz de tu labor y te da un dinero extra por su excelente labor</h2></div>'

// nombre, body, face, mensaje, dineroTaberna, textoResultadoEntrar
const personajes = [
    {"nombre":"Ardrin", "body":"./PNG/Dark_Elves/Character1_face4.png", "face":"./PNG/Dark_Elves_faces/Character1_face4.png", "mensaje":"Hola soy Ardrin vengo de tierra lejanas, me encanta el vino elfico.", "dineroTaberna":200, "textoJefeEntrar":"Se lo ha pasado en grande con la musica de bardos de fondo" , "mensajeRechazar":"Ardrin Se fue enfadado, no sin antes, atacarte. ", "vidaRes":2, "vinos":5},
    {"nombre":"Shulima" , "body":"./PNG/Dark_Elves/Character2_face4.png", "face":"./PNG/Dark_Elves_faces/Character2_face4.png", "mensaje":"No estoy acostumbrada a que me pidan informacion al entrar", "dineroTaberna":100, "textoJefeEntrar":"Shulima cenó tranquilamente mientras leia su libro" , "mensajeRechazar":"Te hizo desaparecer los pantalones y se marchó riendo fuertemente", "vidaRes":1 ,"vinos":4},
    {"nombre":"Morrok" , "body":"./PNG/Dark_Elves/Character3_face1.png", "face":"./PNG/Dark_Elves_faces/Character3_face1.png", "mensaje":"Buenos dias, venía a ver a un amigo y disfrutar con un vinito", "dineroTaberna":-150, "textoJefeEntrar": "Este malandrín nos ha robado", "mensajeRechazar":"Hechaste a Morrok", "vidaRes":0,"vinos":10},
    {"nombre":"Wilrym" , "body":"./PNG/Dark_Elves/Character4_face1.png", "face":"./PNG/Dark_Elves_faces/Character4_face1.png", "mensaje":"Soy Wilrym venia a descansar de un largo viaje", "dineroTaberna":300, "textoJefeEntrar": "Este mago ha conjurado una jugosa propina.", "mensajeRechazar":"Ha conjurado un lobo que te ha mordido el pie. ", "vidaRes":1,"vinos":-5},
    {"nombre":"Hipor" , "body":"./PNG/Dark_Elves/Character5_face2.png", "face":"./PNG/Dark_Elves_faces/Character5_face4.png", "mensaje":"Hola Criatura soy Hipor el legendario, dejame entrar o te asesinare", "dineroTaberna":-200, "textoJefeEntrar": "Ha consumido 4 comidas y no quiere pagar", "mensajeRechazar":"Los guardias al oir el ruido se lo llevaron al calabozo", "vidaRes":0,"vinos":8},
    {"nombre":"Karina" , "body":"./PNG/Dark_Elves/Character6_face1.png", "face":"./PNG/Dark_Elves_faces/Character6_face4.png", "mensaje":"Soy Karina, noble elfica, quiero entrar en esta famosa posada", "dineroTaberna":300, "textoJefeEntrar": "Una clienta super agradable y educada.", "mensajeRechazar":"Tu taberna ya no sera visitada por personas del barrio rico.", "vidaRes":0,"vinos":5},
    {"nombre":"Irina" , "body":"./PNG/Dark_Elves/Character7_face4.png", "face":"./PNG/Dark_Elves_faces/Character7_face4.png", "mensaje":"Vaya día mas duro de guardia, quiero tomar esa cerveza de trigo.", "dineroTaberna":75, "textoJefeEntrar": "Se ha tomado 5 cervezas de trigo", "mensajeRechazar":"Irina no entiende por que no la dejas entrar y se marcha un poco triste.", "vidaRes":0,"vinos":5},
    {"nombre":"Gemma" , "body":"./PNG/Dark_Elves/Character8_face1.png", "face":"./PNG/Dark_Elves_faces/Character8_face1.png", "mensaje":"Por fin una taberna abierta, necesito descansar mis agotados huesos", "dineroTaberna":-1000, "textoJefeEntrar": "Ha robado gran parte de los ornamentos de la taberna", "mensajeRechazar":"Se marcha diciendo que eres una mala persona, además uno de sus cuchillo serpiente te persigue por toda la ciudad ", "vidaRes":1,"vinos":15},
    {"nombre":"Mirak" , "body":"./PNG/Demon_warriors/Character3_face1.png", "face":"./PNG/Demon_warriors_faces/Character3_face4.png", "mensaje":"Tengo que ver a un amigo", "dineroTaberna":400, "textoJefeEntrar":"Ha traido varias botellas de vino elfico y comprado un venado" , "mensajeRechazar":"Te ha orinado en los zapatos", "vidaRes":0,"vinos":-10},
    {"nombre":"Sagrath" , "body":"./PNG/Demon_warriors/Character5_face1.png", "face":"./PNG/Demon_warriors_faces/Character5_face1.png", "mensaje":"Hola mortal, quiero deja paso o te volvere ceniza", "dineroTaberna":0, "textoJefeEntrar":"Ha venido a llevarse a un cliente al infierno." , "mensajeRechazar":"Te convierte en ceniza el brazo derecho", "vidaRes":5,"vinos":0},
    {"nombre":"Sir Dremon" , "body":"./PNG/Demon_warriors/Character6_face1.png", "face":"./PNG/Demon_warriors_faces/Character6_face1.png", "mensaje":"Por fin un sitio donde tienen Vino elfico", "dineroTaberna":1000, "textoJefeEntrar": "Parece ser que los demonios beben mucho, ten cuidado con las reservas. ", "mensajeRechazar":"Te muerde y te convierte en Zombi", "vidaRes":2,"vinos":10},
    {"nombre":"Ignira" , "body":"./PNG/Demon_warriors/Character7_face1.png", "face":"./PNG/Demon_warriors_faces/Character7_face1.png", "mensaje":"No te preocupes mortal, no usare mi magia dentro", "dineroTaberna":-500, "textoJefeEntrar": "Ha quemado la un barril de vino elfico", "mensajeRechazar":"Que miedo teneis los mortales", "vidaRes":0,"vinos":10},
    {"nombre":"Zelvion" , "body":"./PNG/Demon_warriors/Character8_face1.png", "face":"./PNG/Demon_warriors_faces/Character8_face4.png", "mensaje":"No hay nada mejor que un buen trago despues de trabajar", "dineroTaberna":1000, "textoJefeEntrar": "Ha disfrutado toda la noche mirando el fondo del vaso de forma melancólica.", "mensajeRechazar":"Te intenta partir con el hacha del enfado", "vidaRes":1,"vinos":20},
    {"nombre":"Sir Elwin" , "body":"./PNG/Halflings2/Character2_face1.png", "face":"./PNG/Halflings2_faces/Character2_face1.png", "mensaje":"Vengo de las tierras de Grindarin, se habla bien allí de esta taberna", "dineroTaberna":400, "textoJefeEntrar": "Los elfos son muy tranquilos", "mensajeRechazar":"Vaya desgracia no poder entrar.", "vidaRes":0,"vinos":4},
    {"nombre":"Ermir" , "body":"./PNG/Halflings2/Character3_face1.png", "face":"./PNG/Halflings2_faces/Character3_face1.png", "mensaje":"Me han desterrado de mi reino, vengo a ahogar mis penas.", "dineroTaberna":2000, "textoJefeEntrar": "Es el mismisimo rey Erwin, ha habido un golpe de estado en su reino.", "mensajeRechazar":"Tras unas horas Erwin es asesinado por unos mercenarios.", "vidaRes":0,"vinos":30},
    {"nombre":"Berona" , "body":"./PNG/Halflings2/Character4_face1.png", "face":"./PNG/Halflings2_faces/Character4_face1.png", "mensaje":"Buenas amigo, traigo panes frescos.", "dineroTaberna":-50, "textoJefeEntrar": "Por fin unos buenos panes, no nos quedaban, además te da uno y te cura.", "mensajeRechazar":"Tus clientes estan hambrientes y quieren pan fresco.", "vidaRes":-3,"vinos":0},
    {"nombre":"Florindia" , "body":"./PNG/Halflings2/Character5_face1.png", "face":"./PNG/Halflings2_faces/Character5_face1.png", "mensaje":"Me preguntaba si algun cliente querría algunas ropajes nuevos, no sin antes comprar una buena ensalada con nueces.", "dineroTaberna":20, "textoJefeEntrar": "Vaya clienta más particular.", "mensajeRechazar":"Se va a otra tienda a vender sus ropajes", "vidaRes":0,"vinos":0},
    {"nombre":"Dandromi" , "body":"./PNG/Halflings2/Character6_face1.png", "face":"./PNG/Halflings2_faces/Character6_face1.png", "mensaje":"Vengo a hacer alquimia mientras me relajo con buen vino elfico", "dineroTaberna":200, "textoJefeEntrar": "Tenía miedo de la alquimia, pero es tranquilo.", "mensajeRechazar":"Te lanza una pocíon de envejecimiento.", "vidaRes":1,"vinos":2},
    {"nombre":"Mredan" , "body":"./PNG/Halflings2/Character7_face1.png", "face":"./PNG/Halflings2_faces/Character7_face1.png", "mensaje":"Espero que se acepten mascotas.", "dineroTaberna":200, "textoJefeEntrar": "Tanto el perro como Mredan se lo han pasado genial en la taberna con el venado y el vino elfico.", "mensajeRechazar":"El perro te mira triste y se van.", "vidaRes":0,"vinos":5},
    {"nombre":"Sir Rolland" , "body":"./PNG/Halflings2/Character8_face1.png", "face":"./PNG/Halflings2_faces/Character8_face1.png", "mensaje":"No me juzgues por mi tamaño, bebo más que la mayoria de demonios", "dineroTaberna":1000, "textoJefeEntrar": "Se ha bebido dos barriles de vino elfico", "mensajeRechazar":"Se marcha enfadado y te lanza un conjuro que te provoca mudez.", "vidaRes":2,"vinos":20},
    {"nombre":"Gracias por jugar", "body": "", "face":"", "mensaje":"Nadie mas por el dia de hoy", "dineroTaberna":0, "textoJefeEntrar": "", "mensajeRechazar":"", "vidaRes":0,"vinos":0,"pasarTiempo" :""}
]
