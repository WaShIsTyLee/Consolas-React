import "./ToggleCommentsButton.css";

type Props = {
  label?: string;     
  isVisible?: boolean; 
  onClick?: () => void; 
  onToggle?: () => void; 
  type?: "button" | "submit";
};

function ToggleCommentsButton({
  label,
  isVisible,
  onClick,
  onToggle,
  type = "button",
}: Props) {

  const handleClick = () => {
    if (onToggle) onToggle();
    if (onClick) onClick();
  };

  return (
    <button onClick={handleClick} type={type} className="toggle-comments-btn">
      {label ?? (isVisible ? "Ocultar comentarios" : "Mostrar comentarios")}
    </button>
  );
}

export default ToggleCommentsButton;
