/* Jonathan Snook - MIT License - https://github.com/snookca/prepareTransition */
(function(a){a.fn.prepareTransition=function(){return this.each(function(){var b=a(this);b.one("TransitionEnd webkitTransitionEnd transitionend oTransitionEnd",function(){b.removeClass("is-transitioning")});var c=["transition-duration","-moz-transition-duration","-webkit-transition-duration","-o-transition-duration"];var d=0;a.each(c,function(a,c){d=parseFloat(b.css(c))||d});if(d!=0){b.addClass("is-transitioning");b[0].offsetWidth}})}})(jQuery);

/* replaceUrlParam - http://stackoverflow.com/questions/7171099/how-to-replace-url-parameter-with-javascript-jquery */
function replaceUrlParam(e,r,a){var n=new RegExp("("+r+"=).*?(&|$)"),c=e;return c=e.search(n)>=0?e.replace(n,"$1"+a+"$2"):c+(c.indexOf("?")>0?"&":"?")+r+"="+a};

/*============================================================================
  Money Format
  - Shopify.format money is defined in option_selection.js.
    If that file is not included, it is redefined here.
==============================================================================*/
if ((typeof Shopify) === 'undefined') { Shopify = {}; }
if (!Shopify.formatMoney) {
  Shopify.formatMoney = function(cents, format) {
    var value = '',
        placeholderRegex = /\{\{\s*(\w+)\s*\}\}/,
        formatString = (format || this.money_format);

    if (typeof cents == 'string') {
      cents = cents.replace('.','');
    }

    function defaultOption(opt, def) {
      return (typeof opt == 'undefined' ? def : opt);
    }

    function formatWithDelimiters(number, precision, thousands, decimal) {
      precision = defaultOption(precision, 2);
      thousands = defaultOption(thousands, ',');
      decimal   = defaultOption(decimal, '.');

      if (isNaN(number) || number == null) {
        return 0;
      }

      number = (number/100.0).toFixed(precision);

      var parts   = number.split('.'),
          dollars = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands),
          cents   = parts[1] ? (decimal + parts[1]) : '';

      return dollars + cents;
    }

    switch(formatString.match(placeholderRegex)[1]) {
      case 'amount':
        value = formatWithDelimiters(cents, 2);
        break;
      case 'amount_no_decimals':
        value = formatWithDelimiters(cents, 0);
        break;
      case 'amount_with_comma_separator':
        value = formatWithDelimiters(cents, 2, '.', ',');
        break;
      case 'amount_no_decimals_with_comma_separator':
        value = formatWithDelimiters(cents, 0, '.', ',');
        break;
    }

    return formatString.replace(placeholderRegex, value);
  };
}

// Timber functions
window.timber = window.timber || {};
timber.cacheSelectors = function () {
  timber.cache = {
    // General
    $html                    : $('html'),
    $body                    : $(document.body),

    // Navigation
    $navigation              : $('#AccessibleNav'),
    $mobileSubNavToggle      : $('.mobile-nav__toggle'),

    // Collection Pages
    $changeView              : $('.change-view'),

    // Product Page
    $productImage            : $("img[id|='product-featured-image']"),
    $thumbImages             : $('#ProductThumbs').find('a.product-single__thumbnail'),

    // Customer Pages
    $recoverPasswordLink     : $('#RecoverPassword'),
    $hideRecoverPasswordLink : $('#HideRecoverPasswordLink'),
    $recoverPasswordForm     : $('#RecoverPasswordForm'),
    $customerLoginForm       : $('#CustomerLoginForm'),
    $passwordResetSuccess    : $('#ResetSuccess')
  };
};

timber.init = function () {
  FastClick.attach(document.body);
  timber.cacheSelectors();
  timber.accessibleNav();
  timber.mobileNavToggle();
  timber.productImageSwitch();
  timber.responsiveVideos();
  timber.collectionViews();
  timber.loginForms();
};

timber.accessibleNav = function () {
  var $nav = timber.cache.$navigation,
      $allLinks = $nav.find('a'),
      $topLevel = $nav.children('li').find('a'),
      $parents = $nav.find('.site-nav--has-dropdown'),
      $subMenuLinks = $nav.find('.site-nav__dropdown').find('a'),
      activeClass = 'nav-hover',
      focusClass = 'nav-focus';

  // Mouseenter
  $parents.on('mouseenter touchstart', function(evt) {
    var $el = $(this);

    if (!$el.hasClass(activeClass)) {
      evt.preventDefault();
    }

    showDropdown($el);
  });

  // Mouseout
  $parents.on('mouseleave', function() {
    hideDropdown($(this));
  });

  $subMenuLinks.on('touchstart', function(evt) {
    // Prevent touchstart on body from firing instead of link
    evt.stopImmediatePropagation();
  });

  $allLinks.focus(function() {
    handleFocus($(this));
  });

  $allLinks.blur(function() {
    removeFocus($topLevel);
  });

  // accessibleNav private methods
  function handleFocus ($el) {
    var $subMenu = $el.next('ul'),
        hasSubMenu = $subMenu.hasClass('sub-nav') ? true : false,
        isSubItem = $('.site-nav__dropdown').has($el).length,
        $newFocus = null;

    // Add focus class for top level items, or keep menu shown
    if (!isSubItem) {
      removeFocus($topLevel);
      addFocus($el);
    } else {
      $newFocus = $el.closest('.site-nav--has-dropdown').find('a');
      addFocus($newFocus);
    }
  }

  function showDropdown ($el) {
    $el.addClass(activeClass);

    setTimeout(function() {
      timber.cache.$body.on('touchstart', function() {
        hideDropdown($el);
      });
    }, 250);
  }

  function hideDropdown ($el) {
    $el.removeClass(activeClass);
    timber.cache.$body.off('touchstart');
  }

  function addFocus ($el) {
    $el.addClass(focusClass);
  }

  function removeFocus ($el) {
    $el.removeClass(focusClass);
  }
};

timber.mobileNavToggle = function () {
  timber.cache.$mobileSubNavToggle.on('click', function() {
    $(this).parent().toggleClass('mobile-nav--expanded');
  });
};

timber.getHash = function () {
  return window.location.hash;
};

