import {RoutingControllersMiddlewareOptions} from './app/middleware/routing-controllers';

// @ts-ignore
declare module 'egg' {

  export interface EggAppConfig {
    routingControllers: RoutingControllersMiddlewareOptions;
  }
}
