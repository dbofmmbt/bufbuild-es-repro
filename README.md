# protobuf-es-repro

This is a small setup to try to reproduce a problem I'm encountering while trying to wrap the bufbuild/es output into a npm library and using it in another project.

This repo doesn't exactly reproduce the same problem as I have, but it is very similar. At least locally, I see that the `response` variable from `./proto-client/src/index.ts` isn't being assigned with the right type and so I can't access the expected fields from the protobuf.