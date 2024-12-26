import { RoutingControllersOptions } from "routing-controllers";
export interface RoutingControllersMiddlewareOptions {
    options: RoutingControllersOptions;
    disableResponseTransform?: boolean;
    mountPath?: string;
}
declare const _default: ({ options, mountPath, }: RoutingControllersMiddlewareOptions, app: any) => import("koa").Middleware<unknown, unknown, any>;
export default _default;
