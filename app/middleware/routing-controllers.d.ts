/// <reference types="koa" />
import { RoutingControllersOptions } from 'routing-controllers';
import compose = require('koa-compose');
export interface RoutingControllersMiddlewareOptions {
    options: RoutingControllersOptions;
    disableResponseTransform?: boolean;
    mountPath?: string;
}
declare const _default: ({ options, mountPath }: RoutingControllersMiddlewareOptions, app: any) => compose.Middleware<import("koa").ParameterizedContext<unknown, unknown>>;
export default _default;
