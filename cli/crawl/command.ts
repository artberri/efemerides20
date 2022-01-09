import { Command } from "commander";
import consola from "consola";
import { fold } from "fp-ts/Either";
import { pipe } from "fp-ts/function";
import { fromNullable } from "fp-ts/Option";
import { map as mapT } from "fp-ts/Task";
import { Month } from "../../utils/date";
import {
  validateDay,
  validateDayOfMonth,
  validateMonth,
} from "./commandValidation";
import { crawl } from "./crawl";

export const addCrawlCommand = (program: Command) =>
  program
    .command("crawl")
    .description("crawl Wikipedia")
    .option("-d, --debug", "show debug messages")
    .option("-y, --dry", "dry run")
    .argument("[month]", "month (1 to 12)", validateMonth)
    .argument("[day]", "day (1 to 31)", validateDay)
    .action(
      async (
        month: Month | undefined,
        day: number | undefined,
        options: { debug?: boolean; dry?: boolean },
      ) => {
        if (day && month) {
          pipe(month, validateDayOfMonth(day));
        }

        const dry = !!options.dry;
        const logger = consola.create({
          level: options.debug ? 4 : 3,
        });

        if (dry) {
          logger.info("Dry run");
        }

        logger.debug("Running");

        const exec = pipe(
          crawl(fromNullable(month), fromNullable(day)),
          // eslint-disable-next-line no-console
          mapT(fold(console.error, console.log)),
        );
        await exec();
      },
    );
