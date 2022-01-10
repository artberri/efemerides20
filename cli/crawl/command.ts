import { Command } from "commander";
import { fold } from "fp-ts/Either";
import { pipe } from "fp-ts/function";
import { fromNullable } from "fp-ts/Option";
import { map } from "fp-ts/Task";
import { createLogger, logger } from "../logger";
import { validateInteger } from "./commandValidation";
import { crawl } from "./crawl";

export const addCrawlCommand = (program: Command) =>
  program
    .command("crawl")
    .description("crawl Wikipedia")
    .option("-d, --debug", "show debug messages")
    .option("-y, --dry", "dry run")
    .argument("[month]", "month (1 to 12)", validateInteger)
    .argument("[day]", "day (1 to 31)", validateInteger)
    .action(
      (
        month: number | undefined,
        day: number | undefined,
        options: { debug?: boolean; dry?: boolean },
      ) => {
        createLogger(!!options.debug);

        if (options.dry) {
          logger.info("Dry run");
        }

        const exec = pipe(
          crawl(fromNullable(month), fromNullable(day)),
          map(
            fold(
              (e) => {
                logger.error(e.message);
                process.exit(1);
              },
              (efemerides) =>
                logger.info(`Crawled efemerides count: ${efemerides.length}`),
            ),
          ),
        );

        exec().catch(logger.error);
      },
    );
