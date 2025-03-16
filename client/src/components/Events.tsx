import data from "../data";
import React from "react";
import { PollingEvent } from "../types";
import { Link } from "react-router-dom";

const Events: React.FC = () => {
  return (
    <div>
      {
        data.map((event: PollingEvent) => (
          <div key={event.id}>
            <Link key={event.id} to={`/events/${event.id}`}>{event.title}</Link>
          </div>
        ))
      }
    </div>
  );
};

export default Events;
