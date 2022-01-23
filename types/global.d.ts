export {};

declare global {
  interface Window {
    twttr: {
      widgets: {
        load: () => void;
      };
    };

    FB: {
      XFBML: {
        parse: () => void;
      };
    };
  }
}
