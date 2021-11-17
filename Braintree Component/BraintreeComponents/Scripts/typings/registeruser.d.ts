declare namespace $DP.Common {
    interface registerUserOptions {
        host: JQuery;
    }
    class RegisterUser {
        private options;
        constructor(options: registerUserOptions);
        static initialize(options: registerUserOptions): void;
        attachEvents(): void;
    }
}
