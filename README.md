# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### Information about the project

Created txt file with information about the animals called animalInfo.txt in public folder

The server is created with mongodb and express.Frameword used react. HTML and CSS are created by me too.

installed libaries for the back-end - concurrently, express, mongoose, morgan, cors
installed libaries for the front end - react, react-router-dom

Navigation bar for non-autauthenticated and autauthenticated users
Home and catalog page are visible for all users.

Navigation bar for non-authenticated users
The available pages on the navigation bar for non-authenticated users are register, login.

Navigation bar for authenticated users
The available pages on the navigation bar for authenticated users are create animal, posts of current user.
There is a logout link too.

Register page
For the register page you can't register a user who already has registered and the password and repaet password should be equal or otherwise the error will be displayed on the screen. 

Login page
For the login page you should login with alrady registered user and enter the correct password or it will display the errors on the screeen.  

Home page
Home page has button that when it is clicked it navigates you to catalog page.

Catalog page
Catalog page loads all created posts of animals.

Details page
Only the owner of the publication has premision to edit or delete the post.
Logged in users has only premision to like the post once. When a post is liked it changes its count of likes.
Non-logged in users only can see how many likes the post has.

Create page
The create page is a place where you can create a post about your favorite animal you can give the animal name, type of animal , description and a image.
When incorrect data is entered errors about the problem are displayed on the screen.

Edit page
When you save your changes about the post it will redirect to details page with the edited data

Delete page
When you delete your post a confirmation will appear on the sceen asking if you are sure you want to delete the post.

Posts of current user 
This page will display only the posts that the user has created.
