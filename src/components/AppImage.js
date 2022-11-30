import React, { useMemo } from 'react';
import { Image } from 'react-native';

const AppImage = ({ file, maxWidth, ...props }) => {
    const dimensions = useMemo(() => {
        const width = Math.min(file.ft_width, maxWidth);
        const height = width * file.ft_height / file.ft_width;
        return { width, height };
    }, [ maxWidth ]);

    return (
        <Image source={{ uri: file.ft_download_url }} style={{ width: dimensions.width, height: dimensions.height }} {...props} />
    );
}

export default AppImage;