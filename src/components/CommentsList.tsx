import type { Comentario } from "../types/comentario";
import "./CommentList.css";

type Props = {
  comments: Comentario[];
};

function CommentsList({ comments }: Props) {
  return (
    <ul>
      {comments.map((c) => (
        <li key={c.id} style={{ marginBottom: "10px" }}>
          <strong>{c.autor.nombre}</strong> ({c.fecha}): {c.text}
        
        </li>
      ))}
    </ul>
  );
}

export default CommentsList;
