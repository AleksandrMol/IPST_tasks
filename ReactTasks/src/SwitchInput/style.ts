import styled from "styled-components";

interface ISwitchStylesProps {
    disabled: boolean;
}

export const SectionSwitch = styled.section`
    width: 500px;
    height: 400px;
    padding: 20px;

    color: #fff;

    background-color: #000;
`;

export const SwitchInputStyle = styled.div`
    width: 500px;
`;

export const InputContainerStyle = styled.div`
    display: flex;
    flex-direction: column;    
`;

export const LabelStyle = styled.label<ISwitchStylesProps>`
    margin-bottom: 10px;
    margin-top: 10px;

    color: ${props => props.disabled? "#fff" : "#333"};
    text-shadow: ${props => props.disabled? "0 0 10px #FFC530,0 0 20px #FFC530" : "none"};
`;

export const InputStyle = styled.input`
    position: relative;

    width: 460px;
    height: 30px;
    padding-right: 10px;
    padding-left: 10px;

    color: #fff;
    text-shadow: 0 0 10px #FFC530,0 0 20px #FFC530;

    border-radius: 4px;
    border: 1px solid #fff;
    background-color: transparent;
    box-shadow: 0px 0px 20px #FFC530;

    &:disabled {
        border: 1px solid #333;

        box-shadow:  0px 0px 20px #FFC530;
        box-shadow: none;
    }
`;