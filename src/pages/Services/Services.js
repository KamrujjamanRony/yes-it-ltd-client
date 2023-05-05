import React from 'react';
import Brand from '../Home/Brand';
import BusinessSummary from '../Home/BusinessSummary';
import CaseStudies from '../Home/CaseStudies';
import Testimonials from '../Home/Testimonials';
import WhatWeDo from '../Home/WhatWeDo';

const Services = () => {
    return (
        <div>
            <WhatWeDo />
            <BusinessSummary />
            <CaseStudies />
            <Brand />
            <Testimonials />
        </div>
    );
};

export default Services;