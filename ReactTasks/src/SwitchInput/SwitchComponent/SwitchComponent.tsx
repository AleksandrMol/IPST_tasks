import React from 'react';
import { SliderStyle, SwitchCheckboxStyle, SwitchStyle } from './style';

interface ISwitchProps {
  switchCallBack: (value: boolean) => void,
}

export function SwitchComponent({switchCallBack}: ISwitchProps) {
  const [cheachboxState, setCheachboxState] = React.useState(false);

  React.useEffect(() => {
    switchCallBack(!cheachboxState);
  }, [])

  const switchHandle = () => {
    switchCallBack(cheachboxState);
    setCheachboxState(!cheachboxState);
  } 

  return (
    <SwitchStyle>
      <SwitchCheckboxStyle
        type="checkbox"
        onChange={switchHandle}
      />
      <SliderStyle included = {cheachboxState}/>
    </SwitchStyle>
  );
}
