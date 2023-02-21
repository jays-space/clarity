# Clarity Assessment

## Overview
test site: https://main.d2suji5t02r8ie.amplifyapp.com/

This is a MVP e-commerce app for a cupcake business. 

The application enables shoppers to view cupcakes by cupcake collections as well as the individual cupcake. 
Shoppers can also run a search for any cupcakes in stock based on the cupcake name and description.
There is a persisted mini-cart feature that enables shoppers to add/remove cupcakes to a shopping basket. 

There is also an admin portal that enables admmin to CRUD cupcake collections and cupcakes.

## Design and Architecture

My preference is to use typescript in projects. I tried to setout the app in features as opposed to screens, i.e.: should there be more services to be added, I would introduce modules that would contain all logic for a given set of features interacting with a specific slice of the app. Each module would contain the types, utils, business logic etc for the given slice.

Outside of services/modules are folders that contain globally used logic.

I initally used to employ Context API to manage cart state. This was switched to a redux architecture as the cart state became more complex. I have left the context files in to demonstrate my ability with ContextApi.

Implementing aliases helped in readability.

I implemented the Atomic design system: atomic => integrated => templates.To begin to add more consistency in the styles, I used some theme files and added a bit of platform specific styles where needed.

## What I would do differently
### Backend
 - Test all CRUD fuctions BEFORE deploying and commiting the FE to them
 
### Frontend
 - TDD (learning)
 - Prioritise functionality and UX first, then style and UI

## What I would have done given more time
### General
- Tests 
- Further factorized business logic
- Moved the search logic to the backend as a micro service
- Synchronized the cart to the DB as the user interacts with the cart
- Added shopper auth (account creation to persist the shopper experience across sessions)
- Added wishlist features
- Moved the admin portal to a dedicated site
- More theming and Responsive design implementation
- Better commenting for intellisense
- Navigation function that would build the path dynamically
- Move local templates to local page files, else global templates into global template file
- Add local image picking and implement S3 storage
- Create saperate portal for store management
- Create module file structure which would contain all services, gql, types, utils etc (business logic) for each page/screen

### Search component: 
- on icon press focus on input
- click away listener (onClick away hide input)

### Home Page
- Popular/Recommended cakes component
- Add images

### Collection Item Page
- Pagination

### StoreManagementPageTemplate
- Factorize

### Auth
- Implement admin/shopper accounts
- Implement full cart feature with checkout

## Known bugs
### Cart
- The cart initially has a product 

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
