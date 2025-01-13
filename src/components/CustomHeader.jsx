import Navbar from './Navbar'

const CustomHeader = () => {
  return (
    <div className='font-roboto-condensed' style={{  
        backgroundImage: "url(" + "https://cdn.pixabay.com/photo/2016/10/12/23/23/mining-excavator-1736293_1280.jpg" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
      <Navbar />
      <div className='max-w-screen-xl min-h-[45vh] bg-gradient-to-r from-gray-950 flex items-center justify-center px-5'>
        <h1 className='text-7xl text-white font-extralight uppercase tracking-wider'><span className='font-normal'>Superior Results.</span> Great<br></br> Experiences for Everyone.</h1>
      </div>
    </div>
  )
}

export default CustomHeader
