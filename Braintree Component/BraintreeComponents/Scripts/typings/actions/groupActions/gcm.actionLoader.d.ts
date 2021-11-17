/**
 * Author:huzefa.ezzi@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.Common.Actions {
    import GroupAction = $D.Framework.ServiceLayer.Services.Folder.GroupAction;
    import SpecifiedGroupActions = $D.Framework.Design.Report.SpecifiedGroupAction;
    import FlowGroupAction = $D.Framework.Design.Report.FlowGroupAction;
    abstract class AbstractGroupActionLoader {
        groupActions: GroupContextMenu;
        constructor(groupActions: GroupContextMenu);
        abstract load(rowDatas: ReportDataRow[]): JQueryDeferred<ActionWrapper[]>;
    }
    class SpecifiedGroupActionLoader extends AbstractGroupActionLoader {
        specifiedGroupActions: SpecifiedGroupActions[];
        constructor(groupActions: GroupContextMenu);
        load(rowDatas: ReportDataRow[]): JQueryDeferred<ActionWrapper[]>;
        private getEntities;
        private getAction;
    }
    class FlowGroupActionLoader extends AbstractGroupActionLoader {
        flowGroupActions: FlowGroupAction[];
        constructor(groupActions: GroupContextMenu);
        load(rowDatas: ReportDataRow[]): JQueryDeferred<ActionWrapper[]>;
        private getEntities;
        private getAction;
    }
    class DynamicGroupActionLoader extends AbstractGroupActionLoader {
        constructor(groupActions: GroupContextMenu);
        load(rowDatas: ReportDataRow[]): JQueryDeferred<ActionWrapper[]>;
    }
    class GroupActionLoaderFactory {
        static getLoader(groupActions: GroupContextMenu): AbstractGroupActionLoader;
    }
    class ActionWrapper {
        groupAction: GroupAction;
        actionExecuter?: AbstractGroupActionExecuter;
        constructor(groupAction: GroupAction, actionExecuter?: AbstractGroupActionExecuter);
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
