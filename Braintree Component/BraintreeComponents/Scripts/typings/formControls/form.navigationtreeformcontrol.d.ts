import FolderForTree = $D.Framework.ServiceLayer.Services.Folder.FolderForTree;
import ParentFolderData = $D.Framework.ServiceLayer.Services.Folder.ParentFolderData;
declare namespace $DP.Control {
    class NavigationTreeFormControl extends DataContentBase {
        options: Silverdark.Components.Navigation.NavigationTreeFormControlOptions;
        selectedFolderId: string;
        selectedFolderParentsId: string[];
        tree: Common.DPTree;
        constructor($controlLayout: JQuery, options: Silverdark.Components.Navigation.NavigationTreeFormControlOptions);
        get showDisableControlOverlay(): boolean;
        renderhtml(): JQuery;
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        onVisiblityChange(): void;
        createTree(): void;
        updateControlState(isEnable?: boolean): void;
        onEnablityChange(isEnable: boolean): void;
        getRootFolders(): Promise<FolderForTree[]>;
        createTreeNode(folder: FolderForTree): {
            id: string;
            text: string;
            children: boolean;
            data: {
                folderId: string;
            };
            state: {
                opened: boolean;
                selected: boolean;
            };
        };
        sortFolder(a: FolderForTree, b: FolderForTree): number;
        setValue(data: $DP.FormHost.DecisionsControlData[], isFromStartUp: boolean): boolean;
        getValue(): $DP.FormHost.DecisionsControlData[];
        getControl(): JQuery;
    }
}
