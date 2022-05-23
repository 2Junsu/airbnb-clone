import React from "react";
import "../css/categoryItem.css";

const CategoryItem = (props) => {
    const { src, name } = props;

    return (
        <div className="container">
            <img width="30px" height="30px" src={src} alt="categoryItem" />
            <span style={{ margin: "8px 0px" }}>{name}</span>
        </div>
    );
};

export default CategoryItem;
