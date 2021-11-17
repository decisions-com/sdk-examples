declare namespace $DP.Utils.Validation {
    import ValidationIssue = $D.Framework.ValidationIssue;
    import BreakLevel = $D.Framework.BreakLevel;
    function getValidationsByLevel(validations: ValidationIssue[], level: BreakLevel): ValidationIssue[];
    function hasValidationIssues(validations: ValidationIssue[]): boolean;
    function getValidationErrors(validations: ValidationIssue[]): ValidationIssue[];
    function getValidationWarnings(validations: ValidationIssue[]): ValidationIssue[];
    function hasValidationErrors(validations: ValidationIssue[]): boolean;
    function hasValidationWarnings(validations: ValidationIssue[]): boolean;
    function getValidationIssuesHtml(validationIssues: Array<ValidationIssue>, predicate?: (va: any) => boolean): string;
    function getBreakLevelClass(validationIssue: ValidationIssue): string;
}
