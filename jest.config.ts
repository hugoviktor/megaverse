import type {Config} from '@jest/types';
// Sync object
const config: Config.InitialOptions = {
    verbose: true,
    transform: {},
    preset: "ts-jest",
    resolver: "ts-jest-resolver"
};
export default config;