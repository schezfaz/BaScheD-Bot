import React, {useState} from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

const eyTheme = createMuiTheme({
    palette: {
      background: {
        default: "#999999"
      }
    }
});


export default function LandingPage(){
    const [pathValue, setValue] = useState('');

    const getURL = (e) => {
        fetch('/time').then(res => res.json()).then(data => {
            console.log(data.time);
        });
        setValue(e.target.value);
        console.log(e.target.value);
    } 

    return(
    <MuiThemeProvider theme={eyTheme}>
      <CssBaseline />
      <TextField 
            id="standard-basic"
            style={{ margin: 40, width: 500}}
            placeholder="Enter URL"
            onChange = {getURL}
            InputProps={{
                endAdornment: (
                <InputAdornment>
                    <IconButton>
                    <SearchIcon />
                    </IconButton>
                </InputAdornment>
                )
            }}
        />
    </MuiThemeProvider>
    );

}