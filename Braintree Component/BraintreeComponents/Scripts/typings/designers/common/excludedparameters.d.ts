/**
 * Author:alex@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.Common {
    interface ExcludeParametersOptions {
        readonly host?: JQuery;
        readonly parameters: DataDescription[];
        readonly onExcluded: (event: {
            origin: ExcludedParameters;
            excluded: DataDescription[];
            isChanged: boolean;
        }) => void;
    }
    class ExcludedParameters {
        private options;
        private $view;
        private excludedParameterNames;
        private static readonly noExcludedParametersMessage;
        constructor(options: ExcludeParametersOptions);
        getView(): JQuery;
        getExcludedParameters(): DataDescription[];
        getExcludedParameterNames(): string[];
        reset(raiseEvent?: boolean): void;
        private render;
        private renderMessage;
        showDialog(): void;
    }
}
/**
 * Copyright Decisions 2018. For License or Copyright information please contact support@decisions.com
*/
