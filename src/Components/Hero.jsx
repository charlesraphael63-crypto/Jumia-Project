import React, { useState } from "react";

const Hero = () => {
       const [data, setData] = useState(0);
        const [gifSlide, setGifSlide] = useState([
            "https://ng.jumia.is/cms/0-1-weekly-cps/0-2026/Awoof-of-the-month/0-3-March/712x384.jpg",
            "https://ng.jumia.is/cms/0-5-TechWeek/2026/Live-now/Artboard-1.gif",
            "https://ng.jumia.is/cms/0-5-TechWeek/2026/Brand-day/11-march-skyrun/712x384_1.png",
            "https://ng.jumia.is/cms/0-5-TechWeek/2026/CPR/explosion-day/Teasing/Artboard-1.jpg",
            "https://ng.jumia.is/cms/0-5-TechWeek/2026/Initiatives/Guessproduct-main/Live/Artboard-1-1.gif",
            "https://ng.jumia.is/cms/0-1-initiatives/Jumia-delivery/update/712x384.jpg",
            "https://ng.jumia.is/cms/0-1-weekly-cps/0-2026/Awoof-of-the-month/0-3-March/712x384.jpg",
            "https://ng.jumia.is/cms/0-5-TechWeek/2026/Global/Artboard.jpg"
            ])

                const addNum = () => {
                setData (data + 1)
            }
            const subNum = () => {
                if (data > 0) {
                setData (data - 1)
                } else {
                setData (0)
        }
    }
  return (
    <main className="mainHero">
        <section className="menuHero">
            <article className="leftHero">
                <div className="imgs">
                    <img src="" alt="" />
                    <span>Appliances</span>
                </div>
                <div className="imgs">
                    <img src="" alt="" />
                    <span>Phones & Tablets</span>
                </div>
                <div className="imgs">
                    <img src="" alt="" />
                    <span>Health & Beauty</span>
                </div>
                <div className="imgs">
                    <img src="" alt="" />
                    <span>Home & Office</span>
                </div>
                <div className="imgs">
                    <img src="" alt="" />
                    <span>Electronics</span>
                </div>
                <div className="imgs">
                    <img src="" alt="" />
                    <span>Fashion</span>
                </div>
                <div className="imgs">
                    <img src="" alt="" />
                    <span>Supermarket</span>
                </div>
                <div className="imgs">
                    <img src="" alt="" />
                    <span>Computing</span>
                </div>
                <div className="imgs">
                    <img src="" alt="" />
                    <span>Baby Products</span>
                </div>
                <div className="imgs">
                    <img src="" alt="" />
                    <span>Gaming</span>
                </div>
                <div className="imgs">
                    <img src="" alt="" />
                    <span>Musical Instruments</span>
                </div>
                <div className="imgs">
                    <img src="" alt="" />
                    <span>Other categories</span>
                </div>
            </article>

            <section className="midHero">
                <main className="edit">
                    <div className="addSub">
                        <button onClick={subNum} className="tryEdit.left">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRguruTCzZoUGw2KfJf-GNrc6CXeHHqUAoyNA&s" alt="previous" className="btn-icon" />
                        </button>
                        {/* <img src={gifSlide[data % gifSlide.length]} alt="slide" /> */}
                        <img
                            src={gifSlide[data % gifSlide.length]}
                            alt="slide"
                            className="anime"
                        />
                        <button onClick={addNum} className="tryEdit.right">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoCCEVecc86m_D5eYCDg0n0yyATyLBcVZZDA&s" alt="next" className="btn-icon" />
                        </button>
                    </div>
                </main>
            </section>

            <aside className="rightHero">
                <div className="upHero">
                    <section>
                        <img src="" alt="" />
                        <h5>Call to order <br /> <span>021733747263,82736276637</span></h5>
                    </section>
                        <section>
                        <img src="" alt="" />
                        <h5>Call to order</h5>
                    </section>
                        <section>
                        <img src="" alt="" />
                        <h5>Send your package</h5>
                    </section>
                </div>
                <div className="downHero">
                    <img className="join" src="https://ng.jumia.is/cms/0-1-initiatives/jforce/2025/JFORCE-2.gif" alt="" />
                </div>

            </aside>
        </section>   
    </main>
  )
}

export default Hero
