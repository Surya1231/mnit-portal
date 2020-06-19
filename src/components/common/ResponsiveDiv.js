import React from 'react';

export const MobileHiddenDiv = ({children}) => {
    return (
        <div className = "d-none d-md-block">
            {children}
        </div>
    )
}

export const CenterDiv = ({children}) => {
    return(
        <div className = "center-box">
            {children}
        </div>
    )
}
