const yaml = require("js-yaml");
const fs = require("fs");
const htmlmin = require("html-minifier-terser");
const CleanCSS = require("clean-css");

if (fs.existsSync("dist")) {
    fs.rmSync("dist", { recursive: true, force: true });
}


module.exports = function(eleventyConfig) {
    eleventyConfig.addDataExtension("yaml, yml", (contents) => yaml.load(contents));

    // Keep images and js passthrough, but NOT css
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("js");

    // --- AUTOMATIC CSS MINIFICATION EXTENSION ---
    eleventyConfig.addTemplateFormats("css");
    eleventyConfig.addExtension("css", {
        outputFileExtension: "css",
        compile: async function(inputContent) {
            return async () => {
                return new CleanCSS({}).minify(inputContent).styles;
            };
        }
    });

    eleventyConfig.addPassthroughCopy({ "src/robots.txt": "robots.txt" });

    eleventyConfig.addFilter("json", function(value) {
        return JSON.stringify(value, null, 2);
    });

    // HTML Minifier
    eleventyConfig.addTransform("htmlmin", async function(content, outputPath) {
        if (outputPath && outputPath.endsWith(".html")) {
            return await htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true,
                conservativeCollapse: true,
                minifyJS: true,
                minifyCSS: true,
                processScripts: ["application/ld+json"]
            });
        }
        return content;
    });

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