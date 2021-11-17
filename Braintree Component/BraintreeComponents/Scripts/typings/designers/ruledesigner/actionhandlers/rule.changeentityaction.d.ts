/// <reference path="rule.baseactionhandler.d.ts" />
/// <reference path="../../../dialog/dialog.d.ts" />
/// <reference path="../../../entitypicker/epick.ui.d.ts" />
/// <reference path="../../../entitypicker/epick.model.d.ts" />
/// <reference path="../../../typings/jquery/jquery.d.ts" />
declare namespace $DP.Designers.Rules {
    class ChangeEntityActionHandler extends BaseRuleActionHandler {
        change(): void;
        getMenuItems(stickTo: HTMLElement): any[];
        edit(stickTo?: HTMLElement): void;
        private pickEntity;
    }
}