timber.productPage = function (options) {
  var moneyFormat = options.money_format,
      variant = options.variant,
      selector = options.selector;

  // Selectors
  var $productImage = $("img[id|='product-featured-image']"),
      $addToCart = $('#AddToCart'),
      $productPrice = $('#ProductPrice'),
      $comparePrice = $('#ComparePrice'),
      $quantityElements = $('.quantity-selector, label + .js-qty'),
      $addToCartText = $('#AddToCartText'),
      $unitPriceBox = $('.unit_price_box'),
      $productUnitPrice = $('#product__unit_price'),
  	  $productUnitValue = $('#product__unit_price_value'),
      $savePriceBOx = $('.save__price_box'),
      $savePrice = $('.sale__save--percent');

  if (variant) {
    //console.log(variant);
    // Update variant image, if one is set
    if (variant.featured_image) {
      var newImg = variant.featured_image,
          el = $productImage[0];
      Shopify.Image.switchImage(newImg, el, timber.switchImage);
    }

    // Select a valid variant if available
    if (variant.available) {
      // Available, enable the submit button, change text, show quantity elements
      $addToCart.removeClass('disabled').prop('disabled', false);
      $addToCartText.html(window.AddTocart.CartTitle);
      $quantityElements.show();
    } else {
      // Sold out, disable the submit button, change text, hide quantity elements
      $addToCart.addClass('disabled').prop('disabled', true);
      $addToCartText.html(window.AddTocart.soldout);
      $quantityElements.hide();
    }

    // Regardless of stock, update the product price
    $productPrice.html( Shopify.formatMoney(variant.price, moneyFormat) );
    
    // Unit Price
    if('unit_price' in variant){
      $unitPriceBox.removeClass('hidden');
      $productUnitPrice.html( Shopify.formatMoney(variant.unit_price, moneyFormat));
      $productUnitValue.html(`${variant.unit_price_measurement.reference_value} ${variant.unit_price_measurement.reference_unit}`);
    }else{
    	$unitPriceBox.addClass('hidden');
    }
    
    // Also update and show the product's compare price if necessary
    if (variant.compare_at_price > variant.price) {
      $comparePrice
        .html(window.productCompareat + ' ' + Shopify.formatMoney(variant.compare_at_price, moneyFormat))
        .show();
      // Save Percent price
      let regularPrice = variant.price;
      let comparePrice = variant.compare_at_price;
      let SavePricePercent =  Math.round(( comparePrice - regularPrice ) * 100 / comparePrice);
      $savePrice.html(SavePricePercent);
      $savePriceBOx.show();
    } else {
      $comparePrice.hide();
      $savePriceBOx.hide();
    }
    
  } else {
    // The variant doesn't exist, disable submit button.
    // This may be an error or notice that a specific variant is not available.
    // To only show available variants, implement linked product options:
    //   - http://docs.shopify.com/manual/configuration/store-customization/advanced-navigation/linked-product-options
    $addToCart.addClass('disabled').prop('disabled', true);
    $addToCartText.html(window.productUnavailable);
    $quantityElements.hide();
  }
};

timber.productImageSwitch = function () {
  if (timber.cache.$thumbImages.length) {
    // Switch the main image with one of the thumbnails
    // Note: this does not change the variant selected, just the image
    timber.cache.$thumbImages.on('click', function(evt) {
      evt.preventDefault();
      var newImage = $(this).attr('href');
      timber.switchImage(newImage, null, timber.cache.$productImage);
    });
  }
};

timber.switchImage = function (src, imgObject, el) {
  // Make sure element is a jquery object
  var $el = $(el);
  $el.attr('src', src);
};

timber.responsiveVideos = function () {
  var $iframeVideo = $('iframe[src*="youtube.com/embed"], iframe[src*="player.vimeo"]');
  var $iframeReset = $iframeVideo.add('iframe#admin_bar_iframe');

  $iframeVideo.each(function () {
    // Add wrapper to make video responsive
    $(this).wrap('<div class="video-wrapper"></div>');
  });

  $iframeReset.each(function () {
    // Re-set the src attribute on each iframe after page load
    // for Chrome's "incorrect iFrame content on 'back'" bug.
    // https://code.google.com/p/chromium/issues/detail?id=395791
    // Need to specifically target video and admin bar
    this.src = this.src;
  });
};

timber.collectionViews = function () {
  if (timber.cache.$changeView.length) {
    timber.cache.$changeView.on('click', function() {
      var view = $(this).data('view'),
          url = document.URL,
          hasParams = url.indexOf('?') > -1;

      if (hasParams) {
        window.location = replaceUrlParam(url, 'view', view);
      } else {
        window.location = url + '?view=' + view;
      }
    });
  }
};

timber.loginForms = function() {
  function showRecoverPasswordForm() {
    timber.cache.$recoverPasswordForm.show();
    timber.cache.$customerLoginForm.hide();
  }

  function hideRecoverPasswordForm() {
    timber.cache.$recoverPasswordForm.hide();
    timber.cache.$customerLoginForm.show();
  }

  timber.cache.$recoverPasswordLink.on('click', function(evt) {
    evt.preventDefault();
    showRecoverPasswordForm();
  });

  timber.cache.$hideRecoverPasswordLink.on('click', function(evt) {
    evt.preventDefault();
    hideRecoverPasswordForm();
  });

  // Allow deep linking to recover password form
  if (timber.getHash() == '#recover') {
    showRecoverPasswordForm();
  }
};

timber.resetPasswordSuccess = function() {
  timber.cache.$passwordResetSuccess.show();
};


// Initialize Timber's JS on docready
$(timber.init);


/*
  =====================
      Theme JS
  ======================
*/ 
// Section with Editor
$(document).on('shopify:section:load', function(e){ 
  $('#' + e.target.id).find('[data-section]').sectionJs();
}).ready(function() {
  $('[data-section]').each(function(){ $(this).sectionJs() });
});

