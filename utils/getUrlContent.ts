import { TaskEither, tryCatch } from "fp-ts/TaskEither";
import https from "https";
import { logger } from "../cli/logger";

export const getUrlContent = (url: string): TaskEither<Error, string> =>
  tryCatch(
    () =>
      new Promise<string>((resolve, reject) => {
        logger.debug(`Start Crawl: ${url}`);
        https
          .get(url, (res) => {
            const data: Uint8Array[] = [];

            res.on("data", (chunk) => {
              data.push(chunk);
            });

            res.on("end", () => {
              logger.debug(`Crawled: ${url}`);
              resolve(Buffer.concat(data).toString());
            });
          })
          .on("error", (err) => {
            reject(err);
          });
      }),
    (reason) => new Error(String(reason)),
  );
