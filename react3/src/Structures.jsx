import React from 'react'
import sunnyside from './sunnyside.svg'
import arrow from './Group.svg'
import orange from './orange.svg'

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
                <div style={{ width: "750px", height: "69px", fontFamily: '"Fraunces", serif', fontWeight: "900", fontSize: "56px", lineHeight: '100%', letterSpacing: "8.75px", color: "white" }}>WE ARE CREATIVES</div>
                <img src={arrow} alt="arrow" />
            </div>


            <div className='second'></div>
            <div className='third'></div>
            <div className='fourth'></div>
            <div className='fifth'></div>
            <div className='sixth'></div>
        </div>
    )
}

export default structure