$.fn.sectionJs = function(){
  var $this = this;
  if($this.data('section') == "heroSlickSlider") {
    $this.find('.decor-slider-wrapper').heroSlickSlider();
  }else if($this.data('section') == "heroOwlSlider") {
    $this.heroOwlSlider();
  }else if($this.data('section') == "ProudctCarouselSlider") {
    $this.find('.product-carousel').SlickCarouselSlider();
  }else if($this.data('section') == "CollectionProductContent") {
    $this.find('.product-slider-wrapper').SlickCarouselSlider();
  }else if($this.data('section') == "IsotopCollectionProduct") {
    $this.IsotopCollection();
  }else if($this.data('section') == "BannerSection") {
    $this.BannerSection();
  }else if($this.data('section') == "CountDownBanner") {
    $this.CountDownBanner();
  }else if($this.data('section') == "CollectionSLider") {
    $this.find('.banner_collection_slider').SlickCarouselSlider();
  }else if($this.data('section') == "featurCategory") {
    $this.find('.feature_category_slider').SlickCarouselSlider();
  }else if($this.data('section') == "lookbooBanner") {
    $this.LookBanner();
  }else if($this.data('section') == "BlogPostSliderJs") {
    $this.find('.blog-post-slider').SlickCarouselSlider();
  }else if($this.data('section') == "TestmonialSlider") {
    $this.find('.testmonialSliderOne').SlickCarouselSlider();
  }else if($this.data('section') == "TestmonialSlider2") {
    $this.find('.testmonialSliderTwo').SlickCarouselSlider();
  }else if($this.data('section') == "TestmonialSlider3") {
    $this.find('.testmonialSliderThree').SlickCarouselSlider();
  }else if($this.data('section') == "BrandLogos") {
    $this.find('.BrandSlider').SlickCarouselSlider();
  }else if($this.data('section') == "BrandLogos2") {
    $this.find('.BrandSlider2').SlickCarouselSlider();
  }else if($this.data('section') == "CategoryCaousel") {
    $this.find('.category_slick_carousel').SlickCarouselSlider();
  }else if($this.data('section') == "RelatedProudct") {
    $this.find('.related_product_slide').SlickCarouselSlider();
  }else if($this.data('section') == "customProductSlider") {
    $this.find('.customProductCarousel').SlickCarouselSlider();
  }else if($this.data('section') == "HeaderSection") {
    $this.headerSectionJs();
  }else if($this.data('section') == "collectionTemplate") {
    $this.collectionTemplaetFn();
  }else if($this.data('section') == "InstagramSlider") {
    $this.InstagramSection();
  }else if($this.data('section') == "InstagramSliderGallery") {
    $this.find('.instagram-carousel .instagram_gallery').InstgaramGallary();
  }else if($this.data('section') == "ProductPage"){
  	$this.productPage();
  }else{}   
}

// Header Section
$.fn.headerSectionJs = function(){
  // Mega menu
  megaMneu();
  
  // Header Actcion 
  headerjsFn();
  
  // Menu Product Carousel
  var $carousel = $('[data-owl-carousel]');
  var $OwlMenuProduct = $('.menu_product_contain');
  // Owl Carousel Options
  if ($carousel.length) {
    $carousel.each(function() {
      $(this).owlCarousel($(this).data('owl-carousel'));
    });
  }

  /* single product activation */
  if($OwlMenuProduct.length > 0){
    $OwlMenuProduct.owlCarousel();  
  };
  
};

// Collection Template
$.fn.collectionTemplaetFn = function(){
 // Lazload Image
  
  /*------- 
      	Sidebar offcanvas filter widget 
   ---------*/
  $('#sidebar-filter-active-btn, #advance-filter-active-btn').on('click', function(event){
    event.stopPropagation();
    $('.offcanvas__filter_wrapper').addClass('active-about-overlay');
    $('.filter-overlay-close').addClass('active').removeClass('inactive');
    $('body').addClass('active-body-search-overlay');
  });


  $('#filter__widget_close, .filter-overlay-close').on('click', function(){
    $('.offcanvas__filter_wrapper').toggleClass('active-about-overlay');
    $('.filter-overlay-close').addClass('inactive').removeClass('active');
    $('body').removeClass('active-body-search-overlay');
  });
  
  $('.MobileFilter .widget-collapse h2').on("click", function(){
    $(this).siblings('.widget-collapse-hide').slideToggle();
    $(this).toggleClass('widget-collapse-show');
  });

  $('.MobileFilter input[type="checkbox"]').click(function() {
    setTimeout(function() {
      $('form[name="filterFormMobile"]').submit();
    }, 500);
  });
  
  
  $('.DesktopFilter .widget-collapse h2,.outSideCollapse h2').on("click", function(){ 
    $(this).siblings('.widget-collapse-hide').slideToggle();
    $(this).toggleClass('widget-collapse-show');
  });

  $('.DesktopFilter input[type="checkbox"]').click(function() {
    setTimeout(function() {
      $('form[name="filterForm"]').submit();
    }, 500);
  });

};

// Hero Slider
$.fn.heroSlickSlider = function() {
  var $phooneSlickSlider = this;
  $phooneSlickSlider.slick({
    autoplay: true,
    arrows: true,
    centerMode: true,
    centerPadding: '360px',
    slidesToShow: 1,
    prevArrow: '<button class="slick-prev"><i class="ti-angle-left"></i></button>',
    nextArrow: '<button class="slick-next"><i class="ti-angle-right"></i></button>'
  });

};



// Hero Fulid Slider
$.fn.heroOwlSlider = function(){
  
   // Variable
    var $carousel = $('[data-owl-carousel]');
    var $menuSlider = $('.slider_wrapper');
    var $heroSlider = $('.hero-slider-wrapper');
    var $HalfSliderBanner = $('.half_slider_active');
    // Owl Carousel Options
    if ($carousel.length) {
      $carousel.each(function() {
        $(this).owlCarousel($(this).data('owl-carousel'));
      });
    }
    
    //Hero Fluid Slider Activation
	$heroSlider.owlCarousel();
  
    // Menu With Slider
    $menuSlider.owlCarousel();
  
  	// Half Slider With Banner
    $HalfSliderBanner.owlCarousel();
  
  
  
     // Mega Menu
     megaMneu();

    // Category Menu
    catMenuCollapse();

};


// Slick Slider
$.fn.SlickCarouselSlider = function(){
  // Product Carousel Slider
  var $this = this;
  if($this.length > 0){
    $this.slick({
      prevArrow: '<button class="slick-prev"><i class="ti-angle-left"></i></button>',
      nextArrow: '<button class="slick-next"><i class="ti-angle-right"></i></button>'
    });
  };
};


// Isotope Product
$.fn.IsotopCollection = function(){

  // Isotope Collection Product
  var activeId = $(".product-filter-menu li");
  var IsotopActive = $(".product-isotope");
  
  
  if(IsotopActive.length > 0){
    activeId.on('click', function () {
      var $this = $(this),
          filterValue = $this.data('filter'),
          originLeft = true;
       
      if(window.themeRTL){
         originLeft = false;
      }
      
      IsotopActive.isotope({
        filter: filterValue,
        originLeft: originLeft,
        layoutMode: 'fitRows'

      });
      activeId.removeClass('active');
      $this.addClass('active');
    });
  };
};


// CountDown Banner
$.fn.CountDownBanner = function(){
    // CountDwon Js
    CountDownJs();
}

