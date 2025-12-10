import { useState } from "react";
import type { FormEvent } from "react";
import type { Comentario } from "../types/comentario";
import type { Usuario } from "../types/usuario";
import "./AddCommentsForm.css";
import ToggleCommentsButton from "./ToggleCommentsButton";
type Props = {
  onAddComment: (comment: Comentario) => void;
};

function AddCommentsForm({ onAddComment }: Props) {
  const [text, setText] = useState("");

  const defaultUser: Usuario = { id: "u0", nombre: "Anonimo", imagenUrl: "" };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    onAddComment({
      id: crypto.randomUUID(),
      text,
      autor: defaultUser,
      fecha: new Date().toISOString().split("T")[0],
      likes: 0,
    });

    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-comment-form">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escribe un comentario..."
      />
      <ToggleCommentsButton label="Añadir comentario" type="submit" />
    </form>
  );
}

export default AddCommentsForm;
