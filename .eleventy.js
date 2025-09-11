const fs = require('fs');
const path = require('path');
const glob = require('glob');

module.exports = function(eleventyConfig) {
    // Copy CSS, JS, and data files to output
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("data");
    eleventyConfig.addPassthroughCopy("images");

    // Transform relative image paths to absolute paths for runbooks
    eleventyConfig.addTransform("fixImagePaths", function(content, outputPath) {
        if (outputPath && outputPath.includes("/runbooks/")) {
          // Convert relative image paths like ../images/file.png or ./images/file.png to /images/file.png
          content = content.replace(/(<img[^>]+src=["'])\.\.?\/images\//g, '$1/images/');
          // Convert markdown image syntax
          content = content.replace(/!\[([^\]]*)\]\(\.\.?\/images\//g, '![$1](/images/');
        }
        return content;
    });

    eleventyConfig.on('eleventy.after', async () => {
        const runbooksFiles = glob.sync('runbooks/*.md');
        const runbooksCount = runbooksFiles.length;

        const outputDir = '_site/data';
        if (!fs.existsSync(outputDir)) {
          fs.mkdirSync(outputDir, { recursive: true });
    }
        fs.writeFileSync(
            path.join(outputDir, 'runbooks-count.json'), 
            JSON.stringify({count: runbooksCount})
        );
    });

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
