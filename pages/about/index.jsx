import Link from 'next/link';
import { MainLayout } from '../../components/layout/MainLayout'

export default function AboutPage() {
  return ( 
      <MainLayout> {/* Cuando cremos una funcion que devuelve nuetros layoust al page debemos colocar nuestros children dentro de unos fragementos de html  */}
       <h1 className={'title'}>
          Ir a home <Link href="/" >Home</Link>
        </h1>

        <p className={'description'}>
          Bienvenido a about{' '}
          <code className={'code'}>pages/about/index.jsx</code>
        </p>
        </MainLayout>
  )
}


