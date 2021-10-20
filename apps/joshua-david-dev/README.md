# JoshuaDavid.Dev 
## Portfolio Site and Personal Blog

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.12.

## Design Philosophy and Inspirations

I took a lot of inspiration in theming from sites with dark-themes www.codewars.com as well as other developers personal portfolio sites.
I used a standard dark-theme with basic vector image overlays in the background for texture. Highlight colors, such as info or success, are there to draw the user's attention to specific elements or to add asthetic variety. I am of the opinion that when the highlights are done well, a dark-theme can present to user's as high-tech, sophisticated, or just plain different.

## Angular 11 w/ Angular Material, Bootstrap, and BLK Design System

As of right now, there is no backend server or API dynamically serving blog posts or projects. The site is entirely static until I author enough posts to warrent a set of dynamic CMS-like features. I relied on bootstrap's grid system and basic classes, BLK Design system for the majority of prewritten SASS, and font-awesome for the icon-font. Development was quick and easy taking roughly 16-20 hours from start to v1.0 release.

## Planned Expansions

Eventually, I will add a series of CMS-like features using either Django or Express.js and MongoDB. Overall, the system will resemeble the WordPress DB with it's post types and simple schema. This means both blog posts and projects will be considered posts. Projects, however, will simply add some additional fields. This can be achieved a number of different ways. The goal is to develop the most performant shcema possible though so some patterns will quickly be ruled out while others will stand out immediately. This change will likely come in the next 2-3 months and certainly no later than 6 months.

# Developers

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
