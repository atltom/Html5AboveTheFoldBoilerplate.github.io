# Html5AboveTheFoldBoilerplate
html5, mobile first, css above the fold, light weight boilerplate



# (Bash)
npm install

-- to run localhost:8080
# (Bash)
npx @11ty/eleventy --serve

-- deployment: delete dist folder or run the following
# (PowerShell)
Remove-Item -Recurse -Force dist

then
# (Bash)
npx @11ty/eleventy
 

or now 

then
# (Bash)
npm run dev
 # http://localhost:8080
or 
npx run build 
 and then  npx serve dist 
 # http://localhost:3000


.skip-link{position:absolute;left:-9999px;top:0;}
.skip-link:focus{left:20px;top:20px;padding:15px;z-index:9999;background:white;border:1px solid #ccc;}


C:\Users\____________\Downloads\libwebp-1.3.2-windows-x64\libwebp-1.3.2-windows-x64\bin>cwebp ..\..\..\asphalt-and-masonry.jpg -q 80 -o ..\..\..\566\asphalt-and-masonry.webp


# ============ why choose us ???? ===========
whyChooseHeading: Why Choose S. Phaneuf & Associates?
whyChooseIntro: >
  For more than 35 years, homeowners throughout Massachusetts have trusted
  S. Phaneuf & Associates to create exceptional outdoor living spaces with
  craftsmanship, attention to detail, and dependable service.
whyChooseItems:
  - title: "35+ Years of Experience:"
    description: >
      Extensive experience designing and constructing custom hardscapes
      throughout Massachusetts.
  - title: "Complete Outdoor Solutions:"
    description: >
      We combine excavation, drainage, masonry, landscaping, and site
      development into one seamless project.
  - title: "Quality Craftsmanship:"
    description: >
      Every project is built using proven installation methods and premium
      materials.
  - title: "Custom Designs:"
    description: >
      No two projects are alike. Every outdoor space is tailored to your
      property and lifestyle.
  - title: "Free Estimates:"
    description: >
      We'll evaluate your property and recommend the best solution for your
      outdoor living goals.


# ============ estimate cta ===========
estimateHeading: Request Your Free Hardscape Consultation
estimateIntro: >
  Whether you're planning a new patio, outdoor kitchen, retaining wall,
  fireplace, or complete backyard transformation, we're ready to help.
estimateDescription: >
  Contact our team today to schedule your free consultation and personalized
  project estimate.
estimateButtonText: Request Your Free Estimate
estimateButtonLink: /contact-us



const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const pluginTOC = require("eleventy-plugin-toc");

module.exports = function(eleventyConfig) {
  
  // 1. Configure Markdown to automatically add clean IDs to h2 and h3 tags
  const markdownLib = markdownIt({ html: true })
    .use(markdownItAnchor, {
      permalink: false, // Set to true if you want visual anchor links next to headings
      slugify: (s) => s.trim().toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')
    });
  eleventyConfig.setLibrary("md", markdownLib);

  // 2. Add the Table of Contents filter
  eleventyConfig.addPlugin(pluginTOC, {
    tags: ['h2', 'h3'], // Headings you want to include in your TOC
    wrapper: 'nav',     // Wraps the TOC in a semantic HTML5 <nav> tag
    wrapperClass: 'toc-navigation'
  });

};





{# 
{--# 1. Define the dynamic breadcrumb object #--}
{% set breadcrumbObject = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.zzzzzzzzzzzzzzzzzzzzzzzzzzzzphaneufassociates.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://www.phaneufassociates.com/services/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": serviceName or title,
      "item": "https://www.phaneufassociates.com" ~ page.url
    }
  ]
} %}

{--# 2. Convert that object into JSON string and assign it to the 'schema' variable #--}
{% set schema = breadcrumbObject | json %} #}

