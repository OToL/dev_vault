const fs = require('fs');
const path = require('path');
const glob = require('glob');
const matter = require('gray-matter');

module.exports = function(eleventyConfig) {
    const isProduction = process.env.ELEVENTY_ENV === 'production';
    const baseUrl = isProduction ? '/dev_vault' : '';

    // Copy CSS, JS, and data files to output
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("data");
    eleventyConfig.addPassthroughCopy("images");

    // Add global data for base URL
    eleventyConfig.addGlobalData("baseUrl", baseUrl);

    // Transform relative image paths to absolute paths for runbooks
    eleventyConfig.addTransform("fixImagePaths", function(content, outputPath) {
        if (outputPath && outputPath.includes("/runbooks/")) {
            // Convert relative image paths like ../images/file.png or ./images/file.png to /images/file.png
            content = content.replace(/(<img[^>]+src=["'])\.\.?\/images\//g, `$1${baseUrl}/images/`);
            // Convert markdown image syntax
            content = content.replace(/!\[([^\]]*)\]\(\.\.?\/images\//g, `![$1](${baseUrl}/images/`);
        }
        return content;
    });

    // Transform paths for GitHub Pages
    eleventyConfig.addTransform("fixAbsolutePaths", function(content, outputPath) {
        if (isProduction && outputPath && outputPath.endsWith(".html")) {
            // Fix relative navigation links (./path/)
            content = content.replace(/href=["']\.\/([^"']*?)["']/g, `href="${baseUrl}/$1"`);

            // Fix relative script/css references (./path)
            content = content.replace(/src=["']\.\/([^"']*?)["']/g, `src="${baseUrl}/$1"`);

            // Fix fetch calls in JavaScript
            content = content.replace(/fetch\(['"`]\/([^'"`]+)['"`]\)/g, `fetch('${baseUrl}/$1')`);
        }
        return content;
    });

    eleventyConfig.on('eleventy.after', async () => {

        const outputDir = '_site/data';
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        const runbooksFiles = glob.sync('runbooks/*.md');
        const runbooksCount = runbooksFiles.length;

        fs.writeFileSync(
            path.join(outputDir, 'runbooks-count.json'),
            JSON.stringify({ count: runbooksCount })
        );

        const bookmarksFiles = glob.sync('bookmarks/*.md');
        const bookmarksCount = bookmarksFiles.length;

        fs.writeFileSync(
            path.join(outputDir, 'bookmarks-count.json'),
            JSON.stringify({ count: bookmarksCount })
        );

        // Generate bookmarks from markdown files
        const { marked } = await import('marked');
        const bookmarkFiles = glob.sync('bookmarks/*.md');
        const bookmarksData = bookmarkFiles.map(file => {
            const fileContent = fs.readFileSync(file, 'utf8');
            const parsed = matter(fileContent);

            return {
                title: parsed.data.title || 'Untitled',
                description: marked(parsed.content)
                    .trim()                         // Remove leading/trailing whitespace
                    .replace(/\n\s*\n/g, '\n')      // Remove extra blank lines
                    .replace(/>\s+</g, '><'),       // Raw markdown content
                url: parsed.data.url || '#',
                tags: parsed.data.tags || []
            };
        });

        // Write bookmarks JSON for frontend
        fs.writeFileSync(
            path.join(outputDir, 'bookmarks.json'),
            JSON.stringify(bookmarksData, null, 2)
        );
    });

    eleventyConfig.addCollection("runbooks", function(collection) {
        return collection.getFilteredByGlob("runbooks/*.md").sort(function(a, b) {
            return new Date(b.data.date) - new Date(a.data.date);
        });
    });

    eleventyConfig.addCollection("bookmarks", function(collection) {
        return collection.getFilteredByGlob("bookmarks/*.md").sort(function(a, b) {
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
