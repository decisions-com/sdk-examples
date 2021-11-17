/// <reference path="./datatypes._base.d.ts" />

interface ImageServiceStatic {

	GetImageFromUrl(uri: string, successCallback: (data: { GetImageFromUrlResult: number[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetImageFromUrlResult: number[] }>;

	GetImageFromUrl(uri: string): { GetImageFromUrlResult: number[] };

	GetImageFromUrlPromise(uri: string): Promise<number[]>;

	GetImageFromDocument(documentId: string, successCallback: (data: { GetImageFromDocumentResult: number[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetImageFromDocumentResult: number[] }>;

	GetImageFromDocument(documentId: string): { GetImageFromDocumentResult: number[] };

	GetImageFromDocumentPromise(documentId: string): Promise<number[]>;

	GetImageParamsFromImageId(imageId: string, successCallback: (data: { GetImageParamsFromImageIdResult: $D.Framework.ServiceLayer.Services.Image.ImageParams }) => any, errorCallback?: () => any): JQueryPromise<{ GetImageParamsFromImageIdResult: $D.Framework.ServiceLayer.Services.Image.ImageParams }>;

	GetImageParamsFromImageId(imageId: string): { GetImageParamsFromImageIdResult: $D.Framework.ServiceLayer.Services.Image.ImageParams };

	GetImageParamsFromImageIdPromise(imageId: string): Promise<$D.Framework.ServiceLayer.Services.Image.ImageParams>;

	GetStoredImage(imageFolderId: string, imageName: string, successCallback: (data: { GetStoredImageResult: number[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetStoredImageResult: number[] }>;

	GetStoredImage(imageFolderId: string, imageName: string): { GetStoredImageResult: number[] };

	GetStoredImagePromise(imageFolderId: string, imageName: string): Promise<number[]>;

	GetStoredImageById(storedImageId: string, successCallback: (data: { GetStoredImageByIdResult: number[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetStoredImageByIdResult: number[] }>;

	GetStoredImageById(storedImageId: string): { GetStoredImageByIdResult: number[] };

	GetStoredImageByIdPromise(storedImageId: string): Promise<number[]>;

	GetStoredImageWithSize(imageFolderId: string, imageName: string, width: number, height: number, colorName: string, successCallback: (data: { GetStoredImageWithSizeResult: number[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetStoredImageWithSizeResult: number[] }>;

	GetStoredImageWithSize(imageFolderId: string, imageName: string, width: number, height: number, colorName: string): { GetStoredImageWithSizeResult: number[] };

	GetStoredImageWithSizePromise(imageFolderId: string, imageName: string, width: number, height: number, colorName: string): Promise<number[]>;

	GetStoredImageByIdWithSize(storedImageId: string, width: number, height: number, successCallback: (data: { GetStoredImageByIdWithSizeResult: number[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetStoredImageByIdWithSizeResult: number[] }>;

	GetStoredImageByIdWithSize(storedImageId: string, width: number, height: number): { GetStoredImageByIdWithSizeResult: number[] };

	GetStoredImageByIdWithSizePromise(storedImageId: string, width: number, height: number): Promise<number[]>;

	GetStoredImageByIdWithSizeAndColor(storedImageId: string, width: number, height: number, colorName: string, successCallback: (data: { GetStoredImageByIdWithSizeAndColorResult: number[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetStoredImageByIdWithSizeAndColorResult: number[] }>;

	GetStoredImageByIdWithSizeAndColor(storedImageId: string, width: number, height: number, colorName: string): { GetStoredImageByIdWithSizeAndColorResult: number[] };

	GetStoredImageByIdWithSizeAndColorPromise(storedImageId: string, width: number, height: number, colorName: string): Promise<number[]>;

	GetStoredSvgImageById(storedImageId: string, successCallback: (data: { GetStoredSvgImageByIdResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetStoredSvgImageByIdResult: string }>;

	GetStoredSvgImageById(storedImageId: string): { GetStoredSvgImageByIdResult: string };

	GetStoredSvgImageByIdPromise(storedImageId: string): Promise<string>;

	GetStoredImages(imageFolderId: string, successCallback: (data: { GetStoredImagesResult: $D.Framework.ServiceLayer.Services.Image.ImageDocument[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetStoredImagesResult: $D.Framework.ServiceLayer.Services.Image.ImageDocument[] }>;

	GetStoredImages(imageFolderId: string): { GetStoredImagesResult: $D.Framework.ServiceLayer.Services.Image.ImageDocument[] };

	GetStoredImagesPromise(imageFolderId: string): Promise<$D.Framework.ServiceLayer.Services.Image.ImageDocument[]>;

	SearchSharedImages(fileToSearch: string, successCallback: (data: { SearchSharedImagesResult: $D.Framework.ServiceLayer.Services.Image.ImageDocument[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchSharedImagesResult: $D.Framework.ServiceLayer.Services.Image.ImageDocument[] }>;

	SearchSharedImages(fileToSearch: string): { SearchSharedImagesResult: $D.Framework.ServiceLayer.Services.Image.ImageDocument[] };

	SearchSharedImagesPromise(fileToSearch: string): Promise<$D.Framework.ServiceLayer.Services.Image.ImageDocument[]>;

	SearchSharedImagesWithIds(fileToSearch: string, successCallback: (data: { SearchSharedImagesWithIdsResult: $D.Framework.ServiceLayer.Services.Image.ImageDocument[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchSharedImagesWithIdsResult: $D.Framework.ServiceLayer.Services.Image.ImageDocument[] }>;

	SearchSharedImagesWithIds(fileToSearch: string): { SearchSharedImagesWithIdsResult: $D.Framework.ServiceLayer.Services.Image.ImageDocument[] };

	SearchSharedImagesWithIdsPromise(fileToSearch: string): Promise<$D.Framework.ServiceLayer.Services.Image.ImageDocument[]>;

	GetEntityImage(id: string, successCallback: (data: { GetEntityImageResult: number[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetEntityImageResult: number[] }>;

	GetEntityImage(id: string): { GetEntityImageResult: number[] };

	GetEntityImagePromise(id: string): Promise<number[]>;

	GetKnownColorName(colorName: string, successCallback: (data: { GetKnownColorNameResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetKnownColorNameResult: string }>;

	GetKnownColorName(colorName: string): { GetKnownColorNameResult: string };

	GetKnownColorNamePromise(colorName: string): Promise<string>;

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
	ImageService(): ImageServiceStatic;
}
