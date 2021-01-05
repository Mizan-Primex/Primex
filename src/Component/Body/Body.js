import React, { useEffect } from 'react';
import './Body.css';
import logo from '../Images/logo.svg';
import * as Scroll from 'react-scroll';
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import lottie from 'lottie-web';
import { useRef } from 'react';
import Rhythm from '../Images/Rhythm.png';
import Udhvob from '../Images/Udhvob.png';
import Mizan from '../Images/Mizan.png';
import Russel from '../Images/Russel.png';
import youtube from '../Images/youtube.svg';
import instra from '../Images/instra.svg';
import linkedin from '../Images/inkedin.svg';
import fb from '../Images/fb.svg';
import reviewImg1 from '../Images/Profile 1.png'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const Body = () => {
    const container = useRef(null);
    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../Animation/primex hero image.json')

        })
    }, [])
    const container2 = useRef(null);
    useEffect(() => {
        lottie.loadAnimation({
            container: container2.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../Animation/primex 2image2.json')

        })
    }, [])
    const container3 = useRef(null);
    useEffect(() => {
        lottie.loadAnimation({
            container: container3.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../Animation/primex 3 image.json')

        })
    }, [])

    return (
        <div>
            <nav className="navBody">
                <div className="logoBody">
                    <a href="/"><img className="logo" src={logo} alt="" /></a>

                </div>
                <div className="links">
                    <a href="#"> <Link activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={-120}
                        duration={500}
                        delay={500}
                        isDynamic={true}
                        ignoreCancelEvents={false}
                    >Home</Link></a>

                    <a href="#">
                        <Link activeClass="active"
                            to="features"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={-100}
                            duration={500}
                            delay={500}
                            isDynamic={true}
                            ignoreCancelEvents={false}
                        > Features</Link>
                    </a>
                    <a href="#">
                        <Link activeClass="active"
                            to="services"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={-100}
                            duration={500}
                            delay={500}
                            isDynamic={true}
                            ignoreCancelEvents={false}
                        >Services</Link> </a>

                    <a href="#">
                        <Link activeClass="active"
                            to="portfolio"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={-120}
                            duration={500}
                            delay={500}
                            isDynamic={true}
                            ignoreCancelEvents={false}
                        >Portfolio</Link>
                    </a>
                    <a href="#">
                        <Link activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={-120}
                            duration={500}
                            delay={500}
                            isDynamic={true}
                            ignoreCancelEvents={false}
                        >About</Link> </a>
                    <a href="#">
                        <Link activeClass="active"
                            to="team"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={-120}
                            duration={500}
                            delay={500}
                            isDynamic={true}
                            ignoreCancelEvents={false}
                        >Team</Link> </a>
                    <a href="#">
                        <Link activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={-120}
                            duration={500}
                            delay={500}
                            isDynamic={true}
                            ignoreCancelEvents={false}
                        >Contact</Link> </a>
                </div>

            </nav>
            <section className="first-sec" id="home">
                <div className="textarea">
                    <h1>WHAT WE CARE FOR YOU</h1>
                    <article>Based on your requirement, you can choose from hourly, fully dedicated and partly dedicated engagement models and spend accordingly. Our developers use W3C standard of coding to create clean and beautiful websites which will increase its ranking on the search engine results page.</article>

                </div>
                <div className="animation">
                    <div className="container" ref={container}></div>
                </div>
            </section>
            <section className="second-sec" id="features">
                <div className="animation-two">
                    <div className="container2" ref={container2}></div>

                </div>
                <div className="textarea-two">
                    <h4>Web & APP Development</h4>
                    <article>
                        With right strategies and technolo gies, our web & app (iOS & android) design and development team gives yo ur business the required boost through visually appealing and interactive websit es, which ensures greater conversion and genuine business leads.
                  </article>
                    <h4>SEO and SMM</h4>
                    <article>
                        With right strategies and technolo gies, our web & app (iOS & android) design and development team gives yo ur business the required boost through visually appealing and interactive websit es, which ensures greater conversion and genuine business leads.
                  </article>
                    <h4>Web Design</h4>
                    <article>
                        The most impressive websitesexperi ences are rooted in smart design, embody clear vision, and are backed by the rig ht technology. Best-in-class digital projects require technology that perfectly supports the design. We rely on the right tools for the job, not a one-size-fits -all tech stack.
                  </article>
                    <h4>Graphic Design</h4>
                    <article>
                        The conversation with your audienc e goes beyond the digital space, and tactile communications certainly still have relevance. From brochures to billboards to boxes and everywhere in-between, we& rsquo;re well-versed in bringing your story to life no matter the medium.
                  </article>
                </div>
            </section>
            <section className="third-section" id="services">
                <div className="other-service">
                    <h4>OUR OTHER SERVICES ARE</h4>
                    <article>
                        We started our team w ork as a conceptional and creative designing firm. But after a certain time we include some more activity as per our client push . and this are the service we add… hope this kinda service add more value to you and me.
                    </article>
                </div>
                <div className="services">
                    <div className="service a">
                        <h5>Advertisement</h5>
                        <article>
                            Are you another ACME or a true original? We thought so. Now let’s work together to figure out what that sounds like in as short and catchy a manner as possible.
                        </article>
                        <h5>Branding</h5>
                        <article>
                            Where do you stand in the eyes of the marketplace? Sure you're great at w hat you do, but how do people know that? Let’s dig in and develop a comprehensive positioning strategy that will guide you out of the shadows and into the limelight.
                        </article>
                        <h5>Printing / Graphics</h5>
                        <article>
                            The conversation with your audience goes beyond the digital space, and tactile communications certainly still have relevance. From brochures to billboards to boxes and everywhere in-between, we’re well-versed in bringing your story to life no matter the medium.

                        </article>
                    </div>
                    <div className="service b">
                        <div className="animation-three">
                            <div className="container3" ref={container3}></div>
                        </div>
                        <div className="txt">
                            <h5>Audio Visual Production</h5>
                            <article>
                                The term identity says it all: a distilled representation of who you are. Whether you’re a new player on the field or a seasoned vet looking for a reboot, we live to designed your identity systems in sync with long-term vision and big-picture strategy. Visual storytelling at it’s finest… and most succinct. We have vest experienced team to support your strategy.
                        </article>
                        </div>
                    </div>
                    <div className="service c">
                        <h5>Business Automation</h5>
                        <article>
                            Automation software is being used by businesses to reduce the costs associate d with completing particular process. It is a way of reducing labour intensive activities. Manual triggers are being replaced by software which integrates disparate systems to enable an end to end business process. Costs are saved by the reduced need for people. We serve you from access control, CCTV IP cam , to all y ou need for your swift workflow .
                        </article>
                        <h5> Event Management</h5>
                        <article>
                            With a team of young creative dynamic & dedicated professionals we Have pushed AI areas of event management to new frontiers, Whether it is artists management, product launch, exhibition, road show , fashion show celebrity management as well as corporate indoor outdoor event. We are committed to deliver more then the client expectation.

                        </article>
                    </div>

                </div>
            </section>
            <section className="about" id="about">
                <h1>ABOUT US</h1>
                <article>
                    Who Are We? PRIMEX Infos ys is a technology driven and customer focused company that provides UI/UX design, mobile app development, app and responsive website development to global customers across all industries. We never stop at improving our services including engineering techniques, management practices and developmental methods. Our app developers can offer you customized solutions to suit your needs. They are aware about the latest app versions and can ensure good performance of the apps. Our designers, too, are experts in creating themes and icons for smart phones and tou ch screen devices. Websites are designed in user-friendly manner making navigation simple and faster.
                </article>
            </section>
            <section className="team" id="team" >
                <h1>MEET THE TEAM</h1>
                <article>
                    A team Sunday morning mee ting known as the ‘addabaazi’ followed by a free breakfast is a great start to the week. An open plan office and our own “addakhana”(we named our meeting room) are just a few reasons why we think PRIMEX is a great pl ace to work. The team were asked how they would describe the PRIMEX culture, answers were: ‘fun, sociable, friendly, collaborative, upbeat, innovative, a community and dynamic’ - we think that speaks for itself...
                </article>
                <div className="team-img">
                    <div className="member">
                        <img src={Mizan} alt="" />
                        <label>Mizanur Rahman Mizan</label>
                        <label>Junior Web Devloper</label>
                    </div>
                    <div className="member">
                        <img src={Udhvob} alt="" />
                        <label>Ragib Ekhowan</label>
                        <label>UI/UX Designer</label>
                    </div>
                    <div className="member">
                        <img src={Rhythm} alt="" />
                        <label>Shabab Hossain Rhythm</label>
                        <label>Senior Software Engineer</label>
                    </div>
                    <div className="member">
                        <img src={Russel} alt="" />
                        <label>Russell Abdullah Al Mamun</label>
                        <label>CEO</label>
                    </div>
                </div>

            </section>
            <section className="capability" id="capability">
                <div className="capability1">
                    <label>Primex Capability</label>
                    <article>
                        Capability of PRIMEX infosys is a leading pro vider of end-to-end IT services and solutions for Global companies.Our offshore software outsourcing services and solutions are designed with a focus on secure, scalable, expandable and reliable business systems. Through our low cost, high quality and reliable offshore software services, we serve our clients giving the m value for money and thus client satisfaction.
                </article>
                    <label>Our value</label>
                    <li>Striving for 100% client satisfaction at all times.</li>
                    <li> Exceeding Customer’s expectation.</li>
                    <li> Honesty, Integrity and Transparency.</li>
                    <li> Innovation.</li>
                    <li> Experience, learn and Share – that’s the philosophy for t eams</li>
                    <li> Customer centric processes and approach.</li>
                    <li> Responsiveness.</li>
                </div>
                <div className="capability2">

                </div>

            </section>
            <section className="Client-Review">
                <h1>Client Review</h1>
                <div className="clientReviewDetails">
                    <div className="card1">
                        <img src={reviewImg1} alt="" />
                        <h1 id="cardName"> Bacchu</h1>
                        <article>
                            Martha Maldonado <br />
                        Executive Chairman @ Google <br />
                        Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit.
                    </article>

                    </div>
                    <div className="card2">
                        <img src={reviewImg1} alt="" />
                        <h1 id="cardName"> Bacchu</h1>
                        <article>
                            Martha Maldonado <br />
                        Executive Chairman @ Google <br />
                        Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit.
                    </article>

                    </div>
                </div>
            </section>

            <section className="touch" id="touch" >
                <h3>GET IN TOUCH</h3>
                <article>
                    We Are Here ! To Know More About Us And If You Have Any Q ueries what matched with our workflow. Please feel free to contact over phone, e mail's or appoint a meeting at your desired place... have a great day :) !
                    </article>
            </section>
            <section className="footer" id="contact">
                <div className="footer-txt">
                    <label>PRIMEX infoys</label>
                    <p>
                        Address: 23/3 Jhigatola, 4th floor, Dhaka-1205 <br />
                        Email: info@primex-bd.com<br />
                        Phone: +880 1711-451543
                        </p>
                    <Link to="">
                        <img src={youtube} alt="" />
                    </Link>
                    <Link to="">
                        <img src={instra} alt="" />
                    </Link>
                    <Link to="">
                        <img src={linkedin} alt="" />
                    </Link>
                    <Link to="">
                        <img src={fb} alt="" />
                    </Link>
                </div>
                {/* <div className="footer-map">.
                <Map google={this.props.google} zoom={14}>

                        <Marker onClick={this.onMarkerClick}
                            name={'Current location'} />

                        <InfoWindow onClose={this.onInfoWindowClose}>
                            <div>
                                <h1>{this.state.selectedPlace.name}</h1>
                            </div>
                        </InfoWindow>
                    </Map>
                </div> */}

            </section>



        </div>
    );
};
export default Body;

// export default GoogleApiWrapper({
//     apiKey: ("YOUR_GOOGLE_API_KEY_GOES_HERE")
//   })(Body)