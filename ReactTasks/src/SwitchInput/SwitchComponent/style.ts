import styled from "styled-components";

interface ISwitchProps {
  included: boolean;
}

export const SwitchStyle = styled.label`
  position: relative;

  display: block;
  width: 45px;
  height: 27px;

  cursor: pointer;

  border: 2px solid #333;
  border-radius: 30px;
`;

export const SliderStyle = styled.div<ISwitchProps>`
  position: absolute;
  top: 2px;
  left: 2px;

  width: 19px;
  height: 19px;

  border-radius: 50%;
  background-color: ${props => props.included? "#333" : "#fff"};

  transition: all 0.1s linear;
`;

export const SwitchCheckboxStyle = styled.input`
  width: 0;
  height: 0;
  opacity: 0;

  &:checked + ${SliderStyle} {
    transform: translateX(18px);
  }
`;