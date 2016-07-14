angular.module('OrderCloud-ProductModal', []);

angular.module('OrderCloud-ProductModal')
    .directive('productmodal', productmodal)
    .controller('ProductModalCtrl', ProductModalCtrl)
;

function productmodal() {
    var directive = {
        restrict: 'E',
        template: template,
        controller: 'ProductModalCtrl'
    };
    return directive;

    function template() {
        return [
            '<style>',
            '.link-wrapper.panel-lineitem { padding:0; }',
            '.link-wrapper .line-item-link { padding:0; }',
            '.link-wrapper .line-item-link h3 { margin:0; }',
            '</style>',
            '<div class="link-wrapper panel-lineitem">',
            '<a class="line-item-link lightbox" ng-click="openProductModal(500)">',
            '<h3 class="text-primary">',
            '<i ng-show="!item.KitIsInvalid" class="fa fa-edit"></i>',
            '<i ng-show="item.KitIsInvalid" class="fa fa-exclamation-triangle"></i>',
            '{{item.ProductIDText}}',
            '</h3>',
            '<p>{{item.Product.Name}}</p>',
            '</a>',
            '</div>'
        ].join('');
    }
}

ProductModalCtrl.$inject = ['$scope', '$modal', '$log'];
function ProductModalCtrl($scope, $modal, $log) {

    $scope.item = $scope.item;
    $scope.animationsEnabled = true;

    $scope.openProductModal = function (size) {

        var modalInstance = $modal.open({
            animation: $scope.animationsEnabled,
            backdrop: true,
            backdropClick: true,
            dialogFade: false,
            keyboard: true,
            size: size, // this needs some figuring out
            template: productmodalopen,
            controller: ProductModalOpenCtrl,
            resolve: {
                item: function () {
                    return $scope.item;
                }
            }
        });

        function productmodalopen() {
            return [
                '<style>',
                '.modal-header {border-bottom:1px solid #A80309; min-height:36px; padding:2px;}',
                '.modal-header h5 { font-size:1.16em; font-weight:bold; padding: 0 10px; color:#FFFFFF;}',
                '.modal-header a.close {margin:0; padding:0; position:absolute; top:8px; right:10px; font-size:1.5em; color:#FFFFFF;}',
                '.modal-body {width:100%; margin:0 auto; padding: 10px 15px 20px 15px;}',
                '.modal-body h5, modal-body h4 { color:#FFF; border-bottom:1px solid #FFF; }',
                '.modal-body small { font-weight:bold; margin-right:10px; padding:10px 0; }',
                '.modal-body, .modal-body a {color:#FFFFFF; }',
                '.modal-body p {margin:10px 0; }',
                '.modal-body p a {padding:5px 0; }',
                '.modal-body p a:hover {color:#00478e; }',
                '.modal-body .empty i.fa { color: #cccccc; font-size: 3em; padding: 50px 0;}',
                '</style>',
                '<div class="modal-header navbar-default" class="col-xs-12 row">',
                '<h5>{{item.ProductIDText}}</h5>',
                '<a class="pull-right close" ng-click="closeProductModal()">',
                '<i class="fa fa-times"></i>',
                '</a>',
                '</div>',
                '<div class="modal-body navbar-default">',
                '<div class="modal-wrapper">',
                '<img class="img-responsive" ng-src="{{item.Variant.LargeImageUrl || item.Product.LargeImageUrl}}" />',
                '<div class="empty" ng-hide="item.Variant.LargeImageUrl || item.Product.LargeImageUrl">',
                '<span class="fa empty"><i class="fa fa-camera"></i></span>',
                '</div>',
                //'<p ng-if="item.Variant.IsMpowerVariant"><a ng-click="downloadProof(item)"><i class="fa fa-download"></i> {{\'Download Proof\' | r | xlat}}</a></p>',
                '<p>{{item.Product.Name}}<br />',
                '<div ng-if="item.Product.Description" ng-bind-html="item.Product.Description" />',
                '</p>',
                '</div>'
            ].join('');
        }

        /*modalInstance.result.then(function (selectedItem) {
         $scope.selected = selectedItem;
         }, function () {
         $log.info('Modal dismissed at: ' + new Date());
         });

         $scope.toggleAnimation = function () {
         $scope.animationsEnabled = !$scope.animationsEnabled;
         };*/
    };

    var ProductModalOpenCtrl = ['$scope', '$modalInstance', '$modal', 'Variant', 'item', function($scope, $modalInstance, $modal, Variant, item) {

        $scope.item = item; // this is the line item passed in from the ProductModalCtrl

        $scope.closeProductModal = function () {
            $modalInstance.close();
        };

        $scope.downloadProof = function(item) {
            $scope.errorMessage = null;
            Variant.get({
                VariantInteropID: item.Variant.InteropID,
                ProductInteropID: item.Product.InteropID
            }, function (v) {
                if (v.ProofUrl) {
                    window.location = v.ProofUrl;
                }
                else {
                    $scope.errorMessage = "Unable to download proof";
                }
            });
        };

    }];

}