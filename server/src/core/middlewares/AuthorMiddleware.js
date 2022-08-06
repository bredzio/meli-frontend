export const authorMiddleware = (req, res, next) => {
    res.author = {
        name: 'Bruno',
        lastname: 'Redzio'
    };
    next();
};