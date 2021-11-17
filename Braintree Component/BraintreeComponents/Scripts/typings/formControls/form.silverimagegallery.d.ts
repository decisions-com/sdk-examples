declare namespace $DP.Control {
    class SilverImageGallery extends ContentBase {
        options: Silverdark.Components.SilverImageGalleryOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverImageGalleryOptions);
        instanceId: string;
        gallery: $DP.Form.Controls.ImageGallery;
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        renderhtml(): JQuery;
        getImageInfoContainer(instanceId: string): JQuery;
        getActionInfoContainer(instanceId: string): JQuery;
        getUrl(fileId: string): string;
        setValue(data: $DP.FormHost.DecisionsControlData[], isFromStartUp: boolean): boolean;
        getValue(): $DP.FormHost.DecisionsControlData[];
        getControl(): JQuery;
    }
}
