import Link from 'next/link';
import { DarkLayout } from '../components/layout/DarkLayout';
import { MainLayout } from '../components/layout/MainLayout'

// En nuestra carpeta Pages solo podemos crear paginas

export default function ContactPage() {
  return (

    <>
    <h1 className={'title'}>
          Ir a home <Link href="/">Home</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/contact.jsx</code>
        </p>
        </>
  )
}


ContactPage.GetLayout = function GetLayout(page){
  return(
    <MainLayout>
     <DarkLayout>
     { page }
     </DarkLayout>
    </MainLayout>
  )

}
