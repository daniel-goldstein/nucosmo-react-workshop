# NUCoSMO React Workshop
Ever wanted to create a webapp but didn't know where to start? Well, I have. This walkthrough is meant to provide an elementary introduction to the React framework. Hopefully you will leave with some familiarity of the framework with the confidence that you can begin to learn and discover more on your own. 

By iterating through a simple project, we'll cover the following core principles/styles of React: the component model (stateless/stateful and dumb/smart), the component lifecycle/asynchronicity, and libraries. Although knowledge of Javascript is essential to ultimately writing React webapps, we will provide all the code with directions for plugging in so the focus is on the workings of React. Any experience level is welcome!

In this tutorial, we'll progress through the development of a simple joke application, with checkpoints along the way when we hit major milestones. We'll develop a site that shows the user a joke with the ability to cycle through a list of jokes, save them and even fetch the content from an API.

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

### Creating Your Own Component

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

Now, in `App.js`, paste `import JokeCard from './JokeCard;'` along with the other imports, and replace `<div>Hi there!</div>` with `<JokeCard />` to render it!

### Smart vs Dumb Components

This is great and all, but let's take a minute to think about logical organization. Right now, our `JokeCard` component is responsible for both its content and the way it is rendered (it is just a simple `div` for now but we will soon make it more involved and this point will become more clear). An important pattern in React is the notion of having _smart_ components, and _dumb_ components. The smart components are concerned with what data is available on the page. The dumb components are given data and only worry about how it is displayed. We can turn our `JokeCard` into a dumb component by providing its content via its parent component, `App`.

Move the constant `JOKE` from the `JokeCard` component to the `App` component. Then, instead of `<JokeCard />`, write `<JokeCard joke={JOKE} />`. In `JokeCard`, instead of `{JOKE}`, write `{this.props.joke}`. You should be able to refresh your browser and the page should look the same.

In React, we can pass information to child components by assigning key-value pairs in the JSX we use to render them, and then access that information in the `this.props` field of the child component. By making this change, we made sure the `JokeCard` component is only concerned how to render a joke, both simplifying the code and enabling reuse.

### Using Libraries

With this limited knowledge so far, we can already start using some libraries. In order to make our `JokeCard` a little more card-like, we're going to be using the Card component from Google's material-ui library. We can install this through `npm` by executing the following command:

```bash
  > npm install @material-ui/core
```

We can look at the documentation for [Card](https://material-ui.com/demos/cards/) to get an understanding of how to use it and what supporting components we need to use.
Now, at the top of the `JokeCard` component, write

```javascript
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
```

and in the body of the `render`, replace the current `div` with

```javascript
<Card>
  <CardContent>
    {this.props.joke}
  </CardContent>
</Card>
```

If you look your browser again, you should see one long white block. Well that doesn't look quite right. If you highlight, you'll see the text is actually being rendered, but it's the same white color as the card. This is because the CSS in the `header` element of the `App` component is propogating down. We need to provide style to our card to override that and get the style we want. 

We can add style to a component in two ways: writing a CSS class and using the `className` prop, or by providing an object of CSS-like styling commands as the `style` prop. Though the former is generally advised for reuse and code clarity, we're going to use the `style` approach since it is a small modification as well as for demonstrative purposes. To change the text color (and the max width while we're at it), add the following line inside the `<Card>` tag in `JokeCard.js`:

```javascript
style={{color: 'black', maxWidth: '500px'}}
```

The entire `JokeCard.js` file should now look like this:

```javascript
import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class JokeCard extends Component {
  render() {
    return (
      <Card style={{color: 'black', maxWidth: '500px'}}>
        <CardContent>
          {this.props.joke}
        </CardContent>
      </Card>
    );
  }
}

export default JokeCard;
```

