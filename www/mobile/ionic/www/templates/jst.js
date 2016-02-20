this["JST"] = this["JST"] || {};

this["JST"]["add.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div data-ng-controller="add">\n  <ion-view view-title="{{dic(\'Добавить\')}}">\n    <ion-content overflow-scroll="true" padding="true" class="has-header background" data-ng-hide="loading.visible">\n        <div class="list card">\n            <div class="item item-divider">Мне нужно:</div>\n            <div class="item item-body">\n                <form class="list">\n                    <label class="item item-input">\n                        <input type="text" placeholder="Сделать уборку квартиры">\n                    </label>\n                    <label class="item item-input">\n                        <span class="input-label">\n                            <br>\n                            <br>\n                            <br>\n                            <br>\n                        </span><textarea placeholder="Детально опишите что необходимо сделать"> </textarea>\n                    </label>\n                </form>\n            </div>\n        </div>\n        <div class="list card">\n            <div class="item item-divider">Когда нужно:</div>\n            <div class="item item-body">\n                <div class="button-bar">\n                    <button class="button button-stable button-block  icon ion-ios-clock-outline"></button>\n                    <button class="button button-stable button-block  icon ion-ios-calendar-outline"></button>\n                </div>\n            </div>\n        </div>\n        <div class="list card">\n            <div class="item item-divider">Где нужно</div>\n            <div class="item item-body">\n                <img src="img/6mK56yOfQhqjvrKEUZsM_xfMTsijWSGOXXyMaNgrg_Screen Shot 2015-12-30 at 17.58.43.png" width="100%" height="auto" style="width: 100%; height: auto;">\n            </div>\n        </div>\n        <div class="list card">\n            <div class="item item-divider">Оплата</div>\n            <div class="item item-body">\n                <form class="list">\n                    <ion-toggle toggle-class="toggle-positive">Пусть предложат</ion-toggle>\n                    <ion-item class="range range-positive">\n                        <input type="range" value="800" min="50" max="3000">\n                    </ion-item>\n                </form>\n            </div>\n        </div>\n        <a href="#/navi/aroundme" class="button button-positive button-block ">Опубликовать</a>\n        <form class="list"></form>\n        <form class="list"></form>\n    </ion-content>\n  </ion-view>\n</div>  ';}return __p};

this["JST"]["deal.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<ion-view data-ng-controller="deal" title="Сделка">\n    <ion-content overflow-scroll="true" padding="true" class="has-header background">\n        <ion-list>\n            <ion-item class="item-thumbnail-left">\n                <img src="images/s40DaHVcTVGha2oIV7MV_mainnails.jpg">\n                <h2>Александр\n                    <br>Родионович\n                    <br>Бородач</h2>\n                <p>Рейтинг: ®®®®®</p>\n            </ion-item>\n        </ion-list>\n        <div class="spacer" style="width: 283px; height: 5px;"></div>\n        <ion-list>\n            <ion-item>Готов оказать услугу за 500 руб</ion-item>\n        </ion-list>\n        <div class="button-bar">\n            <button class="button button-balanced button-block ">Принять</button>\n            <button class="button button-assertive button-block ">Отклонить</button>\n        </div>\n    </ion-content>\n</ion-view>';}return __p};

this["JST"]["detail.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div data-ng-controller="detail">  \n  \n  <script id="detail-image.html" type="text/ng-template">\n    <div class="modal image-modal transparent" data-ng-click="hideImage()">\n      <ion-pane class="transparent">\n        <img data-ng-src="{{job.image}}" class="fullscreen-image"/>\n      </ion-pane>\n    </div>\n  </script>\n  \n  <ion-view view-title="{{dic(\'Детали\')}}">\n    \n    <ion-content padding="true" overflow-scroll="true" \n                 has-bouncing="true"\n                 class="has-header">\n      \n      <ion-refresher on-refresh="refresh()"></ion-refresher>\n      \n      <ion-list>\n        <div data-ng-show="job">\n          \n          <ion-item>\n            <img src="{{job.image}}" data-ng-click="showImage()">\n            <h2>{{job.title}}</h2>\n            <p>{{job.desc}}</p>\n            <p>{{job.id}}</p>\n          </ion-item>\n          \n          <ion-item class="item-divider">{{dic(\'Цена\')}}: {{job.cost}} {{dic(\'руб.\')}}</ion-item>\n          <ion-item class="item-divider">До конца публикации: 1:42 мин</ion-item>\n          <ion-item class="item-divider">Адрес: Мытищи, Олимпийский<br>пр-кт 13/2</ion-item>\n           \n          <form class="list">\n            <ion-item class="item-divider">Нужен: Мужчина</ion-item>\n            <ion-item class="item-divider">Возраст: Не важно</ion-item>\n            <div class="button-bar">\n                <button class="button button-balanced button-block button-small">Откликнуться по\n                    <br>текущей цене:\n                    <br>450 руб</button>\n                <button class="button button-assertive button-block button-small">Предложить свою\n                    <br>цену:\n                    <br>400 руб</button>\n            </div>\n          </form>\n           \n        </div>  \n      </ion-list>\n\n    </ion-content>\n  </ion-view>\n  \n</div>  ';}return __p};

this["JST"]["favorites.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div data-ng-controller="favorites">\n  \n  <ion-view view-title="{{dic(\'Избранное\')}}">\n    \n    <ion-content padding="true" overflow-scroll="true" \n                 has-bouncing="true"\n                 class="has-header">\n      \n      <ion-refresher on-refresh="refresh()"></ion-refresher>\n      \n      <ion-list>\n        <div collection-repeat="job in service.data" item-height="120" item-width="95%">\n          <ion-item class="animated fadeIn item-thumbnail-left"\n                    type="item-text-wrap" href="#/home/favorites/{{job.id}}">\n            \n            <img data-ng-src="{{job.image}}">\n            <h2>{{job.title}}</h2>\n            <p>{{job.desc}}</p>\n            <p>{{dic(\'Плачу\')}} {{job.cost}} {{dic(\'руб.\')}}</p>\n            <p>{{job.id}}</p>\n          </ion-item>\n          <div class="spacer" style="width: 100%; height: 8px;"></div>\n        </div>\n        \n      </ion-list>\n      \n      <ion-infinite-scroll data-ng-if="canMore()" on-infinite="more()" distance="1%"></ion-infinite-scroll>\n      \n    </ion-content>\n  </ion-view>\n</div>  ';}return __p};

this["JST"]["filter.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<ion-view data-ng-controller="filter" title="Фильтр">\n    <ion-content overflow-scroll="true" padding="true" class="has-header background">\n        <form class="list">\n            <button class="button button-stable button-block  icon-left ion-android-pin">Мое местоположение</button>\n            <ion-item class="range range-balanced">Радиус\n                <input type="range" value="5" min="0" max="10">\n            </ion-item>\n            <div class="spacer" style="width: 283px; height: 10px;"></div>\n            <label class="item item-input">\n                <span class="input-label">Цена</span>\n                <input type="number" placeholder="От             До">\n            </label>\n            <div class="button-bar">\n                <button class="button button-positive button-block  icon-left ion-male">Муж</button>\n                <button class="button button-stable button-block  icon-right ion-female">Жен</button>\n            </div>\n            <ion-list>\n                <ion-item>Сортировка</ion-item>\n                <ion-checkbox>По удаленности</ion-checkbox>\n                <ion-checkbox>По стоимости</ion-checkbox>\n                <ion-checkbox>По дате публикации</ion-checkbox>\n            </ion-list>\n        </form>\n        <form class="list"></form>\n    </ion-content>\n</ion-view>';}return __p};

this["JST"]["history.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<ion-view data-ng-controller="history" title="История">\n    <ion-content overflow-scroll="true" padding="true" scroll="false" class="has-header background">\n        <form class="list"></form>\n        <button class="button button-dark button-block  icon-left ion-android-radio-button-on">Вынести рояль 500 руб</button>\n        <button class="button button-balanced button-block  icon-left ion-ios-plus-outline">Сварить борщ 300 руб</button>\n        <button class="button button-assertive button-block  icon-left ion-ios-minus-outline">Отвезти документы 500 руб</button>\n        <button class="button button-assertive button-block  icon-left ion-ios-minus-outline">Установить Windows 600 руб</button>\n        <button class="button button-balanced button-block  icon-left ion-ios-plus-outline">Занести рояль 1000 руб</button>\n    </ion-content>\n</ion-view>';}return __p};

this["JST"]["home.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div data-ng-controller="home">\n  <ion-tabs class="tabs-icon-top tabs-color-active-positive">\n    <ion-tab title="{{dic(\'Поиск\')}}" icon-off="ion-ios-location-outline" icon-on="ion-ios-location" href="#/home/search">\n      <ion-nav-view name="home-search"></ion-nav-view>\n    </ion-tab>\n    <ion-tab title="{{dic(\'Избранное\')}}" icon-off="ion-ios-star-outline" icon-on="ion-ios-star" href="#/home/favorites">\n      <ion-nav-view name="home-favorites"></ion-nav-view>\n    </ion-tab>\n    <ion-tab title="{{dic(\'Добавить\')}}" icon-off="ion-android-add" icon-on="ion-android-add-circle" href="#/home/add">\n      <ion-nav-view name="home-add"></ion-nav-view>\n    </ion-tab>\n    <ion-tab title="{{dic(\'Профиль\')}}" icon-off="ion-ios-person-outline" icon-on="ion-ios-person" href="#/home/profile">\n      <ion-nav-view name="home-profile"></ion-nav-view>\n    </ion-tab>\n  </ion-tabs>\n</div>  ';}return __p};

this["JST"]["loader.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div class="loader">\n  <ion-spinner></ion-spinner>\n</div>  ';}return __p};

this["JST"]["profile.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div data-ng-controller="profile"> \n  \n  <script id="profile-image.html" type="text/ng-template">\n    <div class="modal image-modal transparent" data-ng-click="hideImage()">\n      <ion-pane class="transparent">\n        <img data-ng-src="{{user.image}}" class="fullscreen-image"/>\n      </ion-pane>\n    </div>\n  </script>\n  \n  <ion-view view-title="{{dic(\'Профиль\')}}">\n    \n    <ion-content padding="true" overflow-scroll="true"\n                 class="has-header">\n      \n      <ion-refresher on-refresh="refresh()"></ion-refresher>\n      \n      <ion-list>\n        \n        <div data-ng-hide="user">\n          <h1>Регистрация</h1>\n        </div>\n        \n        <div data-ng-show="user">\n          \n          <ion-item class="item-avatar-left">\n              <img src="{{user.image}}" data-ng-click="showImage()">\n              <h2>{{user.name}}</h2>\n              <p>{{user.surname}}</p>\n              <p>{{user.patronymic}}</p>\n          </ion-item>\n          \n          <ion-item class="item-divider">Возраст: 39 лет</ion-item>\n          <ion-item class="item-divider">{{dic(\'Тел\')}}: {{user.phone}}</ion-item>\n          <ion-item class="item-divider">{{dic(\'E-mail\')}}: {{user.email}}</ion-item>\n          \n          <div class="button-bar">\n            <button class="button button-stable button-block ">Сохранить</button>\n            <button class="button button-stable button-block ">Изменить</button>\n          </div>\n          \n        </div>  \n        \n      </ion-list>\n      \n    </ion-content>\n    \n  </ion-view>\n</div>';}return __p};

this["JST"]["publication.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<ion-view data-ng-controller="publication" title="Публикация">\n    <ion-content overflow-scroll="true" padding="true" class="has-header background">\n        <form class="list">\n            <label class="item item-input">\n                <span class="input-label">Заголовок:</span>\n                <input type="text" placeholder="">\n            </label>\n            <div class="spacer" style="width: 283px; height: 5px;"></div>\n            <label class="item item-input">\n                <span class="input-label">Текст объявления:</span><textarea placeholder=""> </textarea>\n            </label>\n            <div class="spacer" style="width: 283px; height: 5px;"></div>\n            <label class="item item-input">\n                <span class="input-label">Цена:</span>\n                <input type="number" placeholder="">\n            </label>\n            <div class="button-bar">\n                <button class="button button-stable button-block ">М</button>\n                <button class="button button-stable button-block ">Ж</button>\n            </div>\n            <ion-item class="range range-positive">Возраст\n                <input type="range" value="25" min="12" max="80">\n            </ion-item>\n            <div class="spacer" style="width: 283px; height: 5px;"></div>\n            <label class="item item-input">\n                <span class="input-label">Время публикации:</span>\n                <input type="number" placeholder="">\n            </label>\n            <div class="spacer" style="width: 283px; height: 4px;"></div>\n            <label class="item item-input">\n                <span class="input-label">Радиус:</span>\n                <input type="number" placeholder="">\n            </label>\n            <button class="button button-stable button-block  icon-left ion-android-pin">Мое местоположение</button>\n            <button class="button button-stable button-block ">Опубликовать</button>\n        </form>\n    </ion-content>\n</ion-view>';}return __p};

this["JST"]["registration.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<ion-view data-ng-controller="registration" title="Регистрация">\n    <ion-content overflow-scroll="true" padding="true" class="has-header background">\n        <form class="list">\n            <label class="item item-input">\n                <span class="input-label">Имя:</span>\n                <input type="text" placeholder="">\n            </label>\n            <div class="button-bar">\n                <button class="button button-stable button-block  icon-left ion-male">Мужчина</button>\n                <button class="button button-stable button-block  icon-right ion-female">Женщина</button>\n            </div>\n            <label class="item item-input">\n                <span class="input-label">Возраст:</span>\n                <input type="number" placeholder="">\n            </label>\n            <button class="button button-stable button-block ">Отправить СМС на номер\n                <br>+7 (985) 685 06 58</button>\n            <label class="item item-input">\n                <span class="input-label">Ввести код подтверждения:</span>\n                <input type="number" placeholder="">\n            </label>\n            <button class="button button-stable button-block ">Зарегистрироваться</button>\n        </form>\n    </ion-content>\n</ion-view>';}return __p};

this["JST"]["search.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div data-ng-controller="search">\n  \n  <ion-view view-title="{{dic(\'Поиск\')}}">\n  \n    <ion-nav-buttons side="right">\n      <button class="button button-icon ion-search"\n              data-ng-click="showFilterBar()"></button>\n    </ion-nav-buttons>    \n    \n    <!--ion-header-bar class="bar-light bar-subheader bar-search item-input-inset">\n      <div class="item-input-wrapper textbox-search">\n        <i class="icon ion-search placeholder-icon"></i>\n        <input type="search" placeholder="{{dic(\'Строка поиска\')}}" \n               data-ng-keypress="$event.charCode === 13 && search()"\n               data-ng-model="string">\n        <i class="icon ion-close-round placeholder-icon" data-ng-if="string.length" data-ng-click="clear()"></i>\n      </div>\n      <button type="submit" class="button button-small button-stable" \n              data-ng-click="search()"\n              data-ng-disabled="!string.length">{{dic(\'Найти\')}}</button>\n    </ion-header-bar-->    \n    \n    <ion-content padding="true" overflow-scroll="true"\n                 has-bouncing="true"\n                 class="has-header">\n      \n      <ion-refresher on-refresh="refresh()"></ion-refresher>\n      \n      <ion-list>\n        \n        <div collection-repeat="job in service.data" item-height="120" item-width="95%" data-ng-hide="loader.visible">\n          <ion-item class="animated fadeIn item-thumbnail-left"\n                    type="item-text-wrap" href="#/home/search/{{job.id}}">\n            \n            <img src="{{job.image}}">\n            <h2>{{job.title}}</h2>\n            <p>{{job.desc}}</p>\n            <p>{{dic(\'Плачу\')}} {{job.cost}} {{dic(\'руб.\')}}</p>\n            <p>{{job.id}}</p>\n          </ion-item>\n          <div class="spacer" style="width: 100%; height: 8px;"></div>\n        </div>\n        \n      </ion-list>\n      \n      <ion-infinite-scroll data-ng-if="canMore()" on-infinite="more()" distance="1%"></ion-infinite-scroll>\n      \n    </ion-content>\n  </ion-view>\n</div>';}return __p};

this["JST"]["stats.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<ion-view data-ng-controller="stats" title="Статистика">\n    <ion-content overflow-scroll="true" padding="true" scroll="false" class="has-header background">\n        <div style="text-align:center;">\n            <img src="images/s40DaHVcTVGha2oIV7MV_mainnails.jpg" width="100%" height="auto">\n        </div>\n        <ion-list>\n            <ion-item class="item-divider">Сейчас в вашем радиусе:\n                <br>- размещено 50 объявлений на\n                <br>общую сумму 25 000 рублей.\n                <br>- cегодня было закрыто 15\n                <br>объявлений на сумму 7500\n                <br>рублей.</ion-item>\n        </ion-list>\n        <div class="spacer" style="width: 300px; height: 65px;"></div>\n        <div class="button-bar">\n            <button class="button button-stable button-block  icon-left ion-chevron-left">Найти</button>\n            <button class="button button-stable button-block  icon-right ion-chevron-right">Разместить</button>\n        </div>\n    </ion-content>\n</ion-view>';}return __p};

this["JST"]["test.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div data-ng-controller="test">\n  <ion-view view-title="{{dic(\'Поиск\')}}">\n    <ion-content \n                 data-ng-hide="loading.visible">\n        <ion-list>\n          <ion-item class="item-thumbnail-left" data-ng-repeat="d in data" data-ng-click="details(d)">\n            <img data-ng-src="{{d.image}}">\n            <h2>{{d.title}}</h2>\n            <p>{{d.desc}}</p>\n            <p>{{dic(\'Плачу\')}} {{d.cost}} {{dic(\'руб.\')}}</p>\n            <p>{{d.id}}</p>\n          </ion-item>\n        </ion-list>\n    </ion-content>\n  </ion-view>\n</div>';}return __p};