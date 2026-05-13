import { css } from "@emotion/react";
import bg from "../../assets/sign_background.webp";

export const layout = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const header = css`
    margin-bottom: 40px;
    
    & > h2 {
        margin: 30px 0 10px;
        font-weight: 500;
    }

    & > p {
        margin: 0;
        font-size: 14px;

        & > a {
            text-decoration: none;
            color: #34c767;
        }
    }
`;

export const agree = css`
    margin: 20px 0;
    font-size: 14px;
    font-weight: 400;
`;

export const signupButton = css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    box-sizing: border-box;
    border: 1px solid #cccccc;
    border-radius: 6px;
    padding: 10px;
    width: 100%;
    font-size: 16px;
    font-weight: 400;
    background-color: transparent;
    transition: all 0.1s ease-in-out;
    cursor: pointer;

    &:hover {
        background-color: #f2f1e3;
    }

    &:active {
        background-color: #e9e8da;
        transform: scale(97%);
    }
`;