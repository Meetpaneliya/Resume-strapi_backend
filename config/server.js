module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS')
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  url: env('PUBLIC_URL', 'http://localhost:1337'),
  server: {
    host: '0.0.0.0', // Bind to 0.0.0.0 to allow external access
    port: 1337, // You can specify the port you want to use
  },
});