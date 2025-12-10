import type { Usuario } from "./usuario";

export type Comentario = {
  id: string;
  text: string;
  autor: Usuario;
  fecha: string;
  likes?: number; // opcional al principio
};
