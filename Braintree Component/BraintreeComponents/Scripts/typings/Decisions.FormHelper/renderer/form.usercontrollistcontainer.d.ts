declare namespace Silverdark.Components {
    interface UserControlListContainerOptions {
        dataName?: string;
    }
}
declare namespace $DP.Control {
    class UserControlListContainer extends UserDefinedBase {
        options: Silverdark.Components.UserControlListContainerOptions;
        private container;
        private _formInstanceId;
        updateCallDefered: JQueryXHR;
        selectedSurfaceId: any;
        lastSetValue: any;
        userControlContainer: JQuery;
        childRootOptions: $DP.Containers.ContainerOptions[];
        constructor($controlLayout: JQuery, options: Silverdark.Components.UserControlListContainerOptions);
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        setValue(data: $DP.FormHost.DecisionsControlData[], isFromStartUp: boolean): boolean;
        setValueAsync(data: $DP.FormHost.DecisionsControlData[]): Promise<boolean>;
        initializeContainer(): this;
        private initializeSurfaces;
        private addchildSurfaces;
        private updateFocusInHandlers;
        resize(data: {
            newHeight: any;
            newWidth: any;
        }): void;
        getControlsData(): Promise<DataPair[]>;
        getControl(): JQuery;
        get formInstanceId(): string;
        buildListItem(options: ChildViewOptions): JQuery;
        buildList(): JQuery[];
        getItems(): JQuery;
        private static getFormControlById;
        renderhtml(): JQuery;
        getRuleInfo(): Form.Rules.IFormRule[];
        loadComplete(): void;
    }
}
