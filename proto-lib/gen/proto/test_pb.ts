// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file proto/test.proto (package test, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message test.TestMessage
 */
export class TestMessage extends Message<TestMessage> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * @generated from field: string content = 2;
   */
  content = "";

  /**
   * @generated from field: int32 timestamp = 3;
   */
  timestamp = 0;

  /**
   * @generated from field: repeated string tags = 4;
   */
  tags: string[] = [];

  constructor(data?: PartialMessage<TestMessage>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "test.TestMessage";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "content", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "timestamp", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "tags", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TestMessage {
    return new TestMessage().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TestMessage {
    return new TestMessage().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TestMessage {
    return new TestMessage().fromJsonString(jsonString, options);
  }

  static equals(a: TestMessage | PlainMessage<TestMessage> | undefined, b: TestMessage | PlainMessage<TestMessage> | undefined): boolean {
    return proto3.util.equals(TestMessage, a, b);
  }
}

