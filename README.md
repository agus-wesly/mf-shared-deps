## Microfrontend share dependencies demo

By default if we have same dependencies accross app, that dependencies will be loaded multiple times in the host. To prevent that, we can adjust webpack config settings to only load particular dependencies once.

For instance, i have faker-js both in my remote. To load it only once just add this line in the webpack.config.js inside the remote app.

```js
shared: {
  ...deps,
  react: {
    singleton: true,
    requiredVersion: deps.react,
  },
  "react-dom": {
    singleton: true,
    requiredVersion: deps["react-dom"],
  },

  // This line
  "@faker-js/faker": {
    singleton: true,
    requiredVersion: deps["@faker-js/faker"],
  },
},

```
This basically tells webpack to share @faker-js module accross our app. Hence, this module will only loaded once. But pay attention if **you have different version of module** in your app. In that case, you might not want to share that dependencies.

Before adding shared module (Faker js called twice) : 
![Screenshot_2024-04-24_13-59-30](https://github.com/agus-wesly/mf-shared-deps/assets/98297487/218fde18-c247-4ae9-8f77-81314109e44a)


After adding shared module (Faker js called only once) : 
![Screenshot_2024-04-24_14-00-12](https://github.com/agus-wesly/mf-shared-deps/assets/98297487/aea13104-7b9b-43b0-9700-4e2aa78ca870)

