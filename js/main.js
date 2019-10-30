var avatarArray = ['img/avatars/user01', 'img/avatars/user02', 'img/avatars/user03', 'img/avatars/user04', 'img/avatars/user05', 'img/avatars/user06', 'img/avatars/user07', 'img/avatars/user08'];
var typeArray = ['palace', 'flat', 'house', 'bungalo'];
var checkinArray = ['12:00', '13:00', '14:00'];
var checkoutArray = ['12:00', '13:00', '14:00']
var featuresArray = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var photosArray = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
var propertyArray = [];
var minY = 130;
var maxY = 630;
var random = Math.floor(Math.random() * (maxY - minY + 1)) + minY;
featuresArray.length = Math.round(Math.random()* 6 + 1);

var arrayObject = function (property) {
  for (var i; i <= 8; i++) {
   var property = {
      'author': {
        'avatar': avatarArray[Math.round(Math.random())]
      },

      'offer': {
        'title': 'Объявление',
        'address': "600, 350",
        'price': 50000,
        'type': typeArray[Math.round(Math.random())],
        'rooms': 3,
        'guests': 3,
        'checkin': checkinArray[Math.round(Math.random())],
        'checkout': checkoutArray[Math.round(Math.random())],
        'features': featuresArray,
        'description': 'строка с описанием',
        'photos': photosArray[Math.round(Math.random())]
      },

      'location': {
        'x': 80,
        'y': random
      }
    };
  } if (i <= 8) {
    propertyArray[i] = property;
  };
};

var maps = document.querySelector('map--faded');
mapsSection.classList.remove('map--faded');
