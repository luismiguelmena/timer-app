import React, {useState,useEffect} from 'react';
import './App.css';
import Button from '@mui/material/Button';
import Switch from 'react-switch';
import styled, { ThemeProvider } from 'styled-components';
import Bedtime from '@mui/icons-material/Bedtime';
import WbSunny from '@mui/icons-material/WbSunny';

const LightTheme = {
  pageBackground: '#DEE7E2',
  buttonBg:'#3E4843',
  textColor: '#DEE7E2',
  crono: '#3E4843'
};

const DarkTheme = {
  pageBackground: '#3E4843',
  buttonBg:'#DEE7E2',
  textColor: '#3E4843',
  crono: '#DEE7E2'
}

const themes:any = {
  light: LightTheme,
  dark: DarkTheme,
}

function App() {

  const [diff,setDiff]:any = useState(null)
  const [initial,setInitial]:any = useState(null)
  const [checked,setChecked] = useState(false)
  const [theme, setTheme]:any = useState('dark')

  const tick = () => {
    setDiff(new Date(+new Date()-initial))
  }

  const start = () => setInitial(+new Date())

  useEffect(()=>{
    if(initial){
      requestAnimationFrame(tick)
    }
  },[initial])
  
  useEffect(()=>{
    if(diff){
      requestAnimationFrame(tick)
    }
  },[diff])

  const changeMode = () => {
    setChecked(!checked)
    if (theme === "light") {
        setTheme("dark");
    } else {
        setTheme("light");
    }
  }

  const timeFormat = (date:Date) => {
    if(!date) return '00:00:00'

    let mm:any = date.getUTCMinutes()
    let ss:any= date.getSeconds()
    let cm:any = Math.round(date.getMilliseconds()/10)

    mm = mm < 10 ? '0' + mm : mm
    ss = ss < 10 ? '0' + ss : ss
    cm = cm < 10 ? '0' + cm : cm

    return `${mm}:${ss}:${cm}`  
  }

  return (
    <ThemeProvider theme={themes[theme]}>
      {/* <Splash theme={theme} setTheme={setTheme} /> */}
      <Main>
        <div>
          <div style={{float:'right'}}>
            <Bedtime sx={{ color: themes[theme].buttonBg }}/>
            <Switch onChange={changeMode} checked={checked} uncheckedIcon={false} checkedIcon={false}/>
            <WbSunny sx={{ color: themes[theme].buttonBg }} />
          </div>
          
        </div>
        
        <Timer style={{height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
          <div>
          <Button variant="contained" color="primary" startIcon onClick={start} sx={{ backgroundColor: themes[theme].buttonBg,color:themes[theme].textColor}}>
            {timeFormat(diff)}
          </Button>
          </div>
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
const Timer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: ${props => props.theme.pageBackground};
  transition: all .5s ease;
`;
export default App;


