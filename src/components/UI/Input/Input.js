import React from 'react';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import './style.scss';

export default function InputWithIcon(props) {
    const { line, icon, type, onChange, placeholder, name, value } = props;

    return (
        <div className={'input_wrapper'}>
            {line && <span className={'input_line'}>{line}</span>}
            <Input
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                startAdornment={
                    <InputAdornment position="start">
                        {icon}
                    </InputAdornment>
                }
            />
        </div>
    )
}
