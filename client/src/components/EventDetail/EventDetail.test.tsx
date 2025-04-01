import { render, screen, waitFor } from "@testing-library/react";
import EventDetail from "./EventDetail";
import { MemoryRouter, Route, Routes } from "react-router";
import { getEvent } from "./EventDetailFunctions";
import test_data from "../../test_data";

jest.mock("./EventDetailFunctions", () => ({
  getEvent: jest.fn(),
}));

describe ("EventDetails", () => {
  test("event name and location displayed", async () => {
    (getEvent as jest.Mock).mockResolvedValue(test_data.items[3]);
    render (
      <MemoryRouter initialEntries={["/events/rust-meetup"]}>
        <Routes>
          <Route path="/events/:id" element={<EventDetail />} />
        </Routes>
      </MemoryRouter>
    );
    await waitFor(() => {
      const title = screen.getByText("Event: Rust Meetup");
      expect(title).toBeInTheDocument();
      const location = screen.getByText("Location: Jakarta");
      expect(location).toBeInTheDocument();
    });
  });
  test("event name and location displayed", async () => {
    (getEvent as jest.Mock).mockResolvedValue(test_data.items[1]);
    render (
      <MemoryRouter initialEntries={["/events/rome-party"]}>
        <Routes>
          <Route path="/events/:id" element={<EventDetail />} />
        </Routes>
      </MemoryRouter>
    );
    await waitFor(() => {
      const title = screen.getByText("Event: Rome Party");
      expect(title).toBeInTheDocument();
      const location = screen.getByText("Location: Rome");
      expect(location).toBeInTheDocument();
      const no_dates_msg = screen.getByText("Unfortunately, there are currently no dates available for this event.");
      expect(no_dates_msg).toBeInTheDocument();
    });
  });
});
