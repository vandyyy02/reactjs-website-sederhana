import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import Tutors from "../Components/Tutors"
import Partners from "../Components/Partners"
import Contact from "../Components/Contact"

import '../Styles/Home.css'
import { homeSection } from "../Data/HomeSection"
import { CoursesSection } from "../Data/CoursesSection"
import { TutorsSection, TutorsList } from "../Data/TutorsSection"
import { PartnersSection, PartnersList } from "../Data/PartnersSection"
import { ContactSection } from "../Data/ContactSection"
import parse from 'html-react-parser'
function Home() {
    return (
        <>
            <Navbar />
            <div className='wrapper'>
                {/* home */}
                <section id="home">
                    <img src={homeSection.image} />
                    <div className="kolom">
                        {parse(homeSection.content)}
                    </div>
                </section>

                {/* online Course */}
                <section id="courses">
                    <div className="kolom">
                        {parse(CoursesSection.content)}
                    </div>
                    <img src={CoursesSection.image} />
                </section>

                {/* tutors */}
                <section id="tutors">
                    <div className="tengah">
                        <div className="kolom">
                            {parse(TutorsSection.content)}
                        </div>
                        <Tutors TutorsList={TutorsList} />
                    </div>
                </section>

                {/* patners */}
                <section id="partners">
                    <div className="tengah">
                        <div className="kolom">
                            {parse(PartnersSection.content)}
                        </div>
                        <Partners PartnersList={PartnersList}/>
                    </div>
                </section>
            </div>
            <Contact ContactSection={ContactSection}/>
            <Footer />
        </>
    )
}

export default Home
