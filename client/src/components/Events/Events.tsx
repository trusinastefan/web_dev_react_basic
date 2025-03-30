import React, { useEffect, useState } from "react";
import { PollingEvent } from "../../types";
import { Link } from "react-router";
import { getEvents } from "./EventsFunctions";

function useFetchData(): { data: PollingEvent[] | undefined; loading: boolean; error: Error | undefined } {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error>();
  useEffect(() => {
    async function actionGetEvents() {
      try {
        const data = await getEvents();
        if (data !== undefined) {
          setData(data.items);
        } else {
          throw new Error("Events not returned!");
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    actionGetEvents();
  }, []);
  return { data, loading, error };
}

const Events: React.FC = () => {
  const { data, loading, error } = useFetchData();
  if (loading) {
    return <div>Loading events...</div>;
  } else if (error !== undefined) {
    return <div>{error.message}</div>;
  } else if (data !== undefined) {
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
  } else {
    return <></>;
  }
};

export default Events;
