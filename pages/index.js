import Head from 'next/head'
import Header from '../Components/Header'
import Info from '../Components/Info'
import Table from '../Components/Table'

export default function Home() {
  return (
    <div className='p-2'>
      <Head>
        <title>Rickandmorty</title>
      </Head>

      <main>
        <Header/>
        <Info/>
        <Table/>        
      </main>

    </div>
  )
}
