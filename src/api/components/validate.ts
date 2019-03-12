import * as Joi from 'joi';

export default {
    getComponentByName: {
        params: {
            name: Joi.string().required(),
        }
    },
    getMosaic: {
        params: {
            listingId: Joi.string().required(),
            deviceType: Joi.string().required()
        }
    }
};
