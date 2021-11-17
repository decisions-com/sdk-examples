/// <reference path="./datatypes._base.d.ts" />

interface RepositoryClientSSOServiceStatic {

	GetActiveSessionAccount(userContext: $D.Framework.ServiceLayer.Utilities.RepositoryClientSSOUserContext, successCallback: (data: { GetActiveSessionAccountResult: $D.Framework.ServiceLayer.Services.DesignerRepository.Client.RepositoryAccount }) => any, errorCallback?: () => any): JQueryPromise<{ GetActiveSessionAccountResult: $D.Framework.ServiceLayer.Services.DesignerRepository.Client.RepositoryAccount }>;

	GetActiveSessionAccount(userContext: $D.Framework.ServiceLayer.Utilities.RepositoryClientSSOUserContext): { GetActiveSessionAccountResult: $D.Framework.ServiceLayer.Services.DesignerRepository.Client.RepositoryAccount };

	GetActiveSessionAccountPromise(userContext: $D.Framework.ServiceLayer.Utilities.RepositoryClientSSOUserContext): Promise<$D.Framework.ServiceLayer.Services.DesignerRepository.Client.RepositoryAccount>;
}

interface ServicesStatic {
	RepositoryClientSSOService(): RepositoryClientSSOServiceStatic;
}
