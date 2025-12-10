import type { Videojuego } from "./videojuego";
import type { Comentario } from "./comentario";

export type Consola = {
    id: string;
    name: string;
    color: string;
    tag: string;
    imageURL: string;
    releaseDate: string;
    games: Videojuego[];
    comments?: Comentario[];
};
