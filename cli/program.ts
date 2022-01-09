import { Command } from "commander";
import { init } from "i18next";
import es from "../locales/es/common.json";

init({
  lng: "es",
  debug: false,
  resources: {
    es: { translation: es },
  },
});

export const program = new Command();
