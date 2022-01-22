import consola from "consola";
import { noop } from "../utils/noop";

export interface Logger {
  debug: (message: string) => void;
  info: (message: string) => void;
  error: (message: string) => void;
}

const logger: Logger = {
  debug: noop,
  info: noop,
  error: noop,
};

export const createLogger = (debug: boolean): void => {
  const newLogger = consola.create({
    level: debug ? 4 : 3,
  });

  logger.debug = newLogger.debug;
  logger.info = newLogger.info;
  logger.error = newLogger.error;
};

export const debug = (message: string): void => logger.debug(message);
export const info = (message: string): void => logger.info(message);
export const error = (message: string): void => logger.error(message);
