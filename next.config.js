const port = process.env.PORT || 3000;

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    loader: "custom",
  },
  env: {
    facebookAppId: process.env.FACEBOOK_APP_ID,
    twitterAccount: process.env.TWITTER_ACCOUNT,
    twitterCreator: process.env.TWITTER_CREATOR,
    basePath: process.env.BASE_PATH || `http://localhost:${port}`,
  },
};
