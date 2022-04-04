import React from 'react';

const Review = (props) => {
    const { name, image, review, rating } = props.review;
    return (
        <div className='p-10 text-center shadow-2xl'>
            <p>{review}</p>
            <p className='mt-3 mb-8 font-bold text-orange-500'>Ratings: {rating} Star</p>
            <img className='mx-auto rounded-full mb-2' width='50px' src={image} alt="" />
            <h1 className='text-xl font-semibold'>{name}</h1>
        </div>
    );
};

export default Review;