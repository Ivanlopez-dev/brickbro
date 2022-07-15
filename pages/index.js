
import Head from 'next/head'
import AppLayout from '../components/AppLayout';

const Home = () => {

  return (

    <>  
      <Head>
            <title>Brîckbro FrontEnd Test</title>
    
      </Head>

      <AppLayout>
      <form>

        <input 
            className='input-home'
            type='text'
            placeholder='Address'

        />
        <button
            className='button-home'
            type='submit'
        >Search
        </button>

      </form>
        <h1>Home</h1>
      </AppLayout>

        <style jsx>{`

            body, h1 {
              text-align: center;
            }

            .input-home {
              width: 45%;
              padding: 12px 20px;
              margin: 24px;
              border: 1px;
              border-radius: 5px;
              background-color: #ececec;
            }

            .button-home {
              width: 20%;
              padding: 12px 20px;
              border: 1px;
              border-radius: 5px;
            }
        `}</style>

        <style jsx global>{`

            html,
            body,
            h1 {
              font-family: 'Space Grotesk', sans-serif;
            }
        `}</style>

    </>

  )
}

export default Home