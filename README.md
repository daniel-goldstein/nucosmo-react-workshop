# NUCoSMO React Workshop
Ever wanted to create a webapp but didn't know where to start? Well, I have. This walkthrough is meant to provide an elementary introduction to the React framework. Hopefully you will leave with some familiarity of the framework with the confidence that you can begin to learn and discover more on your own. 

By iterating through a simple project, we'll cover the following core principles/styles of React: the component model (stateless/stateful and dumb/smart), the component lifecycle/asynchronicity, and libraries. Although knowledge of Javascript is essential to ultimately writing React webapps, we will provide all the code with directions for plugging in so the focus is on the workings of React. Any experience level is welcome!

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
