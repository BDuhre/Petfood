function addProductToCart_click() {
    insertProductToTable()
    addProductToCart();
}

function addProduct2ToCart_click() {
    insertProduct2ToTable();
    addProduct2ToCart();
}

function addProduct3ToCart_click() {
    insertProduct3ToTable();
    addProduct3ToCart();
}

function viewCartPage() {
    addProductToCart();
    addProduct2ToCart();
    addProduct3ToCart();
}

function gotoShippingPage() {
    window.location.replace("#bdShippingAddressPage");
}

function gotoCartPage() {
    window.location.replace("#bdCartPage");
}

function gotoPaymentPage() {
    window.location.replace("#bdPaymentPage");
}

function validateShipInfo() {
    insertShippingInfoToTable();
}

function validatePayInfo() {
    insertPaymentInfoToTable();
}

function bdUpdateConfirmationPage() {
    pushDataToConfirmationPage();
}

function gotoHomePage() {
    window.location.replace("#bdHomePage");
}

function gotoThanksPage() {
    window.location.replace("#bdThankyouPage");
}

function dropCart() {
    var confirmClearDB = confirm("Do you want to clear cart?");
    if (confirmClearDB == true) {
        if (db) {
            DB.bdDropCart();
            alert("Cart cleared");
        }
    }
    initializeDB();
    location.reload();
}

function dropShipping() {
    var confirmClearDB = confirm("Do you want to clear Shipping Information?");
    if (confirmClearDB == true) {
        if (db) {
            DB.bdDropShippingInformation();
            alert("Shipping Information cleared");
        }
    }
    initializeDB();
    location.reload();
}

function dropPayment() {
    var confirmClearDB = confirm("Do you want to clear Payment information?");
    if (confirmClearDB == true) {
        if (db) {
            DB.bdDropPaymentInformation();
            alert("Payment Information cleared");
        }
    }
    initializeDB();
    location.reload();
}

function init() {
    $("#bdAddProductToCartBtn").on("click", addProductToCart_click);
    $("#bdAddProductToCartBtn2").on("click", addProduct2ToCart_click);
    $("#bdAddProductToCartBtn3").on("click", addProduct3ToCart_click);
    $("#bdBtnShippingAddress").on("click", gotoShippingPage);
    $("#bdCartPage").on("pageshow", viewCartPage);
    $("#bdBtnBack").on("click", gotoCartPage);
    $("#bdBtnPayment").on("click", validateShipInfo);
    $("#bdShippingAddressPage").on("pageshow", bdupdateProvinceDropdown);
    $("#bdBtnGotoShipping").on("click", gotoShippingPage);
    $("#bdBtnSubmitPayment").on("click", validatePayInfo);
    $("#bdPaymentPage").on("pageshow", bdupdateCardTypeDropdown);
    $("#bdBtnConfirmCart").on("click", gotoCartPage);
    $("#bdBtnConfirmShip").on("click", gotoShippingPage);
    $("#bdBtnConfirmPayment").on("click", gotoPaymentPage);
    $("#bdConfirmationPage").on("pageshow", bdUpdateConfirmationPage);
    $("#bdBtnGotoHome").on("click", gotoHomePage);
    $("#bdBtnConfirmPay").on("click", gotoThanksPage);
    $("#bdBtnDropCart").on("click", dropCart);
    $("#bdBtnDropShippingInformation").on("click", dropShipping);
    $("#bdBtnDropPaymentInformation").on("click", dropPayment);
}

function initializeDB() {
    try {
        DB.bdCreateDatabase();
        console.info("Database created");
        if (db) {
            console.info("Creating tables");
            DB.bdCreateTables();
        }
    } catch (e) {
        console.error("Error: (Fatal) error in initializeDB, cannot proceed");
    }
}

$(document).ready(function() {
    init();
    initializeDB();
});