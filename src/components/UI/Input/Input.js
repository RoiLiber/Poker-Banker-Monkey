import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import './style.scss';

const StyledOutlinedInput = withStyles({
    root: {
        backgroundColor: '#282c34',
        border: 'thin solid #bc9a36',
        paddingLeft: '10px',
    },
    input: {
        color: '#959595',
        padding: '7px',
    },
    adornedStart: {
        color: '#32CD32',
    }
})(OutlinedInput);

export default function InputWithIcon(props) {
    const { line, icon, type, onChange, placeholder, name, value } = props;

    return (
        <div className={'input_wrapper'}>
            {line && <span className={'input_line'}>{line}</span>}
            <StyledOutlinedInput
                name={name}
                type={type}
                placeholder={placeholder}
                id="outlined-adornment-amount"
                value={value}
                onChange={onChange}
                startAdornment={<InputAdornment position="start">{icon}</InputAdornment>}
            />
        </div>
    )
}
