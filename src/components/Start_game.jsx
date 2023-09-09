import styled from 'styled-components';
import { Button } from './style/Button';

const Start_game=({toggle})=>{
    return(
        <Container>
            <div>
                <img src="./images/dice_imge.png" alt="start dice" />
            </div>
            <div className='content'>
                <h1>DICE GAME</h1>
                <Button onClick={toggle}>Play Now</Button>
            </div>
            </Container>
    );
};

export default Start_game;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;
