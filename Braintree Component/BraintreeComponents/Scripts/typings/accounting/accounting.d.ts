declare namespace accounting {

    export class settings {
        static currency: CurrencyFormatOptions;
        static number: NumberFormatOptions;
    }
    export function formatNumber(value: string | number, precision?: number, thousand?: string, decimal?: string): string;
    export function unformat(value: string | number, decimalSeprator?: string): number;

    export interface CurrencyFormatOptions {
        symbol?: string,		// default currency symbol is '$'
        format?: string,	// controls output: %s = symbol, %v = value (can be object, see docs)
        decimal?: string,		// decimal point separator
        thousand?: string,		// thousands separator
        precision?: number,		// decimal places
        grouping?: number
    }

    export interface NumberFormatOptions {
        precision?: number,		// default precision on numbers is 0      
        grouping?: number,		// digit grouping (not implemented yet)
        thousand?: string,
        decimal?: string
    }
}