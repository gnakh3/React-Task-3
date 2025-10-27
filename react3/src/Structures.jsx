import React from 'react'
import sunnyside from './sunnyside.svg'
import arrow from './Group.svg'
import orange from './orange.svg'
import egg from './egg.svg'
import cup from './cup.svg'
import cherry from './cherry.svg'
import orrange from './orrange.svg'
import woman1 from './woman1.svg'
import woman2 from './woman2.svg'
import man1 from './man1.svg'
import bottle from './bottle.svg'
import orange3 from './orange3.svg'
import icecream from './icecream.svg'
import sugar from './sugar.svg'
import sunnyside1 from './sunnyside1.svg'
import facebook from './facebook.svg'
import instagram from './instagram.svg'
import twitter from './twitter.svg'
import pinterest from './pinterest.svg'

const structure = () => {
    return (
        <div>
            <div style={{
                height: "800px", width: "100vw", display: "flex", flexDirection: "column", alignItems: "center", gap: "105px", backgroundImage: `url(${orange})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                <div style={{ height: "56px", width: "90vw", display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "34px" }}>
                    <img src={sunnyside} alt="Sunnyside" />
                    <div style={{ display: "flex", width: "25vw", justifyContent: "space-between", alignItems: "center" }}>
                        <div style={{ fontWeight: "600", fontSize: "18px", lineHeight: "25px", color: "white" }}>About</div>
                        <div style={{ fontWeight: "600", fontSize: "18px", lineHeight: "25px", color: "white" }}>Services</div>
                        <div style={{ fontWeight: "600", fontSize: "18px", lineHeight: "25px", color: "white" }}>Projects</div>
                        <button style={{ width: "140px", height: "56px", borderRadius: "28px", border: "none", fontSize: "15px", fontWeight: "700" }}>CONTACT</button>
                    </div>
                </div>
                <div style={{ width: "750px", height: "69px", fontFamily: '"Fraunces", serif', fontWeight: "900", fontSize: "56px", lineHeight: '100%', letterSpacing: "8.75px", color: "white"}}>WE ARE CREATIVES</div>
                <img src={arrow} alt="arrow" />
            </div>
            <div style={{ width: "100vw", height: "600px", display: "flex" }}>
                <div style={{ width: "50vw", height: "600px", background: "white", display:"flex",justifyContent:"center", alignItems:"center" }}>
                    <div style={{width:"445px", height:"285px", display:"flex", justifyContent:"space-between", alignItems:"start", flexDirection:"column"}} >
                        <div style={{fontFamily: '"Fraunces", serif', fontWeight:"900", fontSize:"40px", lineHeight:"100%", letterSpacing:"-0.29px",}}>Transform your brand</div>
                        <div style={{fontWeight:"600", fontSize:"18px",lineHeight:"30px",color:"#808397"}}>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</div>
                        <div style={{width:"137px", height:"25px", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", position:"relative"}}>
                            <div style={{width:"120px", height:"25px", fontFamily: '"Fraunces", serif', fontWeight:"900", fontSize:"15px", lineHeight:"25px"}}>LEARN MORE</div>
                            <div style={{height:"10px", width:"137px", background:"#FAD400", opacity:"25%", borderRadius:"28px", position:"absolute", top:"60%"}}></div>
                        </div>
                    </div>
                </div>
                <img
                    src={egg}
                    alt="egg"
                    style={{
                        width: "50vw",
                        height: "600px",
                        objectFit: "cover"
                    }}
                />
            </div>
            <div style={{ width: "100vw", height: "600px", display: "flex" }}>
                <img
                    src={cup}
                    alt="cup"
                    style={{
                        width: "50vw",
                        height: "600px",
                        objectFit: "cover"
                    }}
                />
                <div style={{ width: "50vw", height: "600px", background: "white", display:"flex",justifyContent:"center", alignItems:"center" }}>
                    <div style={{width:"445px", height:"285px", display:"flex", justifyContent:"space-between", alignItems:"start", flexDirection:"column"}} >
                        <div style={{fontFamily: '"Fraunces", serif', fontWeight:"900", fontSize:"40px", lineHeight:"100%", letterSpacing:"-0.29px",}}>Stand out to the right audience</div>
                        <div style={{fontWeight:"600", fontSize:"18px",lineHeight:"30px",color:"#808397"}}>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. </div>
                        <div style={{width:"137px", height:"25px", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", position:"relative"}}>
                            <div style={{width:"120px", height:"25px", fontFamily: '"Fraunces", serif', fontWeight:"900", fontSize:"15px", lineHeight:"25px"}}>LEARN MORE</div>
                            <div style={{height:"10px", width:"137px", background:"#FAD400", opacity:"25%", borderRadius:"28px", position:"absolute", top:"60%"}}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ width: "100vw", height: "600px", display: "flex" }}>
                <div style={{backgroundImage: `url(${cherry})`,backgroundRepeat: 'no-repeat',backgroundSize: 'cover',height:"600px", width:"50vw", display:"flex", alignItems:"end", justifyContent:"center", paddingBottom:"59px"}}>
                    <div style={{display:"flex", justifyContent:"space-between", alignContent:"center", height:"143px", width:"339px", flexDirection:"column", alignItems:"center"}}>
                        <div style={{fontFamily: '"Fraunces", serif',fontWeight:"900",fontSize:"28px",color:"#24554A"}}>Graphic Design</div>
                        <div style={{fontWeight:"600", textAlign:"center", color:"#3E7467"}}>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${orrange})`, backgroundRepeat: 'no-repeat',backgroundSize: 'cover', height:"600px", width:"50vw",display:"flex", alignItems:"end", justifyContent:"center", paddingBottom:"59px"}}>
                  <div style={{display:"flex", justifyContent:"space-between", alignContent:"center", height:"143px", width:"339px", flexDirection:"column", alignItems:"center"}}>
                        <div style={{fontFamily: '"Fraunces", serif',fontWeight:"900",fontSize:"28px",color:"#052C3B", opacity:"75%"}}>Photography</div>
                        <div style={{fontWeight:"600", textAlign:"center", color:"#19536C"}}>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</div>
                    </div>
                </div>
            </div>
            <div style={{height:"80vh", width:"100vw", background:"white", display:"flex", justifyContent:"center", alignItems:"center"}}>
                <div style={{width:"70vw", height:"457px", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", gap:"30px"}}>
                    <div style={{width:"348px", height:"25px", fontFamily: '"Fraunces", serif', fontWeight:"900", fontSize:"20px", letterSpacing:"5px", color:"#A7AAAD", paddingBottom:"81px"}}>CLIENT TESTIMONIALS</div>
                   <div style={{display:"flex", flexDirection:"row", gap:"30px", width:"70vw", justifyContent :"space-between"}}> 
                    <div style={{height:"38vh", width:"350px", display:"flex", justifyContent:"space-between", alignItems:"center", flexDirection:"column"}}>
                        <img src={woman1} alt="woman" />
                        <div style={{textAlign:"center",height:"96px",fontWeight:"600", fontSize:"18px", lineHeight:"32px", color:"#5B636D"}}>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</div>
                        <div style={{width:"203px", height:"56px", display:"flex",justifyContent:"space-between", flexDirection:"column", alignItems:"center"}}>
                            <div style={{fontFamily: '"Fraunces", serif', fontWeight:"900", fontSize:"18px", lineHeight:"100%" , color:"#24303E"}}>Emily R.</div>
                            <div style={{fontSize:"14px", color:"#A7AAAD"}}>Marketing Director</div>
                        </div>
                    </div>
                    <div style={{height:"38vh", width:"350px", display:"flex", justifyContent:"space-between", alignItems:"center", flexDirection:"column"}}>
                        <img src={man1} alt="man" />
                        <div style={{textAlign:"center",height:"96px",fontWeight:"600", fontSize:"18px", lineHeight:"32px", color:"#5B636D"}}>Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</div>
                        <div style={{width:"203px", height:"56px", display:"flex",justifyContent:"space-between", flexDirection:"column", alignItems:"center"}}>
                            <div style={{fontFamily: '"Fraunces", serif', fontWeight:"900", fontSize:"18px", lineHeight:"100%", color:"#24303E"}}>Thomas S.</div>
                            <div style={{fontSize:"14px", color:"#A7AAAD"}}>Chief Operating Officer</div>
                        </div>
                    </div>
                    <div style={{height:"38vh", width:"350px", display:"flex", justifyContent:"space-between", alignItems:"center", flexDirection:"column"}}>
                        <img src={woman2} alt="woman" />
                        <div style={{textAlign:"center",height:"96px",fontWeight:"600", fontSize:"18px", lineHeight:"32px", color:"#5B636D"}}>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</div>
                        <div style={{width:"203px", height:"56px", display:"flex",justifyContent:"space-between", flexDirection:"column", alignItems:"center"}}>
                            <div style={{fontFamily: '"Fraunces", serif', fontWeight:"900", fontSize:"18px", lineHeight:"100%" , color:"#24303E"}}>Jennie F.</div>
                            <div style={{fontSize:"14px", color:"#A7AAAD"}}>Business Owner</div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div style={{height:"487px", width:"100vw", display:"flex" }}>
                <div style={{width:"25vw", height:"487px",backgroundImage: `url(${bottle})`, backgroundRepeat: 'no-repeat',backgroundSize: 'cover',backgroundPosition: 'center'}}></div>
                <div style={{width:"25vw", height:"487px",backgroundImage: `url(${orange3})`, backgroundRepeat: 'no-repeat',backgroundSize: 'cover',backgroundPosition: 'center'}}></div>
                <div style={{width:"25vw", height:"487px",backgroundImage: `url(${icecream})`, backgroundRepeat: 'no-repeat',backgroundSize: 'cover',backgroundPosition: 'center'}}></div>
                <div style={{width:"25vw", height:"487px",backgroundImage: `url(${sugar})`, backgroundRepeat: 'no-repeat',backgroundPosition: 'center', backgroundSize:"cover"}}></div>
            </div>
            <div style={{width:"100vw", height:"350px", background:"#90D4C6", display:"flex", justifyContent:"center", alignItems:"center", gap:"40px", flexDirection:"column"}}>
                <img src={sunnyside1} alt="Sunnyside" />
                <div style={{width:"295px", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                    <div style={{fontSize:"18px",fontWeight:"600",color:"#458D7E"}}>About</div>
                    <div style={{fontSize:"18px",fontWeight:"600",color:"#458D7E"}}>Services</div>
                    <div style={{fontSize:"18px",fontWeight:"600",color:"#458D7E"}}>Projects</div>
                </div>
                <div style={{width:"164px", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                    <img src={facebook} alt="facebook" /><img src={instagram} alt="instagram" /><img src={twitter} alt="twitter" /><img src={pinterest} alt="pinterest" />
                </div>
            </div>
        </div>
    )
}

export default structure