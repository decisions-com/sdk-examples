/// <reference path="./datatypes._base.d.ts" />

interface ValidationIssueServiceStatic {

	GetValidationIssues(successCallback: (data: { GetValidationIssuesResult: $D.Framework.ServiceLayer.Utilities.SystemValidation.SystemValidationIssue[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetValidationIssuesResult: $D.Framework.ServiceLayer.Utilities.SystemValidation.SystemValidationIssue[] }>;

	GetValidationIssues(): { GetValidationIssuesResult: $D.Framework.ServiceLayer.Utilities.SystemValidation.SystemValidationIssue[] };

	GetValidationIssuesPromise(): Promise<$D.Framework.ServiceLayer.Utilities.SystemValidation.SystemValidationIssue[]>;
}

interface ServicesStatic {
	ValidationIssueService(): ValidationIssueServiceStatic;
}
