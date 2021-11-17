declare namespace $DP.Common.Actions.ActionMenu {
    import ActionHeader = $D.Framework.ServiceLayer.Actions.ActionHeader;
    import GroupAction = $D.Framework.ServiceLayer.Services.Folder.GroupAction;
    import NavigateActionHeader = $D.Framework.ServiceLayer.Actions.NavigateActionHeader;
    type ComplexActionType = (ActionHeader | BaseActionType | GroupAction | NavigateActionHeader) & DynamicProps;
    interface DynamicProps {
        BuildActionReferenceId: string;
        IsDummy: boolean;
        FavDummy: boolean;
    }
    export function generateMenuElements(actions: ComplexActionType[], entityId: string, elementArray: MenuElementsData[], headerText: string, forMobile: boolean, className: string, isGroupAction: boolean): void;
    export class MenuElementsData {
        type: 'link' | 'SEP';
        value: any;
        onclick: any;
        headerText: string;
        isDefaultGridAction: boolean;
        elements: any[];
        ShowFavIcon: boolean;
        ShowEditIcon: boolean;
        FavDummyAction: boolean;
        BuildActionReferenceId: string;
        Url: string;
        ActionName: string;
        EntityId: string;
        isPrimaryAction: boolean;
    }
    export {};
}
declare function sort_by(field: any, reverse: any, primer: any): (a: any, b: any) => number;
declare function sort_by_group_actions(field: any, reverse: any, primer: any): (a: any, b: any) => number;
