import {LoggingBunyan} from "@google-cloud/logging-bunyan";

export class GcpLogger {

    private logger: LoggingBunyan;

    private constructor() {
        this.logger = new LoggingBunyan();

    }



}