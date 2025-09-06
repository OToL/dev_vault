module.exports = function(eleventyConfig) {
    // Copy CSS, JS, and data files to output
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("data");
    eleventyConfig.addPassthroughCopy("images");

    return {
        dir: {
            input: ".",
            includes: "includes",
            data: "data",
            output: "_site"
        }
    };
};
