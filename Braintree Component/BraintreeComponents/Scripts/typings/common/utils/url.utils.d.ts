declare namespace $DP.UrlUtils {
    function getParameterValue(key: string): string;
    function parseQueryString(url?: string, casesensitive?: boolean): any;
    function encodeURI(value: string): string;
}
