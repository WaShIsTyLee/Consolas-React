import { useState } from "react";
import type { Consola } from "../types/consola";
import type { Comentario } from "../types/comentario";
import type { Usuario } from "../types/usuario";
import GameCard from "./GameCard";
import CommentsList from "./CommentsList";
import AddCommentForm from "./AddCommentsForm";
import ToggleCommentsButton from "./ToggleCommentsButton";
import BaseConsolaCard from "./BaseConsolaCard";
import "./ConsolaCard.css";

type Props = { consola: Consola };

function ConsolaCard({ consola }: Props) {
  const [comments, setComments] = useState<Comentario[]>(consola.comments || []);
  const [showComments, setShowComments] = useState(true);

  const defaultUser: Usuario = { id: "u0", nombre: "Anonimo", imagenUrl: "" };

  const handleAddComment = (text: string) => {
    const newComment: Comentario = {
      id: crypto.randomUUID(),
      text,
      autor: defaultUser,
      fecha: new Date().toISOString().split("T")[0],
      likes: 0,
    };
    setComments([...comments, newComment]);
  };

  return (
    <BaseConsolaCard consola={consola} imageClassName="consola-image">
      <h4>Juegos:</h4>
      <div className="game-list">
        {consola.games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>

      <ToggleCommentsButton
        isVisible={showComments}
        onToggle={() => setShowComments((prev) => !prev)}
      />

      {showComments && (
        <>
          <CommentsList comments={comments} />
          <AddCommentForm onAddComment={(comment) => handleAddComment(comment.text)} />
        </>
      )}
    </BaseConsolaCard>
  );
}

export default ConsolaCard;
