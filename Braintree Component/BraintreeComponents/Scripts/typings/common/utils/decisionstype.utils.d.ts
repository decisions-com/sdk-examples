declare namespace $DP {
    import DecisionsType = $D.Framework.Design.Flow.Mapping.DecisionsType;
    class DecisionsTypeUtils {
        static getDecisionsTypeId(type: any): any;
        static getDecisionsTypeById(id: string): DecisionsType;
        static friendlyNamesCache: any;
        static getFriendlyTypeName(type: DecisionsType): Promise<string>;
    }
}
