import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-3'>
            {/* <h1>LatestNews</h1> */}
            <p className='text-base-100 bg-secondary px-3 py-3'>Latest</p>
            <Marquee className='flex gap-5' pauseOnHover={true} speed={100}>
                <p className='font-bold'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as....</p>
                <p className='font-bold'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as....</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;