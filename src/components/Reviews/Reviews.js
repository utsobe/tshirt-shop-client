import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <h1 className='text-4xl text-center text-red-800 font-semibold mt-10'>What Our Client Says</h1>
            <div className='grid grid-cols-3 gap-8 container mx-auto  my-10'>
                {
                    reviews.map(review => <Review key={review.id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;