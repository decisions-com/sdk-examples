declare namespace $DP.Designers.Help {
    import ToolboxHelpDisplayData = $D.Framework.Design.Properties.ToolboxHelpDisplayData;
    function showHelpInDialog(options: {
        stepName: string;
        help: ToolboxHelpDisplayData;
        onEdited?: (html: string) => void;
    }): void;
}
