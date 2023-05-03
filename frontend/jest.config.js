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
    roots: ['<rootDir>'],
    modulePaths: ['<rootDir>'],
    moduleDirectories: ['node_modules'],
    testEnvironment: 'jest-environment-jsdom',
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/.vercel/', '<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
    transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', {presets: ['next/babel']}],
    },
    setupFilesAfterEnv: [
        '@testing-library/jest-dom',
        '@testing-library/jest-dom/extend-expect',
        'resize-observer-polyfill/dist/ResizeObserver.global'
    ],
}

module.exports = createJestConfig(customJestConfig)