# Отзыв на тестовое задание

#### IDE

Для написания кода крайне желательно вместо редакторов использовать IDE. Во-первых, она делает код чище и аккуратнее,
во-вторых, на лету находит опечатки и мелкие ошибки, в-третьих - это просто удобнее.

Все изменения до этого тега - сделаны за пару минут и при этом код стал значительно приятнее.

https://www.jetbrains.com/webstorm/

#### По JS 67117a69

- ``var`` уже не используется, их принято заменять на ``const`` и ``let`` https://learn.javascript.ru/let-const

- ``function(){}`` допустимы, но гораздо удобнее использовать стелочные функции ``()=>{}``. 
У них есть отличия, лучше прочитать подробнее: https://learn.javascript.ru/arrow-functions

#### По HTML e390726b

- viewport - для правильного отображения на мобилках https://developer.mozilla.org/ru/docs/Mozilla/Mobile/Viewport_meta_tag

#### Меню 7065d30d

Переделал меню, теперь одно и тоже меню по разному отображается на мобилках и десктопах.

#### ToDo

1. Console
    - Where: http://ixrevo.me/mac-os-x-terminal/ http://ixrevo.me/navigation-in-commandline/
    - Why: консоль - не смотря на то что выглядит страшно, на деле упрощает весь процесс. Ну и необходима
    для дальнейших этапов. 

1. Git
    - [Установка](https://git-scm.com/book/ru/v1/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5-%D0%A3%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0-Git#%D0%A3%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0-%D0%BD%D0%B0-Mac)
    - [Первые две главы](https://git-scm.com/book/ru/v2)
    - Checkpoint: склонировать этот репозиторий (git clone) и залить его на [GitHub](https://github.com)
    - Hint: ``git remote rm origin`` поможет удалить ссылку на текущий репозиторий из проекта
    - Why: Git практически стандарт работы над проектами, особенно совместно с кем-то или в компании.
    Позволяет нескольким людям работать с одной кодовой базой и отслеживать / синхронизировать изменения.
    Так же с помощью ветвей и тегов можно контролировать процесс разработки и стадии проекта.
    
1. NodeJs
    - [Установка](https://nodejs.org/en/download/)
    - Why: Не смотря на то, что NodeJS язык программирования, он ещё и среда для выполнения различных 
    штук необходимых верстальщику. Он нужен, даже если пока нет желания уходить в программирование.
    
1. Boilerplate
    - [Установка](https://github.com/wbkd/webpack-starter)
    - Checkpoint: сколинировать и запустить
    - Hint: ``npm i`` после клонирования
    - Why: в современной верстке много разных штук, самостоятельная настройка всего этого - не самая
    тривиальная задача и на начальном этапе лишь всё усложнит. В boilerplate уже собраны и настроены
    базовые необходимые инструменты, с которыми можно просто начать работать.
    - А ещё, в комплекте идет livereload - все изменения сразу будут видны в браузере, без перезагрузок )

1. SASS
    - Where: https://sass-scss.ru/
    - Hint: уже есть в Boilerplate
    - Why: SASS - это как CSS, только лучше. Позволяет разбивать стили на части, задавать общие переменные
    (к примеру, стандартный набор цветов), стили и многое другое. В результате 400 строк CSS кода
    могут прерватиться в несколько небольших sass-файлов, с которыми будет гораздо удобнее работать и изменять
 
 p.s. Все эти пункты вместе - довольно сложно и явно не на один день, по началу может вызвать боль, страдание
 и непонимание зачем. Понимание того, зачем всё это нужно и почему используется в любом нормальном проекте
 придет чуть позже. Вместе с непониманием того, как некоторые люди умудряются без этого обходиться.
 
 p.p.s А если чуть позже добавить к этому Vue или React, то получится junior frontend developer, 
 а может даже почти middle )
