export declare const client: import("@connectrpc/connect").Client<GenService<{
    getTestMessage: {
        methodKind: "unary";
        input: typeof import("proto-lib").TestMessageSchema;
        output: typeof import("proto-lib").TestMessageSchema;
    };
}>>;
