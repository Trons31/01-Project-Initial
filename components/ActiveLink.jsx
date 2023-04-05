import { useRouter } from 'next/router';

import Link from 'next/Link'; // Siempre debenmos importar nuestros elementos propios de next


const styles = {
    color: '#0070f3',
    textDecoration: 'underline'
}

export const ActiveLink = ({ href, text }) => { // Aqui en este elemento podemos recibir los parametros necesarios para llegar a nuestra solucion

const { asPath } = useRouter(); 
 
console.log(asPath)

     return (
          <Link href={ href }>
          <a style={ asPath === href ? styles : null }  >{text}</a>
           {/*No podemos pasar tres niños o llaves en la misma linea de codigo Esta es una forma de crear una condicion si nuestro asPath que duvueve el router es igaul a nuestro href entonces devulve nuestro estilo si no que lo simbolizamos con el signo de interrogacion devolvemos null */}
          </Link>
       );  
};
