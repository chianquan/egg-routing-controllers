import {Application} from 'egg';
import {BaseDriver} from 'routing-controllers/driver/BaseDriver';

module.exports = (app: Application) => {
  const {config} = app;
  // hack disable routingControllers transformResult.It's unfriendly to mongoose.
  if (config.routingControllers && config.routingControllers.disableResponseTransform) {
    (BaseDriver.prototype as any).transformResult = (result) => result;
  }
  config.appMiddleware.push('routingControllers');
};
