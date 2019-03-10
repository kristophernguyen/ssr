import * as Hapi from 'hapi';

import UserRoutes from './api/users/routes';
import Logger from './helper/logger';
import ComponentRoutes from './api/components/routes';

export default class Router {
    public static async loadRoutes(server: Hapi.Server): Promise<any> {
        Logger.info('Router - Start adding routes.');
        await new UserRoutes().register(server);
        await new ComponentRoutes().register(server);
        Logger.info('Router - Finish adding routes.');
    }
}
