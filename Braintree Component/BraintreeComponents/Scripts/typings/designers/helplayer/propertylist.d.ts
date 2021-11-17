/// <reference path="../../typings/jquery/jquery.d.ts" />
/// <reference path="../../typings/core/generated/datatypes._base.d.ts" />
declare namespace $DP.Designers.Help {
    import PropertyDefinition = $D.Framework.Design.Properties.Help.PropertyDefinition;
    class PropertyListOptions {
        $host?: JQuery;
        headerText: string;
        properties: PropertyDefinition[];
        fieldLength?: number;
    }
    class PropertyList {
        private options;
        private $view;
        constructor(options: PropertyListOptions);
        getView(): JQuery;
        protected render(): void;
        private renderHeader;
        private renderList;
        private renderProperty;
    }
}
