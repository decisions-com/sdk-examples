declare namespace $DP.Components.Page {
    interface OpenChildTabButtonPartOptions {
        holder: JQuery;
        pageId: string;
        horizontalAlignment: string;
        verticalAlignment: string;
        buttonText: string;
        cssClass: string;
        instanceId: string;
    }
    class OpenChildTabButtonPart {
        private options;
        constructor(options: OpenChildTabButtonPartOptions);
        static initialize(options: OpenChildTabButtonPartOptions): OpenChildTabButtonPart;
        render(): void;
        attachEvents(): void;
    }
}
