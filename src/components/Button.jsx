import React from "react";
import styled from "styled-components";

const Button = (props) => {
    const { children, color, style, onClick } = props;
    return (
        <Btn style={style} color={color} onClick={onClick}>
            <span>{children}</span>
        </Btn>
    );
};

const Btn = styled.button`
    all: unset;
    border: ${(props) => (props.color ? "none" : "1px solid black")};
    border-radius: 8px;
    background-color: ${(props) => (props.color ? "#ff0080" : "white")};
    padding: 14px 0px;
    width: 100%;
    text-align: center;
    & > span {
        color: ${(props) => (props.color ? "white" : "black")};
        font-weight: bold;
        font-size: 16px;
    }
    &:hover {
        cursor: pointer;
    }
`;
export default Button;
