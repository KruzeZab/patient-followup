const config = {
  baseUrl: process.env.API_BASE_URL || 'http://localhost:3001',
  endpoints: {
    followUp: '/follow-up',
    followUps: '/follow-ups',
    patients: '/patients',
    feedback: '/follow-up/:token',
  },
};

export default config;
