declare namespace $DP.Globalize {
    class GlobalizeHelper {
        static supportedCultures: string[];
        static cultures: string[];
        static obj: any;
        static globalizeDef: JQueryDeferred<any>;
        static get instance(): any;
        static load(): JQueryDeferred<any>;
        static loadAvailableCultures(): JQueryXHR;
        static overrideCulturesNames(): void;
        static getCultureName(culture: string): string;
        static loadGlobalize(culture: string): void;
        static unformatCurrency(value: string, currencySymbol: string): any;
        static unformatPercentage(value: string, percentageSymbol?: string): any;
        static unformatNumber(value: string): any;
        static loadJsonInSync(url: string): JQueryXHR;
    }
}
