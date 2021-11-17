declare namespace $DP {
    class ErrorHandler {
        static SECURITY_EXCEPTION: string;
        static FRAMEWORK_FAULT: string;
        static onerror(error: string): void;
        static checkSecurityException(error: string): void;
        static handleSecurityException(): void;
        static isBusinessRule(message: string): boolean;
    }
}
