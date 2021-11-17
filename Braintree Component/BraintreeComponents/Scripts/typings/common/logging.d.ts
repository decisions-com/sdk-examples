/**
 * Author: catface@decisions.com
 * Notes: Unauthorized, unlicensed use, distribution, modification is not allowed.
 */
interface IDecisionsLogger {
    debug(message: string | (() => string), ...extra: any[]): any;
    info(message: string | (() => string), ...extra: any[]): any;
    warn(message: string | (() => string), ...extra: any[]): any;
    error(message: string | (() => string), ...extra: any[]): any;
    fatal(message: string | (() => string), ...extra: any[]): any;
}
declare enum LogLevel {
    Unknown = 0,
    Debug = 1,
    Info = 2,
    Warn = 4,
    Error = 8,
    Fatal = 16
}
/**
 * White list of errors, etc. that the browser will report because of browser bugs here.
 * Don't add anything here unless you know what you're doing and comment a good justification
 */
declare const WHITE_LIST: string[];
declare class DecisionsLogger implements IDecisionsLogger {
    private category;
    constructor(category: string);
    debug(message: string | (() => string), ...extra: any[]): void;
    error(message: string | (() => string), ...extra: any[]): void;
    fatal(message: string | (() => string), ...extra: any[]): void;
    info(message: string | (() => string), ...extra: any[]): void;
    warn(message: string | (() => string), ...extra: any[]): void;
    log(level: LogLevel, message: string | (() => string), ...extra: any[]): void;
    private static minConsoleLevel;
    private static minSendToServerLevel;
    private static originalConsole;
    private static consoleLogger;
    private static lastErrorTime;
    private static saveLogsTimer;
    static initialize(minConsoleLevel?: LogLevel, minSendToServerLevel?: LogLevel): void;
    static shouldLogConsole(level: LogLevel): boolean;
    static shouldSendToServer(level: LogLevel): boolean;
    static whiteListed(message: string | (() => string)): boolean;
    static sendLogToServer(level: LogLevel): void;
    static log(category: string, level: LogLevel, message: string | (() => string), ...extra: any[]): void;
}
/**
 * Creates a new logger for a specified category.
 * @param category
 */
declare function dlog(category: string): IDecisionsLogger;
/**
 * Quickly logs a message without bothering to create a logger.
 * @param message
 * @param category
 * @param level
 * @param extras
 */
declare function dlogq(message: string, category?: string, level?: LogLevel, ...extras: any[]): void;
declare var CSL_Console_Level: string, CSL_Server_Level: string;
