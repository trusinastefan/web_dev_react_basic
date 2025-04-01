import express, { Request, Response } from "express";
import data from "./data";

const app = express();
const port = 4000;

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Allow all origins
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE"); // Allowed methods
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization"); // Allowed headers

  next();
});

app.get("/api/events", (_req: Request, res: Response) => {
  res.json(data);
});

app.get("/api/events/:id", (req: Request, res: Response) => {
  const requested_id = parseInt(req.params.id);
  const matching_events = data.items.filter(
    (item) => {
      return item.id === requested_id;
    }
  );
  if (matching_events.length === 1) {
    const event = matching_events[0];
    res.json(event);
  } else {
    res.status(404).send("Resource Not Found");
  }
});

app.post("/api/events", (req: Request, res: Response) => {
  try {
    const id = Math.max(...data.items.map((item) => item.id)) + 1;
    const title: string = req.body.title;
    const location: string = req.body.location;
    const dates: number[] = req.body.dates;
    const new_event = {
      id: id,
      title: title,
      location: location,
      dates: dates.map((date: number) => ({timestamp: date, records: []}))
    };
    data.items.push(new_event);
    res.status(200).send("OK");
  } catch {
    res.status(400).send("Bad Request");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
