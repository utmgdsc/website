import {
    IconButton,
    Tooltip,
} from "@mui/material";


const SocialButton = ({ href, icon, tooltip, title }) => {
    return (
        <Tooltip title={title}>
            <IconButton
                aria-label={tooltip}
                color="default"
                href={href}
                rel="noopener noreferrer"
                size="large"
                sx={{ marginLeft: ".5em" }}
                target="_blank"
            >
                {icon}
            </IconButton>
        </Tooltip>
    );
};

export default SocialButton;