// Banner
$.fn.BannerSection = function(){

  // Tilter Js
  if ($('.tilter').length > 0) {
    $('.tilter').tilt({
      maxTilt: 40,
      perspective: 800,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      scale: 1,
      speed: 800,
      transition: true,
    });
  } 

};

// LookBoo Banner
$.fn.LookBanner = function(){

  // LookBook Js
  lookbookkjs()
  
}

// Instagram gallery
$.fn.InstgaramGallary = function(){
   var $this = this;
    if($this.length > 0){
      $this.slick({
        prevArrow: '<button class="slick-prev"><i class="ti-angle-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="ti-angle-right"></i></button>'
      });
    };
}


// Instgaram Section
$.fn.InstagramSection = function(){
  var activation = this.find('[data-username]'),
      activeId = activation.attr('id'),
      clientUsername = activation.attr('data-username'),
      instagramHastag = activation.attr('data-hashtag'),
      ItemsLimit = activation.attr('data-limit'),
      imageSize = activation.attr('data-size'),
      instaslider = ".instagram-carousel";

  var $instagramNews = "#"+activeId+instaslider,
      $slidesToShow = activation.data('slidetoshow'),
      $slidesAutoplay = activation.data('slideautoplay'),
      $slideshowtablet = activation.data('slideshowtablet'),
      $slideshowlgmobile = activation.data('slideshowlgmobile'),
      $slideshowsmmobile = activation.data('slideshowsmmobile');

  $($instagramNews).on("DOMNodeInserted", function (e) {
    if(e.target.className == 'instagram_gallery') {
      $("." + e.target.className).slick({
        slidesToShow: $slidesToShow,
        slidesToScroll: 1,
        autoplay: $slidesAutoplay,
        dots: false,
        rtl: window.themeRTL,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="ti-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="ti-angle-right"></i></button>',
        responsive: [
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: $slidesToShow,
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: $slideshowtablet,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: $slideshowlgmobile,
            }
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: $slideshowsmmobile,
            }
          }

        ]
      })
    }
  }); 

  if(clientUsername == '' && instagramHastag == '') return false;

  $.instagramFeed({
    'tag': instagramHastag,
    'username': clientUsername,
    'container': "#"+activeId,
    'display_profile': false,
    'display_biography': false,
    'display_gallery': true,
    'styling': false,
    'items': ItemsLimit,
    'margin': 1,
    'image_size': imageSize,
    'cache_time': 360,
    'lazy_load': true
  });

};

