/**
 * Author: alex@decisions.com
 * Notes: unauthorized, unlicensed use, redistribution, modification is not allowed.
*/
/// <reference path="case.datastructure.d.ts" />
/// <reference path="case.statelist.d.ts" />
/// <reference path="case.utils.d.ts" />
/// <reference path="../../typings/core/decisions.d.ts" />
/// <reference path="../../typings/core/generated/DataStructureService.d.ts" />
/// <reference path="../../typings/core/generated/datatypes._base.d.ts" />
declare namespace $DP.PageParts.CaseEditor {
    import ElementRegistrationDto = $D.Framework.Design.DataStructure.CaseEditor.ElementRegistrationDto;
    interface CaseOtherFlowsOptions {
        host: JQuery;
        folderId: string;
        items: ElementRegistrationDto[];
    }
    class CaseOtherFlows {
        private options;
        private $view;
        private $flowsContainer;
        private $seeList;
        constructor(options: CaseOtherFlowsOptions);
        has(id: string): boolean;
        remove(id: string): void;
        get(id: string): JQuery;
        addOrUpdateItems(items: ElementRegistrationDto[]): void;
        addOrUpdate(item: ElementRegistrationDto): void;
        private toggleContent;
        private hasNoData;
        private render;
        private isEmpty;
        private noData;
        private renderEntity;
    }
}
