import React from 'react'
import {
    Typography,
    Box,
} from "@material-ui/core";


function TodoItem({ todo, index, removeTodo }) {

    return (
        <Box display='flex' alignItems='center' style={{ marginTop: 15 }}>
            <Typography color='textSecondary'>{todo}</Typography>
            {removeTodo &&
                (<i
                    className='uil uil-trash-alt'
                    onClick={() => removeTodo(index)}
                    style={{ cursor: "pointer", color: "#f55151" }}
                />)}
        </Box>
    );
}

export default TodoItem
