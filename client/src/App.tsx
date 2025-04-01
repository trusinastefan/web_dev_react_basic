import React from "react";
import { BrowserRouter } from "react-router";
import { Link, Route, Routes } from "react-router-dom";
import Events from "./components/Events/Events";
import EventDetail from "./components/EventDetail/EventDetail";
import NewEventForm from "./components/NewEventForm/NewEventForm";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/events" style={{ marginRight: "10px" }}>Events</Link>
        <Link to="/events/new">New Event</Link>
      </nav>
      <Routes>
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetail />} />
        <Route path="/events/new" element={<NewEventForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
