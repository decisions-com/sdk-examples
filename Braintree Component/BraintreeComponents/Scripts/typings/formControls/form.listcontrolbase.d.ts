declare namespace $DP.Control {
    import ISyncableControl = $DP.FormHost.ISyncableControl;
    interface ListControlItem {
        id?: string;
        value?: string;
    }
    import ISilverFormValidationSettingSource = $D.Silverlight.UI.Forms.ISilverFormValidationSettingSource;
    abstract class ListBase extends ContentBase implements ISilverFormValidationSettingSource, ISyncableControl {
        options: Silverdark.Components.ListBaseOptions;
        formValidationSetting: $D.Silverlight.UI.Core.FormDesignerModel.ControlValidationSetting;
        constructor($controlLayout: JQuery, options: Silverdark.Components.ListBaseOptions);
        source: DataPair[];
        selected: string[];
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        abstract initializeControl(): any;
        abstract setItems(items: DataPair[]): any;
        abstract setSelection(): any;
        get isControlSupportedInMobile(): boolean;
        get controlName(): string;
        shouldSync(events: FormHost.DecisionsControlEvent[]): boolean;
        protected updateSelectedWhenItemSourceUpdated: boolean;
        setValue(data: $DP.FormHost.DecisionsControlData[], isFromStartUp: boolean): boolean;
        getValue(): $DP.FormHost.DecisionsControlData[];
        toListControlItem(source: DataPair[]): $DP.Control.ListControlItem[];
        toDataPairItem(source: $DP.Control.ListControlItem[]): DataPair[];
    }
}
