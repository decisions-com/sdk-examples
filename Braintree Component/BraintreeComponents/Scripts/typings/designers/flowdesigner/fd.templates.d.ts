/**
 * Author:catface@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../../typings/goJS/gojs.d.ts" />
/// <reference path="flowdesigner.d.ts" />
declare namespace $DP.Designers.Flows {
    function createGoNodeTemplates(designerId: string, forDebug?: boolean, makeMainNodesEditable?: boolean): go.Map<string, go.Part>;
    function createGoAnnotationTemplates(designerId: string, map?: go.Map<string, go.Part>): go.Map<string, go.Part>;
    function createGoLinkTemplates(designerId: string, forDebug?: boolean): go.Map<string, go.Link>;
    function createGoTemporaryLinkTemplate(pathName: string): go.Link;
    function createGoAnnotationLinkTemplates(designerId: string, map?: go.Map<string, go.Link>): go.Map<string, go.Link>;
    function createGoSelectionNodeTemplates(designerId: string, holder: JQuery, selectedNode: go.Node): go.Map<string, go.Part>;
    function createGoSelectionGroupTemplates(): go.Map<string, go.Group>;
    function createGoSelectionLinkTemplates(designerId: string, holder: JQuery, selectedNode: go.Node): go.Map<string, go.Link>;
    function highlightLinkButton(current: go.GraphObject, buttonSelector: string, hover: boolean): void;
    function createGoGroupTemplates(designerId: string, forDebug: boolean, poolLayout: (vertical: boolean) => go.Layout): go.Map<string, go.Group>;
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
