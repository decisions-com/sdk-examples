/// <reference path="../../typings/core/generated/datatypes._base.d.ts" />
/// <reference path="../../typings/pubsub/pubsub.d.ts" />
/// <reference path="../../typings/core/decisions.d.ts" />
/// <reference path="../case-editor/case.models.d.ts" />
/// <reference path="../../timeline/ftl.commentbox.d.ts" />
/// <reference path="../../timeline/ftl.filterheader.d.ts" />
/// <reference path="../../timeline/ftl.actions.d.ts" />
/// <reference path="../../common/spinner.d.ts" />
/// <reference path="runtimecase.statelist.d.ts" />
declare namespace $DP.PageParts.CaseEditor {
    import DesignerColor = $D.Silverlight.UI.Utilities.DesignerColor;
    enum FolderStateType {
        Completed = 0,
        Current = 1,
        Pending = 2
    }
    enum SortBy {
        State = 0,
        Sequential = 1
    }
    interface FolderStateModel {
        Id: string;
        StateName: string;
        Order: number;
        Color: DesignerColor;
        StateItems: any[];
        StateType: FolderStateType;
        SortBy: SortBy;
    }
    interface RuntimeCasePartViewOptions {
        host: JQuery;
        id: string;
        folderId: string;
        showPendingAssignment: boolean;
        showDataInReverseOrder: boolean;
        turnOffTimeStamps: boolean;
        states: FolderStateModel[];
    }
    class RuntimeCasePartView {
        private options;
        private $view;
        private header;
        private commentBox;
        private states;
        constructor(options: RuntimeCasePartViewOptions);
        private call;
        private refresh;
        private renderStateList;
        private render;
    }
}
