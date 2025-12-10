import type { Consola } from "../types/consola";
import ConsolaCard from "./ConsolaCard";
import "./CommentList.css";

type Props = {
  consolas: Consola[];
  limit?: number; 
};

function ConsolaList({ consolas, limit }: Props) {
  const consolasAMostrar = limit ? consolas.slice(0, limit) : consolas;

  return (
    <div className="consola-list">
      {consolasAMostrar.map((c) => (
        <ConsolaCard key={c.id} consola={c} />
      ))}
    </div>
  );
}

export default ConsolaList;
