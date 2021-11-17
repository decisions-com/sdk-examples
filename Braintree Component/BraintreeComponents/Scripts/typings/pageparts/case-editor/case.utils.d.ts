/**
 * Author: alex@decisions.com
 * Notes: unauthorized, unlicensed use, redistribution, modification is not allowed.
 */
/// <reference path="../../common/svg.icons.d.ts" />
declare namespace $DP.PageParts.CaseEditor {
    import ElementRegistrationDto = $D.Framework.Design.DataStructure.CaseEditor.ElementRegistrationDto;
    class CaseUtils {
        static get ENTITY_ACTION_FLOW_BEHAVIOR(): string;
        static get FOLDER_BEHAVIOR_TRANSITION_FLOW_BEHAVIOR(): string;
        static get SHARED_FOLDER_USER_ACTION_FLOW(): string;
        static get SHARED_FOLDER_STATE_TRANSITION_FLOW(): string;
        /**
         * Returns icon for entities in "Other" section
         * @param entity other entity
         */
        static getOtherEntityIcon(entity: ElementRegistrationDto): JQuery;
        /**
         * Returns icon for activity flow.
         * Activity flow is a flow is under state in UI.
         *
         * NOTE: we cannot use icon from behavior because case editor requres other icons for these behaviors.
         */
        static getActivityIcon(behaviorType: string): JQuery;
        static isTransitionFlow(behaviorType: string): boolean;
    }
}
