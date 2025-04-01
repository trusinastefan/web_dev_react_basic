import React from "react";
import { DateRecords } from "../../types";

const EventDatesTable: React.FC<DateRecords> = ({ dates }) => {
  const sorted_dates = [...dates].sort((a, b) => a.timestamp - b.timestamp);
  const users = new Map();
  sorted_dates.forEach((date) => {
    date.records.forEach((record) => {
      if (!(users.has(record.name))) {
        users.set(record.name, new Map());
        sorted_dates.forEach((d) => {
          users.get(record.name).set(d.timestamp, "");
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
            {sorted_dates.map((d, i) => (<th key={i}>{d.timestamp}</th>))}
          </tr>
        </thead>
        <tbody>
          {Array.from(users.keys()).map((name) => (
            <tr key={name}>
              <td>{name}</td>
              {sorted_dates.map((d, i) => (
                <td key={`${name}_${i}`}>{users.get(name).get(d.timestamp)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventDatesTable;
