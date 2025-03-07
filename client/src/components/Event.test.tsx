import { render, screen } from "@testing-library/react";
import Event from "./Event";
import { EventProps } from "../types";

const data: EventProps = {
  location: "Karlin",
  id: "rust-meetup",
  title: "Rust Meetup",
  dates: []
};

test("event name and location displayed", () => {
  render(<Event {...data} />);
  const title = screen.getByText("Event: Rust Meetup");
  expect(title).toBeInTheDocument();
  const location = screen.getByText("Location: Karlin");
  expect(location).toBeInTheDocument();
  const no_dates_msg = screen.getByText("Unfortunately, there are currently no dates available for this event.");
  expect(no_dates_msg).toBeInTheDocument();
});
