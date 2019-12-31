'use strict';

import {createServer, KoaDriver, RoutingControllersOptions} from 'routing-controllers';
import fs = require('fs');
import path = require('path');


import compose = require('koa-compose');
// @ts-ignore
import pkg = require('../../package.json');

export interface RoutingControllersMiddlewareOptions {
  options: RoutingControllersOptions;
  disableResponseTransform?: boolean;
  mountPath?: string;
}

export default ({options, mountPath = './app/routing-controller'}: RoutingControllersMiddlewareOptions, app) => {
  const driver = new KoaDriver();
  if (!options) {
    throw new Error(`[${(pkg as any).name}] options is required on config`);
  }
  if (!options.controllers) {
    const dirPath = path.isAbsolute(mountPath) ?
      path.resolve(mountPath)
      :
      path.resolve(path.join(app.baseDir, mountPath));
    const files = fs.readdirSync(dirPath);
    const jsFiles = files.filter((filePath) => path.extname(filePath) === '.js');
    const tsFiles = files.filter((filePath) => {
      if (path.extname(filePath) !== '.ts') {
        return false;
      }
      if (/\.d\.ts$/.test(filePath)) {
        return false;
      }
      const sameNameJsPath = filePath.slice(0, filePath.length - 3) + '.js';
      return !jsFiles.includes(sameNameJsPath);
    });
    options = {...options, controllers: ([] as string[]).concat(jsFiles, tsFiles).map((s) => `${dirPath}/${s}`)};
  }
  const routingControllersApp = createServer(driver, options);
  const routingControllersMiddlewareArr = routingControllersApp.middleware;
  return compose(routingControllersMiddlewareArr);
};
