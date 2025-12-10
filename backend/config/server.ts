export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1342),
  url: env('PUBLIC_URL', 'http://localhost:1342'),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
