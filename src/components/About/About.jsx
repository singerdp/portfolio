import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import Footer from '../Footer/Footer';
import violin from './../../assets/violin.jpeg'
import dp_about from './../../assets/Dp_about.jpg'
import { Avatar } from "@material-ui/core";
import sing from './../../assets/sing.jpg'
import './About.css'


const about = () => {
     return (
          <div
               className="About"
               style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
               <div style={{ width: "50%", textAlign: "center" }}>
                    <h1 style={{ marginBottom: 80, color:"#ffff "}}>About Dp</h1>
                    <Slider >
                         <Card img={violin} p="
Myself, Dhinesh Pandi started my career from engineering and now ended up with music. 
Music is a miracle that happened at my age of 12. From then and till now, i had never let my passion down.
" />
                         <Card img={dp_about} p=" Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia.
        Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan
        tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt
        fringilla massa. Etiam hendrerit dolor eget rutrum"/>
                         <Card img={sing} p="I'm an emerging playback singer. I have done lot of jamming across the cities. I would love to colloborate."/>
                    </Slider>
               </div>
          </div>
     );
};
const Card = ({ img,p }) => {
     return (
          <div
               style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    textAlign: "center",
                    color: "gray",
               }}
          >
               <Avatar
                    imgProps={{ style: { borderRadius: "50%" } }}
                    src={img}
                    style={{
                         width: 120,
                         height: 120,
                         border: "1px solid lightgray",
                         padding: 7,
                         marginBottom: 20,
                    }}
               />
               {p}
               <p style={{ fontStyle: "italic", marginTop: 25 }}>
                    <span style={{ fontWeight: 500, color: "green" }}>Singer</span> ,
                    Media Analyst
               </p>
               <Footer className="foot" link='Check out my songs' toAddress='./songs' />
          </div>
     );
};

export default about
