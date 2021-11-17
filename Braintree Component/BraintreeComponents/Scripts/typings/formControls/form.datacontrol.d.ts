declare namespace $DP.Control {
    import ISyncableControl = $DP.FormHost.ISyncableControl;
    import IDataConsumer = $DP.FormHost.IDataConsumer;
    import DecisionsControlEvent = $DP.FormHost.DecisionsControlEvent;
    import ISilverFormValidationSettingSource = $D.Silverlight.UI.Forms.ISilverFormValidationSettingSource;
    abstract class DataContentBase extends ContentBase implements IDataConsumer, ISyncableControl, ISilverFormValidationSettingSource {
        options: Silverdark.Components.DataContentBaseOptions;
        formValidationSetting: $D.Silverlight.UI.Core.FormDesignerModel.ControlValidationSetting;
        get syncOnEvents(): Array<typeof DecisionsControlEvent>;
        shouldSync(events: FormHost.DecisionsControlEvent[]): boolean;
        constructor($controlLayout: JQuery, options: Silverdark.Components.DataContentBaseOptions);
        lastSetValue: any;
        abstract setValue(data: $DP.FormHost.DecisionsControlData[], isFromStartUp: boolean): boolean;
        abstract getValue(): $DP.FormHost.DecisionsControlData[];
    }
}
