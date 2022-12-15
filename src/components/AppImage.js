import React, { useMemo } from 'react';
import { Image } from 'react-native';

const AppImage = ({ fileinfo, maxWidth, style, ...props }) => {
    const dimensions = useMemo(() => {
        const width = Math.min(fileinfo.width, maxWidth);
        const height = width * fileinfo.height / fileinfo.width;
        return { width, height };
    }, [ maxWidth ]);

    return (
        <Image source={{ uri: fileinfo.download_url }} style={[{ width: dimensions.width, height: dimensions.height }, style ]} {...props} />
    );
}

export default AppImage;