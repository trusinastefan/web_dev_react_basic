import React from "react";
import { EventProps } from "../types";
import EventDatesTable from "./EventDatesTable";

const Event: React.FC<EventProps> = ({ location = "unknown", id, title, dates }) => {
  return (
    <div id={id}>
      <h2>{`Event: ${title}`}</h2>
      <h3>{`Location: ${location}`}</h3>
      {dates.length === 0
        ? (
            <p>Unfortunately, there are currently no dates available for this event.</p>
          )
        : (
            <EventDatesTable dates={dates} />
          )}
    </div>
  );
};

export default Event;
