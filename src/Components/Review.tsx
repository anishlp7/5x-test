import React from 'react';

const Review = () => {
    return(
        <div className='reviewContainer'>
            <p className='reviewHeaderTitle'>321 Reviews</p>
            <div className='reviewList'>
                <div className='reviewProfile'>
                    <img src='./assets/map.png' alt="profile" className='reviewProfileImage' />
                    <div className='reviewProfileDet'>
                        <p className='reviewProfileName'>Brian B</p>
                        <p className='reviewCommentDate'>10/9/2018</p>
                    </div>
                </div>
                <div className='reviewContent'>
                    <p className='reviewContentText'>Don't be fooled by the French name, this place oozes with Californian flair. Their space is phenomenal: bright, warm colors yet clean and inviting. I've been twice for brunch and both times have been incredible! On our next trip to LA, I should really check out dinner since they seem to do more classic French preparations at that time. <br /><br />
                    For brunch, drool over the cast-iron pots of shakshouka, perfectly jiggly eggs over kimchi fried rice, marvel at their artful breakfast toasts and do good by ordering a fresh squeezed green juice. You'll need it to feel less guilty when you devour their sweet sticky bun or their creamy delicious Hazelnut puffs. OMG. I'm still dreaming about those cream puffs right now ...<br /><br />
                    Calories be damned.</p>
                </div>
            </div>
            <hr className='main-hr-line' />
        </div>
    );
};

export default Review;