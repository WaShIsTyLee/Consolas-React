import type { Consola } from "../types/consola";
import type { Usuario } from "../types/usuario";
import LatestConsolesCard from "./LatestConsolesCard";
import "./SideBar.css";

type Props = {
  consolas: Consola[];
  users: Usuario[];
  onFilter: (tag: string) => void;
};

function Sidebar({ consolas, users, onFilter }: Props) {
  const tags = Array.from(new Set(consolas.map((c) => c.tag)));

  const latestConsolas = [...consolas]
    .sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime())
    .slice(0, 3);

  const randomUser = users[Math.floor(Math.random() * users.length)];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <span className="sidebar-icon">🎮</span>
        <span className="sidebar-name">Mis Consolas</span>
      </div>

      <div className="sidebar-user">
        <img
          src={randomUser.imagenUrl}
          alt={randomUser.nombre}
          className="sidebar-user-img"
        />
        <span className="sidebar-user-name">{randomUser.nombre}</span>
      </div>

      <div className="sidebar-latest">
        <h4 className="sidebar-title">Últimas Consolas</h4>
        {latestConsolas.map((c) => (
          <LatestConsolesCard key={c.id} consola={c} />
        ))}
      </div>

      <hr className="sidebar-divider" />

      <div className="sidebar-filters">
        <h4>Filtrar por Tag:</h4>
        <ul>
          {tags.map((tag) => (
            <li key={tag}>
              <button onClick={() => onFilter(tag)}>{tag}</button>
            </li>
          ))}
          <li>
            <button onClick={() => onFilter("")}>Todos</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
