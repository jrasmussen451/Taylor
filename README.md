##### Taylor Corp - Verizon  / 18.6.2 CT Release and 1.1.3 SPA Release  (1214)
##### Last Update: 2/28/16
========

### Github URL
* github.com/Four51Repositories/Taylor

========

### Product Configuration


###### Sidebar(1) "Store Essentials"
* Products assigned to a product category with an Interop ID of **EX_LatestProducts**

**Troubleshooting**
* Category must be active and have assigned products
* Category must be assigned to the company, group, or user

========

###### Sidebar(2) "Current Promotions"
* Products assigned to a product category with an Interop ID of **EX_BestProducts**

**Troubleshooting**
* Category must be active and have assigned products
* Category must be assigned to the company, group, or user

========

###### Tabs 
`partials/productDescriptionTabsTemplate.html`
* Follow the comments in the template to add tabs to a product description

`partials/productDescriptionTabs_4MAPDN24X480116.html`
* 4MAPDN24X480116 : Nationwide Coverage Map

`partials/productDescriptionTabs_TABRDN16X271015.html`
* TABRDN16X271015 : Better Matters Tablet Wall Graphic

========

###### Qualities ( New Store Opening, Multiple Languages, Product Video )

**Instructions**
* The Static Spec Group Name must be Qualities
* Use the FontAwesome icon library for additional icon options ( https://fortawesome.github.io/Font-Awesome/ ) 

**Examples**

*New Store Opening*
* Static Spec Group Name: Qualities
* Spec Name: New Store Opening
* Spec Value: `<i class="fa fa-star"></i> New Store Opening`

*Multiple Languages*
* Static Spec Group Name: Qualities
* Spec Name: Multiple Languages
* Spec Value: `<i class="fa fa-language"></i> Multiple Languages`

*Product Video*
* Static Spec Group Name: Qualities
* Spec Name: Product Video
* Spec Value: `<i class="fa fa-video-camera"></i> Product Video`

======== 

### Product Detail Template 
`partials/productDetailTemplate.html`
* Default PDT in repo

========

### Images
`css/images/custom/` 
* css/images/custom/background.jpg
* css/images/logo.png
* css/images/help/step1.jpg
* css/images/help/step2.jpg
* css/images/help/step3.jpg
* css/images/help/step4.jpg
* css/images/help/step5.jpg
* css/images/products/TABRDN16X271015-installation.jpg

========

### Fonts
`css/fonts` 
* NHaasGroteskDSPro-55Rg.otf
* NHaasGroteskDSPro-75Bd.otf
* NHaasGroteskTXPro-55Rg.otf
* NHaasGroteskTXPro-75Bd.otf

======== 
### OrderCloud Custom Solutions

###### Add To Cart Preview
`lib/oc/addToCartPreview.js`

**Instructions**
* Follow instructions under Custom Solutions Library - Add To Cart Preview
`https://github.com/Four51Repositories/CustomSolutions/tree/master/Add%20To%20Cart%20Preview`

========

###### Back To Top
`lib/oc/backToTop.js`

**Instructions**
* Follow instructions under Custom Solutions Library - Back To Top
`https://github.com/Four51Repositories/CustomSolutions/tree/master/Back%20To%20Top`

========

###### Browser Service
`lib/oc/bowser.js`
* Browser Service

========

###### Bootstrap Carousel
`lib/oc/carousel.js`

**Instructions**
* Follow instructions under Custom Solutions Library - Bootstrap Carousel
`https://github.com/Four51Repositories/CustomSolutions/tree/master/Bootstrap%20Carousel`

**Specific naming convention**
* VerizonCarouselImage

========

###### Category Collapse (not in use)
`lib/oc/categoryCollapse.js`

**Instructions**
* Follow instructions under Custom Solutions Library - Category Collapse
`https://github.com/Four51Repositories/CustomSolutions/tree/master/Category%20Collapse`

========

###### Category Modal (module in development)
`lib/oc/categoryModal.js`

**Instructions**
* Follow instructions under Custom Solutions Library - Category Modal
`https://github.com/Four51Repositories/CustomSolutions/tree/dev/Category%20Modal`

========

###### Fixed Footer
`lib/oc/fixedFooter.js`

**Instructions**
* Follow instructions under Custom Solutions Library - Fixed Footer
`https://github.com/Four51Repositories/CustomSolutions/tree/master/Fixed%20Footer`

========

###### Hamburger Navigation
`lib/oc/hamburgerNavigation.js`

**Instructions**
* Follow instructions under Custom Solutions Library - Hamburger Navigation Subcategories
`https://github.com/Four51Repositories/CustomSolutions/tree/master/Hamburger%20Navigation%20Subcategories`

========

###### Large Address List Search
`lib/oc/largeAddressListSearch.js`

**Instructions**
* Follow instructions under Custom Solutions Library - Large Address List Search
`https://github.com/Four51Repositories/CustomSolutions/tree/master/Large%20Address%20List%20Search`

========

###### Minicart
`lib/oc/minicart.js`

**Instructions**
* Follow instructions under Custom Solutions Library - Mini Cart
`https://github.com/Four51Repositories/CustomSolutions/blob/master/Mini%20Cart/minicart.js`

**Specific updates**
* template has specific updates 
* hide pricing

========

###### Order Cloud Spec Forms
`lib/oc/specForms.js`

**Instructions**
* Follow instructions under Four51 Repositories OrderCloud-SpecForms
`https://github.com/Four51Repositories/OrderCloud-SpecForms`

========

###### Product Lightbox
`lib/oc/productLightbox.js`

**Instructions**
* Follow instructions under Custom Solutions Library - Product Lightbox
`https://github.com/Four51Repositories/CustomSolutions/tree/master/Product%20Lightbox`

========

###### Product List Add To Cart
`lib/oc/productListAddToCart.js`

**Instructions**
* Follow instructions under Custom Solutions Library - Product List Add To Cart
`https://github.com/Four51Repositories/CustomSolutions/tree/master/Product%20List%20Add%20to%20Cart`

========

###### Product Zoom
`lib/oc/productZoom.js`

**Instructions**
* Follow instructions under Custom Solutions Library - Product Zoom
`https://github.com/Four51Repositories/CustomSolutions/tree/master/Product%20Zoom`

========

###### Security Modal
`lib/oc/securityModal.js`

**Instructions**
* Follow instructions under Custom Solutions Library - Security Modal
`https://github.com/Four51Repositories/CustomSolutions/tree/master/Security%20Modal`

========

###### Terms Modal (module in development)
`lib/oc/termsModal.js`

**Instructions**
* Follow instructions under Custom Solutions Library - Terms Modal
`https://github.com/Four51Repositories/CustomSolutions/tree/dev/Terms%20Modal`

========

### Custom Views

###### Interstitial Messaging
`partials/Messages/preCartMessage.html`
* Interstitial Messaging (optional) 

###### html
`partials/controls/categoryDisplay.html`
* Category Display

`partials/controls/categoryDisplayInline.html`
* Category Display Inline

`partials/categoryListTree.html`
* Category List Tree

###### js
`js/services/bonusItemService.js`
* Bonus Item (not currently in use)

`js/services/categoryDisplayService.js`
* Custom Category Display

`js/services/webMergeService.js`
* WebMerge (not currently in use) 

======== 

### Modified
###### js
`js/app.js`
* Custom Solutions module injection

`js/directives/categorydisplay.js`
* Category Display / lines 1-11
* Category Display Inline / lines 13-24
* categoryDisplayCtrl / lines 26-39
* category Display (service) / lines 41-128

`js/directives/product.js`
* Product View Alternate / lines 11-19
* Product List Init / lines 21-63
* Dynamic Static Specs / lines 183-211

`js/services/categoryDisplayService.js`
* categoryDisplayService / lines 1-21
* categoryliststree / lines 22-33
* categorylistnode / lines 35-52


##### html
`index.html`
* AnswerDash (optional) / lines 21-23
* Hamburger Navigation / lines 34-36
* Bootstrap Carousel / lines 38-40
* Hide branding / lines 42-45
* Fixed Footer / line 50
* Back To Top / line 52
* Custom Solution Modules / lines 78-94
* Custom Services / lines 170-174
* Comment out tree for Fixed Footer module / line 190
* Category display / lines 216-217

`partials/categoryListTree.html`
* Category List Tree

`partials/categoryView.html`
* Custom Category Displays (Best & Latest Products) / lines 18-19

`partials/controls/categoryDisplay.html`
* Category Display

`partials/controls/categoryDisplayInline.html`
* Category Display Inline

`partials/controls/orderSummary.html`
* Collapsible Item Summary / lines 12-37