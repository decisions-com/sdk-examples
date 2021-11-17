/// <reference path="./datatypes._base.d.ts" />

interface TileDataReturnServiceStatic {

	ExecuteFlowAndGetTile(flowId: string, folderId: string, pageName: string, pageContextId: string, successCallback: (data: { ExecuteFlowAndGetTileResult: $D.Framework.Design.Flow.CoreSteps.Tile.TileData }) => any, errorCallback?: () => any): JQueryPromise<{ ExecuteFlowAndGetTileResult: $D.Framework.Design.Flow.CoreSteps.Tile.TileData }>;

	ExecuteFlowAndGetTile(flowId: string, folderId: string, pageName: string, pageContextId: string): { ExecuteFlowAndGetTileResult: $D.Framework.Design.Flow.CoreSteps.Tile.TileData };

	ExecuteFlowAndGetTilePromise(flowId: string, folderId: string, pageName: string, pageContextId: string): Promise<$D.Framework.Design.Flow.CoreSteps.Tile.TileData>;

	ExecuteFlowAndGetTiles(flowId: string, folderId: string, pageName: string, pageContextId: string, successCallback: (data: { ExecuteFlowAndGetTilesResult: $D.Framework.Design.Flow.CoreSteps.Tile.TileData[] }) => any, errorCallback?: () => any): JQueryPromise<{ ExecuteFlowAndGetTilesResult: $D.Framework.Design.Flow.CoreSteps.Tile.TileData[] }>;

	ExecuteFlowAndGetTiles(flowId: string, folderId: string, pageName: string, pageContextId: string): { ExecuteFlowAndGetTilesResult: $D.Framework.Design.Flow.CoreSteps.Tile.TileData[] };

	ExecuteFlowAndGetTilesPromise(flowId: string, folderId: string, pageName: string, pageContextId: string): Promise<$D.Framework.Design.Flow.CoreSteps.Tile.TileData[]>;

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
	TileDataReturnService(): TileDataReturnServiceStatic;
}
