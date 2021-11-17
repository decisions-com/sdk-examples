declare namespace $DP.Control {
    class SilverMultiFileDownload extends FileDownloadControl {
        options: Silverdark.Components.SilverMultiFileDownloadOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverMultiFileDownloadOptions);
        get showDisableControlOverlay(): boolean;
        filesInfo: DataPair[];
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        renderhtml(): JQuery;
        render(): void;
        getHtmlForFiles(fileInfo: DataPair): JQuery;
        private getfileDownloadView;
        private addDownloadZipLink;
        private getNoFileToDownlodMsg;
        private getFilesForZip;
        setValue(data: $DP.FormHost.DecisionsControlData[], isFromStartUp: boolean): boolean;
        getValue(): $DP.FormHost.DecisionsControlData[];
        getControl(): JQuery;
    }
}
