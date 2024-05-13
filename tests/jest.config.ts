import type { Config as JestConfig } from 'jest';
import nextJest from 'next/jest';

const createJestConfig = nextJest({
    dir: './'
});

const config: JestConfig = {
    preset: 'ts-jest',

    rootDir: '..',

    setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.ts'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    },

    testEnvironment: 'jest-environment-jsdom',

    testPathIgnorePatterns: ['e2e']
};

export default createJestConfig(config);
