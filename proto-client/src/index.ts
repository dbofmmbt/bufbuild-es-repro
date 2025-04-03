import { createClient } from "@connectrpc/connect";
import { createGrpcTransport } from "@connectrpc/connect-node";
import { TestService } from "proto-lib";
const transport = createGrpcTransport({
  baseUrl: "test_123",
});

export const client = createClient(TestService, transport);

async function test() {
  const request = {
    id: "123",
    content: "Hello from protobuf-es!",
    timestamp: Math.floor(Date.now() / 1000),
    tags: ["test", "example"],
  };
  const response = await client.getTestMessage(request);

  // can't access any of TestMessage properties

  response.content

  response.id
  // response.content

  console.log(typeof response);
  console.log(response);
}

test();
