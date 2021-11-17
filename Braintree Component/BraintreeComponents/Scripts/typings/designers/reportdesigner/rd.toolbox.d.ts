/**
 * Author:dorin@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.Designers.Reports {
    class DesignerProperties implements $DP.Designers.SidebarPanel {
        private formSessionId;
        container: JQuery;
        private propertyGrid;
        constructor(formSessionId: string);
        get header(): string;
        refresh(contextId: string): Promise<string>;
        initialize(container: JQuery): void;
        resize(width: number, height: number): void;
        hasEditContext(): boolean;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
