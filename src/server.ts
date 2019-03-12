// import * as Hapi from 'hapi';
// const Hapi = require('hapi');
import Hapi = require('hapi');
import * as DotEnv from 'dotenv';

import Logger from './helper/logger';
import Plugin from './plugin';
import Router from './router';
import { required } from 'joi';

export default class Server {
    
    private static _instance: any;
    public static async start(): Promise<any> {
        try {
            DotEnv.config({
                path: `${process.cwd()}/.env`,
            });

            Server._instance = new Hapi.Server({
                port: process.env.PORT,
            });
            
            await this.addVision();
            await Plugin.registerAll(Server._instance);
            await Router.loadRoutes(Server._instance);

            await Server._instance.start();

            Logger.info('Server - Up and running!');
// tslint:disable-next-line: max-line-length
            Logger.info(`Visit: http://${process.env.HOST}:${process.env.PORT}/api/components/{name} for component REST API`);
            Logger.info(`Visit: http://${process.env.HOST}:${process.env.PORT}/documentation for Swagger docs`);

            return Server._instance;
        } catch (error) {
            Logger.info(`Server - There was something wrong: ${error}`);

            throw error;
        }
    }
  
    public static async addVision() {  
        await this._instance.register({
          plugin: require('vision')  
        });
        this._instance.views(
            {
                engines: {
                    html: require('handlebars')
                },
                relativeTo: __dirname,
                path: 'templates'
            }
        );
        
    }
    public static stop(): Promise<Error | void> {
        Logger.info(`Server - Stopping!`);

        return Server._instance.stop();
    }

    public static async recycle(): Promise<any> {
        await Server.stop();
        return await Server.start();
    }

    public static instance(): any {
        return Server._instance;
    }

    public static async inject(options: any): Promise<any> {
        return await Server._instance.inject(options);
    }
}
