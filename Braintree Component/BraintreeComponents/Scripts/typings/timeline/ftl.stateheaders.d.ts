/**
 * Author:huzefa.ezzi@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.UI.Controls.Timeline {
    class StateHeaders {
        private timeline;
        $headers: JQuery;
        private currentHeaderStateMode;
        constructor(timeline: FolderTimeline);
        init(): void;
        setSate(stateMode: StateHeadersMode): void;
        private ensureMaxStates;
        stick(): void;
        private expandAll;
        private collapseAll;
        private default;
        private attachtoggle;
        private showHideCount;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
