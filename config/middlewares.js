module.exports = ({ env }) => ({
  // Add other middleware configs here if needed
  settings: {
    cors: {
      enabled: true,
      // Allow your Next.js dev server (adjust if deploying)
      origin: ['http://localhost:3000'],
      // Optional: expose all headers
      headers: '*',
    },
  },
});

