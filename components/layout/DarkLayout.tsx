import { FC } from 'react';

interface Props {
  title?: string;
  children?: JSX.Element | JSX.Element[];
}

export const DarkLayout: FC<Props> = ({ children }) => {
  return (
    <div style={{
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: '5px',
        padding: '10px',
    }} >
      <h1>Dark Layout</h1>
      <div >
      {children}
      </div>
       
    </div>
  )
}
