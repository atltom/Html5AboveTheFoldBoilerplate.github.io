
module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("js");

    return {
        dir: {
            input: "src",
            includes: "_includes",
            layouts: "_layouts",
            output: "dist"
        }
    };
};


/*
const htmlmin = require("html-minifier-terser");

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("js");

    // HTML MINIFICATION (production only)
    eleventyConfig.addTransform("htmlmin", function (content, outputPath) {

        // Only process HTML files
        if (outputPath && outputPath.endsWith(".html")) {

            return htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                removeEmptyAttributes: true,
                minifyCSS: true,
                minifyJS: true
            });
        }

        return content;
    });

    return {
        dir: {
            input: "src",
            includes: "_includes",
            layouts: "_layouts",
            output: "dist"
        }
    };
};
*/