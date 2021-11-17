/// <reference path="./datatypes._base.d.ts" />

interface BaseDeploymentImageServiceStatic {

	GetDeploymentImages(successCallback: (data: { GetDeploymentImagesResult: $D.Framework.ServiceLayer.Services.DeploymentImage.DeploymentImage[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetDeploymentImagesResult: $D.Framework.ServiceLayer.Services.DeploymentImage.DeploymentImage[] }>;

	GetDeploymentImages(): { GetDeploymentImagesResult: $D.Framework.ServiceLayer.Services.DeploymentImage.DeploymentImage[] };

	GetDeploymentImagesPromise(): Promise<$D.Framework.ServiceLayer.Services.DeploymentImage.DeploymentImage[]>;

	CreateDeploymentImage(name: string, description: string, successCallback: (data: { CreateDeploymentImageResult: $D.Framework.ServiceLayer.Services.DeploymentImage.DeploymentImage }) => any, errorCallback?: () => any): JQueryPromise<{ CreateDeploymentImageResult: $D.Framework.ServiceLayer.Services.DeploymentImage.DeploymentImage }>;

	CreateDeploymentImage(name: string, description: string): { CreateDeploymentImageResult: $D.Framework.ServiceLayer.Services.DeploymentImage.DeploymentImage };

	CreateDeploymentImagePromise(name: string, description: string): Promise<$D.Framework.ServiceLayer.Services.DeploymentImage.DeploymentImage>;

	BuildDeploymentImagePackage(deploymentImageId: string, successCallback: (data: { BuildDeploymentImagePackageResult: $D.Framework.Data.DataTypes.FileData }) => any, errorCallback?: () => any): JQueryPromise<{ BuildDeploymentImagePackageResult: $D.Framework.Data.DataTypes.FileData }>;

	BuildDeploymentImagePackage(deploymentImageId: string): { BuildDeploymentImagePackageResult: $D.Framework.Data.DataTypes.FileData };

	BuildDeploymentImagePackagePromise(deploymentImageId: string): Promise<$D.Framework.Data.DataTypes.FileData>;

	DownloadDeploymentImage(deploymentImageId: string, successCallback: (data: { DownloadDeploymentImageResult: $D.Framework.Data.DataTypes.FileData }) => any, errorCallback?: () => any): JQueryPromise<{ DownloadDeploymentImageResult: $D.Framework.Data.DataTypes.FileData }>;

	DownloadDeploymentImage(deploymentImageId: string): { DownloadDeploymentImageResult: $D.Framework.Data.DataTypes.FileData };

	DownloadDeploymentImagePromise(deploymentImageId: string): Promise<$D.Framework.Data.DataTypes.FileData>;

	ValidateDeploymentImage(deploymentImageId: string, successCallback: (data: { ValidateDeploymentImageResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ ValidateDeploymentImageResult: string[] }>;

	ValidateDeploymentImage(deploymentImageId: string): { ValidateDeploymentImageResult: string[] };

	ValidateDeploymentImagePromise(deploymentImageId: string): Promise<string[]>;

	GetSessionUserContext(userId: string, password: string, successCallback: (data: { GetSessionUserContextResult: $D.Framework.ServiceLayer.Utilities.SessionUserContext }) => any, errorCallback?: () => any): JQueryPromise<{ GetSessionUserContextResult: $D.Framework.ServiceLayer.Utilities.SessionUserContext }>;

	GetSessionUserContext(userId: string, password: string): { GetSessionUserContextResult: $D.Framework.ServiceLayer.Utilities.SessionUserContext };

	GetSessionUserContextPromise(userId: string, password: string): Promise<$D.Framework.ServiceLayer.Utilities.SessionUserContext>;

	GetPasswordUserContext(userId: string, password: string, successCallback: (data: { GetPasswordUserContextResult: $D.Framework.ServiceLayer.Utilities.PasswordCredentialsUserContext }) => any, errorCallback?: () => any): JQueryPromise<{ GetPasswordUserContextResult: $D.Framework.ServiceLayer.Utilities.PasswordCredentialsUserContext }>;

	GetPasswordUserContext(userId: string, password: string): { GetPasswordUserContextResult: $D.Framework.ServiceLayer.Utilities.PasswordCredentialsUserContext };

	GetPasswordUserContextPromise(userId: string, password: string): Promise<$D.Framework.ServiceLayer.Utilities.PasswordCredentialsUserContext>;

	GetGuestUserContext(successCallback: (data: { GetGuestUserContextResult: $D.Framework.ServiceLayer.Utilities.GuestUserContext }) => any, errorCallback?: () => any): JQueryPromise<{ GetGuestUserContextResult: $D.Framework.ServiceLayer.Utilities.GuestUserContext }>;

	GetGuestUserContext(): { GetGuestUserContextResult: $D.Framework.ServiceLayer.Utilities.GuestUserContext };

	GetGuestUserContextPromise(): Promise<$D.Framework.ServiceLayer.Utilities.GuestUserContext>;
}

interface ServicesStatic {
	BaseDeploymentImageService(): BaseDeploymentImageServiceStatic;
}
