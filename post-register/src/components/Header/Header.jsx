import { Link, useNavigate } from "react-router";
import * as s from "./styles";
import { LuPencil } from "react-icons/lu";
import Button from "../Button/Button";
import { BiPlus } from "react-icons/bi";
import { useState } from "react";

function Header() {
    const navigate = useNavigate();
    const [ show, setShow ] = useState(false);

    const handleWriteOnClick = () => {
        navigate("/write");
    }

    const handleProfileOnClick = () => {
        setShow(prev => !prev);
    }
    
    const handleLogoutOnClick = (e) => {
        localStorage.removeItem("accessToken");
        navigate("/auth/signin", {
            replace: true,
        });
    }

    return (
        <header css={s.layout}>
            <div css={s.left}>
                <Link to={"/"}>
                    <h1><LuPencil /> PostLab</h1>
                </Link>
            </div>
            <div css={s.right}>
                <Button onClick={handleWriteOnClick}><BiPlus />글쓰기</Button>
                <div css={s.profile} onClick={handleProfileOnClick}>
                    <span>김준일</span>
                    <ul css={s.profileMenu(show)}>
                        <li>프로필 설정</li>
                        <li onClick={handleLogoutOnClick}>로그아웃</li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;