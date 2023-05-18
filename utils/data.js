import bcrypt from 'bcryptjs';

// creo primero data.js para sembrar todos los datos en db.
// Y LUEGO ABRE NAVEGADOR ACTIVAR EL SERVIDOR CON LINK: http://localhost:5000/api/seed DEBE SER ORIGINAL.
const data = {
    users: [
        {
            nombres: "Administrador",
            apellidos: "Panel",
            username: "administradorpanel",
            email: "administradorpanel123@gmail.com",
            rol: "Administrador",
            password: bcrypt.hashSync("administradorpanel123"),
            isAdmin: true
        },
        {
            nombres: "Mariana",
            apellidos: "Tamayo",
            username: "marianatamayoadmin",
            email: "marianatamayoadmin123@gmail.com",
            rol: "Administrador",
            password: bcrypt.hashSync("marianatamayoadmin123"),
            isAdmin: true
        },
        {
            nombres: "Nury",
            apellidos: "Valenzuela",
            username: "nuryvalenzuelaadmin",
            email: "nuryvalenzueladmin123@gmail.com",
            rol: "Administrador",
            password: bcrypt.hashSync("nuryvalenzuelaadmin123"),
            isAdmin: true
        },
        {
            nombres: "bebito",
            apellidos: "perez",
            username: "bebitoperez123",
            email: "bebitoperez123@gmail.com",
            rol: "Cliente",
            password: bcrypt.hashSync("bebitoperez123"),
            isAdmin: false
        },
    ],
    abouts: [
        {
            imageOne: "https://i.ibb.co/jDkXNw2/IMG-3656.jpg",
            titleOne: "QUIÉNES SOMOS",
            descriptionOne: "La imagen detrás de Nury Valenzuela, soy una mujer real motivada por el deseo de transmitir el arte a todos nuestros clientes. Nuestro nacimiento e historia ha sido un camino lleno de amor y Fé en Dios a quien debo mi éxito y reconocimiento, Dios ha sido mi fuerza en cada decisión y paso que he dado, él es el verdadero dueño de mi talento. Las joyas que hoy se fabrican bajo mi nombre son el resultado de la disciplina y organización que me ha caracterizado desde muy corta edad, hoy puedo ser ejemplo para otras generaciones de que el trabajo incansable y honesto al final siempre da frutos, con Nury Valenzuela puedo ver materializado mis objetivos y el poder de Dios porque fue él quien me llevá más lejos que mis propios sueños, es por eso que tengo claro que cada prueba que me ha puesto la vida me ha servido de inspiración para plasmar mis sentimientos en una joya de alta calidad. Este mágico proyecto fue escrito y dedicado a Dios para que siempre hiciera Memoria delante de él.",
            titleTwo: "VISIÓN",
            descriptionTwo: "Convertimos en una empresa reconocida a nivel internacional destacándonos por nuestros diseños y atención de calidad, logrando fortalecer en nuestros clientes su seguridad y autoestima.",
            titleThree: "MISIÓN",
            descriptionThree: "Somos una joyería colombiana, dedicada al diseño de calidad, innovador y elegante, con el propósito de resaltar la belleza de los hombres y mujeres que lucen nuestras piezas.",
            imageFour: "https://i.ibb.co/DtZqHnS/IMG-3987.jpg",
            titleFour: "NUESTRO EQUIPO",
            descriptionFour: "Mi ejemplo ha determinado el futuro de mi hija quien es ahora mi mano derecha, ella adoptá este arte con todo su amor y decidió repartir sus días entre la vocación por la medicina y la joyería de alta calidad, ella es mi mejor equipo, mi inspiración y mi orgullo. Hoy Nury Valenzuela es el reflejo del amor más real que existe.El amor entre una Madre y su hija, sin dejar de lado que este mágico proyecto ser á mediano plazo un amor de tres.",
            titleFive: "EQUIPO",
            imageMother: "https://i.ibb.co/G7mTS5K/IMG-5235.jpg",
            imageDaughter: "https://i.ibb.co/cgNFYQz/IMG-3645.jpg"
        },
    ],
    banners: [
        {
            title: "TITULO 1.",
            image: "https://i.ibb.co/ZVVMNBZ/Wallpaper-1-new.png",
            description: "COMENTARIOS 1."
        },
        {
            title: "TITULO 2.",
            image: "https://i.ibb.co/G919wtZ/Wallpaper-2-new.png",
            description: "COMENTARIOS 2."
        },
        {
            title: "TITULO 3.",
            image: "https://i.ibb.co/SBT12Fj/Wallpaper-3-new.png",
            description: "COMENTARIOS 3."
        },
    ],
    blogs: [
        {
            title: "TITULO 1.",
            image: "https://i.ibb.co/fHtmgt1/IMG-3977.jpg",
            description: "COMENTARIOS 1."
        },
        {
            title: "TITULO 2.",
            image: "https://i.ibb.co/PjYjF7Z/IMG-4897.jpg",
            description: "COMENTARIOS 2."
        },
        {
            title: "TITULO 3.",
            image: "https://i.ibb.co/2W6PHvc/IMG-5013.jpg",
            description: "COMENTARIOS 3."
        },
        {
            title: "TITULO 4.",
            image: "https://i.ibb.co/G7mTS5K/IMG-5235.jpg",
            description: "COMENTARIOS 4."
        },
        {
            title: "TITULO 5.",
            image: "https://i.ibb.co/TYKkQLm/IMG-5616.jpg",
            description: "COMENTARIOS 5."
        },
        {
            title: "TITULO 6.",
            image: "https://i.ibb.co/10q1gSm/Archivo-006.jpg",
            description: "COMENTARIOS 6."
        },
    ],
    products: [
        {
            "title": "Anillo corazón Reborde",
            "categoryOptions": "Mujer",
            "subcategoryOptions": "Anillos",
            "tripletecategoryOptions": "Destacado",
            "countInStock": 10,
            "description": "Anillo elaborado en oro 18K con incrustaciones en circón natural.",
            "price": 3590000,
            "sizes": [
                {
                    "value": "4",
                    "key": 0
                },
                {
                    "value": "4.5",
                    "key": 1
                },
                {
                    "value": "5",
                    "key": 2
                },
                {
                    "value": "5.5",
                    "key": 3
                },
                {
                    "value": "6",
                    "key": 4
                },
                {
                    "value": "6.5",
                    "key": 5
                },
                {
                    "value": "7",
                    "key": 6
                },
                {
                    "value": "7.5",
                    "key": 7
                },
                {
                    "value": "8",
                    "key": 8
                },
                {
                    "value": "8.5",
                    "key": 9
                },
                {
                    "value": "9",
                    "key": 10
                }
            ],
            "colors": [
                {
                    "value": "Amarillo",
                    "key": 0
                },
                {
                    "value": "Rosado",
                    "key": 1
                },
                {
                    "value": "Blanco",
                    "key": 2
                },
                {
                    "value": "Azul Agua",
                    "key": 3
                },
                {
                    "value": "Rosa",
                    "key": 4
                },
                {
                    "value": "Fucsia",
                    "key": 5
                },
                {
                    "value": "Transparente",
                    "key": 6
                },
                {
                    "value": "Negro",
                    "key": 7
                },
                {
                    "value": "Lila",
                    "key": 8
                },
                {
                    "value": "Azul Oscuro",
                    "key": 9
                },
                {
                    "value": "Verde Manzana",
                    "key": 10
                },
                {
                    "value": "Verde Esmeralda",
                    "key": 11
                },
                {
                    "value": "Naranja",
                    "key": 12
                },
                {
                    "value": "Morado",
                    "key": 13
                },
                {
                    "value": "Multicolor",
                    "key": 14
                }
            ],
            "image": "https://i.ibb.co/PZgk7nN/IMG-6751.jpg",
            "imagesOnes": [
                {
                    "value": "https://i.ibb.co/mb9wtKP/IMG-3974.jpg",
                    "key": 0
                },
                {
                    "value": "https://i.ibb.co/Br4Yqhw/IMG-3973.jpg",
                    "key": 1
                },
                {
                    "value": "https://i.ibb.co/Fwmd1qn/IMG-3972.jpg",
                    "key": 2
                }
            ],
        }, {
            "title": "Anillo Corazón Pendulo",
            "categoryOptions": "Mujer",
            "subcategoryOptions": "Anillos",
            "tripletecategoryOptions": "Destacado",
            "countInStock": 10,
            "description": "Anillo elaborado en oro 18K con incrustaciones en circón natural.",
            "price": 3490000,
            "sizes": [
                {
                    "value": "4",
                    "key": 0
                },
                {
                    "value": "4.5",
                    "key": 1
                },
                {
                    "value": "5",
                    "key": 2
                },
                {
                    "value": "5.5",
                    "key": 3
                },
                {
                    "value": "6",
                    "key": 4
                },
                {
                    "value": "6.5",
                    "key": 5
                },
                {
                    "value": "7",
                    "key": 6
                },
                {
                    "value": "7.5",
                    "key": 7
                },
                {
                    "value": "8",
                    "key": 8
                },
                {
                    "value": "8.5",
                    "key": 9
                },
                {
                    "value": "9",
                    "key": 10
                }
            ],
            "colors": [
                {
                    "value": "Amarillo",
                    "key": 0
                },
                {
                    "value": "Rosado",
                    "key": 1
                },
                {
                    "value": "Blanco",
                    "key": 2
                },
                {
                    "value": "Azul Agua",
                    "key": 3
                },
                {
                    "value": "Rosa",
                    "key": 4
                },
                {
                    "value": "Fucsia",
                    "key": 5
                },
                {
                    "value": "Transparente",
                    "key": 6
                },
                {
                    "value": "Negro",
                    "key": 7
                },
                {
                    "value": "Lila",
                    "key": 8
                },
                {
                    "value": "Azul Oscuro",
                    "key": 9
                },
                {
                    "value": "Verde Manzana",
                    "key": 10
                },
                {
                    "value": "Verde Esmeralda",
                    "key": 11
                },
                {
                    "value": "Naranja",
                    "key": 12
                },
                {
                    "value": "Morado",
                    "key": 13
                },
                {
                    "value": "Multicolor",
                    "key": 14
                }
            ],
            "image": "https://i.ibb.co/ZhhX8cH/IMG-5615.jpg",
            "imagesOnes": [
                {
                    "value": "https://i.ibb.co/Z6tjrgK/IMG-5610.jpg",
                    "key": 0
                },
                {
                    "value": "https://i.ibb.co/G5vb45s/IMG-5609.jpg",
                    "key": 1
                }
            ],
        }, {
            "title": "Anillo Ancho",
            "categoryOptions": "Mujer",
            "subcategoryOptions": "Anillos",
            "tripletecategoryOptions": "Destacado",
            "countInStock": 10,
            "description": "Anillo elaborado en oro 18K con incrustaciones en circón natural.",
            "price": 3790000,
            "sizes": [
                {
                    "value": "4",
                    "key": 0
                },
                {
                    "value": "4.5",
                    "key": 1
                },
                {
                    "value": "5",
                    "key": 2
                },
                {
                    "value": "5.5",
                    "key": 3
                },
                {
                    "value": "6",
                    "key": 4
                },
                {
                    "value": "6.5",
                    "key": 5
                },
                {
                    "value": "7",
                    "key": 6
                },
                {
                    "value": "7.5",
                    "key": 7
                },
                {
                    "value": "8",
                    "key": 8
                },
                {
                    "value": "8.5",
                    "key": 9
                },
                {
                    "value": "9",
                    "key": 10
                }
            ],
            "colors": [
                {
                    "value": "Amarillo",
                    "key": 0
                },
                {
                    "value": "Rosado",
                    "key": 1
                },
                {
                    "value": "Blanco",
                    "key": 2
                },
                {
                    "value": "Azul Agua",
                    "key": 3
                },
                {
                    "value": "Rosa",
                    "key": 4
                },
                {
                    "value": "Fucsia",
                    "key": 5
                },
                {
                    "value": "Transparente",
                    "key": 6
                },
                {
                    "value": "Negro",
                    "key": 7
                },
                {
                    "value": "Lila",
                    "key": 8
                },
                {
                    "value": "Azul Oscuro",
                    "key": 9
                },
                {
                    "value": "Verde Manzana",
                    "key": 10
                },
                {
                    "value": "Verde Esmeralda",
                    "key": 11
                },
                {
                    "value": "Naranja",
                    "key": 12
                },
                {
                    "value": "Morado",
                    "key": 13
                },
                {
                    "value": "Multicolor",
                    "key": 14
                }
            ],
            "image": "https://i.ibb.co/NLbbWGz/IMG-5621.jpg",
            "imagesOnes": [
                {
                    "value": "https://i.ibb.co/TYKkQLm/IMG-5616.jpg",
                    "key": 0
                },
                {
                    "value": "https://i.ibb.co/vVwrhw2/IMG-5619.jpg",
                    "key": 1
                },
                {
                    "value": "https://i.ibb.co/wrPhJm0/IMG-5620.jpg",
                    "key": 2
                }
            ],
        }, {
            "title": "Anillo Reborde",
            "categoryOptions": "Mujer",
            "subcategoryOptions": "Anillos",
            "tripletecategoryOptions": "Destacado",
            "countInStock": 10,
            "description": "Anillo elaborado en oro 18K con incrustaciones en circón natural.",
            "price": 1000000,
            "sizes": [
                {
                    "value": "4",
                    "key": 0
                },
                {
                    "value": "4.5",
                    "key": 1
                },
                {
                    "value": "5",
                    "key": 2
                },
                {
                    "value": "5.5",
                    "key": 3
                },
                {
                    "value": "6",
                    "key": 4
                },
                {
                    "value": "6.5",
                    "key": 5
                },
                {
                    "value": "7",
                    "key": 6
                },
                {
                    "value": "7.5",
                    "key": 7
                },
                {
                    "value": "8",
                    "key": 8
                },
                {
                    "value": "8.5",
                    "key": 9
                },
                {
                    "value": "9",
                    "key": 10
                }
            ],
            "colors": [
                {
                    "value": "Amarillo",
                    "key": 0
                },
                {
                    "value": "Rosado",
                    "key": 1
                },
                {
                    "value": "Blanco",
                    "key": 2
                },
                {
                    "value": "Azul Agua",
                    "key": 3
                },
                {
                    "value": "Rosa",
                    "key": 4
                },
                {
                    "value": "Fucsia",
                    "key": 5
                },
                {
                    "value": "Transparente",
                    "key": 6
                },
                {
                    "value": "Negro",
                    "key": 7
                },
                {
                    "value": "Lila",
                    "key": 8
                },
                {
                    "value": "Azul Oscuro",
                    "key": 9
                },
                {
                    "value": "Verde Manzana",
                    "key": 10
                },
                {
                    "value": "Verde Esmeralda",
                    "key": 11
                },
                {
                    "value": "Naranja",
                    "key": 12
                },
                {
                    "value": "Morado",
                    "key": 13
                },
                {
                    "value": "Multicolor",
                    "key": 14
                }
            ],
            "image": "https://i.ibb.co/wys5nYt/IMG-5590.jpg",
            "imagesOnes": [
                {
                    "value": "https://i.ibb.co/ByHxc3j/IMG-5587.jpg",
                    "key": 0
                }
            ],
        }, {
            "title": "Dije Corazón Reborde",
            "categoryOptions": "Mujer",
            "subcategoryOptions": "Dijes",
            "tripletecategoryOptions": "Destacado",
            "countInStock": 10,
            "description": "Dije elaborado en oro 18K con incrustaciones en circón natural.",
            "price": 2290000,
            "sizes": [
                {
                    "value": "Ninguno",
                    "key": 0
                }
            ],
            "colors": [
                {
                    "value": "Amarillo",
                    "key": 0
                },
                {
                    "value": "Rosado",
                    "key": 1
                },
                {
                    "value": "Blanco",
                    "key": 2
                },
                {
                    "value": "Azul Agua",
                    "key": 3
                },
                {
                    "value": "Rosa",
                    "key": 4
                },
                {
                    "value": "Fucsia",
                    "key": 5
                },
                {
                    "value": "Transparente",
                    "key": 6
                },
                {
                    "value": "Negro",
                    "key": 7
                },
                {
                    "value": "Lila",
                    "key": 8
                },
                {
                    "value": "Azul Oscuro",
                    "key": 9
                },
                {
                    "value": "Verde Manzana",
                    "key": 10
                },
                {
                    "value": "Verde Esmeralda",
                    "key": 11
                },
                {
                    "value": "Naranja",
                    "key": 12
                },
                {
                    "value": "Morado",
                    "key": 13
                },
                {
                    "value": "Multicolor",
                    "key": 14
                }
            ],
            "image": "https://i.ibb.co/9T9VF1L/IMG-5162.jpg",
            "imagesOnes": [
                {
                    "value": "https://i.ibb.co/PTqR6K3/20210222-160614.jpg",
                    "key": 0
                }
            ],
        }, {
            "title": "Dije Fe",
            "categoryOptions": "Mujer",
            "subcategoryOptions": "Dijes",
            "tripletecategoryOptions": "Destacado",
            "countInStock": 10,
            "description": "Dije elaborado en oro 18K con turmalinas.",
            "price": 3590000,
            "sizes": [
                {
                    "value": "Ninguno",
                    "key": 0
                }
            ],
            "colors": [
                {
                    "value": "Amarillo",
                    "key": 0
                },
                {
                    "value": "Rosado",
                    "key": 1
                },
                {
                    "value": "Blanco",
                    "key": 2
                },
                {
                    "value": "Azul Agua",
                    "key": 3
                },
                {
                    "value": "Rosa",
                    "key": 4
                },
                {
                    "value": "Fucsia",
                    "key": 5
                },
                {
                    "value": "Transparente",
                    "key": 6
                },
                {
                    "value": "Negro",
                    "key": 7
                },
                {
                    "value": "Lila",
                    "key": 8
                },
                {
                    "value": "Azul Oscuro",
                    "key": 9
                },
                {
                    "value": "Verde Manzana",
                    "key": 10
                },
                {
                    "value": "Verde Esmeralda",
                    "key": 11
                },
                {
                    "value": "Naranja",
                    "key": 12
                },
                {
                    "value": "Morado",
                    "key": 13
                },
                {
                    "value": "Multicolor",
                    "key": 14
                }
            ],
            "image": "https://i.ibb.co/PjYjF7Z/IMG-4897.jpg",
            "imagesOnes": [
                {
                    "value": "https://i.ibb.co/3yS35t1/IMG-5154.jpg",
                    "key": 0
                },
                {
                    "value": "https://i.ibb.co/J518BGK/IMG-8130.jpg",
                    "key": 1
                },
                {
                    "value": "https://i.ibb.co/gDVLdJY/20200905-023134.jpg",
                    "key": 2
                },
                {
                    "value": "https://i.ibb.co/nsm250G/IMG-7885.jpg",
                    "key": 3
                },
                {
                    "value": "https://i.ibb.co/5T4MR0j/IMG-8198.jpg",
                    "key": 4
                }
            ],
        }, {
            "title": "Dije Bendicion",
            "categoryOptions": "Mujer",
            "subcategoryOptions": "Dijes",
            "tripletecategoryOptions": "Destacado",
            "countInStock": 10,
            "description": "Dije elaborado en oro 18K con incrustaciones en circon natural.",
            "price": 3390000,
            "sizes": [
                {
                    "value": "Ninguno",
                    "key": 0
                }
            ],
            "colors": [
                {
                    "value": "Amarillo",
                    "key": 0
                },
                {
                    "value": "Rosado",
                    "key": 1
                },
                {
                    "value": "Blanco",
                    "key": 2
                },
                {
                    "value": "Azul Agua",
                    "key": 3
                },
                {
                    "value": "Rosa",
                    "key": 4
                },
                {
                    "value": "Fucsia",
                    "key": 5
                },
                {
                    "value": "Transparente",
                    "key": 6
                },
                {
                    "value": "Negro",
                    "key": 7
                },
                {
                    "value": "Lila",
                    "key": 8
                },
                {
                    "value": "Azul Oscuro",
                    "key": 9
                },
                {
                    "value": "Verde Manzana",
                    "key": 10
                },
                {
                    "value": "Verde Esmeralda",
                    "key": 11
                },
                {
                    "value": "Naranja",
                    "key": 12
                },
                {
                    "value": "Morado",
                    "key": 13
                },
                {
                    "value": "Multicolor",
                    "key": 14
                }
            ],
            "image": "https://i.ibb.co/HV9TCXm/IMG-4902.jpg",
            "imagesOnes": [
                {
                    "value": "https://i.ibb.co/Dw8yKGv/IMG-3489.jpg",
                    "key": 0
                },
                {
                    "value": "https://i.ibb.co/2W6PHvc/IMG-5013.jpg",
                    "key": 1
                },
                {
                    "value": "https://i.ibb.co/KF7922v/IMG-7808.jpg",
                    "key": 2
                }
            ],
        }, {
            "title": "Dije Faith & Family",
            "categoryOptions": "Mujer",
            "subcategoryOptions": "Dijes",
            "tripletecategoryOptions": "Destacado",
            "countInStock": 10,
            "description": "Dije elaborado en oro 18K con incrustaciones en circon natural.",
            "price": 3890000,
            "sizes": [
                {
                    "value": "Ninguno",
                    "key": 0
                }
            ],
            "colors": [
                {
                    "value": "Amarillo",
                    "key": 0
                },
                {
                    "value": "Rosado",
                    "key": 1
                },
                {
                    "value": "Blanco",
                    "key": 2
                },
                {
                    "value": "Azul Agua",
                    "key": 3
                },
                {
                    "value": "Rosa",
                    "key": 4
                },
                {
                    "value": "Fucsia",
                    "key": 5
                },
                {
                    "value": "Transparente",
                    "key": 6
                },
                {
                    "value": "Negro",
                    "key": 7
                },
                {
                    "value": "Lila",
                    "key": 8
                },
                {
                    "value": "Azul Oscuro",
                    "key": 9
                },
                {
                    "value": "Verde Manzana",
                    "key": 10
                },
                {
                    "value": "Verde Esmeralda",
                    "key": 11
                },
                {
                    "value": "Naranja",
                    "key": 12
                },
                {
                    "value": "Morado",
                    "key": 13
                },
                {
                    "value": "Multicolor",
                    "key": 14
                }
            ],
            "image": "https://i.ibb.co/JxyY5B2/IMG-5187.jpg",
            "imagesOnes": [
                {
                    "value": "https://i.ibb.co/8PKpc4x/IMG-9795.jpg",
                    "key": 0
                },
                {
                    "value": "https://i.ibb.co/kDLkMVS/IMG-3734.jpg",
                    "key": 1
                },
                {
                    "value": "https://i.ibb.co/KDqwZMR/IMG-5159.jpg",
                    "key": 2
                }
            ],
        }, {
            "title": "Dije Oso Ted",
            "categoryOptions": "Mujer",
            "subcategoryOptions": "Dijes",
            "tripletecategoryOptions": "Destacado",
            "countInStock": 10,
            "description": "Dije elaborado en oro 18K con incrustaciones en circón natural.",
            "price": 3590000,
            "sizes": [
                {
                    "value": "Ninguno",
                    "key": 0
                }
            ],
            "colors": [
                {
                    "value": "Amarillo",
                    "key": 0
                },
                {
                    "value": "Rosado",
                    "key": 1
                },
                {
                    "value": "Blanco",
                    "key": 2
                },
                {
                    "value": "Azul Agua",
                    "key": 3
                },
                {
                    "value": "Rosa",
                    "key": 4
                },
                {
                    "value": "Fucsia",
                    "key": 5
                },
                {
                    "value": "Transparente",
                    "key": 6
                },
                {
                    "value": "Negro",
                    "key": 7
                },
                {
                    "value": "Lila",
                    "key": 8
                },
                {
                    "value": "Azul Oscuro",
                    "key": 9
                },
                {
                    "value": "Verde Manzana",
                    "key": 10
                },
                {
                    "value": "Verde Esmeralda",
                    "key": 11
                },
                {
                    "value": "Naranja",
                    "key": 12
                },
                {
                    "value": "Morado",
                    "key": 13
                },
                {
                    "value": "Multicolor",
                    "key": 14
                }
            ],
            "image": "https://i.ibb.co/4p4Yctb/IMG-3975.png",
            "imagesOnes": [
                {
                    "value": "https://i.ibb.co/3sMjrbh/IMG-2792.jpg",
                    "key": 0
                },
                {
                    "value": "https://i.ibb.co/2yJ7Ny1/IMG-2223.png",
                    "key": 1
                },
                {
                    "value": "https://i.ibb.co/56Wcv6L/IMG-3738.jpg",
                    "key": 2
                },
                {
                    "value": "https://i.ibb.co/7gPjz6K/IMG-3976.jpg",
                    "key": 3
                },
                {
                    "value": "https://i.ibb.co/q5tbT1Y/IMG-6567.jpg",
                    "key": 4
                },
                {
                    "value": "https://i.ibb.co/MfP3DFf/IMG-4313.jpg",
                    "key": 5
                },
                {
                    "value": "https://i.ibb.co/dcbbvNq/IMG-7996.jpg",
                    "key": 6
                }
            ],
        }, {
            "title": "Dije Oso Bebe",
            "categoryOptions": "Mujer",
            "subcategoryOptions": "Dijes",
            "tripletecategoryOptions": "Destacado",
            "countInStock": 10,
            "description": "Dije elaborado en oro 18K con incrustaciones en circon natural.",
            "price": 2690000,
            "sizes": [
                {
                    "value": "Ninguno",
                    "key": 0
                }
            ],
            "colors": [
                {
                    "value": "Amarillo",
                    "key": 0
                },
                {
                    "value": "Rosado",
                    "key": 1
                },
                {
                    "value": "Blanco",
                    "key": 2
                },
                {
                    "value": "Azul Agua",
                    "key": 3
                },
                {
                    "value": "Rosa",
                    "key": 4
                },
                {
                    "value": "Fucsia",
                    "key": 5
                },
                {
                    "value": "Transparente",
                    "key": 6
                },
                {
                    "value": "Negro",
                    "key": 7
                },
                {
                    "value": "Lila",
                    "key": 8
                },
                {
                    "value": "Azul Oscuro",
                    "key": 9
                },
                {
                    "value": "Verde Manzana",
                    "key": 10
                },
                {
                    "value": "Verde Esmeralda",
                    "key": 11
                },
                {
                    "value": "Naranja",
                    "key": 12
                },
                {
                    "value": "Morado",
                    "key": 13
                },
                {
                    "value": "Multicolor",
                    "key": 14
                }
            ],
            "image": "https://i.ibb.co/dk1C3xQ/IMG-2979.jpg",
            "imagesOnes": [
                {
                    "value": "https://i.ibb.co/Ws1DThR/IMG-3009.jpg",
                    "key": 0
                }
            ],
        }, {
            "title": "Dije Oso Minimalista",
            "categoryOptions": "Mujer",
            "subcategoryOptions": "Dijes",
            "tripletecategoryOptions": "Destacado",
            "countInStock": 10,
            "description": "Dije elaborado en oro 18K.",
            "price": 3290000,
            "sizes": [
                {
                    "value": "Ninguno",
                    "key": 0
                }
            ],
            "colors": [
                {
                    "value": "Amarillo",
                    "key": 0
                },
                {
                    "value": "Rosado",
                    "key": 1
                },
                {
                    "value": "Blanco",
                    "key": 2
                },
                {
                    "value": "Azul Agua",
                    "key": 3
                },
                {
                    "value": "Rosa",
                    "key": 4
                },
                {
                    "value": "Fucsia",
                    "key": 5
                },
                {
                    "value": "Transparente",
                    "key": 6
                },
                {
                    "value": "Negro",
                    "key": 7
                },
                {
                    "value": "Lila",
                    "key": 8
                },
                {
                    "value": "Azul Oscuro",
                    "key": 9
                },
                {
                    "value": "Verde Manzana",
                    "key": 10
                },
                {
                    "value": "Verde Esmeralda",
                    "key": 11
                },
                {
                    "value": "Naranja",
                    "key": 12
                },
                {
                    "value": "Morado",
                    "key": 13
                },
                {
                    "value": "Multicolor",
                    "key": 14
                }
            ],
            "image": "https://i.ibb.co/f4VLJnH/IMG-4899.jpg",
            "imagesOnes": [
                {
                    "value": "https://i.ibb.co/YXwqVPp/IMG-1044.jpg",
                    "key": 0
                }
            ],
        }, {
            "title": "Dije Oso Gordito",
            "categoryOptions": "Mujer",
            "subcategoryOptions": "Dijes",
            "tripletecategoryOptions": "Destacado",
            "countInStock": 10,
            "description": "Dije elaborado en oro 18K con incrustaciones en circon natural.",
            "price": 5980000,
            "sizes": [
                {
                    "value": "Ninguno",
                    "key": 0
                }
            ],
            "colors": [
                {
                    "value": "Amarillo",
                    "key": 0
                },
                {
                    "value": "Rosado",
                    "key": 1
                },
                {
                    "value": "Blanco",
                    "key": 2
                },
                {
                    "value": "Azul Agua",
                    "key": 3
                },
                {
                    "value": "Rosa",
                    "key": 4
                },
                {
                    "value": "Fucsia",
                    "key": 5
                },
                {
                    "value": "Transparente",
                    "key": 6
                },
                {
                    "value": "Negro",
                    "key": 7
                },
                {
                    "value": "Lila",
                    "key": 8
                },
                {
                    "value": "Azul Oscuro",
                    "key": 9
                },
                {
                    "value": "Verde Manzana",
                    "key": 10
                },
                {
                    "value": "Verde Esmeralda",
                    "key": 11
                },
                {
                    "value": "Naranja",
                    "key": 12
                },
                {
                    "value": "Morado",
                    "key": 13
                },
                {
                    "value": "Multicolor",
                    "key": 14
                }
            ],
            "image": "https://i.ibb.co/BGR4700/IMG-5186.jpg",
            "imagesOnes": [
                {
                    "value": "https://i.ibb.co/4J1MBbx/IMG-4312.jpg",
                    "key": 0
                },
                {
                    "value": "https://i.ibb.co/M9tmpWC/IMG-0969.jpg",
                    "key": 1
                }
            ],
        }, {
            "title": "Dije Cruz Reborde",
            "categoryOptions": "Mujer",
            "subcategoryOptions": "Dijes",
            "tripletecategoryOptions": "Destacado",
            "countInStock": 10,
            "description": "Dije elaborado en oro 18K con incrustaciones en circon natural.",
            "price": 1000000,
            "sizes": [
                {
                    "value": "Ninguno",
                    "key": 0
                }
            ],
            "colors": [
                {
                    "value": "Amarillo",
                    "key": 0
                },
                {
                    "value": "Rosado",
                    "key": 1
                },
                {
                    "value": "Blanco",
                    "key": 2
                },
                {
                    "value": "Azul Agua",
                    "key": 3
                },
                {
                    "value": "Rosa",
                    "key": 4
                },
                {
                    "value": "Fucsia",
                    "key": 5
                },
                {
                    "value": "Transparente",
                    "key": 6
                },
                {
                    "value": "Negro",
                    "key": 7
                },
                {
                    "value": "Lila",
                    "key": 8
                },
                {
                    "value": "Azul Oscuro",
                    "key": 9
                },
                {
                    "value": "Verde Manzana",
                    "key": 10
                },
                {
                    "value": "Verde Esmeralda",
                    "key": 11
                },
                {
                    "value": "Naranja",
                    "key": 12
                },
                {
                    "value": "Morado",
                    "key": 13
                },
                {
                    "value": "Multicolor",
                    "key": 14
                }
            ],
            "image": "https://i.ibb.co/YdtBzKR/IMG-6879.jpg",
            "imagesOnes": [
                {
                    "value": "https://i.ibb.co/rkGgZSd/IMG-5806.jpg",
                    "key": 0
                }
            ],
        }, {
            "title": "Dije cruz Ancha",
            "categoryOptions": "Mujer",
            "subcategoryOptions": "Dijes",
            "tripletecategoryOptions": "Destacado",
            "countInStock": 10,
            "description": "Dije elaborado en oro 18K con incrustaciones en circon natural.",
            "price": 1690000,
            "sizes": [
                {
                    "value": "Ninguno",
                    "key": 0
                }
            ],
            "colors": [
                {
                    "value": "Amarillo",
                    "key": 0
                },
                {
                    "value": "Rosado",
                    "key": 1
                },
                {
                    "value": "Blanco",
                    "key": 2
                },
                {
                    "value": "Azul Agua",
                    "key": 3
                },
                {
                    "value": "Rosa",
                    "key": 4
                },
                {
                    "value": "Fucsia",
                    "key": 5
                },
                {
                    "value": "Transparente",
                    "key": 6
                },
                {
                    "value": "Negro",
                    "key": 7
                },
                {
                    "value": "Lila",
                    "key": 8
                },
                {
                    "value": "Azul Oscuro",
                    "key": 9
                },
                {
                    "value": "Verde Manzana",
                    "key": 10
                },
                {
                    "value": "Verde Esmeralda",
                    "key": 11
                },
                {
                    "value": "Naranja",
                    "key": 12
                },
                {
                    "value": "Morado",
                    "key": 13
                },
                {
                    "value": "Multicolor",
                    "key": 14
                }
            ],
            "image": "https://i.ibb.co/410K92j/Snapseed.jpg",
            "imagesOnes": [
                {
                    "value": "https://i.ibb.co/ggWLNJ9/IMG-8085.jpg",
                    "key": 0
                },
                {
                    "value": "https://i.ibb.co/GsWKWPb/20210206-122343.jpg",
                    "key": 1
                }
            ],
        }, {
            "title": "Dije Niña",
            "categoryOptions": "Niños",
            "subcategoryOptions": "Dijes",
            "tripletecategoryOptions": "Niñas",
            "countInStock": 10,
            "description": "Dije elaborado en oro 18K con incrustaciones en circon natural.",
            "price": 990000,
            "sizes": [
                {
                    "value": "Ninguno",
                    "key": 0
                }
            ],
            "colors": [
                {
                    "value": "Amarillo",
                    "key": 0
                },
                {
                    "value": "Rosado",
                    "key": 1
                },
                {
                    "value": "Blanco",
                    "key": 2
                },
                {
                    "value": "Azul Agua",
                    "key": 3
                },
                {
                    "value": "Rosa",
                    "key": 4
                },
                {
                    "value": "Fucsia",
                    "key": 5
                },
                {
                    "value": "Transparente",
                    "key": 6
                },
                {
                    "value": "Negro",
                    "key": 7
                },
                {
                    "value": "Lila",
                    "key": 8
                },
                {
                    "value": "Azul Oscuro",
                    "key": 9
                },
                {
                    "value": "Verde Manzana",
                    "key": 10
                },
                {
                    "value": "Verde Esmeralda",
                    "key": 11
                },
                {
                    "value": "Naranja",
                    "key": 12
                },
                {
                    "value": "Morado",
                    "key": 13
                },
                {
                    "value": "Multicolor",
                    "key": 14
                }
            ],
            "image": "https://i.ibb.co/109ckG5/IMG-1070.jpg",
            "imagesOnes": [
                {
                    "value": "https://i.ibb.co/m5Fzt8m/IMG-1068.jpg",
                    "key": 0
                },
                {
                    "value": "https://i.ibb.co/TqGKPw2/IMG-1069.jpg",
                    "key": 1
                },
                {
                    "value": "https://i.ibb.co/23wKsJV/IMG-1072.jpg",
                    "key": 2
                },
                {
                    "value": "https://i.ibb.co/ZTvG2Mc/IMG-1071.jpg",
                    "key": 3
                }
            ],
        }, {
            "title": "Dije Niño",
            "categoryOptions": "Niños",
            "subcategoryOptions": "Dijes",
            "tripletecategoryOptions": "Niños",
            "countInStock": 10,
            "description": "Dije elaborado en oro 18K con incrustaciones en circon natural.",
            "price": 990000,
            "sizes": [
                {
                    "value": "Ninguno",
                    "key": 0
                }
            ],
            "colors": [
                {
                    "value": "Amarillo",
                    "key": 0
                },
                {
                    "value": "Rosado",
                    "key": 1
                },
                {
                    "value": "Blanco",
                    "key": 2
                },
                {
                    "value": "Azul Agua",
                    "key": 3
                },
                {
                    "value": "Rosa",
                    "key": 4
                },
                {
                    "value": "Fucsia",
                    "key": 5
                },
                {
                    "value": "Transparente",
                    "key": 6
                },
                {
                    "value": "Negro",
                    "key": 7
                },
                {
                    "value": "Lila",
                    "key": 8
                },
                {
                    "value": "Azul Oscuro",
                    "key": 9
                },
                {
                    "value": "Verde Manzana",
                    "key": 10
                },
                {
                    "value": "Verde Esmeralda",
                    "key": 11
                },
                {
                    "value": "Naranja",
                    "key": 12
                },
                {
                    "value": "Morado",
                    "key": 13
                },
                {
                    "value": "Multicolor",
                    "key": 14
                }
            ],
            "image": "https://i.ibb.co/N7WkdNw/IMG-6091.jpg",
            "imagesOnes": [
                {
                    "value": "https://i.ibb.co/YddYww5/IMG-6092.jpg",
                    "key": 0
                },
                {
                    "value": "https://i.ibb.co/kDX33TB/IMG-6090.jpg",
                    "key": 1
                },
                {
                    "value": "https://i.ibb.co/pRhwPpf/IMG-6089.jpg",
                    "key": 2
                },
                {
                    "value": "https://i.ibb.co/wBPkVz0/IMG-6093.jpg",
                    "key": 3
                }
            ],
        }, {
            "title": "Dije Papá",
            "categoryOptions": "Hombre",
            "subcategoryOptions": "Dijes",
            "tripletecategoryOptions": "Destacado",
            "countInStock": 10,
            "description": "Dije elaborado en oro 18K con incrustaciones en circon natural.",
            "price": 1090000,
            "sizes": [
                {
                    "value": "Ninguno",
                    "key": 0
                }
            ],
            "colors": [
                {
                    "value": "Amarillo",
                    "key": 0
                },
                {
                    "value": "Rosado",
                    "key": 1
                },
                {
                    "value": "Blanco",
                    "key": 2
                },
                {
                    "value": "Azul Agua",
                    "key": 3
                },
                {
                    "value": "Rosa",
                    "key": 4
                },
                {
                    "value": "Fucsia",
                    "key": 5
                },
                {
                    "value": "Transparente",
                    "key": 6
                },
                {
                    "value": "Negro",
                    "key": 7
                },
                {
                    "value": "Lila",
                    "key": 8
                },
                {
                    "value": "Azul Oscuro",
                    "key": 9
                },
                {
                    "value": "Verde Manzana",
                    "key": 10
                },
                {
                    "value": "Verde Esmeralda",
                    "key": 11
                },
                {
                    "value": "Naranja",
                    "key": 12
                },
                {
                    "value": "Morado",
                    "key": 13
                },
                {
                    "value": "Multicolor",
                    "key": 14
                }
            ],
            "image": "https://i.ibb.co/NLhjfnw/IMG-1056.jpg",
            "imagesOnes": [
                {
                    "value": "https://i.ibb.co/h94jrMx/IMG-1058.jpg",
                    "key": 0
                },
                {
                    "value": "https://i.ibb.co/rszrsd0/IMG-1060.jpg",
                    "key": 1
                },
                {
                    "value": "https://i.ibb.co/cws0fTs/IMG-6067.jpg",
                    "key": 2
                },
                {
                    "value": "https://i.ibb.co/pfL3YX2/IMG-6068.jpg",
                    "key": 3
                }
            ],
        }, {
            "title": "Dije Mamá",
            "categoryOptions": "Mujer",
            "subcategoryOptions": "Dijes",
            "tripletecategoryOptions": "Destacado",
            "countInStock": 10,
            "description": "Dije elaborado en oro 18K con incrustaciones en circon natural.",
            "price": 1090000,
            "sizes": [
                {
                    "value": "Ninguno",
                    "key": 0
                }
            ],
            "colors": [
                {
                    "value": "Amarillo",
                    "key": 0
                },
                {
                    "value": "Rosado",
                    "key": 1
                },
                {
                    "value": "Blanco",
                    "key": 2
                },
                {
                    "value": "Azul Agua",
                    "key": 3
                },
                {
                    "value": "Rosa",
                    "key": 4
                },
                {
                    "value": "Fucsia",
                    "key": 5
                },
                {
                    "value": "Transparente",
                    "key": 6
                },
                {
                    "value": "Negro",
                    "key": 7
                },
                {
                    "value": "Lila",
                    "key": 8
                },
                {
                    "value": "Azul Oscuro",
                    "key": 9
                },
                {
                    "value": "Verde Manzana",
                    "key": 10
                },
                {
                    "value": "Verde Esmeralda",
                    "key": 11
                },
                {
                    "value": "Naranja",
                    "key": 12
                },
                {
                    "value": "Morado",
                    "key": 13
                },
                {
                    "value": "Multicolor",
                    "key": 14
                }
            ],
            "image": "https://i.ibb.co/DGrKFZ3/IMG-1054.jpg",
            "imagesOnes": [
                {
                    "value": "https://i.ibb.co/Z6xQsY5/IMG-1052.jpg",
                    "key": 0
                },
                {
                    "value": "https://i.ibb.co/NTMwxvb/IMG-1049.jpg",
                    "key": 1
                },
                {
                    "value": "https://i.ibb.co/wgJ9Hw2/IMG-1051.jpg",
                    "key": 2
                },
                {
                    "value": "https://i.ibb.co/ckVrJhJ/products-A1.png",
                    "key": 3
                }
            ],
        }, {
            "title": "Dije Niña Trapo",
            "categoryOptions": "Niños",
            "subcategoryOptions": "Dijes",
            "tripletecategoryOptions": "Niñas",
            "countInStock": 10,
            "description": "Dije elaborado en oro 18K con incrustaciones en circón natural.",
            "price": 1890000,
            "sizes": [
                {
                    "value": "Ninguno",
                    "key": 0
                }
            ],
            "colors": [
                {
                    "value": "Amarillo",
                    "key": 0
                },
                {
                    "value": "Rosado",
                    "key": 1
                },
                {
                    "value": "Blanco",
                    "key": 2
                },
                {
                    "value": "Azul Agua",
                    "key": 3
                },
                {
                    "value": "Rosa",
                    "key": 4
                },
                {
                    "value": "Fucsia",
                    "key": 5
                },
                {
                    "value": "Transparente",
                    "key": 6
                },
                {
                    "value": "Negro",
                    "key": 7
                },
                {
                    "value": "Lila",
                    "key": 8
                },
                {
                    "value": "Azul Oscuro",
                    "key": 9
                },
                {
                    "value": "Verde Manzana",
                    "key": 10
                },
                {
                    "value": "Verde Esmeralda",
                    "key": 11
                },
                {
                    "value": "Naranja",
                    "key": 12
                },
                {
                    "value": "Morado",
                    "key": 13
                },
                {
                    "value": "Multicolor",
                    "key": 14
                }
            ],
            "image": "https://i.ibb.co/bgDbYBD/IMG-4900.jpg",
            "imagesOnes": [
                {
                    "value": "https://i.ibb.co/dM12vX5/IMG-7439.jpg",
                    "key": 0
                },
                {
                    "value": "https://i.ibb.co/9G3T1C8/IMG-7442.jpg",
                    "key": 1
                },
                {
                    "value": "https://i.ibb.co/b5GCTDN/IMG-7440.jpg",
                    "key": 2
                }
            ],
        }, {
            "title": "Dije Niño Trapo",
            "categoryOptions": "Niños",
            "subcategoryOptions": "Dijes",
            "tripletecategoryOptions": "Niños",
            "countInStock": 10,
            "description": "Dije elaborado en oro 18K con incrustaciones en circón natural.",
            "price": 1890000,
            "sizes": [
                {
                    "value": "Ninguno",
                    "key": 0
                }
            ],
            "colors": [
                {
                    "value": "Amarillo",
                    "key": 0
                },
                {
                    "value": "Rosado",
                    "key": 1
                },
                {
                    "value": "Blanco",
                    "key": 2
                },
                {
                    "value": "Azul Agua",
                    "key": 3
                },
                {
                    "value": "Rosa",
                    "key": 4
                },
                {
                    "value": "Fucsia",
                    "key": 5
                },
                {
                    "value": "Transparente",
                    "key": 6
                },
                {
                    "value": "Negro",
                    "key": 7
                },
                {
                    "value": "Lila",
                    "key": 8
                },
                {
                    "value": "Azul Oscuro",
                    "key": 9
                },
                {
                    "value": "Verde Manzana",
                    "key": 10
                },
                {
                    "value": "Verde Esmeralda",
                    "key": 11
                },
                {
                    "value": "Naranja",
                    "key": 12
                },
                {
                    "value": "Morado",
                    "key": 13
                },
                {
                    "value": "Multicolor",
                    "key": 14
                }
            ],
            "image": "https://i.ibb.co/Rbwvsp1/IMG-7424.jpg",
            "imagesOnes": [
                {
                    "value": "https://i.ibb.co/tYWbK7j/IMG-7429.jpg",
                    "key": 0
                },
                {
                    "value": "https://i.ibb.co/zFhmxrK/IMG-7450.jpg",
                    "key": 1
                }
            ],
        }, {
            "title": "Dije Rostro Pantera",
            "categoryOptions": "Mujer",
            "subcategoryOptions": "Dijes",
            "tripletecategoryOptions": "Destacado",
            "countInStock": 10,
            "description": "Dije elaborado en oro 18K con diseño calado.",
            "price": 1000000,
            "sizes": [
                {
                    "value": "Ninguno",
                    "key": 0
                }
            ],
            "colors": [
                {
                    "value": "Amarillo",
                    "key": 0
                },
                {
                    "value": "Rosado",
                    "key": 1
                },
                {
                    "value": "Blanco",
                    "key": 2
                },
                {
                    "value": "Azul Agua",
                    "key": 3
                },
                {
                    "value": "Rosa",
                    "key": 4
                },
                {
                    "value": "Fucsia",
                    "key": 5
                },
                {
                    "value": "Transparente",
                    "key": 6
                },
                {
                    "value": "Negro",
                    "key": 7
                },
                {
                    "value": "Lila",
                    "key": 8
                },
                {
                    "value": "Azul Oscuro",
                    "key": 9
                },
                {
                    "value": "Verde Manzana",
                    "key": 10
                },
                {
                    "value": "Verde Esmeralda",
                    "key": 11
                },
                {
                    "value": "Naranja",
                    "key": 12
                },
                {
                    "value": "Morado",
                    "key": 13
                },
                {
                    "value": "Multicolor",
                    "key": 14
                }
            ],
            "image": "https://i.ibb.co/PFjZMd0/IMG-5809.jpg",
            "imagesOnes": [
                {
                    "value": "https://i.ibb.co/jzrgxcW/20210306-161225.jpg",
                    "key": 0
                }
            ],
        }, {
            "title": "Dije Relicario Corazón",
            "categoryOptions": "Mujer",
            "subcategoryOptions": "Dijes",
            "tripletecategoryOptions": "Destacado",
            "countInStock": 10,
            "description": "Dije elaborado en oro 18K doble faz.",
            "price": 2490000,
            "sizes": [
                {
                    "value": "Ninguno",
                    "key": 0
                }
            ],
            "colors": [
                {
                    "value": "Amarillo",
                    "key": 0
                },
                {
                    "value": "Rosado",
                    "key": 1
                },
                {
                    "value": "Blanco",
                    "key": 2
                },
                {
                    "value": "Azul Agua",
                    "key": 3
                },
                {
                    "value": "Rosa",
                    "key": 4
                },
                {
                    "value": "Fucsia",
                    "key": 5
                },
                {
                    "value": "Transparente",
                    "key": 6
                },
                {
                    "value": "Negro",
                    "key": 7
                },
                {
                    "value": "Lila",
                    "key": 8
                },
                {
                    "value": "Azul Oscuro",
                    "key": 9
                },
                {
                    "value": "Verde Manzana",
                    "key": 10
                },
                {
                    "value": "Verde Esmeralda",
                    "key": 11
                },
                {
                    "value": "Naranja",
                    "key": 12
                },
                {
                    "value": "Morado",
                    "key": 13
                },
                {
                    "value": "Multicolor",
                    "key": 14
                }
            ],
            "image": "https://i.ibb.co/L85C81r/IMG-2610.jpg",
            "imagesOnes": [
                {
                    "value": "https://i.ibb.co/d2yVyL7/IMG-8806.jpg",
                    "key": 0
                }
            ],
        }, {
            "title": "Dije Cruz Estilizada",
            "categoryOptions": "Mujer",
            "subcategoryOptions": "Dijes",
            "tripletecategoryOptions": "Destacado",
            "countInStock": 10,
            "description": "Dije elaborado en oro 18K con incrustaciones en circon natural.",
            "price": 1190000,
            "sizes": [
                {
                    "value": "Ninguno",
                    "key": 0
                }
            ],
            "colors": [
                {
                    "value": "Amarillo",
                    "key": 0
                },
                {
                    "value": "Rosado",
                    "key": 1
                },
                {
                    "value": "Blanco",
                    "key": 2
                },
                {
                    "value": "Azul Agua",
                    "key": 3
                },
                {
                    "value": "Rosa",
                    "key": 4
                },
                {
                    "value": "Fucsia",
                    "key": 5
                },
                {
                    "value": "Transparente",
                    "key": 6
                },
                {
                    "value": "Negro",
                    "key": 7
                },
                {
                    "value": "Lila",
                    "key": 8
                },
                {
                    "value": "Azul Oscuro",
                    "key": 9
                },
                {
                    "value": "Verde Manzana",
                    "key": 10
                },
                {
                    "value": "Verde Esmeralda",
                    "key": 11
                },
                {
                    "value": "Naranja",
                    "key": 12
                },
                {
                    "value": "Morado",
                    "key": 13
                },
                {
                    "value": "Multicolor",
                    "key": 14
                }
            ],
            "image": "https://i.ibb.co/5xhtH99/IMG-6877.jpg",
            "imagesOnes": [
                {
                    "value": "https://i.ibb.co/XC9YwB4/IMG-5667.jpg",
                    "key": 0
                },
                {
                    "value": "https://i.ibb.co/ncrZWhK/IMG-0496.jpg",
                    "key": 1
                },
                {
                    "value": "https://i.ibb.co/DMbX8ZK/IMG-5628.jpg",
                    "key": 2
                },
                {
                    "value": "https://i.ibb.co/M7txHhF/IMG-5665.jpg",
                    "key": 3
                },
                {
                    "value": "https://i.ibb.co/tYyNbD7/IMG-5666.jpg",
                    "key": 4
                }
            ],
        }, {
            "title": "Dije Dado Personalizado",
            "categoryOptions": "Mujer",
            "subcategoryOptions": "Dijes",
            "tripletecategoryOptions": "Destacado",
            "countInStock": 10,
            "description": "Dije elaborado en oro 18K con incrustaciones en circon natural.",
            "price": 3990000,
            "sizes": [
                {
                    "value": "Ninguno",
                    "key": 0
                }
            ],
            "colors": [
                {
                    "value": "Amarillo",
                    "key": 0
                },
                {
                    "value": "Rosado",
                    "key": 1
                },
                {
                    "value": "Blanco",
                    "key": 2
                },
                {
                    "value": "Azul Agua",
                    "key": 3
                },
                {
                    "value": "Rosa",
                    "key": 4
                },
                {
                    "value": "Fucsia",
                    "key": 5
                },
                {
                    "value": "Transparente",
                    "key": 6
                },
                {
                    "value": "Negro",
                    "key": 7
                },
                {
                    "value": "Lila",
                    "key": 8
                },
                {
                    "value": "Azul Oscuro",
                    "key": 9
                },
                {
                    "value": "Verde Manzana",
                    "key": 10
                },
                {
                    "value": "Verde Esmeralda",
                    "key": 11
                },
                {
                    "value": "Naranja",
                    "key": 12
                },
                {
                    "value": "Morado",
                    "key": 13
                },
                {
                    "value": "Multicolor",
                    "key": 14
                }
            ],
            "image": "https://i.ibb.co/vd8cJjc/IMG-3967.jpg",
            "imagesOnes": [
                {
                    "value": "https://i.ibb.co/10q1gSm/Archivo-006.jpg",
                    "key": 0
                },
                {
                    "value": "https://i.ibb.co/1XHY6Df/IMG-3981.jpg",
                    "key": 1
                },
                {
                    "value": "https://i.ibb.co/hMpXS2S/IMG-8614.jpg",
                    "key": 2
                }
            ],
        }, {
            "title": "Dije Candado",
            "categoryOptions": "Mujer",
            "subcategoryOptions": "Dijes",
            "tripletecategoryOptions": "Destacado",
            "countInStock": 10,
            "description": "Dije elaborado en oro 18K con incrustaciones en circon natural, doble faz.",
            "price": 3890000,
            "sizes": [
                {
                    "value": "Ninguno",
                    "key": 0
                }
            ],
            "colors": [
                {
                    "value": "Amarillo",
                    "key": 0
                },
                {
                    "value": "Rosado",
                    "key": 1
                },
                {
                    "value": "Blanco",
                    "key": 2
                },
                {
                    "value": "Azul Agua",
                    "key": 3
                },
                {
                    "value": "Rosa",
                    "key": 4
                },
                {
                    "value": "Fucsia",
                    "key": 5
                },
                {
                    "value": "Transparente",
                    "key": 6
                },
                {
                    "value": "Negro",
                    "key": 7
                },
                {
                    "value": "Lila",
                    "key": 8
                },
                {
                    "value": "Azul Oscuro",
                    "key": 9
                },
                {
                    "value": "Verde Manzana",
                    "key": 10
                },
                {
                    "value": "Verde Esmeralda",
                    "key": 11
                },
                {
                    "value": "Naranja",
                    "key": 12
                },
                {
                    "value": "Morado",
                    "key": 13
                },
                {
                    "value": "Multicolor",
                    "key": 14
                }
            ],
            "image": "https://i.ibb.co/zmBMxLs/IMG-4315.jpg",
            "imagesOnes": [
                {
                    "value": "https://i.ibb.co/8cfX07g/IMG-4352.jpg",
                    "key": 0
                },
                {
                    "value": "https://i.ibb.co/jWq8DsV/IMG-2292.jpg",
                    "key": 1
                },
                {
                    "value": "https://i.ibb.co/K6CxM2V/IMG-4314.jpg",
                    "key": 2
                }
            ],
        }, {
            "title": "Dije Oso Corazón Globo",
            "categoryOptions": "Mujer",
            "subcategoryOptions": "Dijes",
            "tripletecategoryOptions": "Destacado",
            "countInStock": 10,
            "description": "Dije elaborado en oro 18K con incrustaciones en circon natural.",
            "price": 3390000,
            "sizes": [
                {
                    "value": "Ninguno",
                    "key": 0
                }
            ],
            "colors": [
                {
                    "value": "Amarillo",
                    "key": 0
                },
                {
                    "value": "Rosado",
                    "key": 1
                },
                {
                    "value": "Blanco",
                    "key": 2
                },
                {
                    "value": "Azul Agua",
                    "key": 3
                },
                {
                    "value": "Rosa",
                    "key": 4
                },
                {
                    "value": "Fucsia",
                    "key": 5
                },
                {
                    "value": "Transparente",
                    "key": 6
                },
                {
                    "value": "Negro",
                    "key": 7
                },
                {
                    "value": "Lila",
                    "key": 8
                },
                {
                    "value": "Azul Oscuro",
                    "key": 9
                },
                {
                    "value": "Verde Manzana",
                    "key": 10
                },
                {
                    "value": "Verde Esmeralda",
                    "key": 11
                },
                {
                    "value": "Naranja",
                    "key": 12
                },
                {
                    "value": "Morado",
                    "key": 13
                },
                {
                    "value": "Multicolor",
                    "key": 14
                }
            ],
            "image": "https://i.ibb.co/fHtmgt1/IMG-3977.jpg",
            "imagesOnes": [
                {
                    "value": "https://i.ibb.co/rb5zqVp/IMG-8820.jpg",
                    "key": 0
                },
                {
                    "value": "https://i.ibb.co/k4ZJPfB/IMG-3200.jpg",
                    "key": 1
                },
                {
                    "value": "https://i.ibb.co/T0zt2p5/IMG-5158.jpg",
                    "key": 2
                }
            ],
        }, {
            "title": "Topos Corazon",
            "categoryOptions": "Mujer",
            "subcategoryOptions": "Aretes",
            "tripletecategoryOptions": "Topos",
            "countInStock": 10,
            "description": "Topos elaborados en oro 18K con incrustaciones en circon natural.",
            "price": 1690000,
            "sizes": [
                {
                    "value": "Ninguno",
                    "key": 0
                }
            ],
            "colors": [
                {
                    "value": "Amarillo",
                    "key": 0
                },
                {
                    "value": "Rosado",
                    "key": 1
                },
                {
                    "value": "Blanco",
                    "key": 2
                },
                {
                    "value": "Azul Agua",
                    "key": 3
                },
                {
                    "value": "Rosa",
                    "key": 4
                },
                {
                    "value": "Fucsia",
                    "key": 5
                },
                {
                    "value": "Transparente",
                    "key": 6
                },
                {
                    "value": "Negro",
                    "key": 7
                },
                {
                    "value": "Lila",
                    "key": 8
                },
                {
                    "value": "Azul Oscuro",
                    "key": 9
                },
                {
                    "value": "Verde Manzana",
                    "key": 10
                },
                {
                    "value": "Verde Esmeralda",
                    "key": 11
                },
                {
                    "value": "Naranja",
                    "key": 12
                },
                {
                    "value": "Morado",
                    "key": 13
                },
                {
                    "value": "Multicolor",
                    "key": 14
                }
            ],
            "image": "https://i.ibb.co/gRRK3TM/IMG-5604.jpg",
            "imagesOnes": [
                {
                    "value": "https://i.ibb.co/yYMnfwY/IMG-5644.jpg",
                    "key": 0
                },
                {
                    "value": "https://i.ibb.co/TkQsc7c/IMG-5645.jpg",
                    "key": 1
                },
                {
                    "value": "https://i.ibb.co/hdddyhc/IMG-5600.jpg",
                    "key": 2
                }
            ],
        },
    ],
    category: [
        {
            titlecategory: "Mujer",
        },
        {
            titlecategory: "Hombre",
        },
        {
            titlecategory: "Niños",
        },
        {
            titlecategory: "Destacado",
        },
        {
            titlecategory: "Nuevo",
        },
        {
            titlecategory: "A'Maria",
        },
    ],
    subcategory: [
        {
            titlesubcategory: "Cadenas",
        },
        {
            titlesubcategory: "Dijes",
        },
        {
            titlesubcategory: "Aretes",
        },
        {
            titlesubcategory: "Aros",
        },
        {
            titlesubcategory: "Anillos",
        },
        {
            titlesubcategory: "Pulseras",
        },
        {
            titlesubcategory: "Topilleras",
        },
        {
            titlesubcategory: "Niñas",
        },
        {
            titlesubcategory: "Niños",
        },
    ],
    tripletecategory: [
        {
            titletripletecategory: "Topos",
        },
        {
            titletripletecategory: "Candongas",
        },
        {
            titletripletecategory: "Cadenas",
        },
        {
            titletripletecategory: "Dijes",
        },
        {
            titletripletecategory: "Niñas",
        },
        {
            titletripletecategory: "Niños",
        },
        {
            titletripletecategory: "Destacado",
        },
        {
            titletripletecategory: "Nuevo",
        },
    ],
}

export default data;