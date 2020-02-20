/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./javascript/lesson_4/src/index2.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./javascript/lesson_4/src/index2.js":
/*!*******************************************!*\
  !*** ./javascript/lesson_4/src/index2.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// let footer = document.createElement('footer');\r\n// let section = document.createElement('section');\r\n// let article = document.createElement('article');\r\n// let div = document.createElement('div');\r\n\r\n// let h1 = document.createElement('h1');\r\n// let h2 = document.createElement('h2');\r\n// let h3 = document.createElement('h3');\r\n\r\n// let ul = document.createElement('ul');\r\n// let ol = document.createElement('ol');\r\n// let li = document.createElement('li');\r\n\r\n// let button = document.createElement('button');\r\n// let input = document.createElement('input');\r\n// let img = document.createElement('img');\r\n// let p = document.createElement('p');\r\n\r\n// 0. Body\r\n\r\nlet footer = document.createElement('footer');\r\nfooter.className = 'footer';\r\nfooter.innerText = 'Copyright © 2014 Product name · PSD HTML CSS';\r\ndocument.body.prepend(footer);\r\n\r\nlet main = document.createElement('main');\r\nmain.className = 'profile';\r\ndocument.body.prepend(main);\r\n\r\n\r\nlet sectionClassNames = ['section product section_blue',\r\n'section about section_white',\r\n'section dignity section_gray',\r\n'section screenshots section_white',\r\n'section reviews section_gray',\r\n'section buyitnow section_white',\r\n'section contacts section_blue'\r\n];\r\n\r\nsectionClassNames.forEach(function(sectionClassName) {\r\n    let section = document.createElement('section');\r\n    main.appendChild(section);\r\n    section.className = sectionClassName;\r\n});\r\n\r\n// 1. Product name\r\n\r\nlet sectionProduct = document.querySelector('.product');\r\n\r\n    let articleProduct = document.createElement('article');\r\n    articleProduct.className = 'product-article article_white';\r\n    sectionProduct.appendChild(articleProduct);\r\n        let h1Product = document.createElement('h1');\r\n        h1Product.className = 'product-article__title';\r\n        h1Product.innerText = 'Product name';\r\n        articleProduct.appendChild(h1Product);\r\n        let ulProduct = document.createElement('ul');\r\n        ulProduct.className = 'product-article__list';\r\n        articleProduct.appendChild(ulProduct);\r\n\r\n            let itemsProduct = ['Put on this page information about your product', \r\n                        'A detailed description of your product', \r\n                        'Tell us about the advantages and merits',\r\n                        'Associate the page with the payment system'\r\n                        ];\r\n            itemsProduct.forEach(function(itemProduct) {\r\n                let liProduct = document.createElement('li');\r\n                liProduct.className = 'product-article__item';\r\n                liProduct.innerHTML = itemProduct;\r\n                ulProduct.appendChild(liProduct);\r\n            });\r\n    let divProduct = document.createElement('div');\r\n    sectionProduct.appendChild(divProduct);\r\n        let imgProduct = document.createElement('img');\r\n        imgProduct.className = 'product__img';\r\n        imgProduct.src = 'assets/white_square.png';\r\n        imgProduct.alt = 'White square';\r\n        divProduct.appendChild(imgProduct);\r\n\r\n// 2. About your product\r\n\r\nlet sectionAbout = document.querySelector('.about');\r\n    let articleAbout = document.createElement('article');\r\n    articleAbout.className = 'about-article article_blue';\r\n    sectionAbout.appendChild(articleAbout);\r\n        let h2About = document.createElement('h2');\r\n        h2About.className = 'about-article__title';\r\n        h2About.innerText = 'About your product';\r\n        articleAbout.appendChild(h2About);\r\n        let pAbout1 = document.createElement('p');\r\n        pAbout1.className = 'about-article__text';\r\n        pAbout1.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis facilis fuga, illo at. Natus eos, eligendi illum rerum omnis porro ex, magni, explicabo veniam incidunt in quam sapiente ut ipsum.';\r\n        articleAbout.appendChild(pAbout1);\r\n        let pAbout2 = document.createElement('P');\r\n        pAbout2.className = 'about-article__text';\r\n        pAbout2.innerText = 'Pariatur iure ab sunt nesciunt, quibusdam odio iste cumque itaque, ipsa vel exercitationem ullam quos aut nostrum cupiditate fuga quaerat quam animi dolores. Sequi itaque, unde perferendis nemo debitis dolor.';\r\n        articleAbout.appendChild(pAbout2);\r\n    let divAbout = document.createElement('div');\r\n    sectionAbout.appendChild(divAbout);\r\n        let imgAbout = document.createElement('img');\r\n        imgAbout.className = 'about__img';\r\n        imgAbout.src = 'assets/blue_square.png';\r\n        imgAbout.alt = 'Blue square';\r\n        divAbout.appendChild(imgAbout);\r\n\r\n// 3. Dignity and pluses product\r\n\r\nlet sectionDignity = document.querySelector('.dignity');\r\n    let articleDignity = document.createElement('article');\r\n    articleDignity.className = 'article_blue';\r\n    sectionDignity.appendChild(articleDignity);\r\n        let h2Dignity = document.createElement('h2');\r\n        h2Dignity.className = 'article__title article__title_center';\r\n        h2Dignity.innerText = 'Dignity and pluses product';\r\n        articleDignity.appendChild(h2Dignity);\r\n        let ulDignity = document.createElement('ul');\r\n        ulDignity.className = 'dignity-article__list';\r\n        articleDignity.appendChild(ulDignity);\r\n\r\n        let itemsDignity = ['Delectus dolorem vero quae beatae quasi dolor deserunt iste amet atque, impedit iure placeat, ullam. Reprehenderit aliquam, nemo cum velit ratione perferendis quas, maxime, quaerat porro totam, dolore minus inventore.', \r\n                            'Delectus dolorem vero quae beatae quasi dolor deserunt iste amet atque, impedit iure placeat, ullam. Reprehenderit aliquam, nemo cum velit ratione perferendis quas, maxime, quaerat porro totam, dolore minus inventore.', \r\n                            'Delectus dolorem vero quae beatae quasi dolor deserunt iste amet atque, impedit iure placeat, ullam. Reprehenderit aliquam, nemo cum velit ratione perferendis quas, maxime, quaerat porro totam, dolore minus inventore.',\r\n                            'Delectus dolorem vero quae beatae quasi dolor deserunt iste amet atque, impedit iure placeat, ullam. Reprehenderit aliquam, nemo cum velit ratione perferendis quas, maxime, quaerat porro totam, dolore minus inventore.',\r\n                            'Delectus dolorem vero quae beatae quasi dolor deserunt iste amet atque, impedit iure placeat, ullam. Reprehenderit aliquam, nemo cum velit ratione perferendis quas, maxime, quaerat porro totam, dolore minus inventore.',\r\n                            'Delectus dolorem vero quae beatae quasi dolor deserunt iste amet atque, impedit iure placeat, ullam. Reprehenderit aliquam, nemo cum velit ratione perferendis quas, maxime, quaerat porro totam, dolore minus inventore.'\r\n                            ];\r\n            itemsDignity.forEach(function(itemDignity) {\r\n                let liDignity = document.createElement('li');\r\n                liDignity.className = 'dignity-article__item';\r\n                liDignity.innerHTML = itemDignity;\r\n                ulDignity.appendChild(liDignity);\r\n            });\r\n\r\n// 4. Sreenshots\r\n\r\nlet sectionScreenshots = document.querySelector('.screenshots');\r\n    let articleScreenshots = document.createElement('article');\r\n    articleScreenshots.className = 'article_blue';\r\n    sectionScreenshots.appendChild(articleScreenshots);\r\n        let h2Screenshots = document.createElement('h2');\r\n        h2Screenshots.className = 'article__title article__title_center';\r\n        h2Screenshots.innerText = 'Screenshots';\r\n        articleScreenshots.appendChild(h2Screenshots);\r\n        let ulScreenshots = document.createElement('ul');\r\n        ulScreenshots.className = 'screenshots-article__list_wrap';\r\n        articleScreenshots.appendChild(ulScreenshots);\r\n\r\n            let itemsScreenshotClassNames = ['screenshots-article__item screenshot-article__item_wrap', \r\n                                            'screenshots-article__item screenshot-article__item_wrap', \r\n                                            'screenshots-article__item screenshot-article__item_wrap', \r\n                                            'screenshots-article__item screenshot-article__item_wrap'\r\n                                            ];\r\n                    itemsScreenshotClassNames.forEach(function(itemScreenshotClassName) {\r\n                    let liScreenshot = document.createElement('li');\r\n                    liScreenshot.className = itemScreenshotClassName;\r\n                    ulScreenshots.appendChild(liScreenshot);\r\n                        let divScreenshotsItemBlockWrap = document.createElement('div');\r\n                        divScreenshotsItemBlockWrap.className = 'screenshots-item__block_wrap';\r\n                        liScreenshot.appendChild(divScreenshotsItemBlockWrap);\r\n                            let divScreenshots = document.createElement('div');\r\n                            divScreenshotsItemBlockWrap.appendChild(divScreenshots);\r\n                                let imgScreenshots = document.createElement('img');\r\n                                imgScreenshots.className = 'screenshots-block__img'\r\n                                imgScreenshots.src = 'assets/blue_square_small.png';\r\n                                imgScreenshots.alt = 'Screenshots';\r\n                                divScreenshots.appendChild(imgScreenshots);\r\n                            let divScreenshotsBlockText = document.createElement('div');\r\n                            divScreenshotsBlockText.className = 'screenshots-block__text';\r\n                            divScreenshotsItemBlockWrap.appendChild(divScreenshotsBlockText);\r\n                                let h3Screenshots = document.createElement('h3');\r\n                                h3Screenshots.className = 'screenshots-block__title';\r\n                                h3Screenshots.innerText = 'The description for the image'\r\n                                divScreenshotsBlockText.appendChild(h3Screenshots);\r\n                                let pScreenshots = document.createElement('p');\r\n                                pScreenshots.className = 'screenshots-text';\r\n                                pScreenshots.innerText = 'Pariatur iure ab sunt nesciunt, quibusdam odio iste cumque itaque, ipsa vel exercitationem ullam quos aut nostrum cupiditate fuga quaerat quam animi dolores. Sequi itaque, unde perferendis nemo debitis dolor.';\r\n                                divScreenshotsBlockText.appendChild(pScreenshots);\r\n                    });\r\n\r\n// 5. Reviews\r\n\r\nlet sectionReviews = document.querySelector('.reviews');\r\n    let articleReviews = document.createElement('article');\r\n    articleReviews.className = 'reviews-article article_blue';\r\n    sectionReviews.appendChild(articleReviews);\r\n        let h2Reviews = document.createElement('h2');\r\n        h2Reviews.className = 'article__title article__title_center';\r\n        h2Reviews.innerText = 'Reviews';\r\n        articleReviews.appendChild(h2Reviews);\r\n        let divReviews = document.createElement('div');\r\n        divReviews.className = 'reviews-article__block';\r\n        articleReviews.appendChild(divReviews);\r\n\r\n            let divReviewsBlockItemsClassNames = ['reviews-block__item', \r\n                                                'reviews-block__item', \r\n                                                'reviews-block__item', \r\n                                                'reviews-block__item'\r\n                                                ];\r\n            divReviewsBlockItemsClassNames.forEach(function(divReviewsBlockItemsClassName) {\r\n            let divReviewsBlockItem = document.createElement('div');\r\n            divReviewsBlockItem.className = divReviewsBlockItemsClassName;\r\n            divReviews.appendChild(divReviewsBlockItem);\r\n                let divInDivReviewsBlockItem = document.createElement('div');\r\n                divReviewsBlockItem.appendChild(divInDivReviewsBlockItem);\r\n                    let imgReviews = document.createElement('img');\r\n                    imgReviews.className = 'reviews-item__img';\r\n                    imgReviews.src = 'assets/elipse_blue.png';\r\n                    imgReviews.alt = 'Reviews image';\r\n                    divInDivReviewsBlockItem.appendChild(imgReviews);\r\n                let divReviewsItemBg = document.createElement('div');\r\n                divReviewsItemBg.className = 'reviews-item_bg';\r\n                divReviewsBlockItem.appendChild(divReviewsItemBg);\r\n                    let pReviewsItemText = document.createElement('p');\r\n                    pReviewsItemText.className = 'reviews-item__text';\r\n                    pReviewsItemText.innerText = 'Porro officia cumque sint deleniti nemo facere rem vitae odit inventore cum odio, iste quia doloribus autem aperiam nulla ea neque reprehenderit. Libero doloribus, possimus officiis sapiente necessitatibus commodi consectetur?';\r\n                    divReviewsItemBg.appendChild(pReviewsItemText);\r\n                    let pReviewsItemName = document.createElement('p');\r\n                    pReviewsItemName.className = 'reviews-item__name';\r\n                    pReviewsItemName.innerText = 'Lourens S.';\r\n                    divReviewsItemBg.appendChild(pReviewsItemName);\r\n            });\r\n\r\n// 6. Buy it now\r\n\r\nlet sectionBuyItNow = document.querySelector('.buyitnow');\r\n    let articleBuyItNow = document.createElement('article');\r\n    articleBuyItNow.className = 'article_blue';\r\n    sectionBuyItNow.appendChild(articleBuyItNow);\r\n            let h2BuyItNow = document.createElement('h2');\r\n            h2BuyItNow.className = 'article__title article__title_center';\r\n            h2BuyItNow.innerText = 'Buy it now';\r\n            articleBuyItNow.appendChild(h2BuyItNow);\r\n            let divBuyItNow = document.createElement('div');\r\n            divBuyItNow.className = 'buytinow-article__collums';\r\n            articleBuyItNow.appendChild(divBuyItNow);\r\n                \r\n                // Standart\r\n                let divBuyItNowCollumStandart = document.createElement('div');\r\n                divBuyItNowCollumStandart.className = 'buytinow-collums__collum';\r\n                divBuyItNow.appendChild(divBuyItNowCollumStandart);\r\n\r\n                    let divBuyItNowStandartHead = document.createElement('div');\r\n                    divBuyItNowStandartHead.className = 'buyitnow-collum__head';\r\n                    divBuyItNowStandartHead.innerText = 'Standart';\r\n                    divBuyItNowCollumStandart.appendChild(divBuyItNowStandartHead);\r\n\r\n                    let divBuyItNowStandartPrice = document.createElement('div');\r\n                    divBuyItNowStandartPrice.className = 'buyitnow-collum__price';\r\n                    divBuyItNowStandartPrice.innerText = '$100';\r\n                    divBuyItNowCollumStandart.appendChild(divBuyItNowStandartPrice);\r\n\r\n                    let olBuyItNowStandartList = document.createElement('ol');\r\n                    olBuyItNowStandartList.className = 'buyitnow-collum__list';\r\n                    divBuyItNowCollumStandart.appendChild(olBuyItNowStandartList);\r\n\r\n                        let liBuyItNowStandartItemTexts = ['Porro officia cumque sint deleniti;',\r\n                                                            'Тemo facere rem vitae odit;',\r\n                                                            'Cum odio, iste quia doloribus autem;',\r\n                                                            'Aperiam nulla ea neque.'\r\n                                                            ];\r\n                        liBuyItNowStandartItemTexts.forEach(function(liBuyItNowStandartItemText){\r\n                            let liBuyItNowStandartItem = document.createElement('li');\r\n                            liBuyItNowStandartItem.className = 'buyitnow-list__item';\r\n                            liBuyItNowStandartItem.innerText = liBuyItNowStandartItemText;\r\n                            olBuyItNowStandartList.appendChild(liBuyItNowStandartItem);\r\n                        });\r\n                    let buttonBuyItNowStandart = document.createElement('button');\r\n                    buttonBuyItNowStandart.className = 'buyitnow-collum__button';\r\n                    buttonBuyItNowStandart.innerText = 'BUY';\r\n                    divBuyItNowCollumStandart.appendChild(buttonBuyItNowStandart);\r\n                    \r\n                // Premium\r\n                let divBuyItNowCollumPremium = document.createElement('div');\r\n                divBuyItNowCollumPremium.className = 'buytinow-collums__collum';\r\n                divBuyItNow.appendChild(divBuyItNowCollumPremium);\r\n\r\n                    let divBuyItNowPremiumHead = document.createElement('div');\r\n                    divBuyItNowPremiumHead.className = 'buyitnow-collum__head';\r\n                    divBuyItNowPremiumHead.innerText = 'Premium';\r\n                    divBuyItNowCollumPremium.appendChild(divBuyItNowPremiumHead);\r\n\r\n                    let divBuyItNowPremiumPrice = document.createElement('div');\r\n                    divBuyItNowPremiumPrice.className = 'buyitnow-collum__price';\r\n                    divBuyItNowPremiumPrice.innerText = '$150';\r\n                    divBuyItNowCollumPremium.appendChild(divBuyItNowPremiumPrice);\r\n\r\n                    let olBuyItNowPremiumList = document.createElement('ol');\r\n                    olBuyItNowPremiumList.className = 'buyitnow-collum__list';\r\n                    divBuyItNowCollumPremium.appendChild(olBuyItNowPremiumList);\r\n\r\n                        let liBuyItNowPremiumItemTexts = ['Porro officia cumque sint deleniti;',\r\n                                                            'Тemo facere rem vitae odit;',\r\n                                                            'Cum odio, iste quia doloribus autem;',\r\n                                                            'Aperiam nulla ea neque.',\r\n                                                            'Porro officia cumque sint deleniti;',\r\n                                                            'Тemo facere rem vitae odit;',\r\n                                                            'Cum odio, iste quia doloribus autem;',\r\n                                                            'Aperiam nulla ea neque.'\r\n                                                            ];\r\n                        liBuyItNowPremiumItemTexts.forEach(function(liBuyItNowPremiumItemText){\r\n                            let liBuyItNowPremiumItem = document.createElement('li');\r\n                            liBuyItNowPremiumItem.className = 'buyitnow-list__item';\r\n                            liBuyItNowPremiumItem.innerText = liBuyItNowPremiumItemText;\r\n                            olBuyItNowPremiumList.appendChild(liBuyItNowPremiumItem);\r\n                        });\r\n                    let buttonBuyItNowPremium = document.createElement('button');\r\n                    buttonBuyItNowPremium.className = 'buyitnow-collum__button';\r\n                    buttonBuyItNowPremium.innerText = 'BUY';\r\n                    divBuyItNowCollumPremium.appendChild(buttonBuyItNowPremium);\r\n\r\n                // Lux\r\n                let divBuyItNowCollumLux = document.createElement('div');\r\n                divBuyItNowCollumLux.className = 'buytinow-collums__collum';\r\n                divBuyItNow.appendChild(divBuyItNowCollumLux);\r\n\r\n                    let divBuyItNowLuxHead = document.createElement('div');\r\n                    divBuyItNowLuxHead.className = 'buyitnow-collum__head';\r\n                    divBuyItNowLuxHead.innerText = 'Lux';\r\n                    divBuyItNowCollumLux.appendChild(divBuyItNowLuxHead);\r\n\r\n                    let divBuyItNowLuxPrice = document.createElement('div');\r\n                    divBuyItNowLuxPrice.className = 'buyitnow-collum__price';\r\n                    divBuyItNowLuxPrice.innerText = '$200';\r\n                    divBuyItNowCollumLux.appendChild(divBuyItNowLuxPrice);\r\n\r\n                    let olBuyItNowLuxList = document.createElement('ol');\r\n                    olBuyItNowLuxList.className = 'buyitnow-collum__list';\r\n                    divBuyItNowCollumLux.appendChild(olBuyItNowLuxList);\r\n\r\n                        let liBuyItNowLuxItemTexts = ['Porro officia cumque sint deleniti;',\r\n                                                            'Тemo facere rem vitae odit;',\r\n                                                            'Cum odio, iste quia doloribus autem;',\r\n                                                            'Aperiam nulla ea neque.',\r\n                                                            'Porro officia cumque sint deleniti;',\r\n                                                            'Тemo facere rem vitae odit;',\r\n                                                            'Cum odio, iste quia doloribus autem;',\r\n                                                            'Aperiam nulla ea neque.',\r\n                                                            'Porro officia cumque sint deleniti;',\r\n                                                            'Тemo facere rem vitae odit;',\r\n                                                            'Cum odio, iste quia doloribus autem;',\r\n                                                            'Aperiam nulla ea neque.'\r\n                                                            ];\r\n                        liBuyItNowLuxItemTexts.forEach(function(liBuyItNowLuxItemText){\r\n                            let liBuyItNowLuxItem = document.createElement('li');\r\n                            liBuyItNowLuxItem.className = 'buyitnow-list__item';\r\n                            liBuyItNowLuxItem.innerText = liBuyItNowLuxItemText;\r\n                            olBuyItNowLuxList.appendChild(liBuyItNowLuxItem);\r\n                        });\r\n                    let buttonBuyItNowLux = document.createElement('button');\r\n                    buttonBuyItNowLux.className = 'buyitnow-collum__button';\r\n                    buttonBuyItNowLux.innerText = 'BUY';\r\n                    divBuyItNowCollumLux.appendChild(buttonBuyItNowLux);        \r\n                    \r\n// 7. Contacts\r\n\r\nlet sectionContacts = document.querySelector('.contacts');\r\n    let articleContacts = document.createElement('article');\r\n    articleContacts.className = 'article_white';\r\n    sectionContacts.appendChild(articleContacts);\r\n        let h2Contacts = document.createElement('h2');\r\n        h2Contacts.className = 'article__title article__title_center';\r\n        h2Contacts.innerText = 'Contacts';\r\n        articleContacts.appendChild(h2Contacts);\r\n        let divContacts = document.createElement('div');\r\n        divContacts.className = 'contacts-article__block';\r\n        articleContacts.appendChild(divContacts);\r\n            let divContactsBlockInput = document.createElement('div');\r\n            divContactsBlockInput.className = 'contacts-block__input';\r\n            divContacts.appendChild(divContactsBlockInput);\r\n\r\n                let inputContactsYourName = document.createElement('input');\r\n                inputContactsYourName.className = 'contacts-input__field contacts-input__field_small';\r\n                inputContactsYourName.name = 'Your name';\r\n                inputContactsYourName.placeholder = 'Ваше имя:';\r\n                divContactsBlockInput.appendChild(inputContactsYourName);\r\n                \r\n                let inputContactsYourMail = document.createElement('input');\r\n                inputContactsYourMail.className = 'contacts-input__field contacts-input__field_small';\r\n                inputContactsYourMail.name = 'Your mail';\r\n                inputContactsYourMail.placeholder = 'Ваша почта:';\r\n                divContactsBlockInput.appendChild(inputContactsYourMail);\r\n\r\n                let inputContactsYourMessage = document.createElement('input');\r\n                inputContactsYourMessage.className = 'contacts-input__field contacts-input__field_big';\r\n                inputContactsYourMessage.name = 'Your message';\r\n                inputContactsYourMessage.placeholder = 'Ваше сообщение:';\r\n                divContactsBlockInput.appendChild(inputContactsYourMessage);\r\n                \r\n                let buttonContacts = document.createElement('button');\r\n                buttonContacts.className = 'contacts-input__button';\r\n                buttonContacts.innerText = 'Send';\r\n\r\n            let divContactsBlockInfo = document.createElement('div');\r\n            divContactsBlockInfo.className = 'contacts-block__info';\r\n            divContacts.appendChild(divContactsBlockInfo);\r\n                let ulContacts = document.createElement('ul');\r\n                ulContacts.className = 'contacts-info__list';\r\n                divContactsBlockInfo.appendChild(ulContacts);\r\n                    \r\n                    let liContactsTexts = [ 'Skype',\r\n                                            'ICQ',\r\n                                            'Email',\r\n                                            'Phone'\r\n                                        ];\r\n                    liContactsTexts.forEach(function(liContactsText){\r\n                        let liContacts = document.createElement('li');\r\n                        liContacts.className = 'contacts-info__item';\r\n                        // liContacts.innerText = '\"'+liContactsText+'\"';\r\n                        liContacts.innerHTML = '<img class=\"contacts-item__img\" src=\"assets/'+liContactsText+'_icon.png\" alt=\"'+liContactsText+'\">'+liContactsText+'';\r\n                        ulContacts.appendChild(liContacts);\r\n                            // let imgLiContacts = document.createElement('img');\r\n                            // imgLiContacts.className = 'contacts-item__img';\r\n                            // imgLiContacts.src = 'assets/'+liContactsText+'_icon.png';\r\n                            // imgLiContacts.alt = liContactsText;\r\n                            // liContacts.appendChild(imgLiContacts);\r\n                    });\r\n\r\n                let imgContacts = document.createElement('img');\r\n                imgContacts.src = 'assets/social_buttons.png';\r\n                imgContacts.alt = 'Social buttons';\r\n                divContactsBlockInfo.appendChild(imgContacts);\r\n\r\n// let sectionArticles = ['Product name', \r\n//                         'About your product', \r\n//                         'Dignity and pluses product',\r\n//                         'Screenshots',\r\n//                         'Reviews',\r\n//                         'Buy it now',\r\n//                         'Contacts'\r\n//                         ];\r\n\r\n// let articleClassNames = ['product-article article_white',\r\n//                             'about-article article_blue',\r\n//                             'article_blue',\r\n//                             'article_blue',\r\n//                             'reviews-article article_blue',\r\n//                             'article_blue',\r\n//                             'article_white'\r\n//                         ];\r\n    \r\n\r\n// через массив, попытка\r\n\r\n// let element = document.getElementsByClassName('section');\r\n// let parent = document.getElementsByTagName('section');\r\n// let elementArray = Array.from(element);\r\n// console.log(parent);\r\n// console.log(main.childNodes);\r\n\r\n// main.childNodes.forEach(function(){\r\n//     let article = document.createElement('article');\r\n//     main.children.appendChild(article);\r\n//     // console.log(articleClassName);\r\n// });\r\n\r\n// // articleCreate;\r\n// let articleCreate = main.forEach(function(articleClassName){\r\n//         let article = document.createElement('article');\r\n//         section.appendChild(article);\r\n//         article.className = articleClassName;\r\n// });\r\n\r\n            \r\n\n\n//# sourceURL=webpack:///./javascript/lesson_4/src/index2.js?");

/***/ })

/******/ });