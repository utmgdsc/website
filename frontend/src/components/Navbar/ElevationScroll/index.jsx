import {
    Slide,
    useScrollTrigger
} from "@mui/material";

const ElevationScroll = (props) => {
    const { children } = props;

    const elevationTrigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    const slideTrigger = useScrollTrigger({});

    return (
        <Slide
            appear={false}
            direction="down"
            in={!slideTrigger}
            elevation={elevationTrigger ? 4 : 0}
            sx={{ background: elevationTrigger ? "white" : "transparent" }}
        >
            {children}
        </Slide>
    );
}

export default ElevationScroll;
