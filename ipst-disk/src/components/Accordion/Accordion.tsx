import React from 'react';
import { Arrow } from '../../svg';
import './accordion.css';

interface IAccordionProps {
  children?: React.ReactNode,
  header: string,
  open: boolean,
}

export function Accordion({...props}: IAccordionProps) {
  const [isOpen, setIsOpen] = React.useState(props.open);

  return (
    <div className='accordion-wrapper'>
      <h2 className='accordion-header' onClick={() => {setIsOpen(!isOpen)}}>
        {props.header}
        <div className={`accordion-arrow ${isOpen? "rotate" : ""}`}>
          <Arrow/>
        </div>
      </h2>
      
      <div className="accordion">
        { isOpen &&
          props.children
        } 
      </div>
    </div>
  );
}
