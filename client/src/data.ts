import { PollingEvent } from "./types";

const data: PollingEvent[] = [
  {
    title: "Foo Bar",
    id: "foo-bar",
    location: "Nowhere",
    dates: [],
  },
  {
    title: "Rome Party",
    id: "rome-party",
    location: "Rome",
    dates: [],
  },
  {
    title: "Team Building",
    id: "team-building",
    location: "Praha",
    dates: [
      {
        timestamp: 1,
        records: [
          { name: "Honza", answer: "yes" },
          { name: "Jana", answer: "no" },
        ],
      },
      {
        timestamp: 14,
        records: [{ name: "Jana", answer: "no" }],
      },
    ],
  },
  {
    title: "Rust Meetup",
    id: "rust-meetup",
    location: "Jakarta",
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
  }
];

export default data;
