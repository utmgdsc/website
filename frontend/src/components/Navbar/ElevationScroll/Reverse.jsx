import React from "react";

import {
    useScrollTrigger
} from "@mui/material";

const ElevationScrollReverse = (props) => {
    const { children } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        sx: { boxShadow: trigger ? 0 : 4 },
    });
}

export default ElevationScrollReverse;
