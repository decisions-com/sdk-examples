declare namespace $DP.Control {
    enum MvcDisplayMode {
        Dialog = 0,
        Inline = 1,
        InlineEmbed = 2
    }
    class DisplayHtmlSilverPart {
        static loadHtmlDataFromUrl(elementId: string, selectionBusName: string, mvcDisplayMode: MvcDisplayMode): void;
    }
}
