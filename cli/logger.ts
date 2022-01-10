import consola from "consola";
import { noop } from "../utils/noop";

export interface Logger {
  debug: (message: string) => void;
  info: (message: string) => void;
  error: (message: string) => void;
}

export const logger: Logger = {
  debug: noop,
  info: noop,
  error: noop,
};

export const createLogger = (debug: boolean) => {
  const newLogger = consola.create({
    level: debug ? 4 : 3,
  });

  logger.debug = newLogger.debug;
  logger.info = newLogger.info;
  logger.error = newLogger.info;
};
