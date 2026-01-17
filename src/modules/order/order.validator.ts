import Joi from 'joi';

const options = {
    errors: {
        wrap: {
            label: '',
        },
    },
};

export const validateCreateOrder = (orderData: any) => {
    const schema = Joi.object({
        id: Joi.string()
            .guid({ version: 'uuidv4' })
            .optional()
            .messages({ 'string.guid': 'User ID must be in UUID format' }),
        sender_name: Joi.string().min(1).required().messages({
            'string.min': 'Sender name should at least minimum 1 character',
            'any.required': 'Sender name is required',
        }),
        recipient_name: Joi.string().min(1).required().messages({
            'string.min': 'Recipient name should at least minimum 1 character',
            'any.required': 'Recipient name is required',
        }),
        origin: Joi.string().min(1).max(255).required().messages({
            'string.min': 'Origin should at least minimum 1 character',
            'string.max': "Origin value is too long",
            'any.required': 'Origin is required',
        }),
        destination: Joi.string().min(1).max(255).required().messages({
            'string.min': 'Destination should at least minimum 1 character',
            'string.max': "Destination value is too long",
            'any.required': 'Destination is required',
        }),
    });

    return schema.validate(orderData, options);
};
