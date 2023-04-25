import React from 'react'
import Head from './Head'
import Footer from './Footer'

export default function Lay({children}) {
  return (
    <>
        <Head>
        </Head>
       <div>{children}</div>
       <Footer/>

    </>
  )
}
