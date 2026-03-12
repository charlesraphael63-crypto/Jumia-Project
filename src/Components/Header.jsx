import React from 'react'
import Button from "../Components/Button"

const Header = () => {
  return (
        <main className="mainHeader">
            <div className="menuHeader">
                <img className="topImg" src="https://ng.jumia.is/cms/0-5-TechWeek/2026/Brand-day/12-march-itel/BD_Desktop_top_strip.gif" alt="image1"></img>
            </div>
            <section className="secHeader">
                <div className="leftLogo">
                    <img className="imgLogo" src="https://www.jumia.com.ng/assets_he/favicon.87f00114.ico" alt="image2" />
                    <h6>Sell on jumia</h6>
                </div>
                <div className="rightLogo">
                    <h5>JUMIA</h5>
                    <img className="imgLogo" src="https://www.jumia.com.ng/assets_he/favicon.87f00114.ico" alt="image2" />
                    <h5 className="pay">PAY</h5>
                    <img className="imgLogo" src="https://www.jumia.com.ng/assets_he/favicon.87f00114.ico" alt="image2" />
                    <h5>DELIVERY</h5>
                </div>
            </section>
            <header className="mainHead">
                <nav className="menuHead">
                    <img className="imgLg" src="data:image/png;base64,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" alt="image2" />
                    <section className="sideOpt"> 
                        <input className="searchBar" type="text" placeholder="Saerch products, brands and categories "/>
                        <Button className="btn1" name="Search"/>
                        <div className="opction">
                            <h4>Account</h4>
                            <img className="opt" src="https://static.vecteezy.com/system/resources/previews/007/335/840/non_2x/account-icon-template-vector.jpg" alt="" />
                            <h4>Help</h4>
                            <img className="opt" src="https://icons.veryicon.com/png/o/miscellaneous/flat-icon/help-252.png" alt="" />
                            <h4>Cart</h4>
                            <img className="opt" src="https://i.pinimg.com/736x/7f/24/92/7f249252404646c08d90976505cb6937.jpg" alt="" />
                        </div>
                    </section>
                </nav>
            </header>

        </main>

  )
}

export default Header
