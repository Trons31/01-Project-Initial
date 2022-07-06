import { CSSProperties, FC } from 'react'

import { useRouter } from 'next/router'


import Link from 'next/link'

interface Props {
   href: string;
   text: string ;
}

const style:CSSProperties = {
    color: '#0070f3',
    textDecoration: 'underline'
    
}


export const ActiveLink: FC<Props> = ({href, text}) => {

  const { asPath } = useRouter();
  
    
  return (
    <Link  href={ href } >
        <a style={ asPath === href ? style : undefined } > {text} </a>
    </Link>
  )
}
