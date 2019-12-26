'use strict';

import path = require('path');
import {createServer, KoaDriver, RoutingControllersOptions} from 'routing-controllers';

import compose = require('koa-compose');
// @ts-ignore
import pkg = require('../../package.json');

export interface RoutingControllersMiddlewareOptions {
  options: RoutingControllersOptions;
  disableResponseTransform?: boolean;
}

export default ({options}: RoutingControllersMiddlewareOptions, app) => {
  const driver = new KoaDriver();
  if (!options) {
    throw new Error(`[${(pkg as any).name}] options is required on config`);
  }
  if (!options.controllers) {
    options = {...options, controllers: [`${app.baseDir}/app/routing-controller/*${path.extname(__filename)}`]};
  }
  const routingControllersApp = createServer(driver, options);
  const routingControllersMiddlewareArr = routingControllersApp.middleware;
  return compose(routingControllersMiddlewareArr);
};
