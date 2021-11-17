/// <reference path="runtimecase.pagepart.d.ts" />
/// <reference path="runtimecase.state.d.ts" />
/// <reference path="../case-editor/case.state.d.ts" />
/// <reference path="../case-editor/case.models.d.ts" />
declare namespace $DP.PageParts.CaseEditor {
    interface RuntimeStateListOptions {
        host: JQuery;
        states: FolderStateModel[];
        turnOffTimeStamps: boolean;
    }
    class RuntimeStateList {
        private options;
        private $view;
        private actionsRenderer?;
        constructor(options: RuntimeStateListOptions);
        protected render(): void;
        private renderItem;
        private setItemsColor;
        private getStateById;
        private createStateComponent;
        private toCaseStateModel;
    }
}
