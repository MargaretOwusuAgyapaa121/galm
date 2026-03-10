import { useState, useEffect } from "react";
import ChurchStatement from "../components/ChurchState";
import BeliefSection from "../components/Belief";   


const valuesData = {
    truth: {
        title: "Truth",
        text: "This is the knowledge that comes from our daily walk with God The longer we walk with Him in fellowship, the greater our ability to understand his perfect will. We are told that Enoch walked with God (Genesis 5:22). Ask God to help you walk with Him each day, as well as the circumstances in your life. Shalom!"
    },
    faith: {
        title: "Faith",
        text: "By faith Abel brought God a better offering than Cain did. By faith he was commended as righteous, when God spoke well of his offerings. And by faith Abel still speaks, even though he is dead.By faith Enoch was taken from this life, so that he did not experience death: “He could not be found, because God had taken him away.” For before he was taken, he was commended as one who pleased God.  And without faith it is impossible to please God, because anyone who comes to him must believe that he exists and that he rewards those who earnestly seek him…(Hebrews 11:1-6)"
    },

    love: {
        title: "Love",
        text: "    Love is patient and kind; love does not envy or boast; it is not arrogant or rude. It does not insist on its own way; it is not irritable or resentful; it does not rejoice at wrongdoing, but rejoices with the truth. Love bears all things, believes all things, hopes all things, endures all things.Love never ends… (1 Corinthians 13)"
    }
};

export default function About() {
    const [active, setActive] = useState("truth");
    const [slide, setSlide] = useState(0);

    const images = [
        "/assets/pv/background/slide-1.jpg",
        "/assets/pv/background/bg2.jpg",
        "/assets/pv/background/bg.jpg",
        "/assets/pv/background/bg3.jpg"
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setSlide((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <>
            
            {/* HERO */}
            <section className="about-hero">
                <div className="hero-overlay">
                    <p className="hero-small">OPENED SINCE 2016</p>
                    <h1>We are GALM</h1>
                    <p className="hero-smal">Glorious Anchor of Life Ministries</p>
                </div>
            </section>


            {/* CONTENT */}
            <section className="about-message">
                <div className="about-message-grid">

                    <div className="about-message-block left">
                        <p>
                            We are glad you have chosen to spend a few moments looking around and
                            discovering our church. We describe Glorious Anchor of Life Ministries
                            to others as a community and family. We are a group of people committed
                            to following Jesus Christ. We worship Him with vigor and joy; we
                            encourage prayer in church and throughout our lives. We love people
                            outside the church through generosity, invitation, and compassion. We
                            hope that others will feel loved and welcome at Glorious Anchor of Life
                            Ministries. Once here, we pray that people will meet God through
                            encountering Him and giving their lives to Jesus Christ.
                        </p>
                    </div>

                    <div className="about-message-block right">
                        <p>
                            We want that for you. Come as you are. More importantly, check us out and
                            seek the truth of God that can only be known when one knows Jesus. While
                            you are browsing through our website, you will learn about our programs
                            and get a glimpse of who we are—but only a glimpse. To fully understand
                            us, come to a worship service or a small group and experience the
                            fellowship that comes when people share time with the Holy Spirit
                            present. We’d love to meet you and know you.
                        </p>
                    </div>

                </div>
            </section>



            {/* VALUES + SLIDER */}
            <section className="values-section">
                <div className="values-box">
                    <h1 style={{ color: 'orange', margin: '10px 0 30px' }}>Our Core Values</h1>
                    <div className="values-tabs">
                        {["truth", "faith", "love"].map((item) => (
                            <button
                                key={item}
                                className={active === item ? "active" : ""}
                                onClick={() => setActive(item)}
                            >
                                {valuesData[item].title}
                            </button>
                        ))}
                    </div>

                    <div className="values-content">
                        <p>{valuesData[active].text}</p>
                    </div>
                </div>

                <div className="slider-box">
                    <img
                        src={images[slide]}
                        alt="Church"
                        className="slider-image"
                    />
                </div>
            </section>
            <ChurchStatement />
            <BeliefSection />
        </>
    );
}
