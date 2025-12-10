import type { Videojuego } from "../types/videojuego";
import "./GameCard.css";

type Props = {
  game: Videojuego;
};

function GameCard({ game }: Props) {
  return (
    <div className="game-card">
      <img src={game.imageURL} alt={game.title} className="game-image" />
      <div className="game-info">
        <strong>{game.title}</strong>
        <p>{game.genre}</p>
        <p>Rating: {game.rating}/10</p>
      </div>
    </div>
  );
}

export default GameCard;
