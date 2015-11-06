# ember-public-env

This addon enables using another file for configuring certain environment variables. This allows changing config/keys outside of the standard ember build process. By doing this, config/keys can change without having to rebuild the entire application.

`ember-public-env` reads from the endpoint `/--/env.js` on your ember application. This JavaScript file should contain an object, `window.__env` with properties for the config you need.

```js
window.__env = {
  API_KEY: 'foo'
}
```

The addon will source this in the head of `index.html`. This config can then be used where needed inside the emeber app.

```js
import Ember from 'ember';
import config from 'ember-public-env';

export default Ember.Controller.extend({
  stuff: config.API_KEY
});
```

## Local Development

In order to ensure dev/prod parity, the addon will read keys from `.env.public` in the root of the ember application. The `.env.public` file follows the [dotenv](https://www.npmjs.com/package/dotenv) format.

## Contributing

### Installation

* `git clone` this repository
* `npm install`
* `bower install`

### Running

* `ember server`
* Visit your app at http://localhost:4200.

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
