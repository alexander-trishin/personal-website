import getTsconfigPaths from './getTsconfigPaths';

const getJestModuleNameMapper = () => {
    const { base, paths } = getTsconfigPaths();

    return Object.entries(paths).reduce(
        (moduleMap, [name, relative]) => ({
            ...moduleMap,
            [`^${name}(.*)$`]: `<rootDir>/${base}/${relative}$1`
        }),
        {}
    );
};

export default getJestModuleNameMapper;
