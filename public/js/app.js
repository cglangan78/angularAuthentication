angular.module('carsApp', ['ngAnimate', 'app.routes', 'mainCtrl', 'userCtrl', 'userService','authService', 'carsCtrl','cars', 'carsFactory'])

// application configuration to integrate token into requests
.config(function($httpProvider) {


	// attach our auth interceptor to the http requests
    $httpProvider.interceptors.push('AuthInterceptor')

});