// Product Page
$.fn.productPage = function(){
  // Product Zoom
 function imgzoom(){
    $('.product-zoom').each(function () {
      var $this = $(this),
          $image = $this.data('image');
      $this.zoom({
        url: $image
      });
    });
  };

  if( $(window).width() > 767 ){
  	imgzoom();
  };
  
  // gallery Slider
  function productGallerySldier(productMoreview) {
    var sliderBigMedia = productMoreview.find('.product_media_gallery'),
        sliderNavMedia = productMoreview.find('.product_media_nav'),
        verticalmode = sliderNavMedia.data('vertical'),
        smverticalmode = sliderNavMedia.data('vertical-sm');

    if (!sliderBigMedia.hasClass('slick-initialized') && !sliderNavMedia.hasClass('slick-initialized')) {
      sliderBigMedia.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        rtl: window.themeRTL,
        asNavFor: sliderNavMedia,
        prevArrow: '<button class="slick-prev"><i class="ti-angle-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="ti-angle-right"></i></button>',
        draggable: false,
        adaptiveHeight:false,
        rows: 0,
        responsive: [
            {
               breakpoint: 575,
               settings: {
                 get arrows() {
                   if (verticalmode == true && smverticalmode == true) {
                     return arrows = true;
                   }
                 }
               }
            }
          ]
      });

      sliderNavMedia.slick({
        infinite: true,
        slidesToShow: sliderNavMedia.data('rows'),
        vertical: verticalmode,
        slidesToScroll: 1,
        asNavFor: sliderBigMedia,
        rtl: window.themeRTL,
        focusOnSelect: true,
        rows: 0,
        prevArrow: '<button class="slick-prev"><i class="ti-angle-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="ti-angle-right"></i></button>',
        responsive: [
            {
               breakpoint: 992,
               settings: {
                 slidesToShow: 4,
                 slidesToScroll: 1
               }
             },
             {
               breakpoint: 768,
               settings: {
                 slidesToShow: 4,
                 slidesToScroll: 1
               }
             },
             {
               breakpoint: 575,
               settings: {
                 slidesToShow: 3,
                 slidesToScroll: 1,
                 vertical: smverticalmode,
                 get dots() {
                   if (verticalmode == true && smverticalmode == true) {
                     return dots = true;
                   }
                 },
                 get arrows() {
                   if (verticalmode == true && smverticalmode == true) {
                     return arrows = false;
                   }
                 }
             }
            }
          ]
      });
    };
    
    // Swatch image 
    var swatch = productMoreview.closest('[data-more-view-product]').siblings('.product-shop').find('.swatch'),
        swatchColor = swatch.find('.swatch-element.color'),
        inputChecked = swatchColor.find(':radio:checked');

    if(inputChecked.length) {
      var className = inputChecked.data('filter');

      if(className !== undefined) {
        sliderNavMedia.slick('slickUnfilter');
        sliderBigMedia.slick('slickUnfilter');

        if(sliderNavMedia.find(className).length && sliderBigMedia.find(className).length) {
          sliderNavMedia.slick('slickFilter', className).slick('refresh');
          sliderBigMedia.slick('slickFilter', className).slick('refresh');
        }
      };
    };
  };
  productGallerySldier($('.product__slide_wrapper'));
  
  // Single Product Page Swatch
  function changeSwatch(swatchSlt) {
    $(document).on('change', swatchSlt, function () {
      var className = $(this).data('filter');
      var optionIndex = $(this).closest('.swatch').attr('data-option-index');
      var optionValue = $(this).val();

      $(this)
      .closest('form')
      .find('.single-option-selector')
      .eq(optionIndex)
      .val(optionValue)
      .trigger('change');

      if (className == undefined) {
        if ($('input[data-filter]').is(':checked')) {
          var checked = $('input[data-filter]:checked').data('filter');
          className = checked;
        }
      }
      var productShop = $(swatchSlt).closest('.product-shop'),
          productImgs = productShop.prev('[data-more-view-product]');

        if(productImgs.length) {
          var sliderBigMedia = productImgs.find('.product_media_gallery'),
       		  sliderNavMedia = productImgs.find('.product_media_nav');
          sliderNavMedia.slick('slickUnfilter');
          sliderBigMedia.slick('slickUnfilter');

          if(sliderNavMedia.find(className).length && sliderBigMedia.find(className).length) {
            sliderNavMedia.slick('slickFilter', className).slick('refresh');
            sliderBigMedia.slick('slickFilter', className).slick('refresh');
          }
        }

    });
  };
  changeSwatch('#AddToCartForm .swatch :radio');  
  
  
  //===== Sticky Add To Cart
  function proStikcyAddToCart(){
    var $stikcyParent = $('.pro_sticky_atc'),
        $proVarintActive = $stikcyParent.find('.Pro_variant__active'),
        $stickyProVarItem = $stikcyParent.find('.pro_variant_swatch');

    if($stikcyParent.length) {
      $stickyProVarItem.off('click.activeVar').on('click.activeVar', function(e) {
        var $this = $(this),
            $text = $this.text(),
            $StickyVarval = $this.data('value'),
            $varnewImg = $this.data('img'),
            $newqty = $this.data('quantity');
        $stickyProVarItem.removeClass('active');
        $this.addClass('active');

        $stikcyParent.find('.sticky__pro_add_cart input[type=hidden]').val($StickyVarval);
        $proVarintActive.attr('data-value', $StickyVarval).text($text);

        var $variantSwtval = $('#AddToCartForm [data-value-sticky="'+$StickyVarval+'"]');

        $variantSwtval.each(function() {
          var $switem = $(this).data('value');

          $('[data-value="'+$switem+'"]').closest('.swatch').find('#'+$switem+'').click();
        });

        $('.sticky_pro_img img').attr({ src: $varnewImg });
        $('.sticky__qty input').attr({ totalqty: $newqty });

        return false;
      });

      // Select Option
      var $optionSelected = $('#product-selectors option:selected'),
          $StickyVarval = $optionSelected.val(),
          $prostickyActive = $stikcyParent.find('.pro_variant_swatch[data-value="'+$StickyVarval+'"]'),
          $prostickyText = $prostickyActive.html();

      $proVarintActive.html($prostickyText);
      $prostickyActive.addClass('active');

      var $datastr = $prostickyActive.data('img');
      $('.sticky_pro_img img').attr({ src: $datastr });

      $(".swatch .swatch-element").each(function(e) {
        var $varid = $(this).find('input:radio').attr('id');

        $('.swatch input.text[data-value="'+$varid+'"]').appendTo($(this));
      });
      $('.selector-wrapper').change(function() {
        var $proSelectors = $("#product-selectors").val();
        $('.pro_sticky_atc .pro_variant__options li').each(function(e) {
          var $varSinItem = $(this).find('a').data('value');
          if($varSinItem == $proSelectors){
            $(this).find('a').addClass('active')
          } else{
            $(this).find('a').removeClass('active')
          }
        });
        $("#product-selectors").change(function() {
          var $varstr = "";
          $("#product-selectors option:selected").each(function() {
            $varstr += $(this).data('imge');
          });

          $('.sticky_pro_img img').attr({ src: $varstr });
        }).trigger("change");

        if($stickyProVarItem.hasClass('active')) {
          var $StikcyVarhtml = $('.pro_sticky_atc .pro_variant_swatch.active').html();

          $('.pro_sticky_atc .sticky__pro_add_cart input[type=hidden]').val($proSelectors);
          $proVarintActive.html($StikcyVarhtml);
          $proVarintActive.attr('data-value', $proSelectors);
        };
      });

      //Product Scroll Sticky Class
      var offSetTop = $('.sticky__pro_button').offset().top;
      $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();
        if (scrollTop > offSetTop) {
          $('body').addClass('atc_sticky_scoll');
        }
        else {
          $('body').removeClass('atc_sticky_scoll');
        }
      });
    };
    
    // Sticky quanity Count
    $('.quantity_inner').find('.dec_btn, .inc_btn').click(function(e) {
      var $qty_field = $(this).parent().find('input'),
          $qtCount = parseInt($qty_field.val(), 10) + parseInt(e.currentTarget.className === 'inc_btn' ? 1 : -1, 10);
      $qty_field.val($qtCount).change();
    });
    $('.quantity_inner').find("input").change(function() {
      var $this = $(this),
          $min = 1,
          $value = parseInt($this.val(), 10),
          $max = parseInt($this.attr('totalqty'), 10);
      $value = Math.min($value, $max);
      $value = Math.max($value, $min);
      $this.val($value);
    }).on("keypress", function( e ) {
      if (e.keyCode === 13) {
        e.preventDefault();
      }
    });
  } 
  proStikcyAddToCart();
  
};

// LookBook JS
function lookbookkjs(){
  var clothTag = $('.cloth-tag');
  clothTag.each(function(){
    var $this = $(this),
        topValue = $this.data('top'),
        leftValue = $this.data('left');
    $this.css({"top": topValue, "left": leftValue});

  });
 
  $('.cloth-tag__icon').on('click', function(e) {
    $(this).siblings('.cloth-tag__content').addClass('active');
    e.stopPropagation();
  });

  $('.lookbook_close__icon').on('click', function(e){
    $(this).parent('.cloth-tag__content').removeClass('active');
    e.stopPropagation();
  });

  $('body').on('click', function(e) {
    if (!$(e.target).is('.cloth-tag__content.active'))
      $('.cloth-tag__content.active').removeClass('active');
  });

  
};
lookbookkjs();


// mega menu
function megaMneu(){
  $('.mega_dropdown').parent('ul').addClass('mega-menu');
  $('.mega-menu').parent('li').addClass('mega_item');
  $('.drop_item').parent('ul').addClass('single-column-menu');
  $('.multi_item').parent('ul').addClass('single-column-menu ');
  $('.mega-menu').each(function(){
    if($(this).children('li').length){
      var ulChildren = $(this).children('li').length;
      if (ulChildren == 5) {
        $(this).addClass( "mega-menu-column-5" );
      }else if (ulChildren == 4) {
        $(this).addClass( "mega-menu-column-4" );
      }else if(ulChildren == 3){
        $(this).addClass( "mega-menu-column-3 mega-menu-column-4" );
      }else if(ulChildren == 2){
        $(this).addClass( "mega-menu-column-2  mega-menu-column-4" );
      }else if(ulChildren == 1){
        $(this).addClass( "mega-menu-column-4 mega-menu-column-1" );
      }else {
        $(this).addClass( "mega-menu-column-5 mega-full" );
      }
    }
  });
};

