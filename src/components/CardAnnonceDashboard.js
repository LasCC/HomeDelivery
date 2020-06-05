import React from 'react'
import { Skeleton } from "@material-ui/lab";
import {
    Box,
    Typography, Chip
} from "@material-ui/core"


const drawerWidth = 300;



function CardAnnonceDashboard(props) {
    return (
        <Box
            display='flex'
            alignItems='center'
            className=' successCard'
            style={{ width: "100%", cursor: "pointer" }}
        >
            <Box>
                <Skeleton
                    variant='rect'
                    width={125}
                    height={125}
                    style={{ borderRadius: 10 }}
                />
            </Box>
            <Box style={{ marginLeft: 10 }} flexGrow={1}>
                <Typography
                    varaiant='h6'
                    component='h1'
                    style={{ fontWeight: "bold" }}
                >
                    Annonce de {props.num}
                    <Chip
                        label={props.status === 'active' ? "En cours" : "Terminé"}
                        variant='outlined'
                        style={{
                            backgroundColor: props.status === "active" ? "#ffba08" : "46a34a",
                            borderColor: props.status === "active" ? "#ffba08" : "46a34a",
                            borderWidth: 1,
                            color: "black",
                            fontWeight: "bold",
                            marginLeft: 10,
                        }}
                    />

                </Typography>
                <Typography
                    varaiant='h6'
                    component='h1'
                    style={{ marginTop: 10, marginBottom: 10 }}
                >
                    <i className='uil uil-ticket' />
                    {props.courses.map(course => course + "\t")}
                </Typography>
                <Box display='flex'>
                    <Typography color='textSecondary'>
                        <i className='uil uil-hourglass' />
                        {new Date(props.created_at).toLocaleDateString('fr-FR', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric',
                        })}
                    </Typography>
                    <Typography color='textSecondary' style={{ marginLeft: 15 }}>
                        <i className='uil uil-transaction' /> {props.payment_method}
                    </Typography>
                    <Typography color='textSecondary' style={{ marginLeft: 15 }}>
                        <i className='uil uil-euro-circle' />
                        {props.max_price + " €"}
                    </Typography>
                </Box>
            </Box>
            <Box>
                <i className='uil uil-arrow-right' style={{ fontSize: 25 }} />
            </Box>
        </Box>
    )
}

export default CardAnnonceDashboard
