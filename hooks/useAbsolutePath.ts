import routes from "../routes.config";

export const useAbsolutePath = () => {
  return {
    base: process.env["basePath"],
    path: (pathname: keyof typeof routes) =>
      `${process.env["basePath"]}${routes[pathname].path}`,
  };
};
