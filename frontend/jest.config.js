// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest')

const createJestConfig = nextJest({
    dir: './',
})

const customJestConfig = {
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',

        '^@/public/(.*)$': '<rootDir>/public/$1',

        '^__mocks__/(.*)$': '<rootDir>/__mocks__/$1',
    },
    setupFilesAfterEnv: ['./jest.setup.ts'],
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: [
        './src/**/*.{js,jsx,ts,tsx}',
        '!./src/**/_*.{js,jsx,ts,tsx}',
        '!**/*.d.ts',
        '!**/node_modules/**',
    ],
    coverageThreshold: {
        global: {
            branches: 30,
            functions: 30,
            lines: 30,
            statements: 30,
        },
    },
    testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(customJestConfig)