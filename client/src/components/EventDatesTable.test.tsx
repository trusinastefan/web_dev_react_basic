import { render } from "@testing-library/react";
import EventDatesTable from "./EventDatesTable";
import { DateRecords } from "../types";

const data: DateRecords = {
  dates: [
    {
      timestamp: 14,
      records: [
        {
          name: "Jozko",
          answer: "yes"
        },
        {
          name: "Ferko",
          answer: "no"
        },
        {
          name: "Drahomira",
          answer: "if-needed"
        }
      ]
    },
    {
      timestamp: 15,
      records: [
        {
          name: "Timotej",
          answer: "yes"
        },
        {
          name: "Slavomir",
          answer: "no"
        },
        {
          name: "Vitazoslav",
          answer: "if-needed"
        }
      ]
    },
    {
      timestamp: 4,
      records: [
        {
          name: "Juraj",
          answer: "yes"
        },
        {
          name: "Jozko",
          answer: "no"
        },
        {
          name: "Ferko",
          answer: "if-needed"
        }
      ]
    },
    {
      timestamp: 5,
      records: [
        {
          name: "Svetlana",
          answer: "yes"
        },
        {
          name: "Ferko",
          answer: "no"
        },
        {
          name: "Jozko",
          answer: "if-needed"
        }
      ]
    }
  ]
};

describe ("EventDatesTable", () => {
  test("correct number of table rows", () => {
    const { container } = render(<EventDatesTable {...data} />);
    const body_rows = container.querySelectorAll("tbody tr");
    expect(body_rows.length).toBe(8);
  });
});
