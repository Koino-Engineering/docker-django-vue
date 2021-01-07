/// <reference types="node" />

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace NodeJS {
    interface ProcessEnv {
        readonly NODE_ENV: "development" | "production" | "test";
    }
}
