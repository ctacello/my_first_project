// все тесты и правильные ответы при загрузке страницы

// let body = document.body;
// let time = setTimeout(function(){

// }, 1);

// body.addEventListener("load", time);

(async () => {
    let url = 'https://votesystem.mobius.team/api/tests';
    let response = await fetch(url);
    
    let allTests = await response.json();

    console.log(allTests);
    // alert(allTests.message);

    // console.log(allTests.tests[0]);
    // console.log(allTests.tests[0].conditions);

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
})();

// мой процент выполнения по нажатию на кнопку

(async () => {
    let url = 'https://votesystem.mobius.team/api/result/24';
    let response = await fetch(url);
    
    let myResult = await response.json();

    console.log(myResult.user);

    let buttonResult = document.querySelector('.getMyresult')
    
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
    
})();

//  цепочка запросов в одной фукнции
//  получить токен и использовать в формате FormData 
//  с ткаими параметрами token. homework_done (boolean value)
//  обработать ответы сервера, вставляя неправильные ID и отправлять неправильные поля в POST

(async () => {
    let url = 'https://votesystem.mobius.team/api/result/24/token';
    let response = await fetch(url);
    
    let myToken = await response.json();

    console.log(myToken);

    let buttonToken = document.querySelector('.getMyToken')
    
    buttonToken.addEventListener('click', function() {
        
        let blockToken = document.querySelector('.myToken');

        let h3 = document.createElement('h3');
        h3.innerText = "Мой текущий токен";
        blockToken.appendChild(h3);

        let token = document.createElement('p');
        token.innerText = myToken.token;
        blockToken.appendChild(token);

        let tokenCopy = document.createElement('p');
        tokenCopy.innerText = 'Скопируйте сгенерированный токен чтобы отправить POST запрос на сервер';
        blockToken.appendChild(tokenCopy);

        alert(myToken.message);
    });
})()