let api_name = "http://ecommerce.reworkstaging.name.ng/v2"
$(document).ready(function(){
    $("#createProd").click(function(){
        $("#createPage").toggleClass("none block")
    })
    $("#merchantLogout").click(function(){
        window.location.href = "merchantLog.html"
    })
    $("#submitProduct").click(function(e){
        e.preventDefault()
        
        var title = $("#productName").val()
        var descp = $("#productDescp").val()
        var price = $("#productPrice").val()
        var brand = $("#brandName").val()
        var quantity = $("#productQuantity").val()
        var images = $("#productImage").attr('src')
        var currency = $("#productCurrency").val()
        var min_qty = $("#productMinQuantity").val()
        var max_qty = $("#productMaxQuantity").val()

        var titleErr = $('#productNameErr');
        var descpErr = $("#productDescpErr");
        var priceErr = $("#productPriceErr");
        var brandErr = $("#brandNameErr");
        var quantityErr = $("#productQuantityErr");
        var imagesErr = $("#productImageErr");
        var currencyErr = $("#productCurrencyErr");
        var min_qtyErr = $("#productMinQuantityErr");
        var max_qtyErr = $("#productMaxQuantityErr");


        if(title == ""){
            titleErr.text("title cannot be empty")
        }
        else{
            titleErr.text("")
        }
        if(descp == ""){
            descpErr.text("product description cannot be empty")
        }
        else{
            descpErr.text("")
        }
        if(price == ""){
            priceErr.text('please enter a valid price')
        }
        else{
            priceErr.text("")
        }
        if(brand == ""){
            brandErr.text('brand name cannot be empty')
        }
        else{
            brandErr.text("")
        }
        if (quantity == ""){
            quantityErr.text('please select a quantity')
        }
        else{
            quantityErr.text("")
        }
        if(images == ""){
            imagesErr.text('please upload a product image')
        }
        else{
            imagesErr.text("")
        }
        if(currency == ""){
            currencyErr.text('please select your currency')
        }
        else{
            currencyErr.text("")
        }
        if(min_qty == ""){
            min_qtyErr.text('minimum quantity cannot be empty')
        }
        else{
            min_qtyErr.text("")
        }
        if(max_qty == ""){
        max_qtyErr.text('maximum quantity cannot be empty')
    }else{
        max_qtyErr.text("")
    }

        
        
            alert("Success")
            var productData = {
                "title": title,
                "descp": descp,
                "price": price,
                "brand": brand,
                "quantity": quantity,
                "images": images,
                "currency": currency,
                "min_qty": min_qty,
                "max_qty": max_qty,
                // "discount": $("#productDiscount").val(),
                // "discount_expiration": parseInt($("#productDiscountDate")).val(),
                // "has_refund_policy": $("#productRefund").attr(),
                // "has_refund_policy": $("#productMaxQuantity").val(),
                // // "has_discount": $("#productDiscount2").attr(),
                // "has_discount": $("#productMaxQuantity").val(),
                // // "has_shipment": $("#productShipping").attr(),
                // "has_shipment": $("#productMaxQuantity").val(),
                // "has_variation": 
                // "shipping_locations": [{
    
                // }],
                // "attrib": [
                //     {
                //     "type": {},
                //     "content": [{},{}],
                //     "type": {} ,
                //     "content": [{}]
                //     }
                // ],
                // "category_id": {},
                // "merchant_id": JSON.parse(localStorage.getItem("merchantLog_Data")).id
            }
            localStorage.setItem('productData', JSON.stringify(productData))                
            // $.ajax({
            //     method: "POST",
            //     url: `${api_name}/products`,
            //     data: productData,
            //     success: function(res){  
            //         console.log(res)
            //         if(res.code === 404){
            //             alert("Error 404, Check your details again");
            //         }
            //         else{
            //             alert("Posted Product Successfully");
            //             window.location.href = "page1.html"
            //             console.log('Success with posting product',res)
            //             localStorage.setItem('productData', JSON.stringify(res))                
            //         } 
            //     },
            //     error: function(err) {
            //         console.log(err);
            //         alert("An error occurred. Please try again.");
            //     }
            // })
        
        
    })
})