// Header js
function headerjsFn(){

  /* active and deactive cart overlay */
  $('#offcanvas-cart-icon, #offcanvas-cart-icon-2').on('click', function(){
    $('#cart-overlay').addClass('active-cart-overlay');
    $('.cart-overlay-close').addClass('active').removeClass('inactive');
    $('body').addClass('active-body-search-overlay');
  });

  $('#cart-close-icon, .cart-overlay-close').on('click', function(){
    $('#cart-overlay').removeClass('active-cart-overlay');
    $('.cart-overlay-close').addClass('inactive').removeClass('active');
    $('body').removeClass('active-body-search-overlay');
  });

  /* activate and deactivate search overlay*/

  $('#search-icon, #search-icon-2').on('click', function(){
    var $inputSearch = $('.input__search');
    $('#search-overlay').addClass('active-search-overlay');
    $('body').addClass('active-body-search-overlay');
    $inputSearch.focus();
  });

  $('#search-close-icon').on('click', function(){
    $('#search-overlay').removeClass('active-search-overlay');
    $('body').removeClass('active-body-search-overlay');
  });



  /* active and deactive about overlay */
  $('#offcanvas-about-icon').on('click', function(){
    $('#about-overlay').addClass('active-about-overlay');
    $('.overlay-close').addClass('active').removeClass('inactive');
    $('body').addClass('active-body-search-overlay');
  });

  $('#about-close-icon, .overlay-close').on('click', function(){
    $('#about-overlay').toggleClass('active-about-overlay');
    $('.overlay-close').addClass('inactive').removeClass('active');
    $('body').removeClass('active-body-search-overlay');
  });
  
  
  
  /*-- vertical menu icon  -----*/
  $('#vertical-menu-icon').on('click', function(){
    $(this).toggleClass('active');
    $('#vertical-menu-dark').toggleClass('active');
  });


  //overlay menu   

  /*Variables*/
  var $verticalCollapsibleMenu = $('#vertical-collapsible-menu'),
      $verticalCollapsibleSubMenu = $verticalCollapsibleMenu.find('.sub-menu');

  /*Close Off Canvas Sub Menu*/
  $verticalCollapsibleSubMenu.slideUp();

  /*Category Sub Menu Toggle*/
  $verticalCollapsibleMenu.on('click', 'li a', function(e) {
    var $this = $(this);
    if ( $this.siblings('.sub-menu').length) {
      e.preventDefault();
      if ($this.siblings('ul:visible').length){
        $this.siblings('ul').slideUp();
      }else {
        $this.closest('li').siblings('li').find('ul:visible').slideUp();
        $this.siblings('ul').slideDown();
      }
    };
  });   
    
    $('#overlay-menu-icon').on('click', function(){
      $('#overlay-navigation-menu').removeClass('overlay-navigation-inactive').addClass('overlay-navigation-active');
    });

    $('#overlay-menu-close-icon').on('click', function(){
      $('#overlay-navigation-menu').removeClass('overlay-navigation-active').addClass('overlay-navigation-inactive');
    });

  
  // Check Terms & Condition
  $('#ageree_term_cond').on('click', function(){
    $(this).parent('.cart-buttons').toggleClass('disabled');
  });


  /*----  Vertical Menu  ------*/
  $('.header-vertical').parent('body').addClass('vertical-header');

  
  // Mobile Menu Activation
  mobilemenuJS();
  
  //Sticky Menu JS
  stickyMenu();  
  
};

// Sticky Menu
function stickyMenu(){
  var windows = $(window);
  var screenSize = windows.width();
  var sticky = $('.header-sticky');
  var sliderBottomHeader = $('.slider-bottom-header-sticky');


  windows.on('scroll', function () {
    var scroll = windows.scrollTop();

    var headerHeight = sticky.height();
    var sliderBottomHeaderHeight = sliderBottomHeader.height();
    var sliderHeight = $('.header-bottom-slider-area').height();

    var headerPosition = sliderBottomHeaderHeight + sliderHeight;

    if (screenSize >= 300) {
      if (scroll < headerHeight) {
        sticky.removeClass('is-sticky');
      } else {
        sticky.addClass('is-sticky');
      }
    }


    if (screenSize >= 300) {
      if (scroll < headerPosition) {
        sliderBottomHeader.removeClass('is-sticky');
      }else {
        sliderBottomHeader.addClass('is-sticky');
      }
    }


  });

}

