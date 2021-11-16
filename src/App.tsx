import React, {useState,useEffect} from 'react';
import './App.css';
import Button from '@mui/material/Button';
import styled, { ThemeProvider } from 'styled-components';
import { LightTheme,DarkTheme } from './themes/themes';
import SwitchContainer from './components/SwitchContainer/SwitchContainer';
import PlayArrow from '@mui/icons-material/PlayArrow';
import changeMode from './utils/changeMode';

const themes:any = {
  light: LightTheme,
  dark: DarkTheme,
}

function App() {

  const [checked,setChecked] = useState(false)
  const [theme, setTheme]:any = useState('dark')
  const [data,setData]:any = useState([])
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval:any = null;
    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!timerOn) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn]);

  const getTime = (time:any) => {
    return `${("0" + Math.floor((time / 60000) % 60)).slice(-2)}:${("0" + Math.floor((time / 1000) % 60)).slice(-2)}:${("0" + ((time / 10) % 100)).slice(-2)}`
  }

  return (
    <ThemeProvider theme={themes[theme]}>
      <Main>
        <SwitchContainer theme={themes[theme]} changeMode={()=>{changeMode(setChecked,checked,theme,setTheme)}} checked={checked}/>
        <Timer>
          {data.map((checkpoint:string) => <CheckPoints>{checkpoint}</CheckPoints>)}
          <Button size="large" variant="contained" color="primary" startIcon={<PlayArrow/>} onClick={()=>{
            if(time!==0){
              setData([...data,getTime(time)])
            }
            setTime(0)
            setTimerOn(!timerOn)
          }} sx={{ backgroundColor: themes[theme].buttonBg,color:themes[theme].textColor}}>
            {getTime(time)}
          </Button>
        </Timer>
      </Main>
    </ThemeProvider>
  );
}
const Main = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${props => props.theme.pageBackground};
  transition: all .5s ease;
`;

const CheckPoints = styled.h1`
  font-size:3em;
  margin:10px;
  color:${props => props.theme.crono};
`;
const Timer = styled.div`
  flex-direction:column;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
  width: 100%;
  background-color: ${props => props.theme.pageBackground};
  transition: all .5s ease;
`;
export default App;


