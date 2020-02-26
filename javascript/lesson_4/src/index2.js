// 0. Body

let footer = document.createElement('footer');
footer.className = 'footer';
footer.innerText = 'Copyright © 2014 Product name · PSD HTML CSS';
document.body.prepend(footer);

let main = document.createElement('main');
main.className = 'profile';
document.body.prepend(main);


let sectionClassNames = ['section product section_blue',
'section about section_white',
'section dignity section_gray',
'section screenshots section_white',
'section reviews section_gray',
'section buyitnow section_white',
'section contacts section_blue'
];

sectionClassNames.forEach(function(sectionClassName) {
    let section = document.createElement('section');
    main.appendChild(section);
    section.className = sectionClassName;
});

// 1. Product name

let sectionProduct = document.querySelector('.product');

    let articleProduct = document.createElement('article');
    articleProduct.className = 'product-article article_white';
    sectionProduct.appendChild(articleProduct);
        let h1Product = document.createElement('h1');
        h1Product.className = 'product-article__title';
        h1Product.innerText = 'Product name';
        articleProduct.appendChild(h1Product);
        let ulProduct = document.createElement('ul');
        ulProduct.className = 'product-article__list';
        articleProduct.appendChild(ulProduct);

            let itemsProduct = ['Put on this page information about your product', 
                        'A detailed description of your product', 
                        'Tell us about the advantages and merits',
                        'Associate the page with the payment system'
                        ];
            itemsProduct.forEach(function(itemProduct) {
                let liProduct = document.createElement('li');
                liProduct.className = 'product-article__item';
                liProduct.innerHTML = itemProduct;
                ulProduct.appendChild(liProduct);
            });
    let divProduct = document.createElement('div');
    sectionProduct.appendChild(divProduct);
        let imgProduct = document.createElement('img');
        imgProduct.className = 'product__img';
        imgProduct.src = 'assets/white_square.png';
        imgProduct.alt = 'White square';
        divProduct.appendChild(imgProduct);

// 2. About your product

let sectionAbout = document.querySelector('.about');
    let articleAbout = document.createElement('article');
    articleAbout.className = 'about-article article_blue';
    sectionAbout.appendChild(articleAbout);
        let h2About = document.createElement('h2');
        h2About.className = 'about-article__title';
        h2About.innerText = 'About your product';
        articleAbout.appendChild(h2About);
        let pAbout1 = document.createElement('p');
        pAbout1.className = 'about-article__text';
        pAbout1.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis facilis fuga, illo at. Natus eos, eligendi illum rerum omnis porro ex, magni, explicabo veniam incidunt in quam sapiente ut ipsum.';
        articleAbout.appendChild(pAbout1);
        let pAbout2 = document.createElement('P');
        pAbout2.className = 'about-article__text';
        pAbout2.innerText = 'Pariatur iure ab sunt nesciunt, quibusdam odio iste cumque itaque, ipsa vel exercitationem ullam quos aut nostrum cupiditate fuga quaerat quam animi dolores. Sequi itaque, unde perferendis nemo debitis dolor.';
        articleAbout.appendChild(pAbout2);
    let divAbout = document.createElement('div');
    sectionAbout.appendChild(divAbout);
        let imgAbout = document.createElement('img');
        imgAbout.className = 'about__img';
        imgAbout.src = 'assets/blue_square.png';
        imgAbout.alt = 'Blue square';
        divAbout.appendChild(imgAbout);

// 3. Dignity and pluses product

