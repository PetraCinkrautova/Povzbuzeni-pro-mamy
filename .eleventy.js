module.exports = function(eleventyConfig) {

	// Výchozí výstupní složka: _site

	// Zkopírovat images/ do _site/images
	eleventyConfig.addPassthroughCopy("images");

  eleventyConfig.addPassthroughCopy("pdf");

	// Zkopírovat css/ to _site/css/
	eleventyConfig.addPassthroughCopy("css");

  // Zkopírovat js/ to _site/js/
	eleventyConfig.addPassthroughCopy("js");

  eleventyConfig.addPassthroughCopy("sitemap.xml");

  eleventyConfig.addPassthroughCopy("robots.txt");

  

  return {
    // možné formáty šablon
    templateFormats: ["njk", "html", "md", "liquid"],

    // jako šablonovací jazyk zvolíme Nunjucks
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  }

};