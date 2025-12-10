import type { Consola } from "../types/consola";
import BaseConsolaCard from "./BaseConsolaCard";
import "./LatestConsolesCard.css";

type Props = { consola: Consola };

function LatestConsolesCard({ consola }: Props) {
  return (
    <BaseConsolaCard
      consola={consola}
      showImage={true}
      imageClassName="latest-console-image"
    >
      <h4>{consola.name}</h4>
      <p className="latest-console-tag">{consola.tag}</p>
    </BaseConsolaCard>
  );
}

export default LatestConsolesCard;
