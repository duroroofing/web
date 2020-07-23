import React from 'react'

import './Reviews.css'

const Reviews = () => {
    return (
        <div className="reviews">
            <h2>Our client's reviews</h2>
            <a target="_blank" href="https://www.yelp.com/biz/duro-roofing-los-angeles?hrid=czyjKGVrtWi1RMOHISmUcQ&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)">
                <p className="name">Lola F.</p>
                <span className="review-star">★★★★★</span>
                <p>
                    This company completely solved our problem. We had several leaks on a commercial roof. 
                    We used to dread it when it rained, even a little. We collected several estimates and 
                    decided to go with Duro for 2 reasons: the solution offered was innovative and 
                    complete. The pricing was much more reasonable. The experience was easy and good. When 
                    it rained we had not one leak. It then rained a lot more for many hours and we still 
                    had not a drop of water inside our location. I highly recommend this company.
                </p>
            </a>
        </div>
    )
}

export default Reviews