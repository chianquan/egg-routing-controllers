declare module 'egg' {
  import {RoutingControllersMiddlewareOptions} from './app/middleware/routing-controllers';

  export interface EggAppConfig {
    routingControllers: RoutingControllersMiddlewareOptions;
  }
}
