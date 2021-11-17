interface PropertygridHelperStatic {
    EditorResize(propertyGridContainerElem, width, height);
    InitializePropertyGrid(componentId, contextID, isDynamicContext, isDynamic, refreshPropertyGridHandler);
    PropertyGridInstanceHolder;
    getPropertyDialogWindow(target: JQuery): JQuery;
    getPropertyGridContextId(target: JQuery): string;
    GetPropertyGrid(target: JQuery);
    findNodeByPath(propertyGridElement: JQuery, path: string | string[]);
    getClassNameFromPath(path: string | string[]);
}

interface DecisionsStatic {
    PropertygridHelper: PropertygridHelperStatic;
}
interface PropertyGridStatic {
    EditComplete(showValidationIssues, isDynamicContext, callback);
}