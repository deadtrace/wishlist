module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/fonts");
  eleventyConfig.addPassthroughCopy("src/assets/styles");
  // Set custom directories for input, output, includes, and data
  return {
    dir: {
      input: "src",
    },
    passthroughFileCopy: true,
  };
};
