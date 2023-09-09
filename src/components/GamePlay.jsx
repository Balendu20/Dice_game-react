import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import TotalScore from "./TotalScore";
import styled from 'styled-components';
import { useState } from 'react';
import { Button, OutlineButton } from "./style/Button";
import Rules from "./Rules";

const GamePlay=() =>{
    const [selectNumber,setSelectnumber] = useState();
    const [currentDice,setcurrentDice]= useState(1);
    const [score,setScore]=useState(0);
    const [erorr,seterorr]=useState();
    const [showRules,setshowRules]=useState(false);
    
    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };

      const roleDice=()=>{
        if(!selectNumber){
            seterorr("You have not selected any number");
            return;
        }

        const randomNumber = generateRandomNumber(1,6);
        setcurrentDice((prev)=>randomNumber);

        if(selectNumber==randomNumber){
            setScore((prev)=>prev + randomNumber);
        }
        else{
            setScore((prev)=>prev - 1);
        }

        setSelectnumber(undefined);
      };
    
      const resetScore = () =>{
        setScore(0);
      };

    return(
            <NumberselectorSection>
                <div className="top_sec">
                <TotalScore score={score}/>
                <NumberSelector selectNumber={selectNumber}
                setSelectnumber={setSelectnumber}
                erorr={erorr}
                seterorr={seterorr}
                />
                </div>
                <RoleDice currentDice={currentDice}
                roleDice={roleDice}/>
            <div className="btns">
                <OutlineButton
                onClick={resetScore}
                >Reset Score</OutlineButton>
                <Button onClick={()=> setshowRules ((prev)=>!prev)}>
                    {showRules ? "Hide" : "Show"} Rules
                    </Button>
            </div>
            {showRules && <Rules />}
            </NumberselectorSection>
    );
}

export default GamePlay;

const NumberselectorSection = styled.main`
    padding-top: 25px;
    .top_sec{
        display: flex;
        justify-content: space-around;
        align-items: end;
    }
    .btns{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;

    }
`;