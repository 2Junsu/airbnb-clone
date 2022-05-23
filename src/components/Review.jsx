import React from "react";
import "../css/review.css";

const Review = () => {
    return (
        <article>
            <div className="review-profile">
                <img
                    className="profile-img"
                    src="https://a0.muscache.com/im/pictures/user/05b60272-2245-4b9e-b583-6ec590b5b9bf.jpg?im_w=240"
                    alt="profile"
                />
                <div className="review-nickname">
                    <strong>Jessica</strong>
                    <span>2022년 4월</span>
                </div>
            </div>
            <div className="review-content">
                <span>
                    숙소는 매우 좋으며, 겨울에는 햇살을 받으며 호수를 감상할 수
                    있어 매우 편안합니다.아침에 아줌마가 만든 따뜻한 아침 식사도
                    드실 수 있습니다.
                </span>
            </div>
        </article>
    );
};

export default Review;
