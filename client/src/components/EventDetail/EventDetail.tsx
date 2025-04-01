import React, { useEffect, useState } from "react";
import EventDatesTable from "../EventDatesTable/EventDatesTable";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import { useParams } from "react-router";
import { getEvent } from "./EventDetailFunctions";
import { PollingEvent } from "../../types";

function useFetchData(id: string | undefined): { data: PollingEvent | undefined; loading: boolean; error: Error | undefined } {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error>();
  useEffect(() => {
    async function actionGetEvents() {
      try {
        const data = await getEvent(id);
        if (data !== undefined) {
          setData(data);
        } else {
          throw new Error("Event not returned!");
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

const EventDetail: React.FC = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetchData(id);
  if (loading) {
    return <div>Loading events...</div>;
  } else if (error !== undefined) {
    return <div>{error.message}</div>;
  } else if (data !== undefined) {
    return (
      <div id={id}>
        <h2>Event: {data.title}</h2>
        <h3>Location: {data.location}</h3>
        <CurrentWeather city={data.location} />
        {data.dates.length === 0 && <p>Unfortunately, there are currently no dates available for this event.</p>}
        {data.dates.length > 0 && <EventDatesTable dates={data.dates} />}
      </div>
    );
  } else {
    return <></>;
  }
};

export default EventDetail;
