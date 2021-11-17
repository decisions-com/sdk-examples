declare namespace $DP.Account {
    interface ResetPasswordOptions {
        host: JQuery;
        tokenkey: string;
    }
    class ResetPassword {
        private options;
        private passwordBox;
        private confpasswordBox;
        constructor(options: ResetPasswordOptions);
        render(): void;
        private getExceptionFromNode;
        attachEvents(): void;
        validatepwd(): boolean;
    }
}
