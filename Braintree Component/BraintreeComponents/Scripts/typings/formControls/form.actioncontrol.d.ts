declare namespace $DP.Control {
    abstract class ActionControl extends FormComponentBase implements $DP.FormHost.DecisionsActionControl {
        abstract getActionName(): string;
    }
}
