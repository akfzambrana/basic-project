# Basic project
Basic website project boilerplate

## Install
### project dependencies
```
> npm install
```
### client dependencies
```
> bower-installer
```
## gulp usage

### Development
```
$ gulp
```
### Production
```
$ gulp --prod
```

## Configuration/customization  
You can customize some things that fit better in your project in the `gulp.config.js` file. 

- **sourceDir**: Name of the source files directory.  Is where your source files are originally. As default the name is **assets**. 
- **buildDir**: Name of the build directory, where your compiled project will be. As default the name is **dist**.
- **htmlDestDir**: Name of the HTML files will be. As default they are copied to the `/` directory.
- **resourcesDestDir**: Name of the HTML files will be. As default they are copied to the `/` directory. 
- **browsersSupport**: Use the [Browser list]() pattern
- **excludeResourcesCopy**: List of directories that you don't want to be copied in the build directory. As default we exclude: **styles**, **html** and **sprites** directories.

## Browser support
Every single piece of code in this project was tested in:

- Chrome 52  
- Firefox 43 (and developer edition 45)  
- IE 10  
- Opera 27  
- Edge  

If your browser support is lower than IE10 and/or different from the test kit, you need to change the values in the browserSupport array inside `gulp.config.js` file.  

