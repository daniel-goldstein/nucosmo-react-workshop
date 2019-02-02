# NUCoSMO React Workshop
Ever wanted to create a webapp but didn't know where to start? Well, I have. This walkthrough is meant to provide an elementary introduction to the React framework. Hopefully you will leave with some familiarity of the framework with the confidence that you can begin to learn and discover more on your own. 

By iterating through a simple project, we'll cover the following core principles/styles of React: the component model (stateless/stateful and dumb/smart), the component lifecycle/asynchronicity, and libraries. Although knowledge of Javascript is essential to ultimately writing React webapps, we will provide all the code with directions for plugging in so the focus is on the workings of React. Any experience level is welcome!

In this tutorial, we'll progress through the development of a simple joke application, with checkpoints along the way when we hit major milestones. We'll develop a site that shows the user a joke with the ability to like or dislike it, cycle through a list of jokes, save them and even fetch the content from an API.

If you want to get a head-start on the setup, complete the environment setup below so we can hit the ground running at the workshop!

## Environment Setup
1. First thing to do is make sure you have installed [Node](https://nodejs.org/en/download/)
2. Next, open up a Terminal window and in your favorite directory run

    ```bash
    > npm install -g create-react-app
    ```

3. When that's done, run

    ```bash
    > create-react-app first-project
    > cd first-project
    > npm start
    ```

You just made a webapp! It might not do much and only be accessible on your own computer but ya know, baby steps. If you open your favorite browser and go to `localhost:3000` (if it didn't automatically open one for you), you should see the lovely React template page.

What you really did there was use `create-react-app` to set up all the boilerplate of a React application that we decided to call `first-project` and started the development server. We'll keep this running in the background so that our local website can update in real-time as we change files.

4. The last thing you'll need to actually write code is a text editor. If you have one you already like, use that. If not, I recommend [Sublime](https://www.sublimetext.com/3) or [Webstorm](https://www.jetbrains.com/webstorm/download) if you want something a little beefier.

## Stage 1 - A stateless component
Let's start by examining the default React app we just set up. The main file we should be concerned with is `App.js`. Inside, we see a React _component_ called `App`. Components are the building blocks of the React framework. Each component must implement a `render` method, which tells React how _to-draw_ (I'm looking at you, big-bang) the component. The HTML-looking tags being returned are JSX, an XML-based language that allows you to specify the component's layout with `div`s and other components. Let's simplify the `App` component by removing the content inside the `header` tag, and replacing it with the following

```javascript
<div>Hi there!</div>
```

Your `App.js` should now look like this:

```javascript
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>Hi there!</div>
        </header>
      </div>
    );
  }
}

export default App;
```

Go back to your browser to see the change! Here, we have three nested elements. In JSX, you can use the `className` **prop** to provide a CSS class to style that element. Try to take a look at the `App.css` file, specifically the `App` and `App-header` classes to see how the current page is styled. Let's create our own component for our text and see how we can render that component inside `App`.

### Creating Our Own Component

Create a new file called `JokeCard.js` in the `src` directory and insert the following code:

```javascript
import React, { Component } from 'react';

const JOKE = "How do you know if a Mathematician is extroverted? He looks at your shoes!"

class JokeCard extends Component {
  render() {
    return (
      <div>{JOKE}</div>
    );
  }
}

export default JokeCard;
```

We've created a component that renders a joke. We can use `{}` to execute Javascript within the JSX. Otherwise, "joke" would be interpreted as plain text and not the constant we defined above.

Now, in `App.js`, place `import JokeCard from './JokeCard'` to import our component, and replace `<div>Hi there!</div>` with `<JokeCard />` to render it!

### Smart vs Dumb Components

This is great and all, but let's take a minute to think about logical organization. Right now, our `JokeCard` component is responsible for both its content and the way it is rendered (it is just a simple `div` for now but we will make it more involved and this point will become more clear). An important pattern in React is the notion of having "smart" components, and "dumb" components. The smart components are concerned with what data is available on the page, and the dumb components are given data and only worry about how it is displayed. We can turn our `JokeCard` into a "dumb" component by providing its content via its parent component, `App`.

Move the constant `JOKE` from the `JokeCard` component to the `App` component. Then, instead of `<JokeCard />`, write `<JokeCard joke={JOKE} />`. In `JokeCard`, instead of `{JOKE}`, write `{this.props.joke}`. You should be able to refresh your browser and the page should look the same.

In React, we can pass information to child components by assigning key-value pairs in the JSX we use to render them, and then access that information in the `this.props` field of the child component. By making this change, we made sure the `JokeCard` component is only concerned how to render a joke, both simplifying the code and enabling reuse.













