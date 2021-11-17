/**
 * Author:huzefa.ezzi@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../typings/core/generated/reportviewservice.d.ts" />
/// <reference path="../helpers/local.events.d.ts" />
declare namespace $DP.Components.Page {
    class RunAssignmentsSilverPart {
        protected options: IRunAssignmentOptions;
        private $container;
        private $grid;
        private $startPanel;
        private $controlPanel;
        private $formPanel;
        private $errorPanel;
        private $btnStart;
        private $lblRefresh;
        private $btnNext;
        private $lblCount;
        private $lblReportName;
        private $formWrapper;
        private buttonsPanelHeight;
        private assignments;
        private isFetched;
        private assignmentToRun;
        private currentAssignment;
        private parentContainerId;
        private currentFormInfo;
        protected get noAssignmentMessage(): string;
        constructor(options: IRunAssignmentOptions);
        private setElements;
        initialize(): void;
        private resizeForm;
        private onParentResize;
        private resize;
        private refresh;
        private onStart;
        private assertAssignments;
        private assertReportId;
        private showError;
        private hideError;
        private prepareSurfaceForSelectionBus;
        private run;
        private call;
        private onFormSurfaceLoaded;
        private updateAssignmentDetails;
        getLabelPositionClass(): string;
        private getNextAssignmentId;
        private refreshCountLabel;
        private getAssigmentIdFromReport;
        private onBeforeAssignmentLoad;
        private onAssignmentLoaded;
        private fetchAssignment;
    }
    interface IRunAssignmentOptions {
        instanceId: string;
        reportId: string;
        noAssigmentMessage: string;
        fetchOnStart: boolean;
        startButtonName: string;
        getAssignmentIdfromSelectionBus: boolean;
        selectionBusName: string;
        isInDesignMode: boolean;
        assignedToOtherText: string;
        assignedToOtherTextPosition: string;
        assignedToOtherLayerTransparency: number;
        assignedToOtherTextStyle: string;
        appendAssignmentDetails: boolean;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
