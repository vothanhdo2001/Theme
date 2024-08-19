/* override functions api.jquery.js */
Shopify.onItemAdded = function(line_item) {
  Shopify.getCart();
};

Shopify.onCartUpdate = function(cart) {
  Shopify.cartUpdateInfo(cart, '.single-cart-item-loop');
};

Shopify.onError = function(XMLHttpRequest, textStatus) {
  var data = eval('(' + XMLHttpRequest.responseText + ')');
  if (!!data.message) {
    var str = data.description;
  } else {
   	var str = 'Error : ' + Shopify.fullMessagesFromErrors(data).join('; ') + '.';
  }
  jQuery('.error_message').text(str);
  jQuery('#modalAddToCartError').modal("toggle");
  setTimeout(function () {
  	jQuery('.shopping__cart').removeClass("shopping__cart__on");
    jQuery('.body__overlay').removeClass("is-visible");
  },2000);
}


// function test(a){
//   let testAddCart = a.parentElement.parentElement.parentElement.querySelector('.test__add_qty');
// }

Shopify.addItem = function(variant_id, quantity, callback){
  var quantity = quantity || 1;
  var params = {
    type: 'POST',
    url: '/cart/add.js',
    data: 'quantity=' + quantity + '&id=' + variant_id,
    dataType: 'json',
    success: function(line_item) {
      if ((typeof callback) === 'function') {
        callback(line_item);
      }
      else {
        Shopify.cartPopap(variant_id);
        Shopify.onItemAdded(line_item);
      }
    },
    error: function(XMLHttpRequest, textStatus) {
      Shopify.onError(XMLHttpRequest, textStatus);
    }
  };
  jQuery.ajax(params);
};

Shopify.addItemFromForm = function(form_id, variant_id,callback) {
    var params = {
      type: 'POST',
      url: '/cart/add.js',
      beforeSend: function(){
        if(form_id == "add-item-qv") {
          jQuery('#' + form_id).find(".addtocartqv").html(jQuery(".quickViewModal_info .button_wait").html());
        }
      },
      data: jQuery('#' + form_id).serialize(),
      dataType: 'json',
      success: function(line_item) {
        if ((typeof callback) === 'function') {
          callback(line_item);
        }
        else {
          if(form_id != "add-item-qv") {
            Shopify.cartPopapForm(variant_id);
          } else {
          	jQuery('#' + form_id).find(".addtocartqv").html(jQuery(".quickViewModal_info .button_added").html());
            jQuery('#' + form_id).find(".addtocartqv").addClass("added_in_cart");
            setTimeout(function(){
              	jQuery('#' + form_id).find(".addtocartqv").removeClass("added_in_cart");
            	jQuery('#' + form_id).find(".addtocartqv").html(jQuery(".quickViewModal_info .button").html());
            }, 2000);
          }
          Shopify.onItemAdded(line_item);
        }
      },
      error: function(XMLHttpRequest, textStatus) {
        if(form_id != "add-item-qv") {
          Shopify.onError(XMLHttpRequest, textStatus);
        } else {
          jQuery('#' + form_id).find(".addtocartqv").html(jQuery(".quickViewModal_info .button_error").html());
          jQuery('#' + form_id).find(".addtocartqv").addClass("error_in_cart");
          setTimeout(function(){
            jQuery('#' + form_id).find(".addtocartqv").removeClass("error_in_cart");
            jQuery('#' + form_id).find(".addtocartqv").html(jQuery(".quickViewModal_info .button").html());
          }, 2000);
        }
        Shopify.onItemAdded(line_item);
      }
    };
    jQuery.ajax(params);
};

/* user functions */

Shopify.addItemFromFormStart = function(form, product_id) {
  Shopify.addItemFromForm(form, product_id);
}

Shopify.cartPopap = function(variant_id) {
  	var image = jQuery('.'+variant_id+':first .popup_cart_image').attr("data-srcset");
  	var title = jQuery('.'+variant_id+':first .popup_cart_title').text();
   // var propPrice = jQuery('#product_current_price').text();
  	jQuery('.popupimage').attr("src",''+image+'');
  	jQuery('.productmsg').html(title);  
    //jQuery('.pop_current_price').text('"'+ propPrice +'"');
  	jQuery('#modalAddToCart').modal("toggle");
}
Shopify.cartPopapForm = function(variant_id) {
  	var image = jQuery('.product_variant_image').attr("src");
  	var title = jQuery('#popup_cart_title').text();
  	jQuery('.popupimage').attr("src",''+image+'');
	jQuery('.productmsg').html(title); 
	jQuery('#modalAddToCart').modal("toggle");
}

Shopify.cartUpdateInfo = function(cart, cart_cell_id) {
  var formatMoney = window.money_format;
  if ((typeof cart_cell_id) === 'string') {
    var cart_cell = jQuery(cart_cell_id);
    if (cart_cell.length) {
      cart_cell.empty();
      jQuery.each(cart, function(key, value) {
        if (key === 'items') {
          
          if (value.length) {
            jQuery(".single-product-cart, .item-multiple-item-count,.cart-product-wrapper").css({"display": "block"});
            jQuery(".single-cart-product.empty , .item-single-item-count").css({"display": "none"});
            
            var table = jQuery(cart_cell_id);
            jQuery.each(value, function(i, item) {
              if(i > 19){
                  return false;
              }
              jQuery('<div class="single-cart-product"> <span class="cart-close-icon"> <a href="javascript:void(0);" onclick="Shopify.removeItem(' + item.variant_id + ')"><i class="ti-close"></i></a> </span><div class="image"> <a href="' + item.url + '"> <img src="' + item.image + '" class="img-fluid" alt=""> </a></div><div class="content"><h5><a href="' + item.url + '">' + item.title + '</a></h5><p><span class="cart-count">' + item.quantity + ' x </span> <span class="discounted-price">' + Shopify.formatMoney(item.price, formatMoney) + '</span></p></div></div>').appendTo(table);
            });
          }
          else {
            jQuery(".single-product-cart, .item-single-item-count,.cart-product-wrapper").css({"display": "none"});
            jQuery(".single-cart-product.empty").css({"display": "block"});
          }
        }
      });

      
    }
  }

  changeHtmlValue(".shopping-cart__total", Shopify.formatMoney(cart.total_price, formatMoney));
  changeHtmlValue(".bigcounter", cart.item_count);

  jQuery('.currency .active').trigger('click');
}

//Utils
function changeHtmlValue (cell, value) {
  var $cartLinkText = jQuery(cell);
  $cartLinkText.html(value);
};