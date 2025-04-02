import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * @generated from message test.TestMessage
 */
export declare class TestMessage extends Message<TestMessage> {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string content = 2;
     */
    content: string;
    /**
     * @generated from field: int32 timestamp = 3;
     */
    timestamp: number;
    /**
     * @generated from field: repeated string tags = 4;
     */
    tags: string[];
    constructor(data?: PartialMessage<TestMessage>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "test.TestMessage";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TestMessage;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TestMessage;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TestMessage;
    static equals(a: TestMessage | PlainMessage<TestMessage> | undefined, b: TestMessage | PlainMessage<TestMessage> | undefined): boolean;
}
