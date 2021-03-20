

function addShippingInfo(){
    var form = $("#bdShippingInformationForm");
    form.validate({
        rules:{
            bdAddressLine1:{
                required: true
            },
            bdCity:{
                required: true
            },
            bdProvince:{
                required: true
            },
            bdPostalCode:{
                required: true,
                validPostalCode: true
            },
            bdEmailAddress:{
                required: true,
                validEmail: true
            },
            bdPhone:{
                required: false,
                validPhone: true
            }
        },
        messages:{
            bdAddressLine1:{
                required: "Address Line 1 is required"
            },
            bdCity:{
                required: "City is required"
            },
            bdProvince:{
                required: "Province is required"
            },
            bdPostalCode:{
                required: "Postal Code is required",
                validPostalCode: "Please enter a valid postal code"
            },
            bdEmailAddress:{
                required: "Email is required",
                validEmail: "Please enter a valid email address"
            },
            bdPhone:{
                validPhone: "Please enter a valid phone number"
            }
        }
    });
    return form.valid();
}
jQuery.validator.addMethod("validEmail",
    function (value, element) {
        var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return this.optional(element) || regex.test(value);
    }, "Please enter a valid email address");

jQuery.validator.addMethod("validPostalCode",
    function (value, element) {
        var regex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
        return this.optional(element) || regex.test(value);
    }, "Please enter a valid postal code");

jQuery.validator.addMethod("validPhone",
    function (value, element) {
        var regex = /^[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/;
        return this.optional(element) || regex.test(value);
    }, "Please enter a valid phone number");

function addPaymentInfo() {
    var form = $("#bdPaymentForm");
    form.validate({
        rules: {
            bdCardholder: {
                required: true
            },
            bdCardNumber: {
                required: true,
                validCardNumber: true
            },
            bdCardType: {
                required: true
            },
            bdCVV: {
                required: true,
                validCVV: true
            },
            bdExpiryDate: {
                required: true,
                validExpiry: true
            }

        },
        messages: {
            bdCardholder: {
                required: "Name is required"
            },
            bdCardNumber: {
                required: "Card Number is required",
                validCardNumber: "Card number should be 16 digits long"
            },
            bdCardType: {
                required: "Card type is required"
            },
            bdCVV: {
                required: "CVV is required",
                validCVV: "CVV should contain 3 or 4 digits. Please check your card"
            },
            bdExpiryDate: {
                required: "Expiry date is required",
                validExpiry: "Card expiry can not be in the past"
            }
        }
    });
    return form.valid();
}

jQuery.validator.addMethod("validCVV",
    function (value, element) {
        var regex = /^[0-9]{3,4}$/;
        return this.optional(element) || regex.test(value);
    }, "CVV should contain 3 or 4 digits. Please check your card");

jQuery.validator.addMethod("validExpiry",
    function (value, element) {
        value = $("#bdExpiryDate").val();
        var today = new  Date();
        var date = new  Date(value);
        if(date < today){
            return false;
        }
        else{
            return this.optional(element) || value;
        }
    }, "Check the card's expiry date");

jQuery.validator.addMethod("validCardNumber",
    function (value, element) {
        var regex = /^[0-9]{16}$/;
        return this.optional(element) || regex.test(value);
    }, "Card number should be 16 digits long");