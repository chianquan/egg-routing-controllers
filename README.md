# egg-routing-controllers

Mount [routing-controllers](https://github.com/typestack/routing-controllers) package as an egg middleware.


## Install

```bash
$ npm i @pagodas/egg-routing-controllers --save
```


For extensible,we also need install `routing-controllers@0.8.0` , `class-transformer@^0.2.3` , `class-validator@0.10.1` .

`routing-controllers@0.8.0` is our base peerDependencies.
`class-transformer^0.2.3` , `class-validator@0.10.1` is `routing-controllers@0.8.0`'s base peerDependencies.


```bash
$ npm i routing-controllers@0.8.0 class-transformer@^0.2.3 class-validator@0.10.1 --save
```


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

We can add controller files to routingControllers.options.controllers?:Array.

Also if leave routingControllers.options.controllers=undefined ,it will auto inject `app/routing-controller/` as the default controller directory.

## controller example

```js
// file app/routing-controller/util.ts

import {Ctx, Get, JsonController} from 'routing-controllers';
@JsonController()
export class UtilController {
@Get('/api/search')
  async search(@Ctx()ctx: Context) {
    return {};
  }
}
```

Just export your controller(created using `routing-controllers`).

## Questions & Suggestions

Please open an issue [here](https://github.com/chianquan/egg-routing-controllers/issues).

## License

[MIT](LICENSE)

