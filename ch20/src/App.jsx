
function App() {

    new Promise((resolve, reject) => {
        console.log(7);
        if (false) {
            resolve("성공데이터");
        } else {
            reject(new Error("실패데이터"));
        }
    }).catch((reason) => {
        console.log(9);
        console.error(reason);
    }).then((value) => {
        console.log(8);
        console.log(value);
    });

    new Promise((resolve, reject) => {
        console.log(10);
        if (true) {
            resolve();
        } else {
            reject();
        }
    }).then(() => {
        console.log(11);
    }).catch(() => {
        console.log(12);
    });

    console.log(1); //10초
    console.log(2); //1시간
    console.log(3); //30분
    console.log(4); //1초

    setTimeout(() => {
        console.log(5);
    }, 5000);
    setTimeout(() => {
        console.log(6);
    }, 2000);


    return (
        <>
            홈
        </>
    )
}

export default App;