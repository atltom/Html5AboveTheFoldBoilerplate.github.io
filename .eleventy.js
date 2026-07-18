const yaml = require("js-yaml");
const fs = require("fs");

// 1. Wipe the dist folder cleanly using native Node.js before Eleventy runs
if (fs.existsSync("dist")) {
    fs.rmSync("dist", { recursive: true, force: true });
}

module.exports = function(eleventyConfig) {
    // 2. Tell 11ty to parse both .yaml and .yml files in _data
    eleventyConfig.addDataExtension("yaml, yml", (contents) => yaml.load(contents));

    // 3. Your existing passthrough copies
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("js");

    return {
        dir: {
            input: "src",
            data: "_data",
            includes: "_includes",
            layouts: "_layouts",
            output: "dist"
        }
    };
};


/*
const yaml = require("js-yaml");

module.exports = function(eleventyConfig) {
    // 1. Tell 11ty to parse both .yaml and .yml files in _data
    eleventyConfig.addDataExtension("yaml, yml", (contents) => yaml.load(contents));

    // 2. Your existing passthrough copies
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("js");

    // 3. Your existing directory structure settings
    return {
        dir: {
            input: "src",
            data: "_data",
            includes: "_includes",
            layouts: "_layouts",
            output: "dist"
        }
    };
};
*/

/*
module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("js");

    return {
        dir: {
            input: "src",
            data: "_data",
            includes: "_includes",
            layouts: "_layouts",
            output: "dist"
        }
    };
};
*/


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



/*
const htmlmin = require("html-minifier-terser");

module.exports = function(eleventyConfig) {

    const isProd = process.env.ELEVENTY_ENV === "production";

    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("js");

    if (isProd) {
        eleventyConfig.addTransform("htmlmin", function (content, outputPath) {

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
    }

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