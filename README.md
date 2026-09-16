# Do not work on master
Use:	develop for website development.
Use:	master only for the finished production website.


# (Bash)
npm install

-- to run localhost:8080
# (Bash)
npx @11ty/eleventy --serve

then
# (Bash)
npx @11ty/eleventy

or  

# (Bash)
npm run dev
 # http://localhost:8080

or 

npx run build 
  
npx serve dist 
 # http://localhost:3000


## ---------------------------------------------------------

# Eleventy Deployment Workflow
This document records the complete process for deploying the Eleventy-generated website from the `develop` branch to the existing `master` branch used by GitHub Pages.
This is the deployment procedure to use after making and testing changes to the Eleventy website.

## ---------------------------------------------------------

# 1. Repository Structure
The repository uses two branches for two different purposes.

## `develop` — Development / Source

The `develop` branch contains the Eleventy source project.

It includes:

- `src/`
- Nunjucks templates
- YAML data
- Components
- Layouts
- `.eleventy.js`
- `package.json`
- `package-lock.json`
- JavaScript source
- CSS source
- Other development files

Eleventy builds the finished website into:
dist/


The `master` branch contains the site content that GitHub uses to host the static page
HTML
css/
images/
js/
CNAME
.nojekyll
robots.txt
sitemap.xml
other production files

## ---------------------------------------------------------


# 2. Overall Deployment Process

develop
   │
   │ Make website changes
   │
   ▼
Build with Eleventy
   │
   ▼
dist/
   │
   │ Test generated website
   │
   ▼
Switch to existing local master
   │
   ▼
Copy contents of dist/
   │
   ▼
master repository root
   │
   ▼
git add .
   │
   ▼
Review staged files
   │
   ▼
git commit
   │
   ▼
git push origin master
   │
   ▼
GitHub Pages
   │
   ▼
Switch back to develop

## ---------------------------------------------------------

# 3. Deployment Checklist

Use this checklist before and after each deployment.

Before Deployment
 On develop
 git status is clean
 Eleventy build succeeds
 dist/ is generated
 Generated site tested locally
 Pages checked
 Images checked
 CSS checked
 Links checked
 Metadata checked
Deploy
 Switch to existing master
 Answer n to OneDrive deletion prompts if they occur
 Copy dist/. into root
 Remove dist
 Verify dist is gone
 git add .
 Review git diff --cached --name-status
 Confirm no src/, .eleventy.js, package.json, or dist/
 Commit
 Run git status
 Push origin master
After Deployment
 Switch back to develop
 Answer n to OneDrive deletion prompts if they occur
 Run git status
 Confirm:
nothing to commit, working tree clean

## ---------------------------------------------------------

# 4. Complete Deployment Command Sequence

For future deployments, the basic command sequence is:

Start on develop
$git status

Build and test the Eleventy site.
$npm run dev
commit & push any changes

Then:
$git switch master
If Git asks about directory deletion:
n

Then:
$git status

Copy the generated site:
$cp -r dist/. .

Remove the temporary build directory:
$rm -rf dist

Check:
$git status

Stage:
$git add .

Review:
$git diff --cached --name-status
If [END] appears:
q

Commit:
$git commit -m "Deploy updated Eleventy site"

Verify:
$git status

Push:
$git push origin master

Return to development:
$git switch develop
If Git asks about directory deletion:
n

Final check:
$git status
Expected:
nothing to commit, working tree clean

## ---------------------------------------------------------

command to convert jpg to webp

C:\Users\____________\Downloads\libwebp-1.3.2-windows-x64\libwebp-1.3.2-windows-x64\bin>cwebp ..\..\..\asphalt-and-masonry.jpg -q 80 -o ..\..\..\566\asphalt-and-masonry.webp