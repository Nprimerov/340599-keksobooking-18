var avatarArray = ['img/avatars/user01.png', 'img/avatars/user02.png', 'img/avatars/user03.png', 'img/avatars/user04.png', 'img/avatars/user05.png', 'img/avatars/user06.png', 'img/avatars/user07.png', 'img/avatars/user08.png'];
var typeArray = ['palace', 'flat', 'house', 'bungalo'];
var checkinArray = ['12:00', '13:00', '14:00'];
var checkoutArray = ['12:00', '13:00', '14:00']
var featuresArray = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var photosArray = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
var propertyArray = [];
var pinMinY = 130;
var pinMaxY = 630;
var pinMinX = 0;
var pinMaxX = 1200;
var pinHeight = 70;
var pinWidth = 50;
var getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

var arrayObject = function () {
  for (var i = 0; i < 8; i++) {
    var property = {
      'author': {
        avatar: avatarArray[Math.floor(Math.random() * avatarArray.length)]
      },
      'offer': {
        'title': 'Объявление',
        'address': "600, 350",
        'price': 50000,
        'type': typeArray[Math.floor(Math.random() * typeArray.length)],
        'rooms': 3,
        'guests': 3,
        'checkin': checkinArray[Math.floor(Math.random() * checkinArray.length)],
        'checkout': checkoutArray[Math.floor(Math.random() * checkoutArray.length)],
        'features': featuresArray[Math.floor(Math.random() * featuresArray.length)],
        'description': 'строка с описанием',
        'photos': photosArray[Math.floor(Math.random() * photosArray.length)]
      },
      'location': {
        'x': getRandomInt(pinMinX + pinWidth, pinMaxX - pinWidth),
        'y': getRandomInt(pinMinY + pinHeight, pinMaxY - pinHeight)
      }
    };
    propertyArray.push(property);
  };
};
arrayObject();

var renderItem = function (pinData) {
  var pinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');
  var pinElement = pinTemplate.cloneNode(true);
  pinElement.querySelector('img').setAttribute('src', pinData.author.avatar);
  pinElement.querySelector('img').setAttribute('alt', pinData.author.avatar);
  pinElement.setAttribute('style', 'left: ' + pinData.location.x + 'px; top: ' + pinData.location.y + 'px;');
  pinElement

  return pinElement;
};

var creatonDomElements = function () {
  var pinContainer = document.querySelector('.map__pins');
  for (var i = 0; i < propertyArray.length; i++) {
    pinContainer.appendChild(renderItem(propertyArray[i]));
  };
};
creatonDomElements();

var renderCard = function (renderCardArray) {
  var cardTemplate = document.querySelector('#card').content.querySelector('.map__card');
  var cardElement = cardTemplate.cloneNode(true);
  var typeNames = {
   'placeName':{
      type: 'palace',
      name: 'Дворец'
    },
    'flatName':{
      type: 'flat',
      name: 'Квартира'
    },
    'houseName':{
      type: 'house',
      name: 'Дом'
    },
    'bungaloName':{
      type: 'bungalo',
      name: 'Бунгало'
    }
  };

  cardElement.querySelector('h3').textContent = renderCardArray.offer.title;
  cardElement.querySelector('.popup__text--address').textContent = renderCardArray.offer.address;
  cardElement.querySelector('.popup__text--price').textContent = renderCardArray.offer.price + ' ₽/ночь.';
  cardElement.querySelector('.popup__text--capacity').textContent = renderCardArray.offer.rooms + ' комнаты для ' + renderCardArray.offer.guests + ' гостей';
  cardElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + cardElement.offer.checkin + ' , выезд до ' + cardElement.offer.checkout;
  cardElement.querySelector('.popup__photos').src = renderCardArray.author.avatar;
  cardElement.querySelector('.popup__description').textContent = renderCardArray.offer.description;
  cardElement.querySelector('.popup__photos').src = renderCardArray.offer.photos;
  cardElement.querySelector('.popup__type').textContent = renderCardArray.offer.type;

  return cardElement;

}

var creatonDomCards = function () {
  var cardContainer = document.querySelector('.map');
  for (var i = 0; i < propertyArray.length; i++) {
    cardContainer.appendChild(renderCard(propertyArray[0]));
  };
}
creatonDomCards();
