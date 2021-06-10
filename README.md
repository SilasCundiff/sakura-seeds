# SakuraSeeds is a custom component Library

**Designed and planned in Figma**
**Prototyped in Storybook**
**Developed with React, webfontloader and styled-components**


## About
The idea for Sakura Seeds sprouted (pun definitely intended) from my obsession at making a portfolio that satisfied my design ideas and my constant changes and improvements to it. I had so many ideas for layouts, colors, and fonts that I knew I wouldn't get to use because go design usually requires simplicity and focus.

Then I had the idea: why not make a website that allows not only me, but also the user to make changes to the website in real time. I acknowledge the website might not be practical once it's finished, but I still wanted to challenge myself to create it.

I began the process of brainstorming, what would be the best way to accomplish a website that can be changed on the fly? After much deliberation, I finally decided that a component library that includes a theme builder would be the best solution. 

Components can be updated, hidden, shown, and moved around based off of props you can pass to them, and a theme provider adds an easy way to quickly hot swap things like colors and fonts.


TODO 
- ~~Build Color Themes~~
- ~~Oranize and Include Fonts~~ *Switched to using webfontloader for dynamically loaded fonts*
- Currently only allowing google fonts: Add support for more later.
- Allow components to have a default style in case a style or theme aren't provided.
- Allow components to receive unique styles in case a theme isn't provided