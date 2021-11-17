/// <reference path="lay.interfaces.d.ts" />
/// <reference path="../ColorEditor/colorpick.d.ts" />
declare module $D.Silverlight.UI.Utilities {
    interface DesignerColor extends $D.Framework._DBO {
        opacity?: number;
        colorName?: string;
        themeBrushKey?: string;
        gradientDirection?: $D.Silverlight.UI.Utilities.DesignerGradientDirection;
        gradientDefinition?: $D.Silverlight.UI.Utilities.DesignerGradient[];
        type?: $D.Framework.ServiceLayer.Services.Theme.ThemeGradientType;
    }
}
declare namespace $DP.Containers.Utils {
    import DesignerColor = $D.Silverlight.UI.Utilities.DesignerColor;
    type BorderStyle = {
        radius: number;
        width: number;
        color: DesignerColor;
    };
    type BackgroundOptions = {
        backgroundDesignerColor?: DesignerColor;
        backgroundType?: SilverContainerBackgroundType;
        transparentBackground?: boolean;
        backgroundImageSrc?: string;
        backgroundStretch?: boolean;
        backgroundAlignmentX?: SilverContainerBackgroundAlignmentX;
        backgroundAlignmentY?: SilverContainerBackgroundAlignmentY;
        backgroundImage?: $D.Framework.ServiceLayer.Services.Image.ImageInfo;
    };
    function setContainerStyle(el: JQuery, options: ContainerOptions): void;
    function getBackgroundStyle(options: BackgroundOptions): string;
}
