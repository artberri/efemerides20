import { TaskEither, tryCatch } from "fp-ts/TaskEither";
import https from "https";

export const getUrlContent = (url: string): TaskEither<Error, string> =>
  tryCatch(
    () =>
      new Promise<string>((resolve, reject) => {
        https
          .get(url, (res) => {
            const data: Uint8Array[] = [];

            res.on("data", (chunk) => {
              data.push(chunk);
            });

            res.on("end", () => {
              resolve(Buffer.concat(data).toString());
            });
          })
          .on("error", (err) => {
            reject(err);
          });
      }),
    (reason) => new Error(String(reason)),
  );
