import styled from 'styled-components'

const NumberSelector = ({ seterorr,erorr,selectNumber,setSelectnumber }) =>{
    const arrayitem = [1,2,3,4,5,6];

    const selectNumberHandler = (value) => {
        setSelectnumber(value);
        seterorr("");
    }

    return(
    <NumberSelectorContainer>
        <p className='erorr'>{erorr}</p>
        <div className='flex'>
            {arrayitem.map(
            (value,i) =>(
            <Box key={i} 
            IsSelectod={value==selectNumber}
            onClick={() => selectNumberHandler(value)}> 
            {value} </Box>)
            )}
        </div>
        <p>Select Number</p>
    </NumberSelectorContainer>
    );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
    .flex{
        display: flex;
        gap: 24px;
    }
    p{
        font-size: 24px;
        font-weight: 700;
    }
    .erorr{
        color: red;
    }
`

const Box = styled.div`
    height: 60px;
    width: 60px;
    border: 3px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;
    transition: 0.4s ease-out;
    background-color: ${(props) => (props.IsSelectod ? "black":"white")};
    color: ${(props) => (!props.IsSelectod ? "black":"white")};
    &:hover{
        background-color: black;
        color: white;
        transition: 0.3s ease-out;
    }
`