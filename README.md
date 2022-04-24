# gcp-logging-client
Fully configured Logging client for GCP

## Usage

```typescript
import {Index} from "@yashghatti-auto/Index";

let logger: Index = new Index("app-name");

logger.info("Test Message");
logger.debug("Sample",{ 
    eventType: "something"
})
```