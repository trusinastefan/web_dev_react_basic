import React from "react";
import { EventTableProps } from "../types";

const EventDatesTable: React.FC<EventTableProps> = ({ dates }) => {
  dates.sort((a, b) => a.timestamp - b.timestamp);
  const timestamps = dates.map((date) => date.timestamp);
  const users = new Map();
  dates.forEach((date) => {
    date.records.forEach((record) => {
      if (!(users.has(record.name))) {
        users.set(record.name, new Map());
        timestamps.forEach((t) => {
          users.get(record.name).set(t, "");
        });
      }
      users.get(record.name).set(date.timestamp, record.answer);
    });
  });
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th key="persons">Persons</th>
            {timestamps.map((t, i) => (<th key={i}>{t}</th>))}
          </tr>
        </thead>
        <tbody>
          {Array.from(users.keys()).map((name) => (
            <tr key={name}>
              <td>{name}</td>
              {timestamps.map((t, i) => (
                <td key={`${name}_${i}`}>{users.get(name).get(t)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventDatesTable;
