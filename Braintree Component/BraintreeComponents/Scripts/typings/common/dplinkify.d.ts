/**
 * Author:akash.singh@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.Common {
    class Linkify {
        elements: JQuery;
        constructor(elements: JQuery);
        linkify(): JQuery;
        private linkifyText;
        private fetchUrlsDetail;
    }
}
interface JQuery {
    linkify(): any;
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
