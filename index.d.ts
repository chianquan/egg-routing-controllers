import { RoutingControllersMiddlewareOptions } from './app/middleware/routing-controllers';
declare module 'egg' {
    interface EggAppConfig {
        routingControllers: RoutingControllersMiddlewareOptions;
    }
}
