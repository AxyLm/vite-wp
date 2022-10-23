/// <reference types="vite/client" />

declare module '*.vue' {
  const Component: ReturnType<typeof defineComponent>;
  export default Component;
}

declare module '*.md' {
  const Component: ReturnType<typeof defineComponent>;
  export default Component;
}
interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly VITE_APP_DEV: string;
  readonly VITE_APP_TITLE: string;
  readonly VITE_APP_ENV: string;
  readonly VITE_APP_SSO_KEY: string;
  readonly VITE_APP_CORE_URL: string;
  readonly VITE_APP_SSO_DOMAIN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface AppModule {
  install: (app: App<Element>) => void;
}

declare module 'nprogress' {
  const start: () => void;
  const done: () => void;
  export { start, done };
}
