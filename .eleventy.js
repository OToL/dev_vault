module.exports = function(eleventyConfig) {
    // Copy CSS, JS, and data files to output
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("data");
    eleventyConfig.addPassthroughCopy("images");

    // Create runbooks collection
    eleventyConfig.addCollection("runbooks", function(collection) {
        return collection.getFilteredByGlob("runbooks/*.md").sort(function(a, b) {
            return new Date(b.data.date) - new Date(a.data.date);
        });
    });

    return {
        dir: {
            input: ".",
            includes: "includes",
            data: "data",
            output: "_site"
        }
    };
};
