declare namespace $DP.PageParts.CaseEditor {
    import DesignerColor = $D.Silverlight.UI.Utilities.DesignerColor;
    interface CaseStateModel {
        Id: string;
        StateName: string;
        Color: DesignerColor;
        Order: number;
        Steps: any[];
    }
}
