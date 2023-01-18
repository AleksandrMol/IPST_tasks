import React from 'react';
import { SwitchInputStyle, InputContainerStyle, InputStyle, LabelStyle, SectionSwitch } from './style';
import { SwitchComponent } from './SwitchComponent';

export function SwitchInput() {
  const [switchValue, setSwitchValue] = React.useState(false);

  const switchCallBack = (value: boolean) => {
    setSwitchValue(value);
    const input = document.getElementById("text") as HTMLInputElement;
    input.value = ""; //Я ничего лучше не придумал, пока что...
  }

  return (
    <SectionSwitch>
      <SwitchInputStyle>
        <SwitchComponent switchCallBack={switchCallBack}/>

        <InputContainerStyle>
          <LabelStyle disabled = {!switchValue} htmlFor="text">
            {
              switchValue? "Нужно включить" : "Включено"
            }
          </LabelStyle>
          <InputStyle disabled = {switchValue} type="text" name="text" id="text" />
        </InputContainerStyle>
      </SwitchInputStyle> 
    </SectionSwitch>
  );
}
