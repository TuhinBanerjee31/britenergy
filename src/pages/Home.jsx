import '../App.css'
import CustomHeader from '../components/CustomHeader'
import EffectArea from '../components/EffectArea'
import Footer from '../components/Footer'
import OtherInfo from '../components/OtherInfo'
import Overview from '../components/Overview'
import SliderArea from '../components/SliderArea'

function Home() {

  return (
    <>
    <CustomHeader bgImg={"https://cdn.pixabay.com/photo/2016/10/12/23/23/mining-excavator-1736293_1280.jpg"} boldLine={"Exceptional Excellence"} normalLine={"Your Success, Our Priority"} />
    <Overview />
    <EffectArea />
    <OtherInfo />
    <SliderArea />
    <Footer />
    </>
  )
}

export default Home