If you're not me you might not find this joke so funny, so we're going to add a Next button to our `JokeCard`. It won't do anything yet as we will be implementing the functionality in Stage 2. Again, we'll rest on the material-ui library to provide us with a button. We can look at the [Card](https://material-ui.com/demos/cards/) and [Button](https://material-ui.com/demos/buttons/) documentation to see how we can use buttons in our cards.

We'll add the following two imports to the `JokeCard` file:

```javascript
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
```

We'll then add the following JSX beneath the `CardContent` component.

```javascripts
<CardActions>
  <Button variant="contained" color="primary">
    Next
  </Button>
</CardActions>
```

We now have a button! If you want the button centered instead of pushed off to the side, add the following class to `App.css`:

```css
.Center-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
```

and the following `className` prop to the `CardActions` tag in `JokeCard.js`:

```javascript
className="Center-row"
```

The CSS we just added uses Flexbox to align child components. We won't go much into Flexbox or CSS in general in this tutorial, but you can read more about it [here](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).

Congrats! We've just reached a checkpoint. We've learned how to write and render stateless components, pass them information via props to separate smart/dumb components as well as use external libraries. If something went awry, you can compare with `stage-1-stateless` in this repo which is synced up to this point. Continue on to the next section to learn how to incorporate state and responsiveness to make our React application \~react\~.


## Stage 2 - Implementing State

In this stage, we are going to add callbacks to our `JokeCard` buttons, and loop through a list of hardcoded jokes once a user has rated the currently displayed one. 

The first step is to change our `JOKE` constant in `App.js`, with a list of jokes:

```javascript
const JOKES = [                                                                
  "How do you know if a Mathematician is extroverted? He looks at your shoes!",
  "Parallel lines have so much in common... it’s a shame they’ll never meet!", 
  "My girlfriend is the square root of -100. She's a perfect 10, but purely imaginary.",
  "I just saw my math teacher with a piece of graph paper. I think he must be plotting something."
]
```

We must then figure out which joke we need to pass down to our `JokeCard` component. We'll do this by making our `App` component _stateful_. Components, in addition to having `this.props`, can also have `this.state`, very much like a `WorldState`. So the `state` of our `App` component will just be the index of the current joke in `JOKES`. We can set the initial state of our component by adding a constructor. Add the following code snippet above the `render` function in your `App` component.

```javascript
constructor(props) {                                                         
    super(props)
  
    this.state = {                                                             
      jokeIndex: 0                                                             
    }
  }
```

The constructor is called when the component is first called by a parent component, making it the perfect place to set our component's initial state as well as anything else we want to set at the beginning of this component's life.

We can then modify the render so instead of passing `joke={JOKE}`, we write

```javascript
joke={JOKES[this.state.jokeIndex]}
```

The page in your browser should still look the same. But now that we have state, how do we change it? We need some handler like an `on-click` that will change the joke index when we click on the button. We'll write this handler now. Paste the following function in your `App` component.

```javascript
advanceJokeIndex = () => {                                                   
    this.setState({
      jokeIndex: (this.state.jokeIndex + 1) % JOKES.length                     
    })
  }
```

We've just defined a value called `advanceJokeIndex` as a function with no inputs that calls the React `setState` function to change the state of our component. We give `this.setState` an object with the field of our state that we want to update (`jokeIndex`) and its new value (modding with the length of jokes so that we cycle through the list).

IMPORTANT: Always use `this.setState` when modifying state instead of trying to set `this.state` directly. React needs to know about state changes so it can perform the necessary operations/optimizations to generate the correct HTML, and it is notified about state changes through `this.setState`.

Now that we have a handler to change `jokeIndex`, we need to give it to our button. We'll pass an additional prop to `JokeCard` that we'll call `onButtonClick`. Add the following prop to the `JokeCard` tag:

```javascript
onButtonClick={this.advanceJokeIndex}
```

As it so happens, the material-ui `Button` has a prop called `onClick`, which accepts a callback (or handler) to call whenever it is clicked. In `JokeCard`, pass the prop we just defined as a prop to the `Button` component.

```javascript
onClick={this.props.onButtonClick}
```

Now, if you go to your browser, you should be able to click through all the jokes we just added! Having stateful/stateless components works hand-in-hand with the notion of smart/dumb components and hopefully now the motivation for refactoring our `JokeCard` earlier is clear.

Congrats! You've hit another checkpoint. You've learned how to create stateful components and manage that state through `setState` and callbacks. You can see the full changes in the `stage-2-state` project or move on to the next stage where we'll tackle asynchronous events and fetching data from live sources instead of hard-coding our jokes.

## Stage 3 - Going Async

It is pretty limiting to have to hard-code jokes into the source code of our application. In this section, we'll utilize the API that [Josh Spicer](https://github.com/joshspicer) set up to fetch jokes on the fly.

Since our data's coming from somewhere else, we're going to have to change our `App`'s state. We'll have to handle the case where we have a joke and when we've not yet received one from the server. So our `this.state.joke` will either be `null` or a String we've received from a server message, which is defined as:

```{"number": Number, "joke": String, "animal": String}```

Let's update our constructor to reflect the new initial state. Replace your assignment of `this.state` in the constructor with the following:

```javascript
this.state = {
  joke: null
}
```

So how do we actually fetch this data? We can use React's built-in `fetch`. You can delete the `advanceJokeIndex` function we wrote earlier and instead replace it with this:

```javascript
fetchJoke = () => {
    fetch(JOKE_API)
      .then(response => response.json())
      .then(message => this.setState({ joke: message['joke'] }))
}
```

You can also then replace the `JOKES` list with the URL that we will `fetch` the jokes from:

```javascript
const JOKE_API = "https://api.joshspicer.com/cosmo"
```

A lot is happening in `fetchJoke` right now, so if it looks foreign to you, don't worry. Here are some resources for [HTTP requests](https://www.codecademy.com/articles/http-requests) and [Javascript promises](https://javascript.info/promise-basics). The main takeaway from that function is that it is _asynchronous_, meaning our application will not wait for our request to return with a joke before it continues doing what it was doing. What we are actually saying is telling React: "send a GET request to that URL, and when it sends a response back, _then_ turn that response into JSON, _then_ use `setState` to set our joke to that response" (I'm looking at you, `on-receive`).

