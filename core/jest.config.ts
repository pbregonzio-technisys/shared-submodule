import type { Config } from '@jest/types';
import baseConfig from '../../jest.config.base';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore -- temporary solution, tsconfig exclude declaration is having no effect on this file
import pkg from './package.json';

const config: Config.InitialOptions = {
  ...baseConfig,
  roots: ['src'],
  setupFilesAfterEnv: ['./jest.setup.ts'],
  name: pkg.name,
  displayName: pkg.name,
};

export default config;
