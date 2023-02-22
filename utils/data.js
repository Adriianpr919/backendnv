import bcrypt from 'bcryptjs';

// creo primero data.js para sembrar todos los datos en db.
// Y LUEGO ABRE NAVEGADOR ACTIVAR EL SERVIDOR CON LINK: http://localhost:5000/api/seed DEBE SER ORIGINAL.
const data = {
    users: [
        {
            username: "Admin",
            email: "admin123@gmail.com",
            password: bcrypt.hashSync("admin"),
            isAdmin: true
        },
        {
            username: "MarianaAdmin",
            email: "marianadmin123@gmail.com",
            password: bcrypt.hashSync("marianadmin"),
            isAdmin: true
        },
        {
            username: "nvstoreAdmin",
            email: "nvstoreadmin123@gmail.com",
            password: bcrypt.hashSync("nvstoreadmin"),
            isAdmin: true
        },
        {
            username: "bebito123",
            email: "bebito123@gmail.com",
            password: bcrypt.hashSync("bebito123"),
            isAdmin: false
        }
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
            title: "Dije Oso Ted",
            category: "Mujeres",
            subcategory: "Destacados",
            countInStock: 20,
            description: "Dije elaborado en oro 18K con incrustaciones en circón natural.",
            price: 3590000,
            star: "4★",
            sizes: [
                {
                    title: "Ninguno"
                }
            ],
            colors: [
                {
                    title: "Amarillo"
                },
                {
                    title: "Rosado"
                },
                {
                    title: "Blanco"
                },
                {
                    title: "Azul Agua"
                },
                {
                    title: "Rosa"
                },
                {
                    title: "Fucsia"
                },
                {
                    title: "Transparente"
                },
                {
                    title: "Negro"
                },
                {
                    title: "Lila"
                },
            ],
            image: "https://i.ibb.co/SXqYKtf/IMG-3975.jpg",
            imagesOnes: [
                {
                    title: "https://i.ibb.co/3sMjrbh/IMG-2792.jpg"
                },
                {
                    title: "https://i.ibb.co/2yJ7Ny1/IMG-2223.png"
                },
                {
                    title: "https://i.ibb.co/56Wcv6L/IMG-3738.jpg"
                },
                {
                    title: "https://i.ibb.co/7gPjz6K/IMG-3976.jpg"
                },
                {
                    title: "https://i.ibb.co/q5tbT1Y/IMG-6567.jpg"
                },
                {
                    title: "https://i.ibb.co/MfP3DFf/IMG-4313.jpg"
                },
                {
                    title: "https://i.ibb.co/dcbbvNq/IMG-7996.jpg"
                },
            ],
        },
    ],

    category: [
        {
            value: "Hombres",
            label: "Hombres"
        },
        {
            value: "Mujeres",
            label: "Mujeres"
        },
        {
            value: "Niños",
            label: "Niños"
        },
        {
            value: "Niñas",
            label: "Niñas"
        },
    ],

    subcategory: [
        {
            checked: false,
            label: 'Nuevos'
        },
        {
            checked: false,
            label: 'Destacados'
        },
    ],

    rating: [
        {
            value: '1',
            label: "1★"
        },
        {
            value: '2',
            label: "2★"
        },
        {
            value: '3',
            label: "3★"
        },
        {
            value: '4',
            label: "4★"
        },
        {
            value: '5',
            label: "5★"
        }
    ]
}

export default data;