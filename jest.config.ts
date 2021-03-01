import type { Config } from '@jest/types'

// Sync object
const config: Config.InitialOptions = {
    roots: ['<rootDir>/tests'],
    transform: {
        '^.+\\.tsx?$': 'babel-jest',
    },
    testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    setupFilesAfterEnv: ['./jest.setup.ts'],
}

export default config
