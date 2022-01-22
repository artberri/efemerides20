import { Command } from "commander";
import { fork } from "fluture";
import { MonthNumber } from "../../utils/date";
import { createLogger, error, info } from "../logger";
import { ensureNumberBetween } from "./commandValidation";
import { crawler } from "./crawler";
import { Efemerides } from "./todo";

export const addCrawlCommand = (program: Command): void =>
  void program
    .command("crawl")
    .description("crawl Wikipedia")
    .option("-d, --debug", "show debug messages")
    .option("-y, --dry", "dry run")
    .argument("[month]", "month (1 to 12)", ensureNumberBetween(1, 12))
    .argument("[day]", "day (1 to 31)", ensureNumberBetween(1, 31))
    .action(
      (
        month: MonthNumber | undefined,
        day: number | undefined,
        options: { debug?: boolean; dry?: boolean },
      ) => {
        createLogger(!!options.debug);

        if (options.dry) {
          info("Dry run");
        }
        const crawl = crawler(month, day);

        fork((e: Error) => error(e.toString()))((e: Efemerides) =>
          info(`Length: ${e.length} / First: ${JSON.stringify(e[0])}`),
        )(crawl);
      },
    );
