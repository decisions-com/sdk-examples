declare namespace $D.Silverlight.UI.Forms {
    interface SilverFormComponentBaseOptions {
        $type: string;
    }
    interface ISilverFormValidationSettingSource {
        formValidationSetting: $D.Silverlight.UI.Core.FormDesignerModel.ControlValidationSetting;
    }
    interface IInitializeControlAfterFormLoad {
        InitializeControlAfterFormLoad: boolean;
    }
}
declare namespace $DP.Control {
    abstract class ContentBase extends FormComponentBase {
        options: Silverdark.Components.ContentBaseOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.ContentBaseOptions);
        lastSetValue: any;
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
    }
    function isValidationSettingSourceProvider(obj: any): boolean;
}
