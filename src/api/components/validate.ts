import * as Joi from 'joi';

export default {
    getComponentByName: {
        params: {
            name: Joi.string().required(),
        }
    }
};
