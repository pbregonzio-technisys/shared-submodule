import type { Config } from '@jest/types';
import baseConfig from './jest.config.base';

// const projectPaths = [
//   '<rootDir>/packages/core/',
//   '<rootDir>/packages/markets/us/core/',
//   '<rootDir>/packages/markets/us/addons/digital-wellness/',
//   '<rootDir>/packages/markets/us/providers/payments/payveris/',
// ];

const config: Config.InitialOptions = {
  ...baseConfig,
  coverageDirectory: '<rootDir>/coverage',
  setupFilesAfterEnv: ['./jest.setup.ts'],
  // collectCoverageFrom: projectPaths.map((projectPath) => `${projectPath}src/**/*.{ts,tsx}`),
  // projects: projectPaths.map((projectPath) => `${projectPath}jest.config.ts`),
};

export default config;
