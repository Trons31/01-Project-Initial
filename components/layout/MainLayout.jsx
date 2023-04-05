import Head from 'next/head'
import { NavBar } from '../NavBar';
import styles from './Home.module.css';


export const MainLayout = ( {children} ) => { // Debemos pasar el parametro children
    return (
        <div className={styles.container}>
          <Head>
            <title>Home - Page</title>
            <meta name="description" content="Home Page" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
           <NavBar />
    
          <main className={styles.main}>
          
            {children} {/* Renderizamos nuestro children para que vizualize los children en la pagina donde se utilizara nuestro leyout */}
            
          </main>
    
        </div>
      )
}
