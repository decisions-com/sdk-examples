/**
 * Author:ravi.tiwari@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../typings/core/generated/DataStructureService.d.ts" />
import EntityActionType = $D.Framework.ServiceLayer.Actions.EntityActionType;
import BaseActionType = $D.Framework.ServiceLayer.Actions.BaseActionType;
import SearchActionType = $D.Framework.ServiceLayer.Actions.ActionSearchType;
declare namespace $DP.Editors {
    class DefinedTypeEditor {
        private editorElement;
        private inputEditElement;
        private inputCreateElement;
        private textboxElement;
        private entityId;
        private editingContextId;
        private path;
        eventToken: string;
        private updateColumnsLink;
        constructor(editorElement: JQuery, editingContextId: string, definedTypeValue: string, path: string);
        initialize(): void;
        onActionComplete: (eventId: any, typeName: any) => void;
        openDataStructureEditor: (element: JQuery, entityTypeName: string, searchActionTextArray: string[]) => void;
        unsubscribeExistingEvents(): void;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
