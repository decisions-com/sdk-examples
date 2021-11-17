declare namespace $DP.Control {
    class SilverImagePicker extends ContentBase implements $DP.FormHost.IDataConsumer, $DP.FormHost.IDataProducer, $D.Silverlight.UI.Forms.ISilverFormValidationSettingSource {
        options: Silverdark.Components.SilverImagePickerOptions;
        formValidationSetting: $D.Silverlight.UI.Core.FormDesignerModel.ControlValidationSetting;
        imagePicker: $DP.Control.ImagePicker;
        items: [];
        isImageFileData: boolean;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverImagePickerOptions);
        getControl(): JQuery;
        getValue(): FormHost.DecisionsControlData[];
        setValue(data: FormHost.DecisionsControlData[], isFromStartUp: boolean): boolean;
        private getImageUrl;
        private convertToImagePickerOptions;
        renderhtml(): JQuery;
    }
}
