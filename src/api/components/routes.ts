import IRoute from '../../helper/route';
import Logger from '../../helper/logger';
import validate from './validate';
import ComponentController from './controller';

export default class ComponentRoutes implements IRoute {
    public async register(server: any): Promise<any> {
        return new Promise(resolve => {
            Logger.info('Component Routes - getting components routes.');
            const controller = new ComponentController();
            server.route([
                {
                    method: 'GET',
                    path: '/api/component/atomic/{name}',
                    options: {
                        handler: controller.getComponent,
                        validate: validate.getComponentByName,
                        description: 'getting component by name',
                        tags: ['api', 'components'],
                        auth: false,
                    },
                },
                {
                    method: 'GET',
                    path: '/api/component/mosaic/{deviceType}/{listingId}',
                    options: {
                        handler: controller.getMosaic,
                        validate: validate.getMosaic,
                        description: 'getting mosaic component',
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
