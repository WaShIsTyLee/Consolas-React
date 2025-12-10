import React from "react";
import type { Consola } from "../types/consola";
import "./BaseConsolaCard.css";

type Props = {
  consola: Consola;
  children?: React.ReactNode; 
  showImage?: boolean;        
  imageClassName?: string;    
};

function BaseConsolaCard({ consola, children, showImage = true, imageClassName }: Props) {
  return (
    <div className="base-consola-card" style={{ borderColor: consola.color }}>
      {showImage && (
        <img
          src={consola.imageURL}
          alt={consola.name}
          className={imageClassName || "base-consola-image"}
        />
      )}
      <h3>{consola.name}</h3>
      <p><strong>Tag:</strong> {consola.tag}</p>
      {children && <div className="base-consola-children">{children}</div>}
    </div>
  );
}

export default BaseConsolaCard;
