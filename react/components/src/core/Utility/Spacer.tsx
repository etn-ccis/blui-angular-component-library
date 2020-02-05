import { CSSProperties } from '@material-ui/styles';
import React from 'react';

export type SpacerProps = {
    flex?: number;
    height?: number;
    width?: number;
    classes?: SpacerClasses;
    style?: CSSProperties;
};
export type SpacerClasses = {
    root?: string;
}

export const Spacer: React.FC<SpacerProps> = (props) => {
    const {
        flex = 1,
        width,
        height,
        children,
        classes,
        style,
    } = props;

    return (
        <div data-test={'spacer-root'} className={classes?.root} style={Object.assign({
            flex: `${flex} ${flex} ${flex === 0 ? 'auto' : '0px'}`,
            height: height || 'auto',
            width: width || 'auto'
        }, {...style})}>
            {children}
        </div>
    );
};
