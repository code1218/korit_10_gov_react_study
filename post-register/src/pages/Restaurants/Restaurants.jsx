import { useEffect, useState } from "react";
import * as s from "./styles";



function Restaurants() {
    const [ restaurants, setRestaurants ] = useState([]);
    const [ refetch, setRefetch ] = useState(true);

    useEffect(() => {
        if (refetch) {
            fetch("http://localhost:8080/api/restaurants")
            .then((response) => {
                console.log(response);
                response.json()
                .then((responseBody) => {
                    console.log(responseBody);
                    setRestaurants(responseBody);
                    setRefetch(false);
                });
            });
        }
    }, [refetch]);

    const emptyInputValues = {
        restaurantName: "",
        category: "",
        address: "",
        rating: "",
    }
    const [inputValues, setInputValues] = useState(emptyInputValues);

    const handleInputOnChange = (e) => {
        setInputValues(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    }

    const handleRegisterOnClick = () => {
        const requestBody = JSON.stringify(inputValues);

        fetch("http://localhost:8080/api/restaurants", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: requestBody,
        })
        .then((response) => {
            response.json()
            .then((responseBody) => {
                alert(responseBody.message);
                setRefetch(true);
            })
        });
    }

    return (
        <div css={s.table}>
            <div>
                <input type="text" name="restaurantName" placeholder="가게명" value={inputValues.restaurantName} onChange={handleInputOnChange} />
                <input type="text" name="category" placeholder="카테고리" value={inputValues.category} onChange={handleInputOnChange} />
                <input type="text" name="address" placeholder="주소" value={inputValues.address} onChange={handleInputOnChange} />
                <input type="text" name="rating" placeholder="평점" value={inputValues.rating} onChange={handleInputOnChange} />
                <button onClick={handleRegisterOnClick}>등록</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>가게명</th>
                        <th>카테고리</th>
                        <th>주소</th>
                        <th>평점</th>
                        <th>오픈일</th>
                        <th>최소주문수</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        restaurants.map(restaurant => (
                            <tr>
                                <td>{restaurant.id}</td>
                                <td>{restaurant.restaurantName}</td>
                                <td>{restaurant.category}</td>
                                <td>{restaurant.address}</td>
                                <td>{restaurant.rating}</td>
                                <td>{restaurant.createdAt}</td>
                                <td>{restaurant.minOrderAmount}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Restaurants;