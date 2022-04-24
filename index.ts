import {LoggingBunyan} from "@google-cloud/logging-bunyan";
import * as bunyan from "bunyan";
import Logger = require("bunyan")
import * as fs from 'fs';

export class GcpLogger {

    private logName: string;
    private logger: Logger;

    constructor(appName: string) {

        if(!process.env.GOOGLE_APPLICATION_CREDENTIALS) {
            throw new Error("Missing environment variable GOOGLE_APPLICATION_CREDENTIALS, must be set to a valid GCP key file");
        }
        if(!fs.existsSync(process.env.GOOGLE_APPLICATION_CREDENTIALS)){
            throw new Error("GOOGLE_APPLICATION_CREDENTIALS value is invalid/ file does not exist");
        }

        const loggingBunyan = new LoggingBunyan({
            logName: appName
        });
        this.logger = bunyan.createLogger({
            name: appName,
            streams: [
                {stream: process.stdout, level: 'debug'},
                loggingBunyan.stream('debug')
            ]
        });
        this.logger.fields.logName = appName;
        this.logName = appName;
    }

    info(msg: string, fields?: any): void {
        fields = {
            ...fields,
            message: msg
        }
        this.logger.info(fields);
    }

    debug(msg: string, fields?: any): void {
        fields = {
            ...fields,
            message: msg
        }
        this.logger.debug(fields);
    }

    warn(msg: string, fields?: any, err?: Error): void {
        fields = {
            ...fields,
            message: msg,
            error: err
        }
        this.logger.warn(fields);
    }

    error(msg: string, fields?: any, err?: Error): void {
        fields = {
            ...fields,
            message: msg,
            error: err
        }
        this.logger.error(fields);
    }

    fatal(msg: string, fields?: any, err?: Error): void {
        fields = {
            ...fields,
            message: msg,
            error: err
        }
        this.logger.fatal(fields);
    }
}