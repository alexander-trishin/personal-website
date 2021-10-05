import { getJestModuleNameMapper } from './config';

const configuration = {
    bail: 3,
    clearMocks: true,

    collectCoverageFrom: [
        'source/**/*.{ts,tsx}',
        '!source/index.tsx',
        '!**/styles/**',
        '!**/*.stories.tsx'
    ],

    coverageDirectory: 'coverage',
    coverageProvider: 'babel',
    coverageReporters: ['json', 'text', 'lcov', 'clover'],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: -10
        }
    },

    maxWorkers: '50%',

    moduleNameMapper: {
        '\\.(pcss)$': '<rootDir>/config/jest/styleMock.ts',
        '\\.(jpg|jpeg|bmp|png|gif|svg)$': '<rootDir>/config/jest/fileMock.ts',
        ...getJestModuleNameMapper()
    },

    setupFilesAfterEnv: ['<rootDir>/config/jest/setupTests.ts'],

    testEnvironment: 'jsdom',
    testResultsProcessor: 'jest-sonar-reporter'
};

export default configuration;
