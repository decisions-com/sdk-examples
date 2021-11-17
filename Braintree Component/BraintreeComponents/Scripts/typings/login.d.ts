declare namespace $DP.Common {
    interface loginOptions {
        loginContainer: JQuery;
        allowAutoSignIn: boolean;
        useChromeSSO: boolean;
    }
    class Login {
        private options;
        userNameTextBox: JQuery;
        passwordCheckBox: JQuery;
        submitButton: JQuery;
        constructor(options: loginOptions);
        initialize(): void;
        get isUserNameEmpty(): boolean;
        get isPasswordEmpty(): boolean;
        autoSignIn(): void;
        performLoginWithSessionid(objXml: any): void;
        isLocalUrl(surl: any): boolean;
        parseURL(url: any): {
            source: any;
            protocol: string;
            hostname: string;
            host: string;
            port: string;
            query: string;
            params: {};
            file: string;
            hash: string;
            path: string;
            relative: string;
            segments: string[];
        };
        getxmlNodeValue(childNodes: any, nodeName: any): any;
        getUrlParameter(params: string): string;
    }
}
