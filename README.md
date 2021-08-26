# Angular: Dark Theme Switcher

Create a Dark Theme blog application, as shown below. Some core functionalities have already been implemented, but the application is not complete. Application requirements are given below, and the finished application must pass all of the unit tests.

## Environment 

- Angular CLI Version: 10.0.4
- Angular Core Version: 10.0.4
- Node Version: 12.18.3
- Default Port: 8000

### Application Demo:
![](https://hrcdn.net/s3_pub/istreet-assets/EGtVaM7u1il7YVlRu7Bigg/dark-theme.gif)

The app has two components: the Blog component and the Theme Switcher component. The list of the blog posts to be displayed is already provided in the app. 

The app should implement the following functionalities:

- The blog posts should be initially displayed in their respective `<article>` tags in the same order in which they are provided.
- The Theme Switcher component should have a button titled `Light Theme` initially.  
- Clicking on the Light Theme button initially should add the class `theme--dark` to the body of the page eg `<body class="theme--dark">` and should update the button text from `Light Theme` to `Dark Theme`.
- Clicking on the same button again should toggle the theme to Light and the class `theme--dark` should be removed from the body of the page. The text of the button should also be updated to `Light Theme`.

Each blog post is an array of objects and the included markup includes all the necessary details required to render a Blog Post Item.

_Note: The styling required to change the theme of the app from light to dark is already provided in the project. Adding the class 'theme--dark' will automatically change the related styles throughout the page._


## Testing Requirements

The following data-test-id/class attributes are required in the component for the tests to pass:

- The parent container of the blog post items should have the data-test-id attribute 'blog-posts'
- Each blog post item should have the data-test-id attribute blog-item-0, blog-item-1, blog-item-2, and so on.
- Each blog title paragraph tag `<p>` should have the data-test-id attribute 'blog-title'
- The Theme switcher button should have the data-test-id attribute 'switcher-button'
- The span containing the text inside the Theme switcher button should have the data-test-id attribute 'current-theme'.


Please note that the component has the above data-test-id attributes for test cases and certain classes and ids for rendering purposes. It is advised not to change them.

## Project Specifications

**Read Only Files**
- src/tsconfig.spec.json
- src/app/app.module.ts
- src/app/app.component.spec.ts

**Commands**
- run: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm start
```
- install: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm install
```
- test: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm test
```
