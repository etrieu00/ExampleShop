import redis from 'redis';

const Client = redis.createClient({
    host: process.env.REDIS_HOST || 'redis',
    port: process.env.REDIS_PORT || 4000,
});

const CREATE_CART = 'CREATE_CART';

export {
    Client,
    CREATE_CART,
};