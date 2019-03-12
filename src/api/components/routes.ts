import IRoute from '../../helper/route';
import Logger from '../../helper/logger';
import { Request } from 'hapi';
import validate from './validate';
import ComponentController from './controller';

export default class ComponentRoutes implements IRoute {
    public async register(server: any): Promise<any> {
        return new Promise(resolve => {
            Logger.info('Component Routes - getting components routes.');
            var controller = new ComponentController();
            server.route([
                {
                    method: 'GET',
                    path: '/api/component/atomic/{name}',
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
                },
                {
                    method: 'GET',
                    path: '/api/component/mosaic/{listingId}',
                    options: {
                        handler: function (request:Request, reply:any) {
                            var listingIdStr = request.params.listingId;
                            var listingId = parseInt(listingIdStr, 10);
                            controller.getMosaic(listingId).then(x=>{
                                return reply.view("component1", x);
                            });
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