The next step is figuring out, where should we call `fetchJoke`? Well one of the answers is as our button click callback, since we deleted `advanceJokeIndex`. So let's first replace

```javascript
onButtonClick={this.advanceJokeIndex}
```

with

```javascript
onButtonClick={this.fetchJoke}
```

But what about the first joke? Here's where we'll introduce another React method: `componentDidMount`. Together with the `constructor` and `render`, these methods make up key aspects of the [React Component Lifecycle](https://www.tutorialspoint.com/reactjs/reactjs_component_life_cycle.htm), built-in methods that React calls in order once a component has been created and whenever it encounters updates throughout its life. Insert the following function into your `App` component.

```javascript
componentDidMount() {
  this.fetchJoke()
}
```

Once our `App` component has been created, React will call the `componentDidMount` function, making this a perfect place to put asynchronous setup, like requesting a joke!

Now, since we've changed our state, we have to change our `render`. Replace the current `JokeCard` tag with this snippet:

```javascript
{ 
  this.state.joke
  ?
  <JokeCard joke={this.state.joke}
            onButtonClick={this.fetchJoke} />
  :
  "Waiting for a joke..."
}
```

Here, we're using the Javascript ternary operator to say: if `this.state.joke` is not null (technically if it is "truthy"), render a `JokeCard`. Otherwise, render "Waiting for a joke".

Congrats! You've reached the final checkpoint. In this section, you got to see how you can do things asynchronously in React and glimpsed a bit more at the component lifecycle. If something went wrong, you can check your code against `stage-3-async` which is synced up to this point.

## Onward

We've covered a lot of the basics of a React application. Now try to take these pieces into something more complex! A few suggestions would be taking this app and adding buttons for like/dislike. Maybe depending on whether someone likes or dislikes a joke, you can save that to a list that is rendered along-side the joke-card (look at material-ui's [List](https://material-ui.com/demos/lists/)), or do something completely new! Find some other fun libraries or try to make things from scratch. Whatever you decide to do, keep in mind the smart/dumb component pattern and, as always, may the design recipe be with you.