let sectionDignity = document.querySelector('.dignity');
    let articleDignity = document.createElement('article');
    articleDignity.className = 'article_blue';
    sectionDignity.appendChild(articleDignity);
        let h2Dignity = document.createElement('h2');
        h2Dignity.className = 'article__title article__title_center';
        h2Dignity.innerText = 'Dignity and pluses product';
        articleDignity.appendChild(h2Dignity);
        let ulDignity = document.createElement('ul');
        ulDignity.className = 'dignity-article__list';
        articleDignity.appendChild(ulDignity);

        let itemsDignity = ['Delectus dolorem vero quae beatae quasi dolor deserunt iste amet atque, impedit iure placeat, ullam. Reprehenderit aliquam, nemo cum velit ratione perferendis quas, maxime, quaerat porro totam, dolore minus inventore.', 
                            'Delectus dolorem vero quae beatae quasi dolor deserunt iste amet atque, impedit iure placeat, ullam. Reprehenderit aliquam, nemo cum velit ratione perferendis quas, maxime, quaerat porro totam, dolore minus inventore.', 
                            'Delectus dolorem vero quae beatae quasi dolor deserunt iste amet atque, impedit iure placeat, ullam. Reprehenderit aliquam, nemo cum velit ratione perferendis quas, maxime, quaerat porro totam, dolore minus inventore.',
                            'Delectus dolorem vero quae beatae quasi dolor deserunt iste amet atque, impedit iure placeat, ullam. Reprehenderit aliquam, nemo cum velit ratione perferendis quas, maxime, quaerat porro totam, dolore minus inventore.',
                            'Delectus dolorem vero quae beatae quasi dolor deserunt iste amet atque, impedit iure placeat, ullam. Reprehenderit aliquam, nemo cum velit ratione perferendis quas, maxime, quaerat porro totam, dolore minus inventore.',
                            'Delectus dolorem vero quae beatae quasi dolor deserunt iste amet atque, impedit iure placeat, ullam. Reprehenderit aliquam, nemo cum velit ratione perferendis quas, maxime, quaerat porro totam, dolore minus inventore.'
                            ];
            itemsDignity.forEach(function(itemDignity) {
                let liDignity = document.createElement('li');
                liDignity.className = 'dignity-article__item';
                liDignity.innerHTML = itemDignity;
                ulDignity.appendChild(liDignity);
            });

// 4. Sreenshots

let sectionScreenshots = document.querySelector('.screenshots');
    let articleScreenshots = document.createElement('article');
    articleScreenshots.className = 'article_blue';
    sectionScreenshots.appendChild(articleScreenshots);
        let h2Screenshots = document.createElement('h2');
        h2Screenshots.className = 'article__title article__title_center';
        h2Screenshots.innerText = 'Screenshots';
        articleScreenshots.appendChild(h2Screenshots);
        let ulScreenshots = document.createElement('ul');
        ulScreenshots.className = 'screenshots-article__list_wrap';
        articleScreenshots.appendChild(ulScreenshots);

            let itemsScreenshotClassNames = ['screenshots-article__item screenshot-article__item_wrap', 
                                            'screenshots-article__item screenshot-article__item_wrap', 
                                            'screenshots-article__item screenshot-article__item_wrap', 
                                            'screenshots-article__item screenshot-article__item_wrap'
                                            ];
                    itemsScreenshotClassNames.forEach(function(itemScreenshotClassName) {
                    let liScreenshot = document.createElement('li');
                    liScreenshot.className = itemScreenshotClassName;
                    ulScreenshots.appendChild(liScreenshot);
                        let divScreenshotsItemBlockWrap = document.createElement('div');
                        divScreenshotsItemBlockWrap.className = 'screenshots-item__block_wrap';
                        liScreenshot.appendChild(divScreenshotsItemBlockWrap);
                            let divScreenshots = document.createElement('div');
                            divScreenshotsItemBlockWrap.appendChild(divScreenshots);
                                let imgScreenshots = document.createElement('img');
                                imgScreenshots.className = 'screenshots-block__img'
                                imgScreenshots.src = 'assets/blue_square_small.png';
                                imgScreenshots.alt = 'Screenshots';
                                divScreenshots.appendChild(imgScreenshots);
                            let divScreenshotsBlockText = document.createElement('div');
                            divScreenshotsBlockText.className = 'screenshots-block__text';
                            divScreenshotsItemBlockWrap.appendChild(divScreenshotsBlockText);
                                let h3Screenshots = document.createElement('h3');
                                h3Screenshots.className = 'screenshots-block__title';
                                h3Screenshots.innerText = 'The description for the image'
                                divScreenshotsBlockText.appendChild(h3Screenshots);
                                let pScreenshots = document.createElement('p');
                                pScreenshots.className = 'screenshots-text';
                                pScreenshots.innerText = 'Pariatur iure ab sunt nesciunt, quibusdam odio iste cumque itaque, ipsa vel exercitationem ullam quos aut nostrum cupiditate fuga quaerat quam animi dolores. Sequi itaque, unde perferendis nemo debitis dolor.';
                                divScreenshotsBlockText.appendChild(pScreenshots);
                    });

