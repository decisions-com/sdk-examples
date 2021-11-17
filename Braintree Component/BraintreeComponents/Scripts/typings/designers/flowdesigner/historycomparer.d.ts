/**
 * Author: catface@decisions.com
 * Notes: Unauthorized, unlicensed use, redistribution, modification is not allowed.
 */
/// <reference path="fd.step.d.ts" />
/// <reference path="fd.link.d.ts" />
/// <reference path="../../typings/goJS/gojs.d.ts" />
/// <reference path="../../typings/jquery/jquery.d.ts" />
declare namespace $DP.Designers.Flows {
    import HeaderProps = dpComponents.IDesignerHeaderProps;
    class HistoryComparer {
        private readonly host;
        private readonly flowId;
        private readonly flowSessionId;
        private readonly title;
        private readonly path;
        private diagram;
        private goDiagram;
        protected headerProps: HeaderProps;
        private leftVersion;
        private rightVersion;
        private constructor();
        static show(host: JQuery, flowId: string, flowSessionId: string | undefined, title: string, path: string[]): void;
        private createMainView;
        private close;
        private initialize;
        private doCompare;
        private positionDiagram;
        private static displayCompareData;
    }
}
/**
 * Copyright Decisions 2018. For License or Copyright information please contact support@decisions.com
 */
