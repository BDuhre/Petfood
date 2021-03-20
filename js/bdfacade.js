function insertProductToTable() {

    var productName = $("#bdProductName").text();
    var productWeight = $("#bdProductWeight").text();
    var productPrice = $("#bdProductPrice").text();
    var options = [productName, productWeight, productPrice];

    product.bdinsert(options);

    alert("Item added to cart");
}

function addProductToCart() {

    product.bdselectAll(selectAllSuccessful);

    function selectAllSuccessful(tx, results) {
        var html = "";
        for (var i = 0; i < results.rows.length; i++) {
            var row = results.rows[i];

            html +=
                "<li>" +
                "<h1>Name: " + row['productName'] + "</h1>" +
                "<p>Weight: " + row['productWeight'] + "</p>" +
                "<p>Price: " + row['productPrice'] + "</p>" +
                "</li>"
        }

        $("#bdCartList").html(html).listview("refresh");
    }
}

function insertProduct2ToTable() {

    var productName = $("#bdProductName2").text();
    var productWeight = $("#bdProductWeight2").text();
    var productPrice = $("#bdProductPrice2").text();
    var options = [productName, productWeight, productPrice];

    product2.bdinsert(options);

    alert("Item added to cart");
}

function addProduct2ToCart() {

    product2.bdselectAll(selectAllSuccessful);

    function selectAllSuccessful(tx, results) {
        var html = "";
        for (var i = 0; i < results.rows.length; i++) {
            var row = results.rows[i];

            html +=
                "<li>" +
                "<h1>Name: " + row['productName'] + "</h1>" +
                "<p>Weight: " + row['productWeight'] + "</p>" +
                "<p>Price: " + row['productPrice'] + "</p>" +
                "</li>"
        }

        $("#bdCartList").html(html).listview("refresh");
    }
}


function insertProduct3ToTable() {

    var productName = $("#bdProductName3").text();
    var productWeight = $("#bdProductWeight3").text();
    var productPrice = $("#bdProductPrice3").text();
    var options = [productName, productWeight, productPrice];

    product3.bdinsert(options);

    alert("Item added to cart");
}

function addProduct3ToCart() {

    product3.bdselectAll(selectAllSuccessful);

    function selectAllSuccessful(tx, results) {
        var html = "";
        for (var i = 0; i < results.rows.length; i++) {
            var row = results.rows[i];

            html +=
                "<li>" +
                "<h1>Name: " + row['productName'] + "</h1>" +
                "<p>Weight: " + row['productWeight'] + "</p>" +
                "<p>Price: " + row['productPrice'] + "</p>" +
                "</li>";
        }

        $("#bdCartList").html(html).listview("refresh");

    }
}

function bdupdateProvinceDropdown() {
    province.bdselectAll(selectAllSuccessful);

    function selectAllSuccessful(tx, results) {
        var html = "";

        for (var i = 0; i < results.rows.length; i++) {
            var row = results.rows[i];

            html +=
                "<option value='" + row['id'] + "'>" + row['provinceName'] + "</option>"
        }
        $("#bdProvince").html(html).selectmenu("refresh");
    }
}

function insertShippingInfoToTable() {

    if (addShippingInfo()) {

        var bdAddressLine1 = $("#bdAddressLine1").val();
        var bdAddressLine2 = $("#bdAddressLine2").val();
        var bdProvince = $("#bdProvince").val();
        var bdCity = $("#bdCity").val();
        var bdPostalCode = $("#bdPostalCode").val();
        var bdEmailAddress = $("#bdEmailAddress").val();
        var bdPhone = $("#bdPhone").val();
        var options = [bdAddressLine1, bdAddressLine2, bdProvince, bdCity, bdPostalCode, bdEmailAddress, bdPhone];

        shippingInformation.bdinsert(options);

        console.info("Shipping Information added to table");
        window.location.replace("#bdPaymentPage");
    }
}

function insertPaymentInfoToTable() {

    if (addPaymentInfo()) {
        var bdCardholder = $("#bdCardholder").val();
        var bdCardNumber = $("#bdCardNumber").val();
        var bdCardType = $("#bdCardType").val();
        var bdCVV = $("#bdCVV").val();
        var bdExpiryDate = $("#bdExpiryDate").val();
        var options = [bdCardholder, bdCardNumber, bdCardType, bdCVV, bdExpiryDate];

        paymentInformation.bdinsert(options);

        console.info("Payment Information added to table");
        window.location.replace("#bdConfirmationPage");
    }
}

function bdupdateCardTypeDropdown() {
    cardType.bdselectAll(selectAllSuccessful);

    function selectAllSuccessful(tx, results) {
        var html = "";

        for (var i = 0; i < results.rows.length; i++) {
            var row = results.rows[i];

            html +=
                "<option value='" + row['id'] + "'>" + row['cardType'] + "</option>"
        }
        $("#bdCardType").html(html).selectmenu("refresh");
    }
}

function pushDataToConfirmationPage() {

    product.bdselectAllCart(selectAllSuccessful);
    product2.bdselectAllCart(selectAllSuccessful);
    shippingInformation.bdselectAll(shippingSelectAllSuccessful);
    paymentInformation.bdselectAll(paymentSelectAllSuccessful);

    function selectAllSuccessful(tx, results) {
        var html = "";
        for (var i = 0; i < results.rows.length; i++) {
            var row = results.rows[i];

            html +=
                "<li>" +
                "<p><b>Product Name:&nbsp;</b> " + row['productName'] + "</p>" +
                "</li>"
        }

        $("#bdCartConfirm").html(html).listview("refresh");
    }

    function shippingSelectAllSuccessful(tx, results) {
        var html = "";
        for (var i = 0; i < results.rows.length; i++) {
            var row = results.rows[i];

            html =
                "<li>" +
                "<p><b>Address Line 1:&nbsp;</b> " + row['bdAddressLine1'] + "</p>" +
                "<p><b>Address Line 2:&nbsp;</b>" + row['bdAddressLine2'] + "</p>" +
                "<p><b>City:&nbsp;</b> " + row['bdCity'] + "</p>" +
                "<p><b>Province:&nbsp;</b> " + row['provinceId'] + "</p>" +
                "<p><b>Postal Code:&nbsp;</b> " + row['bdPostalCode'] + "</p>" +
                "<p><b>Email Address:&nbsp;</b> " + row['bdEmailAddress'] + "</p>" +
                "<p><b>Phone Number:&nbsp;</b> " + row['bdPhone'] + "</p>" +
                "</li>"
        }

        $("#bdShipConfirm").html(html).listview("refresh");
    }

    function paymentSelectAllSuccessful(tx, results) {
        var html = "";
        for (var i = 0; i < results.rows.length; i++) {
            var row = results.rows[i];

            html =
                "<li>" +
                "<p><b>Cardholder Name:&nbsp;</b> " + row['bdCardholder'] + "</p>" +
                "<p><b>Card Number:&nbsp;</b>" + row['bdCardNumber'] + "</p>" +
                "<p><b>Card Type:&nbsp;</b> " + row['cardTypeId'] + "</p>" +
                "<p><b>CVV:&nbsp;</b> " + row['bdCVV'] + "</p>" +
                "<p><b>Expiry Date:&nbsp;</b> " + row['bdExpiryDate'] + "</p>" +
                "</li>"
        }

        $("#bdPayConfirm").html(html).listview("refresh");
    }
}