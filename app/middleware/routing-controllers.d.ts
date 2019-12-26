/// <reference types="koa" />
import { RoutingControllersOptions } from 'routing-controllers';
import compose = require('koa-compose');
export interface RoutingControllersMiddlewareOptions {
    options: RoutingControllersOptions;
    disableResponseTransform?: boolean;
}
declare const _default: ({ options }: RoutingControllersMiddlewareOptions, app: any) => compose.Middleware<import("koa").ParameterizedContext<unknown, unknown>>;
export default _default;
