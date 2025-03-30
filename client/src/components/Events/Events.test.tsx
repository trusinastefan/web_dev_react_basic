import { render, screen, waitFor } from "@testing-library/react";
import Events from "./Events";
import { getEvents } from "./EventsFunctions";
import test_data from "../../test_data";
import { MemoryRouter } from "react-router";

jest.mock("./EventsFunctions", () => ({
  getEvents: jest.fn(),
}));

describe ("Events", () => {
  test("events displayed correctly", async () => {
    (getEvents as jest.Mock).mockResolvedValue(test_data);
    render (
      <MemoryRouter>
        <Events />
      </MemoryRouter>
    );
    await waitFor(() => {
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
});
