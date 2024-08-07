let api_name = "http://ecommerce.reworkstaging.name.ng/v2"
$(document).ready(function(){
    const merchantyyy = JSON.parse(localStorage.getItem("merchantLog_Data"))
    const merchant = merchantyyy.id
    const merchname = merchantyyy.last_name
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
    const clickedd = JSON.parse(localStorage.getItem("clickedProduct"))
    const productguy = JSON.parse(localStorage.getItem("productData"))
    ///////////////////////////////////////////
    $("#merchId, #merchId2").text(`${merchant}`)
    $("#merchIdcreate").text(`${merchant}`)
    $("#merchantName").text(`${merchname}`)
    $("#menuIndicator").text("")
    //////////////////////////////////////////
    ////////////PRODUCT///////////////////////
    $("#createProd").click(function(){
        $("#createPage").toggleClass("none block")
    })
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
        $("#menuIndicator").text("All Products")
        $("#allProducts").toggleClass("none gridd")
        $("#allProducts").empty()
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
                            <div data-id=${pro.id} class="appendProd" style=" width: 100%; background-color: white-smoke; border-bottom: 1px solid black; height: 250px; margin-bottom: 50px; box-shadow: 1px 1px 10px gray; color: black;">
                                <p class= "deleTe" style="top: 5px; text-align: right; position: relative; margin-bottom: 0; margin-right: 10px; color: brown;">X</p>
                                <div class="" style="margin-left: 20px; display: flex; flex-direction: row; top: 5px; gap: 20px;">
                                    <div><img style="width: 200px; height: 200px; object-fit: cover; object-position: center;" src="${pro.image}" alt="IMAGES"></div>
                                    <div style="display: flex; text-align: left; margin-top: 30px; flex-direction: column;">
                                        <label style="display: flex; font-size: 1rem; margin-top: 10px;" for="">Name: ${pro.title}</label>
                                        <label style="display: flex; font-size: 1rem; margin-top: 10px;" for="">Quantity in stock: ${pro.quantity}</label>
                                        <label style="display: flex; font-size: 1rem; margin-top: 10px;" for="">Price: $${pro.price}</label>
                                        <p id="categoryID" style="margin-bottom: 10px;">Category ID: ${pro.id} </p>
                                    </div>
                                    
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
    $(document).on("hover", ".prodDetail",
    function() {
        $(this).closest(".A-left").find(".A-disppearingCart").removeClass("none");
    },
    function() {
        $(this).closest(".A-left").find(".A-disppearingCart").addClass("none");
    }
    );
    $(document).on("click", ".A-left", function(){
        var product = $(this).data("id")
        
        $.ajax({
            url: `${api_name}/products/${product}`,
            method: "GET",
            success: function(p){
                // console.log(productss)
            
                alert("So this happened")
                localStorage.setItem("clickedProduct", JSON.stringify(p))
                window.location.href = `page2.html?id=${product}`               
                
            },
            error: function(error){
                console.log("error")
            }
        })
    })
    var productinfo = localStorage.getItem("clickedProduct")
    if(productinfo){
        var p = JSON.parse(productinfo)
        $("#B-head").append( `
                <div class="B-leftSideImages">
                    <img src="${p.images}" alt="IMAGES">     
                </div>
                
                <div class="B-catalog"> 
                    <div class="B-productSlider" data-id= ${p.id}">
                        <img src="${p.images}" alt="IMAGES">
                    </div>    
                </div> 

                <div class="B-Data">
                    <div class="B-stars">
                        <img src="images/rating.png" alt="IMAGES">
                        <h3>Write a review</h3>
                    </div>
                    <div>
                        <div>
                            <form id="reviewForm ">
                                <textarea id="reviewNote" style="width: 80%; padding: 10px; height: 100px;"></textarea>
                                <button id="reviewSubmit" type= "submit">Submit</button>
                            </form>
                        </div>
                    </div>
                    <div class="B-prodDetail">
                        <p><h2>${p.title}</h2></p> 
                        <p>${p.descp}</p>
                        <p>$${p.price} VALUE</p>
                        <p>*Excluded from promotions</p>
                        <div class="B-grand">
                            <div class="B-cart" id="B-cart${p.id}">
                                <h2>ADD TO BAG</h2>
                            </div>
                        </div>
                        <hr style="height: .1px; width: 100%; background-color: black;">
                    </div>
                    <div class="B-drop">
                        <div class="cli">
                            <h4>WHAT IT IS</h4>
                            <div style="display: flex; flex-direction: row; justify-content: center; align-items: center;">
                                <button class="showBtn" id="showB1">+</button>
                                <button class="collapseBtn none" id="collB1">-</button>
                            </div>
                        </div>
                        <div class="conten" id="conten1">
                            Rough, bumpy skin? No thanks. This supremely satisfying skin smoothing duo combines forces to leave your skin absolutely silky. Start with our spa-grade Lemon & Sage Body Polish, packed with gritty goodness from real natural Sea Salt, to help slough away dead skin while gently exfoliating and purifying. Then, layer on Lemon & Sage Body Butter to lock in the smoothness.
                
                            - Clean, cruelty-free and vegan
                        </div>
                        <hr style="height: .1px; width: 100%; background-color: black;">
                        <div class="cli">
                            <h4>HOW TO USE</h4>
                            <div style="display: flex; flex-direction: row; justify-content: center; align-items: center;">
                                <button class="showBtn" id="showB2">+</button>
                                <button class="collapseBtn none" id="collB2">-</button>
                            </div>
                        </div>
                            
                        </div>
                        <hr style="height: .1px; width: 100%; background-color: black;">
                        <div class="cli">
                            <h4>KEY INGREDIENTS</h4>
                            <div style="display: flex; flex-direction: row; justify-content: center; align-items: center;">
                                <button class="showBtn" id="showB3">+</button>
                                <button class="collapseBtn none" id="collB3">-</button>
                            </div>  
                        </div>
                        
                        <hr style="height: .1px; width: 100%; background-color: black;">
                        <div class="cli">
                            <h4>PAIRS WELL WITH</h4>
                            <div style="display: flex; flex-direction: row; justify-content: center; align-items: center;">
                                <button class="showBtn" id="showB4">+</button>
                                <button class="collapseBtn none" id="collB4">-</button>
                            </div>
                        </div>
                        
                        <hr style="height: .1px; width: 100%; background-color: black;">
                    </div>
                
                </div>
            `)

            
    }
    $("#reviewForm").on("submit", function(){
        let reviews = $("#reviewNote").val()
        let product_id = productguy.id
        let user_id = user_ID

        data = {
            "user_id": user_id,
            "product_id": product_id,
            "text": reviews
        }

        $.ajax({
            url: `${api_name}/reviews`,
            method: "POST",
            data: data,
            contentType: "application/json",
            success: function(res){
                if(res.code === 404){
                    alert("Network Error")
                }
                else{
                    alert("Thanks for your feedback!")
                    $("#reviewDiv").append(
                        `
                        <div data-id = ${res.id}>
                            <div class="lastDiv-Left">
                                <div><h2>${res.name}</h2></div>
                            </div>
                            <div class="lastDiv-Mid">
                                <div class="Mid-right">
                                    <div>
                                        <img src="images/favorite.png" alt="IMAGES">
                                        <img src="images/favorite.png" alt="IMAGES">
                                        <img src="images/favorite.png" alt="IMAGES">
                                        <img src="images/favorite.png" alt="IMAGES">
                                        <img src="images/favorite.png" alt="IMAGES">
                                    </div>
                                    <div class="margin-0">
                                        <h2><b>USE, USE USE!</b></h2>
                                        <h3><p>${res.text}</p></h3>
                                    </div>
                                    <div class="helpful">
                                        <p>Helpful?</p>
                                        <p>(0)</p>
                                        <p>(0)</p>
                                        <p>Report</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `
                    )
                }
                localStorage.setItem("reviews", JSON.stringify(res))    
                
            }
        })
    })
//     <div class="B-quantity">
//     <button id="subB${p.id}">-</button>
//     <h4 id="B-quanInput${p.id}">1</h4>
//     <button id="addB${p.id}">+</button>
// </div>
    $(document).on("click", `.deleTe${productguy.id}`, function(e){
        var prod = $(".appendProd").data("id")
        e.preventDefault();
        $.ajax({
            url: `${api_name}/products/${productguy.id}`,
            method: "DELETE",
            success: function(p){
                alert("Product has been removed")
                $(`.appendProd[data-id=${p.id}]`).remove();
            },
            error: function(xhr, status, error) {
                console.error("An error occurred: ", status, error);
            }
        })
    })
    ///////////////////////////////////////////////
    ///////////////////////////////////////////////

   

  
    
    /////////////////////////////////////////
    // $('#productRefund').trigger('change')
    // $('#productDiscount2').trigger('change')
    // $('#productShipping').trigger('change')
   /////////////////////////////////////////////
    
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
    
    
   
   /////////////////////////////////////////////////
   /////////////Collapse and Reveal buttons////////
        $("#showB1").hide()
        $("#conten1").hide()
        $("#showB1").click(
        function(){
             $("#showB1").hide()
             $("#collB1").show()
             $("#conten1").toggle()  
        })
       $("#collB1").click(
        function(){
             $("#showB1").show()
             $("#collB1").hide()
             $("#conten1").toggle()          
       })

       $("#showB2").hide()
       $("#showB2").click(
        function(){
             $("#showB2").hide()
             $("#collB2").show()
             $("#conten2").toggle()          
       })
       $("#collB2").click(
        function(){
             $("#showB2").show()
             $("#collB2").hide()
             $("#conten2").toggle()          
       })

       $("#showB3").hide()
       $("#showB3").click(
        function(){
             $("#showB3").hide()
             $("#collB3").show()
             $("#conten3").toggle()          
       })
       $("#collB3").click(
        function(){
             $("#showB3").show()
             $("#collB3").hide()
             $("#conten3").toggle()          
       })

       $("#showB4").hide()
       $("#showB4").click(
        function(){
             $("#showB4").hide()
             $("#collB4").show()
             $("#conten4").toggle()          
       })
       $("#collB4").click(
        function(){
             $("#showB4").show()
             $("#collB4").hide()
             $("#conten4").toggle()          
       })
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////

    ////////////////////////////////////////////////
    ///////////////Cart/////////////////////////////
    console.log(clickedd.title)
    $(`#cartTrash${p.id}`).click(function(){
        $(`#cartItem${p.id}`).hide()
    })
    console.log(`#cartItem${p.id}`)
    $("#cartClose2").click(function(){
        $(".blissCart").toggleClass("none show")
        $(".overlay").hide()
   })

    $(`#B-cart${p.id}`).click(function() {
        $(".blissCart").toggleClass("none show");
        $(".overlay").css({ "display": "flex" });
        addToCart(p);
        // var itemCost = $(`#B-quanInput${p.id}`).text()
    });
    function updateQuantity(productId, change) {
        let Kart = JSON.parse(localStorage.getItem('Kart')) || [];
        let product = Kart.find(p => p.id === productId);

        if (product) {
            product.quantity = Math.max(1, (product.quantity || 0) + change); // Ensure quantity is at least 1
            localStorage.setItem('Kart', JSON.stringify(Kart));
            renderCart(); // Update cart display
        }
    }
    function addToCart(product) {
        // Retrieve the current cart from localStorage
        let Kart = JSON.parse(localStorage.getItem('Kart')) || [];   
        let existingProduct = Kart.find(p => p.id === product.id);
        if (existingProduct) {
            // If the product exists, update the quantity
            existingProduct.quantity = (existingProduct.quantity || 0) + 1;
        }
        else {
            // If the product doesn't exist, set default quantity and add it to the cart
            product.quantity = 1; // Initialize quantity
            Kart.push(product);
        }
        localStorage.setItem('Kart', JSON.stringify(Kart));

        // Update the cart display
        renderCart();
    }
    function renderCart() {
        // Retrieve the cart from localStorage
        let Kart = JSON.parse(localStorage.getItem('Kart')) || [];

        // Clear the current cart display
        $(".cart-mid").empty();
        let cartsum= 0
        
        // Render each product in the cart
        Kart.forEach(p => {
            $(".cart-mid").append(`
                <div class="cart-item" id="cartItem${p.id}">
                    <div class="cart-img">
                        <img class="cart-image" src="${p.images}" alt="IMAGES">
                    </div>
                    <div class="cart-text">
                        <div>
                            <h3>${p.title}</h3>
                        </div>
                        <div class="cart-Btns" style="text-align: center;">
                            <div style="height: 25px; width: 25px; border: .5px solid black; cursor: pointer;" id="subB2_${p.id}">-</div>
                            <div style="height: 25px; width: 25px; border: .5px solid black; cursor: pointer;" id="B-quanInput2_${p.id}">${p.quantity}</div>
                            <div style="height: 25px; width: 25px; border: .5px solid black; cursor: pointer;" id="addB2_${p.id}">+</div>
                        </div>
                    </div>
                    <div class="cart-trash" id="cartTrash${p.id}" style="display: flex; flex-direction: column; align-items: right; cursor: pointer;">
                        <img style="width: 25px; height: 25px;" src="images/trash-bin.png" alt="IMAGES">
                        <h5>$${p.price * p.quantity}</h5>
                    </div>    
                </div>
            `);
            getNumberOfItems()
            $(`#addB2_${p.id}`).click(function(){
                updateQuantity(p.id, 1)
            })
            $(`#subB2_${p.id}`).click(function(){
                updateQuantity(p.id, -1)
            })

            $(`#cartTrash${p.id}`).click(function() {
                removeFromCart(p.id);
            });

            // Add click events for quantity buttons if needed
            // Example event handlers for quantity buttons can be added here
        });
        updateTotalSum();
    }
    renderCart();
    function removeFromCart(productId) {
        let Kart = JSON.parse(localStorage.getItem('Kart')) || [];
        // Filter out the item with the given productId
        Kart = Kart.filter(item => item.id !== productId);
        localStorage.setItem('Kart', JSON.stringify(Kart));
        renderCart(); // Update the cart display after removal
    }
    function updateTotalSum() {
        let Kart = JSON.parse(localStorage.getItem('Kart')) || [];
        let sumTotal = Kart.reduce((sum, p) => sum + (p.price * p.quantity), 0);
        $("#sumtotal").text(`$${sumTotal.toFixed(2)}`);
    }
    function getNumberOfItems() {
        let Kart = JSON.parse(localStorage.getItem('Kart')) || [];
        let itemNumber = Kart.length; // Count the number of distinct items
        $("#itemtotal").text(`${itemNumber}`);
    }
    getNumberOfItems()

    $("#checkoutBtn").on("click", function () {
        $.ajax({
            url: `${api_name}/carts/checkout`,
            method: "POST",
            data: JSON.stringify(USERID),
            contentType: "appication/json",
            success: function(){
                alert("Order(s) placed!")
                // $(".cart-mid").empty()
            },
            error: function(){
                alert("Error processing order")
            }

        })
        
    })
   //////////////////////////////////////////////////////////////////////
   //////////////////////////////////////////////////////////////////////
    
   ////////////////////////////////////////////////////////////////////////////// 
    //////////////Product Detail Functionality////////////////////////////////////
    // let inputValue = $(`#B-quanInput${p.id}`).val()
   
    let inputValue2 = $(`B-quanInput${p.id}`).val()
   $(`#addB2_${p.id}`).click(function(){
     inputValue2++
     console.log(inputValue2)
     $(`#B-quanInput2_${p.id}`).text(`${inputValue2}`)
   })
   $(`#subB2_${p.id}`).click(function(){
     inputValue2--
     console.log(inputValue2)
     $(`#B-quanInput2_${p.id}`).text(`${inputValue2}`)
   })
   //////////////////////////////////////////////////////////////////////////////////
   //////////////////////////////////////////////////////////////////////////////////

        
    $("#otherBtn").click(function(){
        $("#otherDrop").toggleClass("none block")
    })
    
    
    ////////////////////////////////////////////////////////////////////////////
    /////////////////Categories////////////////////////////////////////////////
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
        $("#menuIndicator").text("All Categories")
        $("#allCategories").toggleClass("none gridd")
        $("#allCategories").empty()
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
                            <div data-id=${cat.id} class="appendProd" style=" width: 100%; background-color: white-smoke; border-bottom: 1px solid black; height: 250px; margin-bottom: 50px; box-shadow: 1px 1px 10px gray; color: black;">
                                <p class= "deleTe" style="top: 5px; text-align: right; position: relative; margin-bottom: 0; margin-right: 10px; color: brown;">X</p>
                                <div class="" style="margin-left: 20px; display: flex; flex-direction: row; top: 5px; gap: 20px;">
                                    <div><img style="width: 200px; height: 200px; object-fit: cover; object-position: center;" src="${cat.image}" alt="IMAGES"></div>
                                    <div style="display: flex; text-align: left; margin-top: 30px; flex-direction: column;">
                                        <label style="display: flex; font-size: 1rem; margin-top: 10px;" for="">Name: ${cat.name}</label>
                                        <p id="categoryID" style="margin-bottom: 10px;">Category ID: ${cat.id} </p>
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
    ///////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////
    
    
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