import React, { useState } from "react";

const ChurchStatement = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const data = [
    {
      title: "GALM Mission",
      content: `Glorious Anchor of Life Ministries is committed to fulfilling a five-fold mission. Its fundamental reason for being is:
      
Worshiping God: John 4:23-24 — "Yet a time is coming and has now come when the true worshipers will worship the Father in the Spirit and in truth..."
Evangelize to the Lost: Matthew 28:19 — "Therefore go and make disciples of all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Spirit."
Discipleship: 2 Timothy 2:2 — "And the things you have heard me say in the presence of many witnesses entrust to reliable people who will also be qualified to teach others."
Showing Compassion: Colossians 3:12 — "Therefore, as God's chosen people, clothe yourselves with compassion, kindness, humility, gentleness, and patience."
Contributing to Society: Hebrews 6:10 — "God is not unjust; he will not forget your work and the love you have shown him."`,
    },
    {
      title: "GALM Vision",
      content: `Glorious Anchor of Life Ministries is committed to passionately preach the word of God at home and abroad. 1 Corinthians 9:16 — "For if I preach the gospel, that gives me no ground for boasting..."
We are strategically investing in the generation by establishing new churches and vitalizing the existing ones through leadership training and prayer.`,
    },
    {
      title: "GALM Belief",
      content: `THE SCRIPTURES INSPIRED — 2 Timothy 3:15-17
THE ONE TRUE GOD
 — Deuteronomy 6:4, Isaiah 43:10-11, Matthew 28:19
THE DEITY OF THE LORD JESUS CHRIST 
— His virgin birth, sinless life, miracles, substitutionary work on the cross, resurrection, exaltation
THE FALL OF MAN 
— Genesis 1:26-27, Genesis 2:17, Genesis 3:6
THE SALVATION OF MAN 
— Luke 24:47, John 3:3, Romans 10:13-15
THE ORDINANCES OF THE CHURCH 
— Baptism in water, baptism in the Holy Spirit
SANCTIFICATION
 — Romans 12:1-2, 1 Thessalonians 5:23
THE CHURCH AND ITS MISSION 
— Ephesians 1:22-23, Acts 1:8, Matthew 28:19-20
THE MINISTRY 
— Evangelization, Worship, Building a body of saints, Compassion ministries
DIVINE HEALING 
— Isaiah 53:4-5, Matthew 8:16-17, James 5:14-16
THE BLESSED HOPE
 — 1 Thessalonians 4:16-17
THE MILLENNIAL REIGN OF CHRIST
 — Zechariah 14:5, Matthew 24:27, Revelation 1:7
THE FINAL JUDGMENT 
— Matthew 25:46, Revelation 20:11-15
THE NEW HEAVENS AND THE NEW EARTH 
— 2 Peter 3:13, Revelation 21-22`,
    },
  ];

  return (
    <section className="church-statement">
      <div className="container">
        <h2 className="section-title">Our Church Statement</h2>

        <div className="accordion">
          {data.map((item, index) => (
            <div
              key={index}
              className={`accordion-item ${activeIndex === index ? "active" : ""}`}
            >
              <button
                className="accordion-header"
                onClick={() => toggleAccordion(index)}
              >
                {item.title}
                <span className={`arrow ${activeIndex === index ? "down" : "right"}`}>
                  &#9660;
                </span>
              </button>

              <div
                className="accordion-content"
                style={{ maxHeight: activeIndex === index ? "500px" : "0px" }}
              >
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChurchStatement;
