const obras = {
    obras: {
        obra1: {
            numero: 1,
            titulo: 'Provecho',
            imagen: 'provecho.webp',
            descripcion: 'Es una instalación sonora multicanal que dialoga con la comida. A partir de grabaciones de campo de gente eructando después de comer su comida favorita de la infancia, se busca rememorar los moementos gratificantes vividos en la infancia de las personas, ejerciendo así, un espacio de expecionalidad de su entorno cotidiano. Esta instalación queda como registro de dicha experiencia.'
        },
        obra2: {
            numero: 2,
            titulo: 'Saludos',
            imagen: 'simi.jpeg',
            descripcion: 'Es una escultura 3D del doctor SIMI que en ralidad tiene en su interior un hispotal del IMSS. A partir de este elemnto 3D se busca tensionar la realidad de falta de servicio público de salud en México y cómo muchas personas usan empresas privada como similares para sus consultas médicas. La escultrua es navegabl y en su interior alberga escenas de violencia cotifdiana en hospitales públicos de México'
        },
        obra3: {
            numero: 3,
            titulo: 'Gracias',
            imagen: 'gracias.webp', 
            descripcion: 'Un videojuego diseñado para agradecer a la comunidad que me ha acompañado a lo largo de mi crecimiento profesional como artista. Este espacio virtual bidimensional es posible navegar una narrativa donde se cuenta mi historia y relación con mis personas cercanas desde que comnecé a estudiar arte hasta la fecha. Esta suerte de diario prentende exhibir cómo les vinculos humanos ineludiblemnte terminan materialisándose en el desarrolo profesional de cada uno.'
        }
    },
    statement: 'Me gusta trabajar en torno a experiencia humanas cotidianas, reflexionando sobre las frases que normalmente nos decimos para estrucuturar la convivencia del día a día. A partir de ahi genero ejercicios creativos que desarrollan los campos semánticos de dichas palabras. Más que explorar un absurdo abro espacios en un territorio constantemente pasado por alto, vinculado a las buenas costumbres.'
}

let statement = obras.statement

let about = document.createElement('p')
about.innerHTML = statement
document.getElementsByClassName('about')[0].appendChild(about)

// console.log(obras.obras.obra1)
// console.log(obras['obras']['obra1'])
let listadoObras = Object.keys(obras.obras)
// console.log(obras.obras[listadoObras[0]])
for (let i = 0; i < listadoObras.length; i++) {
    console.log(obras.obras[listadoObras[i]])
}


