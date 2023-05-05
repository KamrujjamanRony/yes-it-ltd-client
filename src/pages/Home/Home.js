import React from 'react';
import Banner from './Banner';
import Blog from './Blog';
import Brand from './Brand';
import BusinessSummary from './BusinessSummary';
import CaseStudies from './CaseStudies';
import JoinWithUs from './JoinWithUs';
import Subscribe from './Subscribe';
import Team from './Team';
import Testimonials from './Testimonials';
import WhatWeDo from './WhatWeDo';
import WhoWeAre from './WhoWeAre';

const Home = () => {
    return (
        <div>
            <Banner />
            <WhoWeAre />
            <WhatWeDo />
            <Team />
            <JoinWithUs />
            <CaseStudies />
            <Testimonials />
            <BusinessSummary />
            <Blog />
            <Brand />
            <Subscribe />
        </div>
    );
};

export default Home;