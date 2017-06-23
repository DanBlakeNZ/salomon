# salomon
https://salomon-clone.herokuapp.com/

I replicated the homepage of Salomon's New Zealand website as a way to further hone and improve my React, and overall development skills and how I thought about building a website.

The entire page was built using React components with Redux also being used to manage some of the menu functionality. Additionally, the page is fully responsive and was build with a mobile first approach.

Some of the key features are:
•	Built using React JSX and incorporates Redux to manage the mobile menu state.
•	Repetitive components are rendered using a combination of the map function and object data sored in separate files.
•	Uses Owl Carousel npm package. This was the first time I have used this package and I had to learn not only how to implement it, but implement it with React.
•	Created the carousel thumbnail tab (seen on desktop) that utilises the callback from the Owl Carousel package.
•	Fully responsive. Built mobile first and expands to larger screen sizes.
•	Uses Enzyme to do some simple tests for the Redux Action Creators and Store.
•	Cloudnary is used to store all images.
•	Bundled using Webpack and deployed on Heroku.
