import type { NextMiddleware } from 'next/server';

const compose = (...middlewares: NextMiddleware[]) => {
    const pipeline: NextMiddleware = async (request, event) => {
        for (const middleware of middlewares) {
            const result = await middleware(request, event);

            if (result) return result;
        }
    };

    return pipeline;
};

export { compose };
