import angular from 'angular';

export default angular.module('formatDateModule', [])

.filter('formatDate',function() {
    return function(value) {
        return  value.split('-').reverse().join('/')
    }
})

.name;
