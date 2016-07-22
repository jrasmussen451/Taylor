angular.module('OrderCloud-FixedFooter', []);

angular.module('OrderCloud-FixedFooter')
    .directive('fixedfooter', fixedfooter)
    .directive('orderbuttons', orderbuttons)
    .controller('FixedFooterCtrl', FixedFooterCtrl)
;

function fixedfooter() {
    var directive = {
        restrict: 'E',
        template: template,
        controller: 'FixedFooterCtrl'
    };
    return directive;

    function template() {
        return [
            '<style>',
            'body {margin-bottom:0;}',
            '.fixed-footer-bottom div {color: #FFF; margin:15px 0 10px 0;}',
            '.fixed-footer-bottom div.col-md-6 {margin-left: auto; margin-right: auto;}',
            '.fixed-footer-bottom div.col-md-6.pull-left {padding-right: 15px;}',
            '.fixed-footer-bottom div.col-md-6.pull-right {padding-left: 15px;}',
            '.fixed-footer-bottom .pull-left a {font-size:14px;}',
            '.fixed-footer-bottom {max-width:1150px; margin:0 auto; padding:0;};',
            '.copyright-view {margin:0; padding-bottom:150px !important;}',
            '@media (max-width:767px) { .copyright-view {height: 300px !important; margin-top:25px; padding-top:0;} }',
            '@media (max-width:767px) { .fixed-footer-bottom div.col-md-6.pull-left {padding-left: 15px;} }',
            '@media (max-width:767px) { . }',
            '</style>',
            '<nav class="navbar navbar-default">',
            '<div class="fixed-footer-bottom">',
            '<div class="col-xs-12">',
            '<div class="col-xs-12 col-md-4 pull-left text-left">',
            '<p class="lead"><i class="fa fa-link"></i> Links</p>',
            '<div class="link-list">',
            '<a href="admin"><i class="fa fa-chevron-right"></i> My Account</a>',
            '<securitymodal></securitymodal>',
            '<termsmodal></termsmodal>',
            '</div>',
            '</div>',
            '<div class="col-xs-12 col-md-4 pull-right">',
            '<p class="lead"><i class="fa fa-pencil"></i> Contact Us</p>',
            '<div class="col-xs-12">',
            '<p>For technical assistance:</p>',
            '<p class="m-l-1">Hours of Assistance: 8am to 8pm EST M-F</p>',
            '<p class="m-l-1"><i class="fa fa-envelope-square"></i>&nbsp;<a href="mailto:TAC@taylorcommunications.com">',
            'TAC@taylorcommunications.com</a></p>',
            '<p class="m-l-1"><i class="fa fa-phone-square"></i>&nbsp;<a href="tel:877-885-9500">877-885-9500</a> Option 2</p>',
            '<p>For product and order entry assistance:</p>',
            '<p class="m-l-1"><i class="fa fa-phone-square"></i>&nbsp;Verizon Taylor Communications Help Desk at <a href="tel:866-256-0200">866-256-0200</a></p>',
            '<p class="m-l-1"><i class="fa fa-envelope-square"></i>&nbsp;<a href="mailto:verizonASC@taylorcommunications.com">verizonASC@taylorcommunications.com</a></p>',
            '</div>',
            '</div>',
            '<div class="col-xs-12 col-md-4 pull-right">',
            '<p class="lead"><i class="fa fa-truck"></i> Shipping</p>',
            '<div class="col-xs-12">',
            '<p><b>Shipping Cut-Off Times</b></p>',
            '<p>Orders placed by the times listed below will be shipped same day</p>',
            '<p>2:00PM EST / 1:00PM CST</p>',
            '<p>POP & Fixture orders </p>',
            '<p>1:00AM PST / 12:00PM MST</p>',
            '<p>Collateral Orders </p>',
            '<p>2:00PM PST / 3:00PM MST</p>',
            '</div>',
            '</div>',
            '</div>',
            '</div>',
            '</nav>'
        ].join('');
    }
}

function orderbuttons() {
    var directive = {
        restrict: 'E',
        template: template,
        link: function(scope, element, attrs) {
            attrs.$observe('continue', function(val) {
                scope.continue = val == 'true' ? true : false;
            });

            attrs.$observe('view', function(val) {
                if (val) {
                    var view;
                    switch (val) {
                        case 'cart':
                            view = 'cart'
                            break;
                        case 'checkout':
                            view = 'checkout';
                            break;
                        default:
                            break;
                    }
                    scope.view = 'partials/controls/' + (view == 'cart' ? 'cartButtons.html' : 'checkoutButtons.html');
                }
            });
        }
    };
    return directive;

    function template() {
        return [
            '<style>',
            'orderbuttons {width:100%; margin:0 auto;}',
            '.navbar-fixed-bottom {position:relative;}',
            'orderbuttons .btn {border-radius:0; width:100%; padding:0; }',
            '@media (max-width:767px) { orderbuttons .btn {margin:5px 0;} }',
            '</style>',
            '<div ng-include="view"></div>'
        ].join('');
    }
}

FixedFooterCtrl.$inject = ['$scope', '$location'];
function FixedFooterCtrl($scope, $location) {

    var d = new Date();
    $scope.year = d.getFullYear();

    /*below functions from NavCtrl.js in case navigation is used in the footer*/
    $scope.isActive = function(path) {
        var cur_path = $location.path().replace('/', '');
        var result = false;

        if (path instanceof Array) {
            angular.forEach(path, function(p) {
                if (p == cur_path && !result)
                    result = true;
            });
        }
        else {
            if (cur_path == path)
                result = true;
        }
        return result;
    };

    //extension of above isActive in path
    $scope.isInPath = function(path) {
        var cur_path = $location.path().replace('/', '');
        var result = false;

        if(cur_path.indexOf(path) > -1) {
            result = true;
        }
        else {
            result = false;
        }
        return result;
    };
}