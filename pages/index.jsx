import Link from 'next/link';
import { MainLayout } from '../components/layout/MainLayout'

// En nuestra carpeta Pages solo podemos crear paginas
// Todo lo que este en en nuestra carpeta de clases globales  styles/globals.css podemos tener accesso a esos estilos de la forma className='nombre del estilo' y podremos acceder a nuestros estilos siempre y cuando esten en nuestras clases globales 

export default function HomePage() {
  return (
    <MainLayout>
        <h1 className={'title'}>
          Ir a about <Link href="/about/">about</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/index.jsx</code>
        </p>
    </MainLayout>
  )
}
