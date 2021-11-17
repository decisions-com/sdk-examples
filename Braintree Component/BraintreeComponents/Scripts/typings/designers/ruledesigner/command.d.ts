declare namespace $DP.Designers.Rules {
    interface EditableRuleCommandOprions {
        name?: string;
        command?: () => void;
        confirmMessage?: string;
        className?: string;
    }
    class EditableRuleCommand {
        name?: string;
        command?: () => void;
        confirmMessage?: string;
        className?: string;
        constructor(options: EditableRuleCommandOprions);
        execute(): void;
    }
}