// 5. Reviews

let sectionReviews = document.querySelector('.reviews');
    let articleReviews = document.createElement('article');
    articleReviews.className = 'reviews-article article_blue';
    sectionReviews.appendChild(articleReviews);
        let h2Reviews = document.createElement('h2');
        h2Reviews.className = 'article__title article__title_center';
        h2Reviews.innerText = 'Reviews';
        articleReviews.appendChild(h2Reviews);
        let divReviews = document.createElement('div');
        divReviews.className = 'reviews-article__block';
        articleReviews.appendChild(divReviews);

            let divReviewsBlockItemsClassNames = ['reviews-block__item', 
                                                'reviews-block__item', 
                                                'reviews-block__item', 
                                                'reviews-block__item'
                                                ];
            divReviewsBlockItemsClassNames.forEach(function(divReviewsBlockItemsClassName) {
            let divReviewsBlockItem = document.createElement('div');
            divReviewsBlockItem.className = divReviewsBlockItemsClassName;
            divReviews.appendChild(divReviewsBlockItem);
                let divInDivReviewsBlockItem = document.createElement('div');
                divReviewsBlockItem.appendChild(divInDivReviewsBlockItem);
                    let imgReviews = document.createElement('img');
                    imgReviews.className = 'reviews-item__img';
                    imgReviews.src = 'assets/elipse_blue.png';
                    imgReviews.alt = 'Reviews image';
                    divInDivReviewsBlockItem.appendChild(imgReviews);
                let divReviewsItemBg = document.createElement('div');
                divReviewsItemBg.className = 'reviews-item_bg';
                divReviewsBlockItem.appendChild(divReviewsItemBg);
                    let pReviewsItemText = document.createElement('p');
                    pReviewsItemText.className = 'reviews-item__text';
                    pReviewsItemText.innerText = 'Porro officia cumque sint deleniti nemo facere rem vitae odit inventore cum odio, iste quia doloribus autem aperiam nulla ea neque reprehenderit. Libero doloribus, possimus officiis sapiente necessitatibus commodi consectetur?';
                    divReviewsItemBg.appendChild(pReviewsItemText);
                    let pReviewsItemName = document.createElement('p');
                    pReviewsItemName.className = 'reviews-item__name';
                    pReviewsItemName.innerText = 'Lourens S.';
                    divReviewsItemBg.appendChild(pReviewsItemName);
            });

// 6. Buy it now

