module.exports = {
  async redirects() {
    return [
      {
        source: "/git",
        destination: "https://github.com/saisandeepvaddi",
        permanent: true,
      },
      {
        source: "/git/:slug",
        destination: "https://github.com/saisandeepvaddi/:slug",
        permanent: true,
      },
      {
        source: "/apps/tenhands",
        destination: "https://tenhands.app",
        permanent: true,
      },
    ];
  },
};
