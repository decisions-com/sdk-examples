/**
 * Author:oleg@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="rule.anygroupmodel.d.ts" />
/// <reference path="rule.allgroupmodel.d.ts" />
declare namespace $DP.Designers.Rules {
    import AllGroupModel = $DP.Designers.Rules.AllGroupModel;
    /**
     * Wrapper for legacy rule model which exposes single ModelChange event which allows use it easily to migrate from
     * MVC project to React project.
     */
    class LegacyModelWrapper {
        private rootModel;
        getRootModel(): AllGroupModel;
        ModelChanged: () => void;
        constructor(rootModel: AllGroupModel);
        private subscribe;
        private unsubscribe;
        private onModelChanged;
        dispose(): void;
    }
}
