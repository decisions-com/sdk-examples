declare namespace $DP.Control {
    interface FileDownloadControlOptions extends Silverdark.Components.ContentBaseOptions {
        fileOutputType: Silverdark.Components.OutputType;
        fileReferenceOutputType: FileReferenceOutputType;
        buttonType: FileDownloadButtonType;
        staticInput: boolean;
    }
    export import FileReferenceOutputType = Silverdark.Components.FileReferenceOutputType;
    export import LabelVerticalAlignment = Silverdark.Components.LabelVerticalAlignment;
    export import FileDownloadButtonType = Silverdark.Components.FileDownloadButtonType;
    export import LabelHorizontalAlignment = Silverdark.Components.LabelAlignment;
    abstract class FileDownloadControl extends ContentBase {
        options: Silverdark.Components.BaseFileDownloadControlOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.BaseFileDownloadControlOptions);
        fileInfo: DataPair;
        downloadFile(fileId: string, $downloadButton?: JQuery, fileNameWithExtension?: string): void;
        directDownloadFile(fileId: string): void;
        downloadFileUsingUrl(fileId: string, fileNameWithExtension?: string): void;
    }
    class SilverFileDownload extends FileDownloadControl {
        options: Silverdark.Components.SilverFileDownloadOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverFileDownloadOptions);
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        renderhtml(): JQuery;
        attachEvents(): void;
        setValue(data: $DP.FormHost.DecisionsControlData[], isFromStartUp: boolean): boolean;
        getValue(): $DP.FormHost.DecisionsControlData[];
        getControl(): JQuery;
    }
}