// Mobile Menu JS
function mobilemenuJS(){

  // DL MENU
  var $dlmenu = $('#dl-menu');
  if($dlmenu.length > 0){
    $dlmenu.dlmenu({
      animationClasses : { classin : 'dl-animate-in-2', classout : 'dl-animate-out-2' },
      useActiveItemAsLink: true,
    });
  };


  //offcanvas  menu
  $("#mobile-menu-trigger").on('click', function(){
    $("#mobile-menu-overlay,.menu_offcanvas_overlay").addClass("active");
  });

  $("#mobile-menu-close-trigger,.menu_offcanvas_overlay").on('click', function(){
    $("#mobile-menu-overlay,.menu_offcanvas_overlay").removeClass("active");
  });

  var $offCanvasNav = $('#offcanvas__main--menu'),
      $offCanvasNavSubMenu = $offCanvasNav.find('.sub-menu');

  /*Add Toggle Button With Off Canvas Sub Menu*/
  $offCanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i></i></span>');

  /*Close Off Canvas Sub Menu*/
  $offCanvasNavSubMenu.slideUp();

  /*Category Sub Menu Toggle*/
  $offCanvasNav.on('click', 'li a, li .menu-expand', function(e) {
    var $this = $(this);
    if ( ($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand')) ) {
      e.preventDefault();
      if ($this.siblings('ul:visible').length){
        $this.parent('li').removeClass('active');
        $this.siblings('ul').slideUp();
      } else {
        $this.parent('li').addClass('active');
        $this.closest('li').siblings('li').removeClass('active').find('li').removeClass('active');
        $this.closest('li').siblings('li').find('ul:visible').slideUp();
        $this.siblings('ul').slideDown();
      }
    }
  });
  
  $("#mobile_bar_info_trigger").on('click', function(){
    $("#mobile_topbar_menu_overlay,.topbar_offcanvas_overlay").addClass("active");
  });

  $("#mobile_topbar_close_trigger,.topbar_offcanvas_overlay").on('click', function(){
    $("#mobile_topbar_menu_overlay,.topbar_offcanvas_overlay").removeClass("active");
  });


};

// CountDown js
function CountDownJs(){
	$('[data-countdown2]').each(function () {
    var $this = $(this),
        finalDate = $(this).data('countdown2');
    $this.countdown(finalDate, function (event) {
      $this.html(event.strftime('<div class="single-countdown"><span class="single-countdown__time">%D</span><span class="single-countdown__text">'+window.coutdown.days+'</span></div><div class="single-countdown"><span class="single-countdown__time">%H</span><span class="single-countdown__text">'+window.coutdown.hours+'</span></div><div class="single-countdown"><span class="single-countdown__time">%M</span><span class="single-countdown__text">'+window.coutdown.minutes+'</span></div><div class="single-countdown"><span class="single-countdown__time">%S</span><span class="single-countdown__text">'+window.coutdown.seconds+'</span></div>'));
    });
  });
  
  // Style 2
  $('[data-countdown3]').each(function () {
    var $this = $(this),
        finalDate = $(this).data('countdown3');
    $this.countdown(finalDate, function (event) {
      $this.html(event.strftime('<div class="single-countdown"><span class="single-countdown__time">%D</span><span class="single-countdown__text">'+window.coutdown.days+'</span></div><div class="single-countdown"><span class="single-countdown__time">%H</span><span class="single-countdown__text">'+window.coutdown.hours+'</span></div><div class="single-countdown"><span class="single-countdown__time">%M</span><span class="single-countdown__text">'+window.coutdown.minutes+'</span></div><div class="single-countdown"><span class="single-countdown__time">%S</span><span class="single-countdown__text">'+window.coutdown.seconds+'</span></div>'));
    });
  });
  
  // Style 3
  
  $('[data-countdown4]').each(function() {
    var $this = $(this), finalDate = $(this).data('countdown4');
    $this.countdown(finalDate, function(event) {
      $this.html(event.strftime('<div class="single-countdown"><span class="single-countdown__time">%D</span><span class="single-countdown__text">'+window.coutdown.days+'</span></div><div class="single-countdown"><span class="single-countdown__time">%H</span><span class="single-countdown__text">'+window.coutdown.hours+'</span></div><div class="single-countdown"><span class="single-countdown__time">%M</span><span class="single-countdown__text">'+window.coutdown.minutes+'</span></div><div class="single-countdown"><span class="single-countdown__time">%S</span><span class="single-countdown__text">'+window.coutdown.seconds+'</span></div>'));
    });
  });  
 
}
CountDownJs();
// Category Menu Collapse
function catMenuCollapse(){
  $("#categories_title_trigger").on("click", function() {
    $(this).toggleClass('active');
    $('#categories_menu_collapse').slideToggle('medium');
  }); 

};

// Lazloady Js
function lazyLoadjs(){
  $("img.lazyload").lazyload();
};
  


(function ($) {
   	jQuery(document).ready(function(){
      "use strict";

      /*------ Menu sticky and scrol top -------*/
      var windows = $(window);
      var screenSize = windows.width();

      windows.on('scroll', function () {
        var scroll = windows.scrollTop();
		
		//code for scroll top

		if (scroll >= 400) {
			$('.scroll-top').fadeIn();
		} else {
			$('.scroll-top').fadeOut();
		}
       
	});


	/*----------  Scroll to top  ----------*/
	$('.scroll-top').on('click', function () {
		$('html,body').animate({
			scrollTop: 0
		}, 2000);
	});

	
	/*--Masonry Activation  ---*/

		var $masonry = $('.masonry-category-layout');
		var $grid = $('.grid-item');
		$grid.hide();

      if($masonry.length > 0){
		$masonry.imagesLoaded( function() {
			$grid.fadeIn();
			$masonry.masonry({
				itemSelector: '.grid-item',
				columnWidth: '.grid-item--width2',
				percentPosition: true,
				//gutter: 10
			});
		});
      };

      // Creative Home Masonry
      var $gridCreativeHome = $('.grid-item');
      var $masonryCreativeHome = $('.masonry-category-layout--creativehome');
      $gridCreativeHome.hide();    
      
      if($masonryCreativeHome.length > 0){
        $masonryCreativeHome.imagesLoaded( function() {
          $gridCreativeHome.fadeIn();  
          $masonryCreativeHome.masonry({
            itemSelector: '.grid-item',
            columnWidth: 1,
            percentPosition: true,
            //gutter: 30
          });
        });
      };
	
	 /*----------  blog post masonry  ----------*/

      var $masonryBlogPost = $('.blog-post-wrapper--masonry');
      var $gridBlogPost = $('.grid-item');
      $gridBlogPost.hide();
      if($masonryBlogPost.length > 0){
        $masonryBlogPost.imagesLoaded( function() {
          $gridBlogPost.fadeIn();
          $masonryBlogPost.masonry({
            itemSelector: '.grid-item',
            columnWidth: '.grid-item',
            percentPosition: true,
            //gutter: 30
          });
        });
      };

	/*----  WOW JS activation  ------*/
	
	new WOW().init();
      

    /*----------  Parallax active  ----------*/
      var parallax = $('.jarallax');
      if(parallax.length > 0){
        parallax.jarallax({
          speed: 0.2
        });
      };
      
      
      /*----------   Mailchimp  ----------*/
      $('#mc-form-2').ajaxChimp({
        language: 'en',
        callback: mailChimpResponse2,
        // ADD YOUR MAILCHIMP URL BELOW HERE!
        url: window.newsletter.mailchimUrl

      });

      function mailChimpResponse2(resp) {
        if (resp.result === 'success') {
          $('.mailchimp-success-2').html('' + resp.msg).fadeIn(900);
          $('.mailchimp-error-2').fadeOut(400);

        } else if (resp.result === 'error') {
          $('.mailchimp-error-2').html('' + resp.msg).fadeIn(900);
        }
      }

      
      $('#mc-form').ajaxChimp({
        language: 'en',
        callback: mailChimpResponse,
        // ADD YOUR MAILCHIMP URL BELOW HERE!
        url: window.newsletter.mailchimUrl

      });

      function mailChimpResponse(resp) {
        if (resp.result === 'success') {
          $('.mailchimp-success').html('' + resp.msg).fadeIn(900);
          $('.mailchimp-error').fadeOut(400);
          //$('.mc-newsletter-form').addClass('mailSuccess');

        } else if (resp.result === 'error') {
          $('.mailchimp-error').html('' + resp.msg).fadeIn(900);
        }
      }

      
	/*--- instagram image slider ----*/
				
	jQuery(window).on('load', function () {

      if(window.newsletter.newsletterStyle == 'newsletter_style_1' ){
        var newselttershow = window.newsletter.newsletteDisplay;
        var newsletterpopuDelay = window.newsletter.newsletterDelay+"000";
        //console.log(newsletterpopuDelay);

        if (screenSize >= newselttershow) {
          setTimeout(function(){ 
            $('.newsletter-overlay-area').addClass('newsletter-overlay-active');
            $('#newsletter-content').addClass('show-popup');
          }, newsletterpopuDelay);
        }
      }
      
      /*----------  tippy js  ----------*/
      tippy('[data-tippy-content]');
		
	});
      
     /*----------  Newsletter Activation ----------*/
      if(window.newsletter.newsletterStyle == 'newsletter_style_1' ){ 
        var newslettershowmobile = window.newsletter.newsletteDisplay;
        if (screenSize >= newslettershowmobile) {
          $("#newsletter-popup-close-icon").on("click", function(){
            $('.newsletter-overlay-area').removeClass('newsletter-overlay-active').addClass('newsletter-overlay-inactive');
            $('#newsletter-content').removeClass('show-popup').addClass('hide-popup');
          });
        }
      }

      
      /*------  magnific popup -----*/
      var $magnicficpopup = $('.popup-video');

      if($magnicficpopup.length > 0) {
        $magnicficpopup.magnificPopup({
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false
        });
      };
	
	
	/*---- smooth scroll on shoppable Home ------*/
	
	$('#smooth-scroll-section').on('click', function (event) {
		event.preventDefault();
	
		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top - sticky.height() -50
		}, 500);
	});

      /*-----  Quantity Counter  ----*/
      $('.pro-qty').find('.dec, .inc').click(function( e ) {
        var $qty_field = $(this).parent().find('input'),
            $qtCount = parseInt($qty_field.val(), 10) + parseInt(e.currentTarget.className === 'inc' ? 1 : -1, 10);
        $qty_field.val($qtCount).change();
      });
      $('.pro-qty').find("input").change(function() {
        var $this = $(this),
            $min = 1,
            $value = parseInt($this.val(), 10),
            $max = parseInt($this.attr('totalqty'), 10);
        $value = Math.min($value, $max);
        $value = Math.max($value, $min);
        $this.val($value);
      }).on("keypress", function( e ) {
        if (e.keyCode === 13) {
          e.preventDefault();
        }
      });

	/*----- perfect scroll bar active -----*/
	$('.ps-scroll').each(function() {
		if($('.ps-scroll').length) {
			const ps = new PerfectScrollbar($(this)[0]);
		}
	});

	
     
      /*------   Nice Select ------*/
      var $niceSelect = $('.nice-select');  
      if($niceSelect.length > 0){
        $niceSelect.niceSelect();
      }

	/*----- sidebar category dropdown -----*/
	
	var sidebarCategoryParent = $('.single-filter-widget--list--category li.has-children, .single-sidebar-widget--list--category li.has-children');
	sidebarCategoryParent.append('<a href="#" class="expand-icon">+</a>');

	var expandIcon = $('.expand-icon');
	expandIcon.on('click', function(e){
		e.preventDefault();
		$(this).prev('ul').slideToggle();
		var htmlAfter = '-';
		var htmlBefore = '+';


		if ($(this).html() == htmlBefore) {
			$(this).html(htmlAfter);
		} else {
			$(this).html(htmlBefore);
		}
	});

      
      /*----------   Payment method select  ----------*/

      $('[name="payment-method"]').on('click', function () {

        var $value = $(this).attr('value');

        $('.single-method p').slideUp();
        $('[data-method="' + $value + '"]').slideDown();

      });
      /*----------   Shipping form toggle  ----------*/

      $('[data-shipping]').on('click', function () {
        if ($('[data-shipping]:checked').length > 0) {
          $('#shipping-form').slideDown();
        } else {
          $('#shipping-form').slideUp();
        }
      });
	
      
      //grid-color-swatch
      $('.color-container li label, .color-container li .variant_img,.size-container li > span').on('click', function(){
        var variantImage = jQuery(this).parent().find('.variant_img a').attr('href');
        jQuery(this).parents('.single-product').find('.single-product__image > a.image-wrap img').attr({ src: variantImage, srcset: variantImage }); 
        return false;
      });
		
      // Single Product Dynamic Checkout Button
      $('#buy-now-check').on('click', function(){
        $(this).parent('.dynmiac_checkout--button').toggleClass('disabled');
      });
      // Popup Check Terms & Condition
      $('#popup_ageree_term_cond').on('click', function(){
        $(this).parent('.modal-button').toggleClass('disabled');
      });
      // Cart Page
      $('#cart_agree_to_check').on('click', function(){
        $(this).parent('.cart-calculation-button').toggleClass('disabled');
      });
      
    // Countdown JS  
      $('[data-countdown]').each(function() {
        var $this = $(this), finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
          $this.html(event.strftime('<div class="countdown-area"><div class="single-countdown"><div class="count-number">%D</div><div class="count-title">'+window.coutdown.days+'</div></div><div class="single-countdown"><div class="count-number">%H</div><div class="count-title">'+window.coutdown.hours+'</div></div><div class="single-countdown"><div class="count-number">%M</div><div class="count-title">'+window.coutdown.minutes+'</div></div><div class="single-countdown"><div class="count-number">%S</div><div class="count-title">'+window.coutdown.seconds+'</div></div></div>'));
        });
      });
      
      // Sidebar Menu
      $(".sidebar-widget li.active a").removeAttr("href");

      $('.category-sub-menu li.has-sub > a').on('click', function () {
        $(this).removeAttr('href');
        var element = $(this).parent('li');
        if (element.hasClass('open')) {
          element.removeClass('open');
          element.find('li').removeClass('open');
          element.find('ul').slideUp();
        } else {
          element.addClass('open');
          element.children('ul').slideDown();
          element.siblings('li').children('ul').slideUp();
          element.siblings('li').removeClass('open');
          element.siblings('li').find('li').removeClass('open');
          element.siblings('li').find('ul').slideUp();
        }
      }); 
      

  });	  
})(jQuery);


// Add To Cart
if( window.proudctAddCart == 'ajax_spin_cart'){
  $('.ajax-spin-cart').on('click', function() {
    $(this).addClass('loading add-item');
    setTimeout(function () {
      $('.ajax-spin-cart').removeClass('loading');
    },1000);
    setTimeout(function () {
      $('.ajax-spin-cart').removeClass("add-item");
    },2000);
  });
}