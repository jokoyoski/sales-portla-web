import React from 'react'
import { TextField } from '@material-ui/core';

export default function Inputs(props) {

    const { name, label,readonly ,value,error=null,icon, onChange,type,style, ...other} = props;
    return (
      
        <TextField
            variant="outlined"
            label={label}
            icon={<i class="fas fa-barcode"></i>}
            name={name}
            value={value}
            style={{width:'500px'}}
            readOnly={readonly}
            type={type}
            fullWidth
            onChange={onChange}
            {...other}
            {...(error && {error:true,helperText:error})}
        />
    )
}
