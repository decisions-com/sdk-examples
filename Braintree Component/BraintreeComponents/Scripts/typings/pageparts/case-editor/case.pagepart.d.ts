/**
 * Author: alex@decisions.com
 * Notes: unauthorized, unlicensed use, redistribution, modification is not allowed.
*/
/// <reference path="case.datastructure.d.ts" />
/// <reference path="case.statelist.d.ts" />
/// <reference path="case.otherflows.d.ts" />
/// <reference path="../../actions/actionExecuter.d.ts" />
/// <reference path="../../typings/core/generated/CaseEditorService.d.ts" />
/// <reference path="../../typings/core/generated/DataStructureService.d.ts" />
/// <reference path="../../typings/core/generated/datatypes._base.d.ts" />
declare namespace $DP.PageParts.CaseEditor {
    class CaseEditorPartView {
        private options;
        private stateList;
        private otherFlows;
        private token;
        private $view;
        private service;
        private get extensionFolderId();
        constructor(options: {
            host: JQuery;
        });
        private render;
        private renderOther;
        private renderStateList;
        /**
         * Creates @see ExpectedFolderStateDto on client
         */
        private createState;
        private runDefaultActionForStep;
        private renderDataPanel;
        private subscribeOnFolderChanges;
        private unsubscribeOnFolderChanges;
        private attachOnDispose;
    }
}
