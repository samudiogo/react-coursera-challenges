import { TravelItem } from "./TravelItem/TravelItem";
import "./Travel.css"
type TravelProps = {
  items: any[];
};
export const Travel = ({ items }: TravelProps) => {
  return (
    <div className="travel-wrapper">
      {items.map((item) => (
        <TravelItem {...item} />
      ))}
    </div>
  );
};
