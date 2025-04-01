export default {
  jest: {
    configure: {
      transformIgnorePatterns: [
        "/node_modules/(?!(react-router-dom)/)"
      ],
    },
  },
};
