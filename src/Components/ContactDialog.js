import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import DialogTitle from '@mui/material/DialogTitle'

import Typography from '@mui/material/Typography'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}))

export const ContactDialog = ({ open, setopen }) => {
    const BootstrapDialogTitle = () => {
        return (
            <DialogTitle sx={{ m: 0, p: 2 }}>
                {'My Contact Details'}
                <IconButton
                    aria-label='close'
                    onClick={() => setopen(false)}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
        )
    }
    return (
        <div>
            <Button variant='outlined'>Open dialog</Button>
            <BootstrapDialog
                aria-labelledby='customized-dialog-title'
                open={open}
            >
                <BootstrapDialogTitle id='customized-dialog-title'></BootstrapDialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        Note: There is some problem with backend api. Please use
                        below details to contact me. Thank you!
                    </Typography>
                    <Typography gutterBottom>
                        Email : partheev8@gmail.com
                    </Typography>
                    <Typography gutterBottom>
                        Phone : +91 7396378493
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setopen(false)} autoFocus>
                        OK
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </div>
    )
}
