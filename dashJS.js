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

    $("#merchId").text(`${merchant}`)
    $("#merchIdcreate").text(`${merchant}`)
    console.log("The merchant Id is", merchant)
    console.log("The created categories are: ", categor)
    
    var merchname = merchantyyy.last_name
    $("#merchantName").text(`${merchname}`)
    //////////////////////////////////////////


    $("#editProd").click(function(){
        $("#editPage").toggleClass("none show")
    })
    ///////////////////////////////////////////////


    var editFirstName = $("#editFirstName").val()
    var editLastName = $("#editLastName").val()
    var editEmail = $("#editEmail").val()
    var editPhoneNumber = $("#editPhoneNumber").val()
    var editStoreName = $("#editStoreName").val()
    var editDescription = $("#editDescription").val()
    let editPhoneNumbers = [$("#editPhoneNumbers")]


   $("#editForm").on("submit", function(e){
        e.preventDefault()
        let valid = true
        var updatedMerchant_Info = {
            "first_name":editFirstName,
            "last_name":editLastName,
            "email":editEmail,
            "phone":editPhoneNumber,
            "store_name":editStoreName,
            "descp":editDescription,
            "icon":"",
            "banner":"",
            "state": "",
            "district": "",
            "social_media": {
                "x": "",
                "face_book":"",
                "instagram": ""
            },
            "phones":editPhoneNumbers
        }
        $.ajax({
            url: `${api_name}/merchants/${merchant}`,
            method: "PUT",
            contentType: 'application/json',
            data: updatedMerchant_Info,
            success: function(res) {
                console.log(res);
                if (res.code === 404) {
                    valid = false
                    alert("Error 404, Check your details again");
                } else {
                    valid = true
                    alert("Edited merchant information successfully");
                    console.log('Success with posting product', res);
                    localStorage.setItem('updatedMerchant_Info', JSON.stringify(updatedMerchant_Info));
                    window.location.href = "merchantLog.html";
                }
            },
            error: function(err) {
                console.log(err);
                alert("An error occurred. Please try again.");
            }
        })
   })
    
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
                            <div data-id=${pro.id} class="appendCategory">
                                <div class="prodDetail" style="font-size: 2rem; text-decoration: underline; display: flex; flex-direction: row; justify-content: space-between;">
                                    <p>Category: ${pro.title}</p>
                                    <p id=${pro.id}>X</p>
                                </div>
                                <div class="productSlider">
                                    <img style="width: 300px; height: 350px; object-fit: cover; object-position: center;" src="${pro.image}" alt="IMAGES">
                                    <label style="text-align: center; font-size: 1rem;" for="">${pro.title}</label>
                                </div>
                                <div style="text-align: right;">
                                    <p id="categoryID">The category ID is: ${pro.id} </p>
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
                                        <p id=${cat.id}>X</p>
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
    $("#userDetailEdit").click(function(){
        $("#updateUserForm").toggleClass("none block")
    })

    $("#updateUserForm").on("submit", function(e){
        e.preventDefault()
        let valid = true
        var firstname = $("#updateUserFirstName").val()
        var surname = $("#updateUserSurName").val()
        var email = $("#updateUserEmail").val()
        var phone = $("#updateUserPhone").val()

        let updateUser_Data = {
            "first_name":firstname,
            "last_name": surname,
            "email":email,
            "phone":phone
        }
        $.ajax({
            url: `${api_name}/users/${USERID}`,
            method: "PUT",
            contentType: "application/javascript",
            data: JSON.stringify(updateUser_Data),
            success: function(res){
                if(res.code === 404){
                    alert("Error 404, Details not found")
                }
                else{
                    alert("Updated Successfully!")
                    localStorage.setItem('updateUser_Data', JSON.stringify(res));
                    // const user_ID = JSON.parse(localStorage.getItem("userLog_Data"))
                    // user_ID.first_name = updateUser_Data.first_name;
                    // user_ID.last_name = updateUser_Data.last_name;
                    // user_ID.email = updateUser_Data.email;
                    // user_ID.phone = updateUser_Data.phone;

                    // localStorage.setItem('updateUser_Data', JSON.stringify(updateUser_Data));
                }
            },
            error: function(err) {
                console.log(err);
                alert("An error occurred. Please try again.");
            }


        })
    })    
    
})