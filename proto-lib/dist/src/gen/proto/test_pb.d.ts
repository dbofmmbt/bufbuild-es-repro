import type {
  GenFile,
  GenMessage,
  GenService,
} from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file proto/test.proto.
 */
export declare const file_proto_test: GenFile;
/**
 * @generated from message test.TestMessage
 */
export type TestMessage = Message<"test.TestMessage"> & {
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
};
/**
 * Describes the message test.TestMessage.
 * Use `create(TestMessageSchema)` to create a new message.
 */
export declare const TestMessageSchema: GenMessage<TestMessage>;
/**
 * @generated from service test.TestService
 */
export declare const TestService: GenService<{
  /**
   * @generated from rpc test.TestService.GetTestMessage
   */
  getTestMessage: {
    methodKind: "unary";
    input: typeof TestMessageSchema;
    output: typeof TestMessageSchema;
  };
}>;
