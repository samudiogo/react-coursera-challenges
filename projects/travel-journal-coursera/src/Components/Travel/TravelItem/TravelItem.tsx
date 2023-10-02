
import "./TravelItem.css";
type TravelItemProps = {
  title: string;
  location: string;
  googleMapsUrl: string;
  startDate: string;
  endDate: string;
  description: string;
  imageUrl: string;
};
export const TravelItem = ({
  title,
  location,
  googleMapsUrl,
  startDate,
  endDate,
  description,
  imageUrl,
}: TravelItemProps) => {
  return (
    <div className="travel-item">
      <div className="travel-item--img-cover">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="travel-item--body">
        <div className="travel-item-location-container">
            <img src="../svgs/location-pin.svg" alt="location pin icon" />
            <span>{location}</span>
            <a href={googleMapsUrl} target="new">View on Google Maps</a>
        </div>
        <h2>{title}</h2>
        <p className="--period">{startDate} - {endDate}</p>
        <p className="--description">{description}</p>
      </div>
    </div>
  );
};
