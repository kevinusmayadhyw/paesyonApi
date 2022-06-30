module.exports = ({ env }) => ({
  proxy: true,

  url: env("MY_HEROKU_URL"),

  app: {
    keys: env.array("APP_KEYS", [
      "APPKEYS1==",

      "APPKEYS2==",

      "APPKEYS3==",

      "APPKEYS4==",
    ]),
  },
});
