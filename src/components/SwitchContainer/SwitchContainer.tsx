import Switch from 'react-switch';
import styled from 'styled-components';
import Bedtime from '@mui/icons-material/Bedtime';
import WbSunny from '@mui/icons-material/WbSunny';

const SwitchContainer = (props:any) =>{
    return(
        <Container>
            <Bedtime sx={{ color: props.theme.buttonBg }}/>
            <Switch onChange={props.changeMode} checked={props.checked} uncheckedIcon={false} checkedIcon={false}/>
            <WbSunny sx={{ color: props.theme.buttonBg }} />
        </Container>
    )
}

export default SwitchContainer

const Container = styled.div`
  float:right;
  margin:20px;
`;