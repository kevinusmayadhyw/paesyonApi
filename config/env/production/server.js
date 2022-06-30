module.exports = ({ env }) => ({
  proxy: true,

  url: env("apipaesyon.herokuapp.com"),

  app: {
    keys: env.array("APP_KEYS", [
      "APPKEYS1==",

      "APPKEYS2==",

      "APPKEYS3==",

      "APPKEYS4==",
    ]),
  },
});
