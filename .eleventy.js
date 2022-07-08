const Card = require('./src/_includes/components/Card');

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("src/assets/");
    eleventyConfig.addPassthroughCopy("src/sass/");

    eleventyConfig.addWatchTarget("src/sass/")

    eleventyConfig.addShortcode("Card", Card);

    return{
        dir: {
            input: "src",
            output: "public",
        }
    };
};