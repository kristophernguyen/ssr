import IRoute from '../../helper/route';
import Logger from '../../helper/logger';
import { Request } from 'hapi';
import validate from './validate';

export default class ComponentRoutes implements IRoute {
    public async register(server: any): Promise<any> {
        return new Promise(resolve => {
            Logger.info('Component Routes - getting components routes.');
            server.route([
                {
                    method: 'GET',
                    path: '/api/component/{name}',
                    options: {
                        handler: function (request:Request, reply:any) {
                            var viewName = request.params.name;
                            return reply.view(viewName);
                            
                        },
                        validate: validate.getComponentByName,
                        description: 'getting component by name',
                        tags: ['api', 'components'],
                        auth: false,
                    },
                }
            ]);

            Logger.info('Component Route - Finish adding component routes.');
            resolve();
        });
    }
}
