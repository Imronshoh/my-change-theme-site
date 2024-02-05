import React, { useState } from 'react'
import './Header.css'
import img1 from "../../assets/images/prof.png";
import img2 from "../../assets/images/2.png";
import img3 from "../../assets/images/3.png";
import img4 from '../../assets/images/1.png'

function Header() {
    const [mode, setMode] = useState(true)
    return (
        <div>
            <header className={mode ? 'light header' : 'dark header'}>
                <div className="container">
                    <div className='theme'>
                        <img src={mode ? img2 : img3} alt="" onClick={() => setMode(!mode)} />
                    </div>
                    <div className="person">
                        <div className='yellow'><img src={img1} alt="" /></div>
                        <div className="person2">
                            <h1 className={mode ? 'light__color__name' : 'dark__color__name'}>Victor Alvarado</h1>
                            <h4 className={mode ? 'light__occup' : 'dark__occup'}>Software Engineer</h4>
                            <div className="socials">
                                <div className='social__media'></div>
                                <div className='social__media'></div>
                                <div className='social__media'></div>
                                <div className='social__media'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className={mode ? 'light info' : 'dark info'}>
                <div className="container">
                    <ul className="info__list">
                        <li className={mode ? 'light__occup__info' : 'dark__occup__info'}><p >7</p> <h3>Years of work <br />experience</h3></li>
                        <li className={mode ? 'light__occup__info' : 'dark__occup__info'}><p>50+</p> <h3>Completed
                            <br /> projects</h3></li>
                        <li className={mode ? 'light__occup__info' : 'dark__occup__info'}><p>20+</p> <h3>Satisfied
                            <br />  customers </h3></li>
                    </ul>
                </div>
            </section>
            <section className={mode ? 'light contact' : 'dark contact'}>
                <div className="container">
                    <ul className="contact__list">
                        <button className={mode ? 'btn1' : 'btn1__dark'}>Download CV</button>
                        <button className={mode ? 'btn2' : 'btn2__dark'}>Contact me</button>
                    </ul>
                </div>
            </section >
            <section className={mode ? 'light skills' : 'dark skills'}>
                <div className="container">
                    <div className={mode ? 'control' : 'butn1'}>
                        <button className={mode ? 'button1' : 'bq1'}>Portfolio</button>
                        <button className='button2'>Skills</button>
                    </div>
                    <div className="projects">
                        <ul className="skills__list">
                            <li className="skills__item"><img src={img4} alt="" /></li>
                            <li className="skills__item"><img src={img4} alt="" /></li>
                        </ul>
                        <ul className="skills__list">
                            <li className="skills__item"><img src={img4} alt="" /></li>
                            <li className="skills__item"><img src={img4} alt="" /></li>
                        </ul>
                        <ul className="skills__list">
                            <li className="skills__item"><img src={img4} alt="" /></li>
                            <li className="skills__item"><img src={img4} alt="" /></li>
                        </ul>
                    </div>
                </div>
                <div className="container">
                    <h1 className='h1'>© Xamrayev. 2024 All rigths reserved</h1>
                </div>
            </section>
        </div>
    )
}

export default Header;