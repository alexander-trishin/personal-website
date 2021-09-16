const getClientEnvironment = (publicUrl: string) => {
    return Object.keys(process.env)
        .filter(key => /^REACT_APP_/i.test(key))
        .reduce(
            (env, key) => ({
                ...env,
                [key]: process.env[key]
            }),
            {
                NODE_ENV: process.env.NODE_ENV ?? 'development',
                PUBLIC_URL: publicUrl
            }
        );
};

export default getClientEnvironment;
