import React, { useState } from 'react';
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import bg4 from '../../assets/images/bg-4.jpg'
import { BsBagCheck, BsSuitHeart, BsTrophy } from "react-icons/bs";
import { HiOutlineUsers } from "react-icons/hi";

const BusinessSummary = () => {
    const [countOn, setCountOn] = useState(false);
    return (
        <div className='py-2 lg:py-24' style={{ backgroundImage: `url(${bg4})` }}>
            <div className='container mx-auto'>
          <ScrollTrigger
            onEnter={() => setCountOn(true)}
            onExit={() => setCountOn(false)}
          >
            <div className="grid grid-cols-2 lg:grid-cols-4">
              <div className="stat text-center">
              <BsBagCheck className='text-6xl my-8 text-white mx-auto' />
                <div className="stat-value text-accent text-4xl lg:text-6xl">
                  {countOn && (
                    <CountUp
                      start={0}
                      end={569}
                      delay={0}
                      duration={3}
                      suffix="+"
                    >
                      {({ countUpRef }) => (
                        <div>
                          <span ref={countUpRef} />
                        </div>
                      )}
                    </CountUp>
                  )}
                </div>
                <div className="stat-title text-white">Expert Doctors</div>
              </div>

              <div className="stat text-center">
                <BsSuitHeart className='text-6xl my-8 text-white mx-auto' />
                <div className="stat-value text-accent text-4xl lg:text-6xl">
                  {countOn && (
                    <CountUp
                      start={0}
                      end={356}
                      delay={0}
                      duration={3}
                      suffix="+"
                    >
                      {({ countUpRef }) => (
                        <div>
                          <span ref={countUpRef} />
                        </div>
                      )}
                    </CountUp>
                  )}
                </div>
                <div className="stat-title  text-white">
                Happy Clients
                </div>
              </div>

              <div className="stat text-center">
              <HiOutlineUsers className='text-6xl my-8 text-white mx-auto' />
                <div className="stat-value text-accent text-4xl lg:text-6xl">
                  {countOn && (
                    <CountUp
                      start={0}
                      end={783}
                      delay={0}
                      duration={3}
                      suffix="%"
                    >
                      {({ countUpRef }) => (
                        <div>
                          <span ref={countUpRef} />
                        </div>
                      )}
                    </CountUp>
                  )}
                </div>
                <div className="stat-title  text-white">
                Business Partners
                </div>
              </div>

              <div className="stat text-center">
              <BsTrophy className='text-6xl my-8 text-white mx-auto' />
                <div className="stat-value text-accent text-4xl lg:text-6xl">
                  {countOn && (
                    <CountUp
                      start={0}
                      end={894}
                      delay={0}
                      duration={3}
                      suffix="+"
                    >
                      {({ countUpRef }) => (
                        <div>
                          <span ref={countUpRef} />
                        </div>
                      )}
                    </CountUp>
                  )}
                </div>
                <div className="stat-title text-white">
                IT Consultant
                </div>
              </div>
            </div>
          </ScrollTrigger>
        </div>
        </div>
    );
};

export default BusinessSummary;