import { Future, FutureInstance } from "fluture";
import https from "https";
import { info } from "../cli/logger";

export const getUrlContent = (url: string): FutureInstance<Error, string> =>
  Future((reject, resolve) => {
    info(`Start Crawl: ${url}`);
    const request = https
      .get(url, (res) => {
        const data: Uint8Array[] = [];

        res.on("data", (chunk) => {
          data.push(chunk);
        });

        res.on("end", () => {
          info(`Crawled: ${url}`);
          resolve(Buffer.concat(data).toString());
        });
      })
      .on("error", (err) => {
        reject(err);
      });

    return () => request.destroy();
  });
