// The Meeting That Should Have Been an Email — make.fun entry.
//
// One line of plain text, 87 characters (verified: node main.ts writes
// exactly this line to /output/entry.txt): a single joke about a
// meeting that should have been an email. The line is the whole entry.
// It prints to stdout and is written to /output/entry.txt for the grader.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "The email this meeting should have been turned out to be an invite to the next meeting.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
