import React from 'react'
import { ActiveLink } from './ActiveLink'
import  styles  from './Navbar.module.css' //hacemos nuestra importacion por modulo para poder acceder a nuestro archivo que contiene los estilos de nuestro navbar


const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contac'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

export const NavBar = () => { //Para estilizar nuestro navbar creamos en nuestra carpeta componentes un archivo de tipo model.csss y hay podemos crear los estilos a nuestro navbar
  return ( // Para traer nuestros estilos llamamos al alias de nuestra importacion y agregamos punto para acceder a esos elemntos
    <>
      <nav className={ styles['menu-container'] } >  

         {
           menuItems.map(( { text, href } ) => ( //Para poder iterar nuestro arreglo y entrar en cada poscicion utilizamos el map que es propio de next para iterar el arreglo y desestruturamos el arreglo con las llaves dentro de los parentesis
            <ActiveLink  key={ href} text={ text } href={href} /> // colocamos el objeto que deseamos iterar
           ))
         }

        {/* <ActiveLink text={ menuItems[0].text } href={ menuItems[0].href } />
        <ActiveLink  text="About" href='/about' />
        <ActiveLink text="Contact" href='/contac' />
        <ActiveLink text="Pricing" href='/pricing' /> */}
      </nav>
    </>
  )
}
