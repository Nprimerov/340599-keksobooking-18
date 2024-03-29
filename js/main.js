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

var arrayObject = function (property) {
  for (var i = 0; i < 8; i++) {
    var property = {
      'author': {
        'avatar': avatarArray[Math.floor(Math.random() * avatarArray.length)]
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
var maps = document.querySelector('.map');
maps.classList.remove('map--faded');
arrayObject();

var renderItem = function (pinData) {
  var pinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');
  var pinElement = pinTemplate.cloneNode(true);
  pinElement.querySelector('img').setAttribute('src', pinData.author.avatar);
  pinElement.querySelector('img').setAttribute('alt', pinData.author.avatar);
  pinElement.setAttribute('style', 'left: ' + pinData.location.x + 'px; top: ' + pinData.location.y + 'px;');

  return pinElement;
};

var creatonDomElements = function () {
  var pinContainer = document.querySelector('.map__pins');
  for (var i = 0; i < propertyArray.length; i++) {
    pinContainer.appendChild(renderItem(propertyArray[i]));
  };
};
creatonDomElements();
