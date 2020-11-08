import { createStyles, makeStyles } from '@material-ui/core';

export const useDetailsStyles = makeStyles(() =>
    createStyles({
        avatar: {
            width: '8rem',
            height: '8rem',
            marginRight: '4rem',
        },
        detailsCard: {
            minHeight: '80vh',
        },
        header: {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            overflow: 'hidden',
            wordWrap: 'break-word',
            padding: '1rem',
            marginBottom: '3rem',
            wordBreak: 'break-word',
            '@media (min-width:780px)': {
                flexDirection: 'row',
                justifyContent: 'space-between',
            },
        },
        list: {
            maxHeight: '30vh',
            overflowY: 'auto',
            wordWrap: 'break-word',
        },
        repo: {
            borderBottom: '1px solid gray',
            padding: '1rem',
        },
        textCenter: {
            textAlign: 'center',
        },
        button: {
            textDecoration: 'none',
            padding: '.5rem',
            color: '#ffffff',
            border: '2px solid #ffffff',
            background: 'linear-gradient(to left bottom, #24292e, #31344f, #5e3562, #932b58, #b53032)',
            borderRadius: '10px',
            fontSize: '1.5rem',
            fontWeight: 700,
            '&:hover': {
                transform: 'scale(1.1)',
                cursor: 'pointer',
            },
        },
    }),
);
