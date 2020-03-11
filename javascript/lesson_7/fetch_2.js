// все тесты и правильные ответы при загрузке страницы

window.addEventListener('load', (async () => {
    let url = 'https://votesystem.mobius.team/api/tests';
    let response = await fetch(url);
    
    let allTests = await response.json();

    console.log(allTests);

    // alert(allTests.message);

    let tests = allTests.tests;
    let divTests = document.querySelector('.tests');

    for (let test of tests) {
        let h3Label = document.createElement('h3');
            h3Label.className = 'label';
            divTests.appendChild(h3Label);
            h3Label.innerText = test.label;

        let pText = document.createElement('p');
            pText.className = 'text';
            divTests.appendChild(pText);
            pText.innerText = test.text;
        
        let olAnswers = document.createElement('ol');
            olAnswers.className = 'answers';
            divTests.appendChild(olAnswers);
            olAnswers.innerText = 'Варианты ответов:';

        let answers = test.conditions;
            for (let answer of answers) {
                let liAnswer = document.createElement('li');
                liAnswer.className = 'answer';
                liAnswer.innerText = answer.text;
                let correct = function(){
                    if (answer.is_correct == 1){
                        liAnswer.style.color = 'red';
                    }
                };
                correct();
                document.querySelector('.answers');
                olAnswers.appendChild(liAnswer);
            };
        };
}));

// мой процент выполнения по нажатию на кнопку

(async () => {
    let url = 'https://votesystem.mobius.team/api/result/24';
    let response = await fetch(url);
    
    if (response.ok) {
        let myResult = await response.json();

        console.log(myResult.user);

        let buttonResult = document.querySelector('.getMyresult');
        
        buttonResult.addEventListener('click', function() {

            let blockResult = document.querySelector('.myResult');

            let h3 = document.createElement('h3');
            h3.innerText = myResult.user.name;
            blockResult.appendChild(h3);

            let result = document.createElement('p');
            result.innerText = 'Тесты выполнены на: ' + myResult.user.result + '%';
            blockResult.appendChild(result);

            alert(myResult.message);
        });
    } else {
        alert("HTTP-Error: " + response.status);
    }
})();

//  цепочка запросов в одной функции
//  получить токен и использовать в формате FormData 
//  с ткаими параметрами token. homework_done (boolean value)
//  обработать ответы сервера, вставляя неправильные ID и отправлять неправильные поля в POST

let getToken = () => {

    fetch('https://votesystem.mobius.team/api/result/24/token')
    .then(response => response.json()
    ).then(myToken => {
        alert(myToken.message);
        console.log(myToken);
        
        let token = myToken.token;
        console.log(token);
        let formData = new FormData();
        formData.append('token', token);
        formData.append('homework_done', true);
        
        const url = 'https://votesystem.mobius.team/api/homework/update';
        const sendData = {
            method: 'POST',
            body: formData
        }

        fetch(url, sendData)
            .then(response => response.json())
            .then(response => {console.log(response); alert(response);})
            .catch(error => {
                alert(error.message);
            })
    });
};

let buttonToken = document.querySelector('.getMyToken');
    
    buttonToken.addEventListener('click', function() {
        getToken();
    });

    let getError = () => {

        fetch('https://votesystem.mobius.team/api/result/24/token')
        .then(response => response.json()
        ).then(myError => {
            alert(myError.message);
            console.log(myError);
            
            let error = myError.token;
            console.log(error);
            let formData = new FormData();
            formData.append('token', 'asdafwqfq412414');
            formData.append('homework_done', true);
            
            const url = 'https://votesystem.mobius.team/api/homework/update';
            const sendData = {
                method: 'POST',
                body: formData
            }
    
            fetch(url, sendData)
                .then(response => response.json())
                .then(response => {console.log(response.message); alert(response.message);});
    
        });
    };
    
    let buttonError = document.querySelector('.getMyError');
        
        buttonError.addEventListener('click', function() {
            getError();
        });