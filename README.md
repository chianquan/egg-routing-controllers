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
    mountPath:'./app/routing-controller' // controller path.If relative then base app.baseDir.default value ./app/routing-controller.If options have controllers then ignore this config.
  };
```

warming: Don't set options.controllers for routing-controllers unless you know what it is.
egg run .ts files when debug and run .js files in production.
Files in mouthPath will priority use the .js file ,the same name .ts file will ignored.
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

