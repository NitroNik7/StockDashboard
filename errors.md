# Errors in Angular Developement
### > Error TS2306: File 'E:/Angular/demo/src/app/app.component.ts' is not a module
### > Solution [Solution](https://stackoverflow.com/questions/34629517/file-app-hero-ts-is-not-a-module-error-in-the-console-where-to-store-interfac)

### Error Image unable to load
### Details
*file:///C:/Users/S%20D%20HARPALE/Desktop/SDH%20Logo.png*
*C:/Users/S%20D%20HARPALE/Desktop/SDH%20Logo.png*
*C:/Users/S D HARPALE/Desktop/SDH Logo.png* 
*C:\Users\S D HARPALE\Desktop\SDH Logo.png* ----------Path loads incorrectly, use forward slashes 
Not able to load above file paths... devserver not able to find file stored locally on computer

### > Error installing bootstrap package using command: ng add @ng-bootstrap/ng-bootstrap
[Installation steps](https://ng-bootstrap.github.io/#/getting-started)
### > Solution implemented - Added bootstrap path into scripts and styles in build and test env in angular json
`"scripts": [
   "node_modules/jquery/dist/jquery.slim.js",
   "node_modules/popper.js/dist/umd/popper.js",
   "node_modules/bootstrap/dist/js/bootstrap.js"
 ],
 "styles": [
    "node_modules/bootstrap/dist/css/bootstrap.css",
    "src/styles.css"
]`


