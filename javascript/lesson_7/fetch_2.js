
async function get(){
    let getContent = generator();
    for await (let value of getContent) {
      // console.log(value); // 1, потом 2, потом 3, потом 4, потом 5
    }
  };
  
  let button = document.querySelector('.generator');
  button.addEventListener('click', get);
  
  async function* generator() {
      
    async function getTests() {
      
        let url = 'https://votesystem.mobius.team/api/tests';
        let response = await fetch(url);
        let allTests = await response.json();
  
        console.log(allTests);
  
        alert(allTests.message + ' Пункт 1й');
  
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
        };
    
    yield getTests();
    
    async function getMyResult() {
      let userID = prompt('Введите ID юзверя чтобы подсмотреть его результаты:', 24)
  
      let url = `https://votesystem.mobius.team/api/result/${userID}`;
      let response = await fetch(url);
      
      try {
        if (userID == '') throw 'Пожалуйста введите ID юзверя';
        if (userID != 24) throw 'Нельзя подглядывать за чужими результатами!!!';
        if (isNaN(userID)) throw 'Вы ввели не числовое значение ID юзверя';
        if (userID == 24) {
            if (response.ok) {
              let myResult = await response.json();
  
              console.log(myResult.user);
  
              let blockResult = await document.querySelector('.myResult');
              let h3 = await document.createElement('h3');
              h3.innerText = await myResult.user.name;
              blockResult.appendChild(h3);
  
              let result = await document.createElement('p');
              result.innerText = await 'Тесты выполнены на: ' + myResult.user.result + '%';
              blockResult.appendChild(result);
              
              await alert(myResult.message + ' Пункт 2й');
  
            } else {
                alert("HTTP-Error: " + response.status);
            }
        }
      }
      catch (err) {
        function errorPrint() {
          let blockResult = document.querySelector('.myResult');
          let h3 = document.createElement('h3');
          h3.innerText = 'ERR: ' + err;
          h3.style.color = 'red';
          blockResult.appendChild(h3);
  
          console.log(err);
          alert(err);
        }
        errorPrint()
      }
    };
  
    yield getMyResult();
  
    async function getToken() {
  
      await fetch(`https://votesystem.mobius.team/api/result/24/token`)
      .then(response => response.json()
      ).then(myToken => {
          alert(myToken.message + ' Пункт 3.1');
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
              .then(response => {console.log(response); alert(response + ' Пункт 3.2');})
              .catch(error => {
                  alert(error.message);
              })
      });
    };
  
    yield getToken();
  
    async function myPassword() {
      function* generateSequence(start, end) {
        for (let i = start; i <= end; i++) yield i;
      }
      
      function* generatePasswordCodes() {
        // 0..9
        yield* generateSequence(48, 57);
        // A..Z
        yield* generateSequence(65, 90);
        // a..z
        yield* generateSequence(97, 122);
      }
      
      let str = '';
      
        for(let code of generatePasswordCodes()) {
          str += String.fromCharCode(code);
        }
      
      // alert(str); // 0..9A..Za..z
  
      function genPass(){
  
        let num = prompt('Укажите длину пароля: ', 10)
  
        let pass = '';
        let symbols = str;
        let lenght = num;
  
        for (i = 0; i <= lenght; i++) {
          pass += symbols.charAt(Math.floor(Math.random() * symbols.length))
        }
  
        document.querySelector('.password').innerText = pass;
  
      }
  
      genPass()
    };
    yield myPassword();
  }