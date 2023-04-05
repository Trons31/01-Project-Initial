

export const DarkLayout = ({children}) => {
  return (
    
    <div style={{  // Para estilizar de forma directa nuestra div debemos colocar dos elementos juntos de llaves
        background:  ' rgba(0,0,0,0.3 )',
        borderRadius: ' 10px ',
        padding : '5px '
    }} >
        <h3>DarkLayout</h3>
       { children }
    </div>

  );
}
