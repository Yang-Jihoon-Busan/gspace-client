import React from 'react';

export const navigationRef = React.createRef();

export function resetRoot(name, params) {
    navigationRef.current?.resetRoot({
        index: 0,
        routes: [{ name }],
    });
}

