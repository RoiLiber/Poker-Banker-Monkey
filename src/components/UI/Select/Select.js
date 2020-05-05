import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import './style.scss';

const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: '#282c34',
        border: 'thin solid #bc9a36',
        fontSize: 15,
        minWidth: 120,
        display: 'flax',
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#BB86FC',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);

export default function InputWithIcon(props) {
    const { list, onChange, value, defaultItem } = props;

    return (
        <div className={'input_wrapper'}>
            <Select
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                value={value}
                onChange={onChange}
                input={<BootstrapInput />}
            >
                {defaultItem && <MenuItem value={defaultItem}>{defaultItem}</MenuItem>}
                {list.map((item, index) => {
                    return <MenuItem key={index} value={item}>{item}</MenuItem>
                })}
            </Select>
        </div>
    )
}
