export type UserRecord = {
  name: string;
  answer: "yes" | "no" | "if-needed";
};

export type DateRecord = {
  timestamp: number;
  records: UserRecord[];
};

export type PollingEvent = {
  location?: string;
  title: string;
  id: string;
  dates: DateRecord[];
};

export type DateRecords = {
  dates: DateRecord[];
};
