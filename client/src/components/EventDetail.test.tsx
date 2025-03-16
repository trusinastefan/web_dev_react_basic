import { render, screen } from "@testing-library/react";
import EventDetail from "./EventDetail";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe ("EventDetails", () => {
  test("event name and location displayed", () => {
    render (
      <MemoryRouter initialEntries={["events/rust-meetup"]}>
        <Routes>
          <Route path="events/:id" element={<EventDetail />} />
        </Routes>
      </MemoryRouter>
    );
    const title = screen.getByText("Event: Rust Meetup");
    expect(title).toBeInTheDocument();
    const location = screen.getByText("Location: Jakarta");
    expect(location).toBeInTheDocument();
  });
  test("event name and location displayed", () => {
    render (
      <MemoryRouter initialEntries={["events/rome-party"]}>
        <Routes>
          <Route path="events/:id" element={<EventDetail />} />
        </Routes>
      </MemoryRouter>
    );
    const title = screen.getByText("Event: Rome Party");
    expect(title).toBeInTheDocument();
    const location = screen.getByText("Location: Rome");
    expect(location).toBeInTheDocument();
    const no_dates_msg = screen.getByText("Unfortunately, there are currently no dates available for this event.");
    expect(no_dates_msg).toBeInTheDocument();
  });
});
