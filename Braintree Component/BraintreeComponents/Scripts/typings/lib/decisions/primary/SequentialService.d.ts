/// <reference path="./datatypes._base.d.ts" />

interface SequentialServiceStatic {

	RemovePiece(sessionId: string, pieceId: string, successCallback: (data: { RemovePieceResult: $D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession }) => any, errorCallback?: () => any): JQueryPromise<{ RemovePieceResult: $D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession }>;

	RemovePiece(sessionId: string, pieceId: string): { RemovePieceResult: $D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession };

	RemovePiecePromise(sessionId: string, pieceId: string): Promise<$D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession>;

	StartEditSession(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, editingContextId: string, path: string[], successCallback: (data: { StartEditSessionResult: $D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession }) => any, errorCallback?: () => any): JQueryPromise<{ StartEditSessionResult: $D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession }>;

	StartEditSession(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, editingContextId: string, path: string[]): { StartEditSessionResult: $D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession };

	StartEditSessionPromise(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, editingContextId: string, path: string[]): Promise<$D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession>;

	GetEditSession(sessionId: string, successCallback: (data: { GetEditSessionResult: $D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession }) => any, errorCallback?: () => any): JQueryPromise<{ GetEditSessionResult: $D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession }>;

	GetEditSession(sessionId: string): { GetEditSessionResult: $D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession };

	GetEditSessionPromise(sessionId: string): Promise<$D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession>;

	SaveEditSession(sessionId: string, completeSequenceEditing: boolean, completePropertyGridEditing: boolean, successCallback: (data: { SaveEditSessionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveEditSessionResult: void }>;

	SaveEditSession(sessionId: string, completeSequenceEditing: boolean, completePropertyGridEditing: boolean): { SaveEditSessionResult: void };

	SaveEditSessionPromise(sessionId: string, completeSequenceEditing: boolean, completePropertyGridEditing: boolean): Promise<void>;

	AddPiece(sessionId: string, nextPieceName: string, successCallback: (data: { AddPieceResult: $D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession }) => any, errorCallback?: () => any): JQueryPromise<{ AddPieceResult: $D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession }>;

	AddPiece(sessionId: string, nextPieceName: string): { AddPieceResult: $D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession };

	AddPiecePromise(sessionId: string, nextPieceName: string): Promise<$D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession>;

	CancelEditSession(sessionId: string, completePropertyGridEditing: boolean, successCallback: (data: { CancelEditSessionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ CancelEditSessionResult: void }>;

	CancelEditSession(sessionId: string, completePropertyGridEditing: boolean): { CancelEditSessionResult: void };

	CancelEditSessionPromise(sessionId: string, completePropertyGridEditing: boolean): Promise<void>;

	GetSubItems(sessionId: string, pieceId: string, successCallback: (data: { GetSubItemsResult: $D.Framework.Design.Flow.Mapping.SelectValue.SubProperty[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetSubItemsResult: $D.Framework.Design.Flow.Mapping.SelectValue.SubProperty[] }>;

	GetSubItems(sessionId: string, pieceId: string): { GetSubItemsResult: $D.Framework.Design.Flow.Mapping.SelectValue.SubProperty[] };

	GetSubItemsPromise(sessionId: string, pieceId: string): Promise<$D.Framework.Design.Flow.Mapping.SelectValue.SubProperty[]>;

	Update(sessionId: string, dto: $D.Framework.Design.Flow.Mapping.SelectValue.SelectValuePieceDto, successCallback: (data: { UpdateResult: $D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateResult: $D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession }>;

	Update(sessionId: string, dto: $D.Framework.Design.Flow.Mapping.SelectValue.SelectValuePieceDto): { UpdateResult: $D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession };

	UpdatePromise(sessionId: string, dto: $D.Framework.Design.Flow.Mapping.SelectValue.SelectValuePieceDto): Promise<$D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession>;

	ReplacePiece(sessionId: string, oldPieceId: string, nextPieceName: string, successCallback: (data: { ReplacePieceResult: $D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession }) => any, errorCallback?: () => any): JQueryPromise<{ ReplacePieceResult: $D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession }>;

	ReplacePiece(sessionId: string, oldPieceId: string, nextPieceName: string): { ReplacePieceResult: $D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession };

	ReplacePiecePromise(sessionId: string, oldPieceId: string, nextPieceName: string): Promise<$D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession>;

	SetFromPath(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, editingContextId: string, propertyGridPath: string[], path: string, successCallback: (data: { SetFromPathResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetFromPathResult: void }>;

	SetFromPath(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, editingContextId: string, propertyGridPath: string[], path: string): { SetFromPathResult: void };

	SetFromPathPromise(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, editingContextId: string, propertyGridPath: string[], path: string): Promise<void>;

	GetSuggestions(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, path: string, successCallback: (data: { GetSuggestionsResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetSuggestionsResult: string[] }>;

	GetSuggestions(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, path: string): { GetSuggestionsResult: string[] };

	GetSuggestionsPromise(mappingContext: $D.Framework.Design.Flow.Service.MappingContext, path: string): Promise<string[]>;

	CreateRule(sessionId: string, pieceId: string, successCallback: (data: { CreateRuleResult: $D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession }) => any, errorCallback?: () => any): JQueryPromise<{ CreateRuleResult: $D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession }>;

	CreateRule(sessionId: string, pieceId: string): { CreateRuleResult: $D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession };

	CreateRulePromise(sessionId: string, pieceId: string): Promise<$D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession>;

	EditRule(sessionId: string, pieceId: string, successCallback: (data: { EditRuleResult: $D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession }) => any, errorCallback?: () => any): JQueryPromise<{ EditRuleResult: $D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession }>;

	EditRule(sessionId: string, pieceId: string): { EditRuleResult: $D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession };

	EditRulePromise(sessionId: string, pieceId: string): Promise<$D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession>;

	ReplaceByPath(sessionId: string, path: string, successCallback: (data: { ReplaceByPathResult: $D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession }) => any, errorCallback?: () => any): JQueryPromise<{ ReplaceByPathResult: $D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession }>;

	ReplaceByPath(sessionId: string, path: string): { ReplaceByPathResult: $D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession };

	ReplaceByPathPromise(sessionId: string, path: string): Promise<$D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession>;

	SearchDataDescription(sessionId: string, criteria: string, ddType: $D.Framework.Utilities.Data.DataDescriptionType, successCallback: (data: { SearchDataDescriptionResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchDataDescriptionResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	SearchDataDescription(sessionId: string, criteria: string, ddType: $D.Framework.Utilities.Data.DataDescriptionType): { SearchDataDescriptionResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	SearchDataDescriptionPromise(sessionId: string, criteria: string, ddType: $D.Framework.Utilities.Data.DataDescriptionType): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;
}

interface ServicesStatic {
	SequentialService(): SequentialServiceStatic;
}
