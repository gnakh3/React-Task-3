import React from 'react'
import sunnyside from './sunnyside.svg'
import arrow from './Group.svg'
import orange from './orange.svg'
import egg from './egg.svg'
import cup from './cup.svg'

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
                <div></div>
                <div></div>
            </div>
            <div className='fifth'></div>
            <div className='sixth'></div>
        </div>
    )
}

export default structure