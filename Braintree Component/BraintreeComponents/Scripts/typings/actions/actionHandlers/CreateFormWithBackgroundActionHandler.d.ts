declare namespace $DP.Designers.Creation {
    import CreateFormWithBackgroundAction = $D.Framework.ServiceLayer.Services.ConfigurationStorage.CreateFormWithBackgroundAction;
    class CreateFormWithBackgroundRegistration {
        static handle(action: CreateFormWithBackgroundAction): void;
        private static getHandler;
    }
}
