import { createStyles, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() =>
    createStyles({
        white: {
            color: '#ffffff',
            overflow: 'hidden',
            borderRadius: '10px',
            backgroundColor: 'transparent',
            '&:hover': {
                borderColor: '#ffffff',
            },

            '& label': {
                color: '#ffffff',
                marginTop: '.3rem',
            },
            '& label.Mui-focused': {
                color: '#ffffff',
            },
            '& .MuiInput-underline:after': {
                borderBottomColor: '#ffffff',
            },

            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: '#ffffff',
                },
                '&:hover fieldset': {
                    borderColor: '#ffffff',
                },
                '&.Mui-focused fieldset': {
                    borderColor: '#ffffff',
                },
            },
        },
        search: {
            width: '100%',
            maxWidth: '100%',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            marginBottom: '1rem',
            marginTop: '1rem',
            '& input': {
                color: '#ffffff',
            },
            '@media (min-width:780px)': {
                flexDirection: 'row',
            },
        },
    }),
);
