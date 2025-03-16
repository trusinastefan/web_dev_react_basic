import React from "react";
import EventDatesTable from "./EventDatesTable";
import CurrentWeather from "./CurrentWeather";
import data from "../data";
import { useParams } from "react-router-dom";

const EventDetail: React.FC = () => {
  const { id } = useParams();
  const filtered = data.filter((e) => e.id === id);
  const event = filtered.length > 0 ? filtered[0] : null;
  if (event === null) {
    return null;
  }
  return (
    <div id={id}>
      <h2>Event: {event?.title}</h2>
      <h3>Location: {event.location}</h3>
      <CurrentWeather city={event.location} />
      {event.dates.length === 0 && <p>Unfortunately, there are currently no dates available for this event.</p>}
      {event.dates.length > 0 && <EventDatesTable dates={event.dates} />}
    </div>
  );
};

export default EventDetail;
