// module.exports = {
//     health: {
//       path: '/health',
//       enabled: true,
//     }
//   };


module.exports = {
  settings: {
    health: {
      path: '/health',
      enabled: true,
      config: {
        checks: {
          database: {
            enabled: true,
            responseTime: 1000,
          },
          server: {
            enabled: true,
            responseTime: 1000,
          },
        },
      },
    },
  },
};