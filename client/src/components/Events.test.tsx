import { render, screen } from "@testing-library/react";
import Events from "./Events";

describe ("Events", () => {
  test("events displayed correctly", () => {
    render (
      <Events />
    );
    const item_1 = screen.getByText("Foo Bar");
    expect(item_1).toBeInTheDocument();
    const item_2 = screen.getByText("Rome Party");
    expect(item_2).toBeInTheDocument();
    const item_3 = screen.getByText("Team Building");
    expect(item_3).toBeInTheDocument();
    const item_4 = screen.getByText("Rust Meetup");
    expect(item_4).toBeInTheDocument();
  });
});
