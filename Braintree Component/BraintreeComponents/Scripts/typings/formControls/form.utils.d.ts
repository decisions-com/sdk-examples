declare namespace $DP.FormUtilities {
    import ISyncableControl = $DP.FormHost.ISyncableControl;
    import DecisionsControlEvent = $DP.FormHost.DecisionsControlEvent;
    function dataPairsToDecisionsControlData(pairs: DataPair[]): $DP.FormHost.DecisionsControlData[];
    function decisionsControlDataToDataPair(data: $DP.FormHost.DecisionsControlData[]): DataPair[];
    function getFileStreamUrl(sessionId: string, componentId: string, fileId: string, downloadFile?: boolean): string;
    function showControlNotSupportedMessage($holder: JQuery, controlName: string): void;
    function shouldSync(control: ISyncableControl, events: FormHost.DecisionsControlEvent[], syncOnEvents: Array<typeof DecisionsControlEvent>): boolean;
}
