declare namespace $DP.Common {
    interface StyleProps {
        inline?: string;
        className?: string;
    }
    class DefaultStyleProps implements StyleProps {
        inline: string;
        className: string;
    }
    interface DisplayOptionsHolder {
        displayOptions?: any;
    }
    class DisplayOptionsHelper {
        static init(holder: DisplayOptionsHolder, defaultValue: any): void;
        static get(propertyAccessor: () => StyleProps): StyleProps;
        static convertToAttrs(props: StyleProps | (() => StyleProps), defaultProps?: StyleProps): string;
        static styleToAttr(inlineStyle: string, defaultStyle?: string): string;
        static classToAttr(className: string, defaultClass?: string): string;
        static merge(props1: StyleProps, props2: StyleProps): StyleProps;
    }
}
