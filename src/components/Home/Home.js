import React from 'react';
import images from '../../images/home.png'

const Home = () => {
    return (
        <div>
            <div className='flex items-center justify-around container mx-auto mt-6'>
                <div className='w-100'>
                    <h1 className='text-5xl font-bold leading-normal'>Without Wearing T-Shirt <br></br>Can't Be a Programming Hero</h1>
                    <p className='mt-4'>The invention of commercial knitting machines by the English inventor William Cotton in 1864 <br></br> brought the T-Shirt to the masses. At this time, paid holidays and weekends were introduced,<br></br> marking the need for comfortable clothing for workers to wear on their off days.</p>
                    <button className='bg-red-800 text-white py-2 px-5 mt-7'>Live Demo</button>
                </div>
                <div className=''>
                    <img src={images} alt="" />
                </div>
            </div>
            <div className='text-center py-5 mt-7'>
                <h3 className='text-3xl font-bold'>Customer Reviews(3)</h3>
                <button className='bg-red-800 text-white py-2 px-5 mt-7'>See All Reviews</button>
            </div>
        </div>
    );
};

export default Home;