import { EventProps } from "./types";

const data: EventProps = {
  location: "Karlin",
  id: "rust-meetup",
  title: "Rust Meetup",
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

export default data;
