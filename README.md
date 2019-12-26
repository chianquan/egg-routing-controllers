# egg-routing-controllers

Mount [routing-controllers](https://github.com/typestack/routing-controllers) package as an egg middleware.


## Install

```bash
$ npm i @pagodas/egg-routing-controllers --save
$ npm i routing-controllers@0.8.0 class-transformer^0.2.3 class-validator@0.10.1 --save
```

For extensible,we also need install `egg` , `routing-controllers@0.8.0` , `class-transformer^0.2.3` , `class-validator@0.10.1` .

`routing-controllers@0.8.0` and `egg` is our base peerDependencies.
`class-transformer^0.2.3` , `class-validator@0.10.1` is `routing-controllers@0.8.0`'s base peerDependencies.

## Usage

```js
// {app_root}/config/plugin.js
exports.routingControllers = {
  enable: true,
  package: '@pagodas/egg-routing-controllers',
};
```

## Configuration

Support all configurations in [routing-controllers](https://github.com/typestack/routing-controllers).

```js
// {app_root}/config/config.default.js

  config.routingControllers = {
    options: {},// config for routing-controllers create.
    disableResponseTransform: true, // hack routing-controllers to disable transform response,default false.(It's useful for mongoose response otherwise ObjectId may cause error)
  };
```

## Questions & Suggestions

Please open an issue [here](https://github.com/chianquan/egg-routing-controllers/issues).

## License

[MIT](LICENSE)

