/// <reference path="../actions/actionExecuter.d.ts" />
/// <reference path="../typings/pubsub/pubsub.d.ts" />
/// <reference path="../designers/validation/validationdisplay.d.ts" />
/// <reference path="../designers/validation/validationgroup.d.ts" />
/// <reference path="../typings/core/generated/datatypes._base.d.ts" />
/// <reference path="../typings/core/generated/ValidationIssueService.d.ts" />
declare namespace $DP.Portal {
    import ValidationEntry = $DP.Common.ValidationEntry;
    enum HelpCenterIconType {
        Error = 0,
        Warning = 1,
        Help = 2,
        Chat = 3,
        Tools = 4
    }
    enum HelpCenterLocation {
        Portal = 0,
        Flow = 1,
        Form = 2,
        StatementRule = 3,
        TruthTable = 4,
        Matrix = 5,
        Page = 6,
        Reports = 7
    }
    interface HelpCenterOptions {
        holder: JQuery | HTMLElement;
        entries?: $DP.Common.ValidationEntry[];
        extraLayerOptions?: Partial<Common.ValidationDisplayLayerOptions>;
        icons?: HelpCenterIconType[];
        reRunValidations?: () => void;
        helpCenterLocation: HelpCenterLocation;
    }
    class HelpCenter {
        protected options: HelpCenterOptions;
        view: JQuery;
        layer: Common.ValidationDisplayLayer;
        level: $D.Framework.BreakLevel;
        showIgnored: boolean;
        constructor(options: HelpCenterOptions);
        getEntries(): Promise<ValidationEntry[]>;
        get icons(): HelpCenterIconType[];
        get validationsElem(): JQuery;
        get warningsElem(): JQuery;
        get chatElem(): JQuery;
        get docsElem(): JQuery;
        get toolsElem(): JQuery;
        get overlay(): JQuery;
        get isChatEnable(): boolean;
        get openOverlayClass(): string;
        static show(options: HelpCenterOptions): HelpCenter;
        clearValidations(): void;
        update(): void;
        initialize(): void;
        initializeSupportChat(): void;
        hideLayer(): void;
        attachEvents(): void;
        getDocumentationLink(): string;
        getLayerOptions(): {};
        updateIcons(): Promise<void>;
        toggleValidationIcon(level: $D.Framework.BreakLevel, active: boolean): void;
        showValidationLayer(level?: $D.Framework.BreakLevel, showIgnored?: boolean): Promise<void>;
        getLayerHeader(count?: number, entries?: ValidationEntry[]): JQuery;
        render(): void;
    }
    class PortalHelpCenter extends HelpCenter {
        protected options: HelpCenterOptions;
        private systemValidations;
        constructor(options: HelpCenterOptions);
        static render(options: HelpCenterOptions): PortalHelpCenter;
        getEntries(): Promise<Common.ValidationEntry[]>;
        showActions(issue: $D.Framework.ServiceLayer.Utilities.SystemValidation.SystemValidationIssue, e: MouseEvent): void;
        onValidationGroupClose(jqueryEvent: JQueryEventObject): void;
        getLayerHeader(): JQuery;
        getLayerOptions(): Partial<Common.ValidationDisplayLayerOptions>;
        attachListeners(): void;
    }
}
