# gcp-logging-client
Fully configured Logging client for GCP

## Usage

```typescript
import {GcpLogger} from "@yashghatti-auto/GcpLogger";

let logger: GcpLogger = new GcpLogger("app-name");

logger.info("Test Message");
logger.debug("Sample",{ 
    eventType: "something"
})
```