import type { Consola } from "../types/consola";
import type { Usuario } from "../types/usuario"; // Asegúrate de tener este tipo

export const USERS: Usuario[] = [
  { id: "u1", nombre: "ElGamerPro", imagenUrl: "https://picsum.photos/150/150?random=1" },
  { id: "u2", nombre: "NintenFan", imagenUrl: "https://picsum.photos/150/150?random=2" },
  { id: "u3", nombre: "RetroVibes", imagenUrl: "https://picsum.photos/150/150?random=3" },
  { id: "u4", nombre: "SonyAddict", imagenUrl: "https://picsum.photos/150/150?random=4" },
  { id: "u5", nombre: "XbroPlayer", imagenUrl: "https://picsum.photos/150/150?random=5" },
];

export const getUser = (id: string) => USERS.find(u => u.id === id) || USERS[0];

// URL DE IMAGEN SOLICITADA PARA TODAS LAS CONSOLAS
const CONSOLE_IMAGE_URL = "https://picsum.photos/800/400?random=45"; 


export const datos: { consolas: Consola[] } =
{
  "consolas": [
    {
      "id": "ps5",
      "name": "PlayStation 5",
      "releaseDate": "2020-11-12",
      "color": "#0b63ff",
      "tag": "Última generación",
      "imageURL": CONSOLE_IMAGE_URL, // MODIFICADO
      "games": [
        { "id": "g1", "title": "Spider-Man 2", "genre": "Acción", "rating": 9, "imageURL": "https://picsum.photos/800/400?random=21" },
        { "id": "g2", "title": "Horizon Forbidden West", "genre": "Aventura", "rating": 9, "imageURL": "https://picsum.photos/800/400?random=22" }
      ],
      "comments": [
        { "id": "c1", "text": "La PS5 tiene tiempos de carga increíbles.", "autor": getUser("u4"), "fecha": "2024-06-05" },
        { "id": "c2", "text": "Gran catálogo exclusivo hasta ahora.", "autor": getUser("u1"), "fecha": "2024-06-01" }
      ]
    },
    {
      "id": "xbox_series_x",
      "name": "Xbox Series X",
      "releaseDate": "2020-11-10",
      "color": "#107c10",
      "tag": "Última generación",
      "imageURL": CONSOLE_IMAGE_URL, // MODIFICADO
      "games": [
        { "id": "g3", "title": "Forza Horizon 5", "genre": "Carreras", "rating": 9, "imageURL": "https://picsum.photos/800/400?random=23" },
        { "id": "g4", "title": "Halo Infinite", "genre": "Shooter", "rating": 8, "imageURL": "https://picsum.photos/800/400?random=24" }
      ],
      "comments": [
        { "id": "c1", "text": "La consola más potente del mercado.", "autor": getUser("u5"), "fecha": "2024-05-28" },
        { "id": "c2", "text": "Game Pass es una locura.", "autor": getUser("u1"), "fecha": "2024-06-03" }
      ]
    },
    {
      "id": "switch",
      "name": "Nintendo Switch",
      "releaseDate": "2017-03-03",
      "color": "#e60012",
      "tag": "Última generación",
      "imageURL": CONSOLE_IMAGE_URL, // MODIFICADO
      "games": [
        { "id": "g5", "title": "Zelda: Breath of the Wild", "genre": "Aventura", "rating": 10, "imageURL": "https://picsum.photos/800/400?random=25" },
        { "id": "g6", "title": "Super Mario Odyssey", "genre": "Plataformas", "rating": 10, "imageURL": "https://picsum.photos/800/400?random=26" }
      ],
      "comments": [
        { "id": "c1", "text": "La consola más versátil de Nintendo.", "autor": getUser("u2"), "fecha": "2024-05-15" },
        { "id": "c2", "text": "Perfecta para jugar en cualquier lugar.", "autor": getUser("u3"), "fecha": "2024-06-01" }
      ]
    },
    {
      "id": "ps4",
      "name": "PlayStation 4",
      "releaseDate": "2013-11-15",
      "color": "#003b8e",
      "tag": "Retro",
      "imageURL": CONSOLE_IMAGE_URL, // MODIFICADO
      "games": [
        { "id": "g7", "title": "God of War", "genre": "Acción/Aventura", "rating": 10, "imageURL": "https://picsum.photos/800/400?random=27" },
        { "id": "g8", "title": "The Last of Us Part II", "genre": "Acción/Survival", "rating": 9, "imageURL": "https://picsum.photos/800/400?random=28" }
      ],
      "comments": [
        { "id": "c1", "text": "Una de las consolas más vendidas de la historia.", "autor": getUser("u4"), "fecha": "2024-04-10" },
        { "id": "c2", "text": "Sus exclusivos marcaron una generación.", "autor": getUser("u1"), "fecha": "2024-05-02" }
      ]
    },
    {
      "id": "xbox_one",
      "name": "Xbox One",
      "releaseDate": "2013-11-22",
      "color": "#0e5a0e",
      "tag": "Retro",
      "imageURL": CONSOLE_IMAGE_URL, // MODIFICADO
      "games": [
        { "id": "g9", "title": "Gears 5", "genre": "Shooter", "rating": 8, "imageURL": "https://picsum.photos/800/400?random=29" },
        { "id": "g10", "title": "Sunset Overdrive", "genre": "Acción", "rating": 8, "imageURL": "https://picsum.photos/800/400?random=30" }
      ],
      "comments": [
        { "id": "c1", "text": "Mejoró mucho con el paso de los años.", "autor": getUser("u5"), "fecha": "2024-03-20" },
        { "id": "c2", "text": "Gran centro multimedia.", "autor": getUser("u3"), "fecha": "2024-04-05" }
      ]
    },
    {
      "id": "wii_u",
      "name": "Wii U",
      "releaseDate": "2012-11-18",
      "color": "#9400d3",
      "tag": "Retro",
      "imageURL": CONSOLE_IMAGE_URL, // MODIFICADO
      "games": [
        { "id": "g11", "title": "Mario Kart 8", "genre": "Carreras", "rating": 9, "imageURL": "https://picsum.photos/800/400?random=31" },
        { "id": "g12", "title": "Super Smash Bros. U", "genre": "Lucha", "rating": 9, "imageURL": "https://picsum.photos/800/400?random=32" }
      ],
      "comments": [
        { "id": "c1", "text": "Adelantada a su tiempo.", "autor": getUser("u2"), "fecha": "2024-05-11" },
        { "id": "c2", "text": "Mal marketing, pero grandes juegos.", "autor": getUser("u1"), "fecha": "2024-05-18" }
      ]
    },
    {
      "id": "ps3",
      "name": "PlayStation 3",
      "releaseDate": "2006-11-17",
      "color": "#111111",
      "tag": "Retro",
      "imageURL": CONSOLE_IMAGE_URL, // MODIFICADO
      "games": [
        { "id": "g13", "title": "The Last of Us", "genre": "Acción/Survival", "rating": 10, "imageURL": "https://picsum.photos/800/400?random=33" },
        { "id": "g14", "title": "Grand Theft Auto V", "genre": "Acción", "rating": 9, "imageURL": "https://picsum.photos/800/400?random=34" }
      ],
      "comments": [
        { "id": "c1", "text": "Difícil inicio pero gran final de generación.", "autor": getUser("u4"), "fecha": "2024-02-15" },
        { "id": "c2", "text": "Blu-ray fue un gran salto.", "autor": getUser("u3"), "fecha": "2024-03-01" }
      ]
    },
    {
      "id": "xbox_360",
      "name": "Xbox 360",
      "releaseDate": "2005-11-22",
      "color": "#a4c639",
      "tag": "Retro",
      "imageURL": CONSOLE_IMAGE_URL, // MODIFICADO
      "games": [
        { "id": "g15", "title": "Red Dead Redemption", "genre": "Aventura", "rating": 9, "imageURL": "https://picsum.photos/800/400?random=35" },
        { "id": "g16", "title": "Mass Effect 2", "genre": "RPG/Acción", "rating": 10, "imageURL": "https://picsum.photos/800/400?random=36" }
      ],
      "comments": [
        { "id": "c1", "text": "La consola que ganó la generación para muchos.", "autor": getUser("u5"), "fecha": "2024-01-22" },
        { "id": "c2", "text": "Xbox Live marcó un antes y un después.", "autor": getUser("u1"), "fecha": "2024-01-29" }
      ]
    },
    {
      "id": "wii",
      "name": "Wii",
      "releaseDate": "2006-11-19",
      "color": "#ffffff",
      "tag": "Retro",
      "imageURL": CONSOLE_IMAGE_URL, // MODIFICADO
      "games": [
        { "id": "g17", "title": "Wii Sports", "genre": "Deportes", "rating": 8, "imageURL": "https://picsum.photos/800/400?random=37" },
        { "id": "g18", "title": "Super Mario Galaxy", "genre": "Plataformas", "rating": 10, "imageURL": "https://picsum.photos/800/400?random=38" }
      ],
      "comments": [
        { "id": "c1", "text": "La consola familiar por excelencia.", "autor": getUser("u2"), "fecha": "2024-03-05" },
        { "id": "c2", "text": "Revolucionó el control por movimiento.", "autor": getUser("u3"), "fecha": "2024-03-12" }
      ]
    },
    {
      "id": "ps2",
      "name": "PlayStation 2",
      "releaseDate": "2000-10-26",
      "color": "#333333",
      "tag": "Retro",
      "imageURL": CONSOLE_IMAGE_URL, // MODIFICADO
      "games": [
        { "id": "g19", "title": "GTA: San Andreas", "genre": "Acción", "rating": 10, "imageURL": "https://picsum.photos/800/400?random=39" },
        { "id": "g20", "title": "Shadow of the Colossus", "genre": "Aventura", "rating": 10, "imageURL": "https://picsum.photos/800/400?random=40" }
      ],
      "comments": [
        { "id": "c1", "text": "La consola más vendida de la historia.", "autor": getUser("u4"), "fecha": "2023-12-01" },
        { "id": "c2", "text": "Catálogo legendario.", "autor": getUser("u1"), "fecha": "2023-12-10" }
      ]
    },
    {
      "id": "xbox_original",
      "name": "Xbox (Original)",
      "releaseDate": "2001-11-15",
      "color": "#008800",
      "tag": "Retro",
      "imageURL": CONSOLE_IMAGE_URL, // MODIFICADO
      "games": [
        { "id": "g21", "title": "Halo: Combat Evolved", "genre": "Shooter", "rating": 10, "imageURL": "https://picsum.photos/800/400?random=41" },
        { "id": "g22", "title": "KOTOR", "genre": "RPG", "rating": 10, "imageURL": "https://picsum.photos/800/400?random=42" }
      ],
      "comments": [
        { "id": "c1", "text": "Halo puso a Xbox en el mapa.", "autor": getUser("u5"), "fecha": "2023-11-15" },
        { "id": "c2", "text": "Control muy cómodo.", "autor": getUser("u1"), "fecha": "2023-11-20" }
      ]
    },
    {
      "id": "gamecube",
      "name": "Nintendo GameCube",
      "releaseDate": "2001-11-18",
      "color": "#6a0dad",
      "tag": "Retro",
      "imageURL": CONSOLE_IMAGE_URL, // MODIFICADO
      "games": [
        { "id": "g23", "title": "Wind Waker", "genre": "Aventura", "rating": 9, "imageURL": "https://picsum.photos/800/400?random=43" },
        { "id": "g24", "title": "Metroid Prime", "genre": "FPS/Aventura", "rating": 10, "imageURL": "https://picsum.photos/800/400?random=44" }
      ],
      "comments": [
        { "id": "c1", "text": "Subestimadísima en su día.", "autor": getUser("u2"), "fecha": "2023-10-01" },
        { "id": "c2", "text": "Catálogo muy cuidado.", "autor": getUser("u3"), "fecha": "2023-10-08" }
      ]
    },
    {
      "id": "dreamcast",
      "name": "Dreamcast",
      "releaseDate": "1999-09-09",
      "color": "#f0f8ff",
      "tag": "Retro",
      "imageURL": CONSOLE_IMAGE_URL, // MODIFICADO
      "games": [
        { "id": "g25", "title": "Shenmue", "genre": "Aventura", "rating": 9, "imageURL": "https://picsum.photos/800/400?random=45" },
        { "id": "g26", "title": "Soulcalibur", "genre": "Lucha", "rating": 9, "imageURL": "https://picsum.photos/800/400?random=46" }
      ],
      "comments": [
        { "id": "c1", "text": "Una adelantada a su época.", "autor": getUser("u5"), "fecha": "2023-09-09" },
        { "id": "c2", "text": "Falló en ventas pero dejó huella.", "autor": getUser("u1"), "fecha": "2023-09-15" }
      ]
    },
    {
      "id": "n64",
      "name": "Nintendo 64",
      "releaseDate": "1996-09-29",
      "color": "#777777",
      "tag": "Clásica",
      "imageURL": CONSOLE_IMAGE_URL, // MODIFICADO
      "games": [
        { "id": "g27", "title": "Ocarina of Time", "genre": "Aventura", "rating": 10, "imageURL": "https://picsum.photos/800/400?random=47" },
        { "id": "g28", "title": "Super Mario 64", "genre": "Plataformas", "rating": 10, "imageURL": "https://picsum.photos/800/400?random=48" }
      ],
      "comments": [
        { "id": "c1", "text": "Control icónico pero peculiar.", "autor": getUser("u2"), "fecha": "2023-08-01" },
        { "id": "c2", "text": "Grandes revoluciones en 3D.", "autor": getUser("u3"), "fecha": "2023-08-08" }
      ]
    },
    {
      "id": "ps1",
      "name": "PlayStation (PSX)",
      "releaseDate": "1995-09-09",
      "color": "#bdbdbd",
      "tag": "Clásica",
      "imageURL": CONSOLE_IMAGE_URL, // MODIFICADO
      "games": [
        { "id": "g29", "title": "Final Fantasy VII", "genre": "RPG", "rating": 10, "imageURL": "https://picsum.photos/800/400?random=49" },
        { "id": "g30", "title": "Metal Gear Solid", "genre": "Sigilo", "rating": 10, "imageURL": "https://picsum.photos/800/400?random=50" }
      ],
      "comments": [
        { "id": "c1", "text": "La revolución del 3D.", "autor": getUser("u4"), "fecha": "2023-07-25" },
        { "id": "c2", "text": "Cambió la industria.", "autor": getUser("u1"), "fecha": "2023-07-30" }
      ]
    },
    {
      "id": "snes",
      "name": "Super Nintendo",
      "releaseDate": "1991-08-23",
      "color": "#c0c0c0",
      "tag": "Clásica",
      "imageURL": CONSOLE_IMAGE_URL, // MODIFICADO
      "games": [
        { "id": "g31", "title": "Chrono Trigger", "genre": "RPG", "rating": 10, "imageURL": "https://picsum.photos/800/400?random=51" },
        { "id": "g32", "title": "Super Metroid", "genre": "Aventura", "rating": 10, "imageURL": "https://picsum.photos/800/400?random=52" }
      ],
      "comments": [
        { "id": "c1", "text": "Una consola eterna.", "autor": getUser("u2"), "fecha": "2023-06-15" },
        { "id": "c2", "text": "Su catálogo es pura historia.", "autor": getUser("u3"), "fecha": "2023-06-20" }
      ]
    },
    {
      "id": "genesis",
      "name": "Sega Genesis/Mega Drive",
      "releaseDate": "1989-08-14",
      "color": "#000000",
      "tag": "Clásica",
      "imageURL": CONSOLE_IMAGE_URL, // MODIFICADO
      "games": [
        { "id": "g33", "title": "Sonic 2", "genre": "Plataformas", "rating": 9, "imageURL": "https://picsum.photos/800/400?random=53" },
        { "id": "g34", "title": "Streets of Rage 2", "genre": "Beat 'em up", "rating": 9, "imageURL": "https://picsum.photos/800/400?random=54" }
      ],
      "comments": [
        { "id": "c1", "text": "La consola de la velocidad.", "autor": getUser("u5"), "fecha": "2023-05-05" },
        { "id": "c2", "text": "Sonic en su mejor momento.", "autor": getUser("u1"), "fecha": "2023-05-10" }
      ]
    },
    {
      "id": "nes",
      "name": "Nintendo Entertainment System (NES)",
      "releaseDate": "1985-10-18",
      "color": "#808080",
      "tag": "Clásica",
      "imageURL": CONSOLE_IMAGE_URL, // MODIFICADO
      "games": [
        { "id": "g35", "title": "Super Mario Bros. 3", "genre": "Plataformas", "rating": 10, "imageURL": "https://picsum.photos/800/400?random=55" },
        { "id": "g36", "title": "The Legend of Zelda", "genre": "Aventura", "rating": 9, "imageURL": "https://picsum.photos/800/400?random=56" }
      ],
      "comments": [
        { "id": "c1", "text": "La consola que salvó la industria.", "autor": getUser("u2"), "fecha": "2023-04-01" },
        { "id": "c2", "text": "Clásicos eternos.", "autor": getUser("u3"), "fecha": "2023-04-05" }
      ]
    },
    {
      "id": "atari_2600",
      "name": "Atari 2600",
      "releaseDate": "1977-09-11",
      "color": "#964b00",
      "tag": "Clásica",
      "imageURL": CONSOLE_IMAGE_URL, // MODIFICADO
      "games": [
        { "id": "g37", "title": "Pitfall!", "genre": "Plataformas", "rating": 7, "imageURL": "https://picsum.photos/800/400?random=57" },
        { "id": "g38", "title": "Missile Command", "genre": "Shooter", "rating": 8, "imageURL": "https://picsum.photos/800/400?random=58" }
      ],
      "comments": [
        { "id": "c1", "text": "La abuela de las consolas.", "autor": getUser("u5"), "fecha": "2023-03-20" },
        { "id": "c2", "text": "Un clásico histórico.", "autor": getUser("u4"), "fecha": "2023-03-25" }
      ]
    },
    {
      "id": "sega_saturn",
      "name": "Sega Saturn",
      "releaseDate": "1995-05-11",
      "color": "#444444",
      "tag": "Clásica",
      "imageURL": CONSOLE_IMAGE_URL, // MODIFICADO
      "games": [
        { "id": "g39", "title": "Panzer Dragoon Saga", "genre": "RPG", "rating": 10, "imageURL": "https://picsum.photos/800/400?random=59" },
        { "id": "g40", "title": "Nights into Dreams", "genre": "Acción", "rating": 9, "imageURL": "https://picsum.photos/800/400?random=60" }
      ],
      "comments": [
        { "id": "c1", "text": "Muy querida por fans de SEGA.", "autor": getUser("u3"), "fecha": "2023-02-10" },
        { "id": "c2", "text": "Catálogo muy único.", "autor": getUser("u1"), "fecha": "2023-02-15" }
      ]
    }
  ]
}