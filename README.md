# my_first_project

Привет мир!
=====================

![screenshot of sample](https://media.giphy.com/media/xsE65jaPsUKUo/giphy.gif)

**Меня зовут Стас, здесь я буду учиться Веб-верстке.**
----------------------------------------------------------------------

В данном репозитории я выполняю домашние задания по курсам KREATIVE IT SCHOOL.

_Репозиторий состоит из нескольких веток, каждая ветка соответвует определенному занятию и заданию._


`Немного о моём проекте:`

Простенькая страничка имеющая 7 блоков:
1. Product name;
2. About product;
3. Dignity and pluses product;
4. Screenshots;
5. Reviews;
6. Buy it now;
7. Contacts.

Блок ***Product name*** - содержит информацию о продукте.

Блок ***About product*** - описание продукта.

Блок ***Dignity and pluses product*** - достоинства и плюсы продукта.

Блок ***Screenshots*** - фотографии продукта с описанием.

Блок ***Reviews*** - отзывы покупателей.

Блок ***Buy it now*** - различные варианты покупки продукта.

Блок ***Contacts*** - блок для связи и список контактов производителя.

### Файловая структура страницы не сложная:
    \my_first_project\assets
медиафайлы;

    \my_first_project\css
каталог скомпилированных стилей;

    \my_first_project\scss
sass файлы;

    \my_first_project\index.html
основаня html страница со всем содержимым.

При написании данной страницы использовалась БЭМ методология:

```html
<section class="section about section_white">
    <article class="about-article article_blue">
        <h2 class="about-article__title">About your product</h2>
        <p class="about-article__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis facilis fuga, illo at. Natus eos,         eligendi illum rerum omnis porro ex, magni, explicabo veniam incidunt in quam sapiente ut ipsum.</p>
        <p class="about-article__text">Pariatur iure ab sunt nesciunt, quibusdam odio iste cumque itaque, ipsa vel exercitationem ullam         quos aut nostrum cupiditate fuga quaerat quam animi dolores. Sequi itaque, unde perferendis nemo debitis dolor.</p>                 </article>
    <div><img class="about__img" src="assets/blue_square.png" alt="Blue square"></div>
</section>
```

Так же она адаптирована под различные экраны устройств начиная с 480pх:

```scss
@media only screen and (min-width: 1281px) {
    
    .profile {
        width: 1280px;
    }

    .footer {
        width: 1280px;
    }
}
```

#### Приветствуется любая критика, рекомендации, советы! =)

> Ex pluribus unum
