import AppLayout from '../components/AppLayout';

const Map = () => {

  return (
    <>
    <AppLayout>
      <form>

      <input 
            className='input-map'
            type='text'
            placeholder='Address'

        />
        <button
            className='button-map'
            type='submit'
        >Search</button>

      </form>
        <h1>Map</h1>
    </AppLayout>

        <style jsx>{`

            body, h1 {
              font-family: 'Space Grotesk', sans-serif;
              text-align: center;
            }

            .input-map {
              width: 45%;
              padding: 12px 20px;
              margin: 24px;
              border: 1px;
              border-radius: 5px;
              background-color: #ececec;
            }

            .button-map {
              width: 20%;
              padding: 12px 20px;
              border: 1px;
              border-radius: 5px;
            }
        `}</style>
    </>

  )
}

export default Map