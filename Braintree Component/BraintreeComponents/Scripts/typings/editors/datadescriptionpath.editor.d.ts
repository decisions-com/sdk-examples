/// <reference path="../typings/core/generated/SequentialService.d.ts" />
/// <reference path="../designers/common/mappingcontext.d.ts" />
/// <reference path="../common/popuplayer.d.ts" />
declare namespace $DP.Editors {
    interface DataDescriptionPathEditorOptions {
        readonly editingContextId: string;
        readonly propertyPath: string[];
        readonly configurationValues: DataPair[];
    }
    class DataDescriptionPathEditor {
        private host;
        static get DATA_KEY(): string;
        static create(host: JQuery, options: DataDescriptionPathEditorOptions): void;
        static update(nodeInfo: $DP.UI.Controls.NodeInfo): void;
        private pieceService;
        private mappingService;
        private $view;
        private $input;
        private $pick;
        private $addInput;
        private $layer;
        private mappingContext;
        private isInput;
        private canAddInput;
        private inputDataName;
        private isEditableAsString;
        private displayText;
        private path;
        private readonly editingContextId;
        private readonly propertyPath;
        constructor(host: JQuery, options: DataDescriptionPathEditorOptions);
        update(info: $DP.UI.Controls.NodeInfo): void;
        private updateFromConfigurationValues;
        private showPickDialog;
        private onDataPicked;
        private showAddInputLayer;
        private dispose;
        private getMappingContext;
        private getServerContext;
        private getCanAddInput;
        private render;
        private updateView;
        private appendInput;
        private appendActions;
    }
}
