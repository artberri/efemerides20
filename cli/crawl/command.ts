import { Command } from "commander";
import consola from "consola";
import { fold } from "fp-ts/Either";
import { pipe } from "fp-ts/function";
import { fromNullable } from "fp-ts/Option";
import { map as mapT } from "fp-ts/Task";
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
      async (
        month: number | undefined,
        day: number | undefined,
        options: { debug?: boolean; dry?: boolean },
      ) => {
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
          mapT(
            fold((e) => {
              logger.error(e.message);
              process.exit(1);
            }, logger.info),
          ),
        );
        await exec();
      },
    );
