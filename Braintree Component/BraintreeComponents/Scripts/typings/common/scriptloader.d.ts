/**
 * Author:catface@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
interface Window {
    __$DP_Scripts: string[];
}
declare namespace $DP {
    class ScriptLoader {
        static scriptDefs: {};
        static LoadScript(scriptUrl: string): Promise<any>;
        /**
         * Wait till request finished
         * @param scriptUrl
         */
        static LoadScriptPromise(scriptUrl: string): Promise<void>;
        private static getUrlWithVersion;
        private static getScript;
        /**
         * Loads the script files one after other. Usefull while loading dependent scripts.
         * Do not use it if the scripts are not dependent as it will be slow instead use ScriptLoader.LoadScripts
         * @param scriptUrls
         */
        static LoadScriptsPromise(scriptUrls: string[][]): Promise<void>;
        static LoadScripts(scriptUrls: string[][], parent?: HTMLElement): JQueryPromise<any>;
        static LoadStyleSheet(styleUrl: string, parent?: HTMLElement): JQueryPromise<any>;
        static loadStylesAndScriptsPromise(styleUrls: string[], scriptUrls: string[][]): Promise<void>;
        static loadStylesAndScripts(styleUrls: string[], scriptUrls: string[][]): JQueryPromise<any>;
        static loadStyles(styleUrls: string[], parent?: HTMLElement): Promise<void>;
        static loadScript(scriptUrl: string): Promise<void>;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
