import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  
  const GetLayout = Component.GetLayout || ((page) => page ) // Llamamos nuestra funcion que contiene los layouts para nuestra pagina desde los Componentes si devuelve la renderizacion ejecuta al layout si no devuelve la pagino

  // return <Component {...pageProps} />

  return GetLayout(<Component {...pageProps} />) // Aqui solo llamamos nuestra funcion que contendra el returno de nuestra aplicacion

}

export default MyApp