let sectionBuyItNow = document.querySelector('.buyitnow');
    let articleBuyItNow = document.createElement('article');
    articleBuyItNow.className = 'article_blue';
    sectionBuyItNow.appendChild(articleBuyItNow);
            let h2BuyItNow = document.createElement('h2');
            h2BuyItNow.className = 'article__title article__title_center';
            h2BuyItNow.innerText = 'Buy it now';
            articleBuyItNow.appendChild(h2BuyItNow);
            let divBuyItNow = document.createElement('div');
            divBuyItNow.className = 'buytinow-article__collums';
            articleBuyItNow.appendChild(divBuyItNow);
                
                // Standart
                let divBuyItNowCollumStandart = document.createElement('div');
                divBuyItNowCollumStandart.className = 'buytinow-collums__collum';
                divBuyItNow.appendChild(divBuyItNowCollumStandart);

                    let divBuyItNowStandartHead = document.createElement('div');
                    divBuyItNowStandartHead.className = 'buyitnow-collum__head';
                    divBuyItNowStandartHead.innerText = 'Standart';
                    divBuyItNowCollumStandart.appendChild(divBuyItNowStandartHead);

                    let divBuyItNowStandartPrice = document.createElement('div');
                    divBuyItNowStandartPrice.className = 'buyitnow-collum__price';
                    divBuyItNowStandartPrice.innerText = '$100';
                    divBuyItNowCollumStandart.appendChild(divBuyItNowStandartPrice);

                    let olBuyItNowStandartList = document.createElement('ol');
                    olBuyItNowStandartList.className = 'buyitnow-collum__list';
                    divBuyItNowCollumStandart.appendChild(olBuyItNowStandartList);

                        let liBuyItNowStandartItemTexts = ['Porro officia cumque sint deleniti;',
                                                            'Тemo facere rem vitae odit;',
                                                            'Cum odio, iste quia doloribus autem;',
                                                            'Aperiam nulla ea neque.'
                                                            ];
                        liBuyItNowStandartItemTexts.forEach(function(liBuyItNowStandartItemText){
                            let liBuyItNowStandartItem = document.createElement('li');
                            liBuyItNowStandartItem.className = 'buyitnow-list__item';
                            liBuyItNowStandartItem.innerText = liBuyItNowStandartItemText;
                            olBuyItNowStandartList.appendChild(liBuyItNowStandartItem);
                        });
                    let buttonBuyItNowStandart = document.createElement('button');
                    buttonBuyItNowStandart.className = 'buyitnow-collum__button';
                    buttonBuyItNowStandart.innerText = 'BUY';
                    divBuyItNowCollumStandart.appendChild(buttonBuyItNowStandart);
                    
                // Premium
                let divBuyItNowCollumPremium = document.createElement('div');
                divBuyItNowCollumPremium.className = 'buytinow-collums__collum';
                divBuyItNow.appendChild(divBuyItNowCollumPremium);

                    let divBuyItNowPremiumHead = document.createElement('div');
                    divBuyItNowPremiumHead.className = 'buyitnow-collum__head';
                    divBuyItNowPremiumHead.innerText = 'Premium';
                    divBuyItNowCollumPremium.appendChild(divBuyItNowPremiumHead);

                    let divBuyItNowPremiumPrice = document.createElement('div');
                    divBuyItNowPremiumPrice.className = 'buyitnow-collum__price';
                    divBuyItNowPremiumPrice.innerText = '$150';
                    divBuyItNowCollumPremium.appendChild(divBuyItNowPremiumPrice);

                    let olBuyItNowPremiumList = document.createElement('ol');
                    olBuyItNowPremiumList.className = 'buyitnow-collum__list';
                    divBuyItNowCollumPremium.appendChild(olBuyItNowPremiumList);

                        let liBuyItNowPremiumItemTexts = ['Porro officia cumque sint deleniti;',
                                                            'Тemo facere rem vitae odit;',
                                                            'Cum odio, iste quia doloribus autem;',
                                                            'Aperiam nulla ea neque.',
                                                            'Porro officia cumque sint deleniti;',
                                                            'Тemo facere rem vitae odit;',
                                                            'Cum odio, iste quia doloribus autem;',
                                                            'Aperiam nulla ea neque.'
                                                            ];
                        liBuyItNowPremiumItemTexts.forEach(function(liBuyItNowPremiumItemText){
                            let liBuyItNowPremiumItem = document.createElement('li');
                            liBuyItNowPremiumItem.className = 'buyitnow-list__item';
                            liBuyItNowPremiumItem.innerText = liBuyItNowPremiumItemText;
                            olBuyItNowPremiumList.appendChild(liBuyItNowPremiumItem);
                        });
                    let buttonBuyItNowPremium = document.createElement('button');
                    buttonBuyItNowPremium.className = 'buyitnow-collum__button';
                    buttonBuyItNowPremium.innerText = 'BUY';
                    divBuyItNowCollumPremium.appendChild(buttonBuyItNowPremium);

                // Lux
                let divBuyItNowCollumLux = document.createElement('div');
                divBuyItNowCollumLux.className = 'buytinow-collums__collum';
                divBuyItNow.appendChild(divBuyItNowCollumLux);

                    let divBuyItNowLuxHead = document.createElement('div');
                    divBuyItNowLuxHead.className = 'buyitnow-collum__head';
                    divBuyItNowLuxHead.innerText = 'Lux';
                    divBuyItNowCollumLux.appendChild(divBuyItNowLuxHead);

                    let divBuyItNowLuxPrice = document.createElement('div');
                    divBuyItNowLuxPrice.className = 'buyitnow-collum__price';
                    divBuyItNowLuxPrice.innerText = '$200';
                    divBuyItNowCollumLux.appendChild(divBuyItNowLuxPrice);

                    let olBuyItNowLuxList = document.createElement('ol');
                    olBuyItNowLuxList.className = 'buyitnow-collum__list';
                    divBuyItNowCollumLux.appendChild(olBuyItNowLuxList);

                        let liBuyItNowLuxItemTexts = ['Porro officia cumque sint deleniti;',
                                                            'Тemo facere rem vitae odit;',
                                                            'Cum odio, iste quia doloribus autem;',
                                                            'Aperiam nulla ea neque.',
                                                            'Porro officia cumque sint deleniti;',
                                                            'Тemo facere rem vitae odit;',
                                                            'Cum odio, iste quia doloribus autem;',
                                                            'Aperiam nulla ea neque.',
                                                            'Porro officia cumque sint deleniti;',
                                                            'Тemo facere rem vitae odit;',
                                                            'Cum odio, iste quia doloribus autem;',
                                                            'Aperiam nulla ea neque.'
                                                            ];
                        liBuyItNowLuxItemTexts.forEach(function(liBuyItNowLuxItemText){
                            let liBuyItNowLuxItem = document.createElement('li');
                            liBuyItNowLuxItem.className = 'buyitnow-list__item';
                            liBuyItNowLuxItem.innerText = liBuyItNowLuxItemText;
                            olBuyItNowLuxList.appendChild(liBuyItNowLuxItem);
                        });
                    let buttonBuyItNowLux = document.createElement('button');
                    buttonBuyItNowLux.className = 'buyitnow-collum__button';
                    buttonBuyItNowLux.innerText = 'BUY';
                    divBuyItNowCollumLux.appendChild(buttonBuyItNowLux);        
                    
