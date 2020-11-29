# Wondering why this repo exists?

This repo holds a simple web page recapping all the video topics covered by [Google's short lecture series  on the topic (click here to check it out)](https://www.youtube.com/watch?v=uTEL8Ff1Zvk&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj). My web page is just a handy cheat-sheet for their excellent talking points.

## The page was originally developed in codesandbox.io (which uses create-react-app)

[To see the sandbox, click here](https://vbfm2.csb.app/)

Pros:
* Ease of development

Cons:
* Not statically deployed, so it can't load any faster (>1 second)

## For convenience, I pulled the React app into Gatsby (a static site generator) and deployed as a static web page

[To see the static page, click here](https://asa55.github.io/class-sre-implements-devops/)

Pros:
* Loads fast, responds beautifully to user input even on sluggish hardware

Cons:
* Flicker of Unstyled Content ([but fixes have been reported](https://github.com/gatsbyjs/gatsby/issues/5667))
