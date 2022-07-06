import Head from 'next/head'

import Link from 'next/link'
import { DarkLayout } from '../components/layout/DarkLayout'
import { MainLayout } from '../components/layout/MainLayout'
import { NavBar } from '../components/NavBar'

export default function AboutPage() {
  return (
    <>
    <h1>About Page</h1>
     <h1 className={'title'}>
          ir a  <Link href="/">home</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/about.jsx</code>
        </p>
        </>
  )
}


AboutPage.GetLoyout = function GetLoyout(page: JSX.Element){
  return(
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}