// 7. Contacts

let sectionContacts = document.querySelector('.contacts');
    let articleContacts = document.createElement('article');
    articleContacts.className = 'article_white';
    sectionContacts.appendChild(articleContacts);
        let h2Contacts = document.createElement('h2');
        h2Contacts.className = 'article__title article__title_center';
        h2Contacts.innerText = 'Contacts';
        articleContacts.appendChild(h2Contacts);
        let divContacts = document.createElement('div');
        divContacts.className = 'contacts-article__block';
        articleContacts.appendChild(divContacts);
            let divContactsBlockInput = document.createElement('div');
            divContactsBlockInput.className = 'contacts-block__input';
            divContacts.appendChild(divContactsBlockInput);

                let inputContactsYourName = document.createElement('input');
                inputContactsYourName.className = 'contacts-input__field contacts-input__field_small';
                inputContactsYourName.name = 'Your name';
                inputContactsYourName.placeholder = 'Ваше имя:';
                divContactsBlockInput.appendChild(inputContactsYourName);
                
                let inputContactsYourMail = document.createElement('input');
                inputContactsYourMail.className = 'contacts-input__field contacts-input__field_small';
                inputContactsYourMail.name = 'Your mail';
                inputContactsYourMail.placeholder = 'Ваша почта:';
                divContactsBlockInput.appendChild(inputContactsYourMail);

                let inputContactsYourMessage = document.createElement('input');
                inputContactsYourMessage.className = 'contacts-input__field contacts-input__field_big';
                inputContactsYourMessage.name = 'Your message';
                inputContactsYourMessage.placeholder = 'Ваше сообщение:';
                divContactsBlockInput.appendChild(inputContactsYourMessage);
                
                let buttonContacts = document.createElement('button');
                buttonContacts.className = 'contacts-input__button';
                buttonContacts.innerText = 'Send';

            let divContactsBlockInfo = document.createElement('div');
            divContactsBlockInfo.className = 'contacts-block__info';
            divContacts.appendChild(divContactsBlockInfo);
                let ulContacts = document.createElement('ul');
                ulContacts.className = 'contacts-info__list';
                divContactsBlockInfo.appendChild(ulContacts);
                    
                    let liContactsTexts = [ 'Skype',
                                            'ICQ',
                                            'Email',
                                            'Phone'
                                        ];
                    liContactsTexts.forEach(function(liContactsText){
                        let liContacts = document.createElement('li');
                        liContacts.className = 'contacts-info__item';
                        liContacts.innerHTML = '<img class="contacts-item__img" src="assets/'+liContactsText+'_icon.png" alt="'+liContactsText+'">'+liContactsText+'';
                        ulContacts.appendChild(liContacts);
                    });

                let imgContacts = document.createElement('img');
                imgContacts.src = 'assets/social_buttons.png';
                imgContacts.alt = 'Social buttons';
                divContactsBlockInfo.appendChild(imgContacts);
            
