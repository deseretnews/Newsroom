# Newsroom.js

Tools built for interactive data presentations!

### Creating A New Interactive

To create a new interactive, run the following script.

```sh
    npm run new myInteractive
```

That will generate a script and scss file in the "src" folder. To pass parameters to your interactive, just do the following.

```sh
    npm run pass myInteractive myParameter myValue
```

Turn on Webpack, SCSS, and PHP once you have an interactive created that you want to start building. If you don't have any of those, you can use NPM to install them! 

```sh
    npm i -g webpack
    npm i -g sass
```

PHP should be on your machine already if you're running Mac OS.

Now you can use NPM scripts to turn everything on. 

```sh
    # webpack 
    npm run scripts
    # scss
    npm run styles
    # php
    npm run server
```

