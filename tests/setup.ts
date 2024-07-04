import '@testing-library/jest-dom/vitest';
import 'cross-fetch/polyfill';
import { server } from './mocks/server';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
beforeAll(() => server.close());
