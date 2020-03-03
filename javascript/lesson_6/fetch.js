(async () => {
    let url = 'https://votesystem.mobius.team/api/tests';
    let response = await fetch(url);
    
    let allTests = await response.json();

    console.log(allTests);
    console.log(allTests.tests[0]);
    console.log(allTests.tests[0].conditions);

    let tests = allTests.tests;

    for (let test of tests) {
        let pLabel = document.createElement('p');
        pLabel.className = 'label';
        document.body.appendChild(pLabel);
        pLabel.innerText = test.label;

    let pText = document.createElement('p');
        pText.className = 'text';
        document.body.appendChild(pText);
        pText.innerText = test.text;
        
    let olAnswers = document.createElement('ol');
        olAnswers.className = 'answers';
        document.body.appendChild(olAnswers);
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
})()
