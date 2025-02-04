let api_name = "http://ecommerce.reworkstaging.name.ng/v2"
$(document).ready(function(){
    const merchantyyy = JSON.parse(localStorage.getItem("merchantLog_Data"))
    const merchant = merchantyyy.id
    const categoryyy = JSON.parse(localStorage.getItem("category_Data"))
    const categor = categoryyy.id
    const imageyyy = JSON.parse(localStorage.getItem("category_Data"))
    const imag = imageyyy.image
    const nameyyy = JSON.parse(localStorage.getItem("category_Data"))
    const nam = nameyyy.name
    const user_ID = JSON.parse(localStorage.getItem("userLog_Data"))
    const USERID = user_ID.id
    var produ = JSON.parse(localStorage.getItem("prodIDs"))
    var prod = produ.id

    $("#merchId, #merchId2").text(`${merchant}`)
    $("#merchIdcreate").text(`${merchant}`)
    console.log("The merchant Id is", merchant)
    console.log("The created categories are: ", categor)
    
    var merchname = merchantyyy.last_name
    $("#merchantName").text(`${merchname}`)
    //////////////////////////////////////////


    
    ///////////////////////////////////////////////


    

  
    
    /////////////////////////////////////////
    // $('#productRefund').trigger('change')
    // $('#productDiscount2').trigger('change')
    // $('#productShipping').trigger('change')
   /////////////////////////////////////////////
    $("#createProd").click(function(){
        $("#createPage").toggleClass("none block")
    })
    $("#merchantLogout").click(function(){
        window.location.href = "merchantLog.html"
    })

    $("#productRefundText").text("false");
    $("#productDiscount2Text").text("false");
    $("#productShippingText").text("false");

    $("#productRefund").change(function(){
        if ($(this).is(':checked')) {
            $("#productRefundText").text("true");
        } else {
            $("#productRefundText").text("false");
        }
        console.log($(this).is(':checked')); // Logs true or false
    })
    $("#productCurrencyNaira").change(function(){
        if ($(this).is(':checked')) {
            $("#productCurrency").text("Naira");
        } else {
            $("#productDiscount2Text").text("Dollars");
        }
        console.log("Currency: ", $(this).is(':checked')); // Logs true or false
    })
    $("#productDiscount2").change(function(){
        if ($(this).is(':checked')) {
            $("#productDiscount2Text").text("true");
        } else {
            $("#productDiscount2Text").text("false");
        }
        console.log($(this).is(':checked')); // Logs true or false
    })
    $("#productShipping").change(function(){
        if ($(this).is(':checked')) {
            $("#productShippingText").text("true");
        } else {
            $("#productShippingText").text("false");
        }
        console.log($(this).is(':checked')); // Logs true or false
    })
    let locationTextN = $("#locationTextN").val()
    let locationTextG = $("#locationTextG").val()
    let locationTextS = $("#locationTextS").val()
    $("#nigeria").change(function(){
        if ($(this).is(':checked')) {
            $("#locationTextN").text("Nigeria");
        }
        console.log($(this).is(':checked')); // Logs true or false
    })
    $("#ghana").change(function(){
        if ($(this).is(':checked')) {
            $("#locationTextG").text("Ghana");
        }
        console.log($(this).is(':checked')); 
    })
    $("#south_africa").change(function(){
        if ($(this).is(':checked')) {
            $("#locationTextS").text("South Africa");
        }
        console.log($(this).is(':checked')); 
    })


    // $("#submitProduct").click(function(e){
    //     e.preventDefault()

       
    // }) 
    
    $("#createForm").on("submit", function(e){
        e.preventDefault()
        let valid = true

        var titleErr = $('#productNameErr');
        var descpErr = $("#productDescpErr");
        var priceErr = $("#productPriceErr");
        var brandErr = $("#brandNameErr");
        var quantityErr = $("#productQuantityErr");
        var imagesErr = $("#productImageErr");
        var currencyErr = $("#productCurrencyErr");
        var min_qtyErr = $("#productMinQuantityErr");
        var max_qtyErr = $("#productMaxQuantityErr");
        
        var title = $("#productName").val()
        var descp = $("#productDescp").val()
        var price = $("#productPrice").val()
        var brand = $("#brandName").val()
        var quantity = $("#productQuantity").val()
        var images = $("#productImage").val()
        var currency = $("#productCurrency").text()
        var min_qty = $("#productMinQuantity").val()
        var max_qty = $("#productMaxQuantity").val()
        var discount = $("#productDiscount").val()
        var refund_policy = $("#productRefundText").text()
        var discount2 = $("#productDiscount2Text").text()
        var shipment = $("#productShippingText").text()
        var shipping_locations = [$("#locationTextN").text(), $("#locationTextG").text(), $("#locationTextS").text()]
        var productOrigin = $("#productOrigin").val()
        var productBrandName = $("#productBrandName").val()
        var productMidsoleCategory = $("#productMidsoleCategory").val()
        var productSeason = $("#productSeason").val()
        var productGender = $("#productGender").val()
        var productSupplyAbility = $("#productSupplyAbility").val()
        var productCategoryID = $("#productCategoryID").val()
        var currentMerchantID = $("#currentMerchantID").val()



        

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
            "discount": discount,
            "discount_expiration": "",
            "has_refund_policy": refund_policy,
            "has_discount": discount2,
            "has_shipment": shipment,
            "has_variation": "false",
            "shipping_locations": shipping_locations,
            // "attrib": "",
            "attrib": [
                {
                "type": "Other",
                "content": [
                    {"name": "Place of Origin",
                        "value": productOrigin
                    },
                    {"name": "Brand Name",
                        "value": productBrandName
                    },
                    {"name": "Midsole Category",
                        "value": productMidsoleCategory
                    },
                    {"name": "Season",
                        "value": productSeason
                    },
                    {"name": "Gender",
                        "value": productGender
                    },
                ]
                },
                {
                "type": "Supply Ability" ,
                "content": [
                    {"name": "Supply Ability",
                        "value": productSupplyAbility
                    }
                ]
                }
            ],
            "category_id": productCategoryID,
            "merchant_id": currentMerchantID
        }


        if(title == ""){
            valid = false
            titleErr.text("title cannot be empty")
        }
        if(descp == ""){
            valid = false
            descpErr.text("product description cannot be empty")
        }
        if(price == ""){
            valid = false
            priceErr.text('please enter a valid price')
        }
        
        if(brand == ""){
            valid = false
            brandErr.text('brand name cannot be empty')
        }
        if (quantity == ""){
            valid = false
            quantityErr.text('please select a quantity')
        }
        if(images == ""){
            valid = false
            imagesErr.text('please upload a product image')
        }
        if(currency == ""){
            valid = false
            currencyErr.text('please select your currency')
        }
        if(min_qty == ""){
            valid = false
            min_qtyErr.text('minimum quantity cannot be empty')
        }
        if(max_qty == ""){
            valid = false
        max_qtyErr.text('maximum quantity cannot be empty')
        }
        else{
            valid = true
            $.ajax({
                method: "POST",
                url: `${api_name}/products`,
                contentType: 'application/json',
                data: JSON.stringify(productData),
                success: function(res){  
                    console.log(res)
                    if(res.code === 404){
                        alert("Error 404, Check your details again");
                    }
                    else{
                        alert("Posted Product Successfully");
                        
                        var prodIDs;
                        try {
                            prodIDs = JSON.parse(localStorage.getItem('prodIDs')) || [];
                        } catch (e) {
                            console.error("Failed to parse prodIDs:", e);
                            prodIDs = [];
                        }

                        // var prodIDs = JSON.parse(localStorage.setItem('prodIDs')) || [];
                        // alert("prodIds was created successfully")
                        if (res.id) {
                            prodIDs.push(res.id);
                            localStorage.setItem('prodIDs', JSON.stringify(prodIDs));
                            console.log('Success with posting product', res);
                            localStorage.setItem('productData', JSON.stringify(res));
                        } else {
                            console.error('Invalid response ID:', res.id);
                        }
                        // prodIDs.push(res.id);
                        // localStorage.setItem('prodIDs', JSON.stringify(prodIDs));
                        // console.log('Success with posting product',res)
                        // localStorage.setItem('productData', JSON.stringify(res))                
                    } 
                },
                error: function(err) {
                    console.log(err);
                    alert("An error occurred. Please try again.");
                }
            })
            
        }
        
    })  

    $("#showProducts").click(function(){
        $("#allProducts").toggleClass("block none")
        var allprodIDs = JSON.parse(localStorage.getItem('prodIDs')) || [];
        if (allprodIDs.length === 0) {
            alert("No products found.");
            return;
        }
        $.ajax({
            url: `${api_name}/products?merchant_id=${merchant}`,
            method: "GET",
            // data: JSON.stringify(productData),
            success: function(res){
                // $("#").empty();
                if (Array.isArray(res.data)) {
                res.data.forEach((pro) => {   
                    console.log("All good so far")
                    $("#allProducts").append(
                        `
                            <div data-id=${pro.id} class="appendProd" style="background-color: rgb(51, 34, 3); border-radius: 10px; height: 320px; padding: 0 20px; margin-bottom: 50px; box-shadow: 1px 1px 10px gray; color:white;">
                                <div class="prodDetail" style="font-size: 2rem; text-decoration: underline; display: flex; flex-direction: row; justify-content: space-between;">
                                    <p>Product Title: ${pro.title}</p>
                                    <p class= "deleTe">X</p>
                                </div>
                                <div class="productSlide" style="margin-left: 50px">
                                    <img style="width: 200px; height: 200px; object-fit: cover; object-position: center;" src="${pro.image}" alt="IMAGES">
                                    <label style="text-align: center; font-size: 1rem;" for="">This product is called: ${pro.title}</label>
                                </div>
                                <div style="text-align: right;">
                                    <p id="categoryID" style="margin-bottom: 10px;">The category ID is: ${pro.id} </p>
                                </div>
                            </div>
                                  `)
                                  
                    // $("#allContent").append(
                    //     `
                    //         <div data-id=${pro.id}>
                    //             <div class="prodDetail" style="font-size: 2rem; text-decoration: underline; display: flex; flex-direction: row; justify-content: space-between;">
                    //                 <p>Category: ${pro.title}</p>
                    //                 <p id=${pro.id}>X</p>
                    //             </div>
                    //             <div class="productSlider">
                    //                 <img style="width: 300px; height: 350px; object-fit: cover; object-position: center;" src="${pro.image}" alt="IMAGES">
                    //                 <label style="text-align: center; font-size: 1rem;" for="">${pro.title}</label>
                    //             </div>
                    //             <div style="text-align: right;">
                    //                 <p id="categoryID">The category ID is: ${pro.id} </p>
                    //             </div>
                    //         </div>
                    //               `)
                                  
                    })
                   
                }
                else {
                    console.error('Expected array but got:', res);
                    console.log(res)
            }
            },
            error: function(err) {
                console.log(err);
                alert("An error occurred. Please try again.");
            }
        })
    })
    $("#loadProducts").click(function(){
        $("#loadProducts").hide()
        $("#allProducts").toggleClass("block none")
        var allprodIDs = JSON.parse(localStorage.getItem('prodIDs')) || [];
        if (allprodIDs.length === 0) {
            alert("No products found.");
            return;
        }
        $.ajax({
            url: `${api_name}/products?merchant_id=${merchant}`,
            method: "GET",
            // data: JSON.stringify(productData),
            success: function(res){
                // $("#").empty();
                if (Array.isArray(res.data)) {
                res.data.forEach((pro) => {   
                    console.log("All good so far")
                    $("#allContent").append(
                        `<div class="A-left" data-id=${pro.id} >
                            <div>
                                <div class="productSlider" data-id=${pro.id}>
                                    <img src="${pro.image}" style="width: 450px;" alt="IMAGES">
                                </div>
                                <div class="stars">
                                    <img src="images/rating.png" alt="IMAGES">
                                    <h3>Best Seller  4.5(${pro.quantity})</h3>
                                </div>
                                <div class="prodDetail" data-id= ${pro.id}>
                                    <p>${pro.title}</p> 
                                    <p >$${pro.price}</p>
                                    <p >${pro.descp}</p>
                                </div>
                                <div class="A-disppearingCart none" data-id = ${pro.id}">
                                    <h2>ADD TO BAG</h2>
                                </div>
                            </div>

                            

                                  `)
                                  
                    })
                   
                }
                else {
                    console.error('Expected array but got:', res);
                    console.log(res)
            }
            },
            error: function(err) {
                console.log(err);
                alert("An error occurred. Please try again.");
            }
        })
    })
   
    $(".prodDetail").hover(
        function() {
            $(this).closest(".A-left").find(".A-disppearingCart").removeClass("none");
        },
        function() {
            $(this).closest(".A-left").find(".A-disppearingCart").addClass("none");
        }
    );
    
        
    $("#otherBtn").click(function(){
        $("#otherDrop").toggleClass("none block")
    })
    

    $("#createCategory").click(function(){
        $("#categoryPage").toggleClass("none block")
    })
    
    $("#categoryForm").on("submit", function(e){
        e.preventDefault()
        let valid = true
        var catMerchName = $("#catMerchName").val()
        var categoryName = $("#categoryName").val()
        var categoryImage = $("#categoryImage").val()

        category_Data = {
            "merchant_id": catMerchName,
            "name": categoryName,
            "image": categoryImage
        }
        $.ajax({
            url: `${api_name}/categories`,
            method: "POST",
            data: category_Data,
            success: function(res){  
                console.log(res)
                if(valid){
                    alert("Created category Successfully");
                    var categoryIDs = JSON.parse(localStorage.getItem('categoryIDs')) || [];
                    categoryIDs.push(res.id);
                    localStorage.setItem('categoryIDs', JSON.stringify(categoryIDs));
                    window.location.href = "dashboard.html"
                    console.log('Success with creating category', res)
                    localStorage.setItem('category_Data', JSON.stringify(res))                
                } 
            },
            error: function(err) {
                console.log(err);
                alert("An error occurred. Please try again.");
            }
        })
    })
    $("#showCategories").click(function(){
        $("#allCategories").toggleClass("none block")
        var allCatIDs = JSON.parse(localStorage.getItem('categoryIDs')) || [];
        if (allCatIDs.length === 0) {
            alert("No categories found.");
            return;
        }
        $.ajax({
            url: `${api_name}/categories?merchant_id=${merchant}`,
            method: "GET",
            success: function(res){
                // $("#tags").empty();
                res.forEach((cat) => {
                    if (allCatIDs.includes(cat.id)) {
                        $("#allCategories").append(
                            `
                                <div data-id=${cat.id} class="appendCategory">
                                    <div style="font-size: 2rem; text-decoration: underline; display: flex; flex-direction: row; justify-content: space-between;">
                                        <p>Category: ${cat.name}</p>
                                        <p class= "deleTe" style="cursor: pointer;">X</p>
                                    </div>
                                    <div>
                                        <img style="width: 300px; height: 350px; object-fit: cover; object-position: center;" src="${cat.image}" alt="IMAGES">
                                        <label style="text-align: center; font-size: 1rem;" for="">${cat.name}</label>
                                    </div>
                                    <div style="text-align: right;">
                                        <p id="categoryID">The category ID is: ${cat.id} </p>
                                    </div>
                                </div>
                            `
                        );
                    }
                })
            }, 
            error: function(err) {
                console.log(err);
                alert("An error occurred. Please try again.");
            }
                    
        })
    })



///////////////////////////////////////////////////////////////
    
    $(document).on("click", ".deleTe", function(e){
        var categor = $(".appendCategory").data("id")
        e.preventDefault();
        $.ajax({
            url: `${api_name}/categories/${categor}`,
            method: "DELETE",
            success: function(res){
                alert("Category has been removed")
                $(`.appendCategory[data-id=${categor}]`).remove();
            },
            error: function(xhr, status, error) {
                console.error("An error occurred: ", status, error);
            }
        })
    })
    $("#changePassword").click(function(){
        $("#passwordChange").toggleClass("none show")
    })
    $("#merchantPasswordForm").on("submit", function(e){
        e.preventDefault()
        var oldpassword = $("#merchantpassword1").val()
        var newpassword = $("#merchantpassword2").val()

        let merchantPasswords = {
            "old_password": oldpassword,
            "new_password": newpassword
        }
        $.ajax({
            url: `${api_name}/merchants/${merchant}/change-passwd`,
            method: "PUT",
            data: JSON.stringify(merchantPasswords),
            contentType: "application/json",
            success: function(res){
                if(res === 404){
                    alert("Error 404, Password Mismatch")
                }
                else{
                    alert("Password updated Successfully!")
                    localStorage.setItem('merchantPasswords', JSON.stringify(res)) || [];
                }
            },
            error: function(err) {
                console.log(err);
                alert("An error occurred. Please try again.");
            }
        })
    })
    
})