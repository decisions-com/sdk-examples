/**
 * Author:huzefa.ezzi@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.Common.Actions {
    import GroupAction = $D.Framework.ServiceLayer.Services.Folder.GroupAction;
    import SpecifiedGroupActions = $D.Framework.Design.Report.SpecifiedGroupAction;
    import FlowGroupAction = $D.Framework.Design.Report.FlowGroupAction;
    abstract class AbstractGroupActionExecuter {
        actionLoader: AbstractGroupActionLoader;
        groupAction: GroupAction;
        constructor(actionLoader: AbstractGroupActionLoader, groupAction: GroupAction);
        abstract execute($elem: JQuery): any;
    }
    class SpecifiedGroupActionExecuter extends AbstractGroupActionExecuter {
        actionLoader: AbstractGroupActionLoader;
        groupAction: GroupAction;
        private specifiedGroupActions;
        constructor(actionLoader: AbstractGroupActionLoader, groupAction: GroupAction, specifiedGroupActions: SpecifiedGroupActions);
        execute($elem: JQuery): void;
    }
    class FlowGroupActionExecuter extends AbstractGroupActionExecuter {
        actionLoader: AbstractGroupActionLoader;
        groupAction: GroupAction;
        private flowGroupAction;
        private rowIds;
        private reportContextId;
        private instanceId;
        constructor(actionLoader: AbstractGroupActionLoader, groupAction: GroupAction, flowGroupAction: FlowGroupAction, rowIds: number[]);
        execute($elem: JQuery): void;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
