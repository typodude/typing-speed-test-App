# 🧠 Typing Speed Test Web App

A sleek and simple React-based Typing Speed Test application that helps users measure their typing speed (WPM) and accuracy in real-time. This app fetches random sentences and evaluates your performance as you type.

## 🚀 Features

- 🔄 Fetches random sentences from an API (with fallback)
- 📊 Progress bar indicating how much of the sentence is typed
- ⏱️ Calculates Words Per Minute (WPM)
- 🎯 Computes typing accuracy percentage
- ♻️ Restart feature to retry with a new sentence
- 📱 Fully responsive UI


## 📦 Tech Stack

- **React** – Frontend Framework
- **JavaScript** – Logic & Functionality
- **HTML & CSS** – Layout and Styling
- **gh-pages** – GitHub Pages Deployment



## 🔧 Getting Started (Local Setup)

### 1. Clone the Repository

git clone https://github.com/typodude/typing-speed-test-App.git
cd typing-speed-test-App


### 2. Install Dependencies

bash
npm install


### 3. Start the Application

bash
npm start

The app will run locally at:
👉 `http://localhost:3000`



## 🌐 Deployment on GitHub Pages

### Step-by-step Guide:

1. **Add `homepage` to `package.json`:**

json
"homepage": "https://typodude.github.io/typing-speed-test-App"


2. **Modify scripts:**

json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}


3. **Install gh-pages:**

npm install --save-dev gh-pages


4. **Deploy:**

npm run deploy


✅ App will be live at:
**[https://typodude.github.io/typing-speed-test-App](https://typodude.github.io/typing-speed-test-App)**



## 🖥️ How to Use

1. Read the displayed sentence.
2. Start typing in the input box.
3. As you type:

   * Progress bar fills based on how much you’ve typed.
   * On completion, the app shows:

     * ⏱️ Words Per Minute (WPM)
     * 🎯 Accuracy percentage
4. Click 🔁 **Restart** to load a new sentence.



## ✨ Future Ideas

* Add difficulty levels
* Leaderboard with scores
* Theme switcher (light/dark mode)
* Real-time typing competition with friends



## 🙋‍♀️ Author

**Athira**
💼 [GitHub Profile](https://github.com/typodude)



## 📄 License

This project is licensed under the [MIT License](LICENSE)




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
