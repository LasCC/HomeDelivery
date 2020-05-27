import React, { useContext, Fragment, useState } from 'react';
import { LoginContext } from "../contexts/LoginContext"
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';

import CloseIcon from '@material-ui/icons/Close';

export default props => {
    const { httpError } = useContext(LoginContext)
    const [state, setState] = useState({
        open: true,
        vertical: 'top',
        horizontal: 'center',
    });

    const { vertical, horizontal, open } = state;

    const handleClick = (newState) => () => {
        setState({ open: true, ...newState });
    };


    const handleClose = () => {
        setState({ ...state, open: false });
    };


    const showErrorNotification = () => {
        if (httpError.serverError)
            return (
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: "bottom", horizontal: "right" }}>
                    <Alert onClose={handleClose} severity="error">
                        Une erreur est survenue !
                </Alert>
                </Snackbar>

            )

    }

    return (
        <Fragment>
            {showErrorNotification()}
            <pre>
                {JSON.stringify(httpError)}
            </pre>
        </Fragment>
    )
}
