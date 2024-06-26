# The Headline Hub

The Headline Hub is an sample assignment project. This project is made using **React + Tailwind** with the power of **Vite.**
Headline Hub is a New Headline showing website. It uses ***newsapi.org***'s API to fetch the calls.

## Responsiblities

* **UI creation**
  * Creating a Landing page to show the Hot headlines of our country.
  * Theme Switcher
  * Filter of news based on input text
* **API**
  * Successfull API integration was made using AXIOS library with appropriate Error pages
  * **Error codes**
    * Fetch call is aborted after time out 3000 with message of **Request timed out, please try again later.**
    * Incorrect API key error
* **End to End Test**
  * A successfull playwright test is created against
    * Rendering page
    * Loading news
    * Filtering news
    * Error page

## How to setup

This is a vite project using node. You can install packages using command

```js
npm install .
```

After installing Necessary packages, Run the project

```js
npm run dev
```

## Dependencies

* Icon Library - [Hero icons](https://heroicons.com/) by Tailwind Creators
* API library - [Axios](https://axios-http.com/ "An minimalist api fetching library")
* CSS library - [TailwindCSS](https://tailwindcss.com)
* Testing Framework - [Playwright](https://playwright.dev/ "reliable end-to-end testing for modern web apps.")
