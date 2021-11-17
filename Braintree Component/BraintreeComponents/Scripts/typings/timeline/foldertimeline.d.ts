/**
 * Author:huzefa.ezzi@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../typings/core/generated/AccountService.d.ts" />
/// <reference path="../typings/core/generated/commentservice.d.ts" />
/// <reference path="ftl.commentbox.d.ts" />
/// <reference path="ftl.filterheader.d.ts" />
/// <reference path="ftl.actions.d.ts" />
/// <reference path="ftl.stateheaders.d.ts" />
/// <reference path="../fineUploader/fileupload.d.ts" />
/// <reference path="../typings/atwho.d.ts" />
declare namespace $DP.UI.Controls {
    namespace Timeline {
        class FolderTimeline {
            options: TimelineOptions;
            static create(options: TimelineOptions): FolderTimeline;
            static get(host: JQuery): FolderTimeline;
            static refresh(host: JQuery): void;
            static resize(host: JQuery): void;
            static enableDisableSortSwitch(host: JQuery, enable: boolean): void;
            folderId: string;
            searchText: string;
            addCommentBox: TimelineCommentBox;
            actionRenderer: Actions.ActionsRenderer;
            stateHeaders: StateHeaders;
            $timelinepanel: JQuery;
            $filtersPanel: JQuery;
            $header: JQuery;
            private headerFilter;
            $footer: JQuery;
            $content: JQuery;
            $page: JQuery;
            $pageHolder: JQuery;
            $topStuck: JQuery;
            $bottomStuck: JQuery;
            $switchHolder: JQuery;
            $headerModeSwitches: JQuery;
            $DefaultModeSwitche: JQuery;
            $sortbySwitchHolder: JQuery;
            $sortbySwitch: JQuery;
            $nonSeqStates: JQuery;
            $contextIcon: JQuery;
            $initials: JQuery;
            private readonly stateHeadersMap;
            constructor(options: TimelineOptions);
            attachResizeHandler(): void;
            scrollToLastState(): void;
            linkifyComments(): void;
            scrollToEntity(entityId: string): JQueryPromise<any>;
            folderTimelineVerticalScroll(elem: JQuery, topStuckSize: number, scrollParent?: JQuery): void;
            private addToolTip;
            private updateTooTip;
            private updateTootipForMode;
            private updateFilterSwitch;
            private attachEvents;
            private onNavigationParamChanged;
            private attachNonSeqSTatesEvents;
            private stickHeaders;
            private addActions;
            private layoutPositionSet;
            resize(): void;
            private showLoadingIndicator;
            private hideLoadingIndicator;
            refresh(searchtext?: string, callback?: () => void): void;
            enableDisableSortSwitch(enable: boolean): void;
            call(options: JQueryAjaxSettings): JQueryXHR;
            private defaultFilter;
            private getFilters;
        }
        interface FolderTimelineFilter extends FolderHeaderFilters {
            ShowPercent: boolean;
            ShowTimeStamp: boolean;
        }
        interface TimelineOptions {
            folderId: string;
            showPendingAssignment: boolean;
            holder: JQuery;
            instanceId: string;
            getFolderIdfromSelectionBus: boolean;
            selectionBusName: string;
            stateHeadersMode: StateHeadersMode;
            maxStatesBeforeForcedExpand: number;
            turnOffTimeStamps: boolean;
            showDataInReverseOrder: boolean;
            showFilters: boolean;
            hideStates: boolean;
            orderBy: SortOrder;
        }
        enum SortBy {
            State = 0,
            Sequential = 1
        }
        enum StateHeadersMode {
            Default = 0,
            Expanded = 1,
            Collapsed = 2
        }
        enum SortOrder {
            ModifiedDate = 0,
            CreatedOnDate = 1
        }
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
