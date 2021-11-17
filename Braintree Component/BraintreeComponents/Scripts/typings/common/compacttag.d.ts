/// <reference path="../typings/core/generated/taggingservice.d.ts" />
/// <reference path="popuplayer.d.ts" />
import TagForTree = $D.Framework.ServiceLayer.Services.Tagging.TagForTree;
import TagData = $D.Framework.ServiceLayer.Services.Tagging.TagData;
declare namespace $DP.Common {
    interface CompactTagOptions extends CompactTagStyleOptions {
        holder?: JQuery;
        entityType?: string;
        entityId?: string | string[];
        entityTypeShortName?: string;
        tabindex?: number;
        selectedTags?: TagData[];
        onTagsChange?: (selectedTags: TagData[]) => void;
        onTagNoteChanged?: () => void;
    }
    interface CompactTagStyleOptions {
        fontStyle?: string;
        dropdownButtonClass?: string;
        textBoxClass?: string;
        listClass?: string;
        controlCssClass?: string;
    }
    class CompactTag {
        private options;
        $view: JQuery;
        $input: JQuery;
        $tagsLayer: JQuery;
        $tagsContainer: JQuery;
        $dropdownArrow: JQuery;
        $selectedTagsConatiner: JQuery;
        selectedTags: TagData[];
        $noteToolTipLayer: JQuery;
        $inputContainer: JQuery;
        $newTagLayer: JQuery;
        $waterMark: JQuery;
        focusOutTimer: number;
        entityIds: string[];
        readonly taggingService: TaggingServiceStatic;
        private readonly textItemHeight;
        private static watermarkText;
        constructor(options: CompactTagOptions);
        private _tags;
        get tags(): string[];
        get root(): JQuery;
        private _canCreateTag;
        get canCreateTag(): boolean;
        create(): Promise<void>;
        setMaxHeight(height: number): void;
        static getWaterMarkText(): Promise<string>;
        render(): Promise<void>;
        attachEvents(): void;
        showAndFocusInput(): void;
        setInputSize(): void;
        showLayer(layerContent: JQuery): void;
        protected getPopupLayerHeight(layerContent: JQuery): number;
        closeLayer(...layers: JQuery[]): void;
        getLayer(searchText?: string): JQuery;
        getTagsLayer(): JQuery;
        getTagsForLayer(filterText?: string): string[];
        createTagItemView(tag: string, highlightText?: (item: string) => string): JQuery;
        selectTag(tag: string): void;
        createSelectedTagsView(focusInput?: boolean): void;
        getSelectedItemView(tag: TagData): JQuery;
        showTagNoteDialog(title: string, tag: TagData): void;
        showTagNoteToolTip(tag: TagData, $tag: JQuery): void;
        showAddNewTagLayer(): void;
        raiseTagsChangeEvent(): void;
        addTag(tagName: string): void;
        getSelectedTags(): TagData[];
        setSelectedTags(tags: TagData[], raiseEvent?: boolean): void;
        static EntityTagsChangeListners: (messageId: any, outputValue: any) => void;
        static get(elem: JQuery): CompactTag;
        updateTags(): void;
    }
}
interface JQuery {
    compactTag(options: $DP.Common.CompactTagOptions): Promise<$DP.Common.CompactTag>;
    compactTag(methodName: "getSelectedTags"): TagData[];
    compactTag(methodName: "updateTags"): any;
    compactTag(methodName: "get"): $DP.Common.CompactTag;
}
