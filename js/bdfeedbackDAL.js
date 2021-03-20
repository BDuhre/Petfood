var product = {
    bdinsert: function(options) {

        function txFunction(tx) {
            var sql = "INSERT INTO cart(productName,productWeight,productPrice) values(?,?,?);";
            tx.executeSql(sql, options, insertSuccessful, errorHandler);
        }

        function insertSuccessful() {
            console.info("Success: Insert into cart successful.");
        }
        db.transaction(txFunction, errorHandler, insertSuccessful);
    },

    bdselectAll: function(selectAllSuccessful) {
        function txFunction(tx) {
            var sql = "SELECT * FROM cart;";
            var options = [];
            tx.executeSql(sql, options, selectAllSuccessful, errorHandler);
        }

        function successTransaction() {
            console.info("Success: Select All Transaction successful.");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },

    bdselectAllCart: function(selectAllSuccessful) {
        function txFunction(tx) {
            var sql = "SELECT productName FROM cart;";
            var options = [];
            tx.executeSql(sql, options, selectAllSuccessful, errorHandler);
        }

        function successTransaction() {
            console.info("Success: Select All Transaction successful.");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    }
};

var product2 = {
    bdinsert: function(options) {

        function txFunction(tx) {
            var sql = "INSERT INTO cart(productName,productWeight,productPrice) values(?,?,?);";
            tx.executeSql(sql, options, insertSuccessful, errorHandler);
        }

        function insertSuccessful() {
            console.info("Success: Insert into cart successful.");
        }
        db.transaction(txFunction, errorHandler, insertSuccessful);
    },

    bdselectAll: function(selectAllSuccessful) {
        function txFunction(tx) {
            var sql = "SELECT * FROM cart;";
            var options = [];
            tx.executeSql(sql, options, selectAllSuccessful, errorHandler);
        }

        function successTransaction() {
            console.info("Success: Select All Transaction successful.");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },

    bdselectAllCart: function(selectAllSuccessful) {
        function txFunction(tx) {
            var sql = "SELECT productName FROM cart;";
            var options = [];
            tx.executeSql(sql, options, selectAllSuccessful, errorHandler);
        }

        function successTransaction() {
            console.info("Success: Select All Transaction successful.");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    }
};

var product3 = {
    bdinsert: function(options) {

        function txFunction(tx) {
            var sql = "INSERT INTO cart(productName,productWeight,productPrice) values(?,?,?);";
            tx.executeSql(sql, options, insertSuccessful, errorHandler);
        }

        function insertSuccessful() {
            console.info("Success: Insert into cart successful.");
        }
        db.transaction(txFunction, errorHandler, insertSuccessful);
    },

    bdselectAll: function(selectAllSuccessful) {
        function txFunction(tx) {
            var sql = "SELECT * FROM cart;";
            var options = [];
            tx.executeSql(sql, options, selectAllSuccessful, errorHandler);
        }

        function successTransaction() {
            console.info("Success: Select All Transaction successful.");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },

    bdselectAllCart: function(selectAllSuccessful) {
        function txFunction(tx) {
            var sql = "SELECT productName FROM cart;";
            var options = [];
            tx.executeSql(sql, options, selectAllSuccessful, errorHandler);
        }

        function successTransaction() {
            console.info("Success: Select All Transaction successful.");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    }
};

var shippingInformation = {
    bdinsert: function(options) {

        function txFunction(tx) {
            var sql = "INSERT INTO shippingInformation(bdAddressLine1,bdAddressLine2,bdCity,provinceId,bdPostalCode,bdEmailAddress,bdPhone) values(?,?,?,?,?,?,?);";
            tx.executeSql(sql, options, insertSuccessful, errorHandler);
        }

        function insertSuccessful() {
            console.info("Success: Insert into shippingInformation successful.");
        }

        db.transaction(txFunction, errorHandler, insertSuccessful);
    },

    bdselectAll: function(shippingSelectAllSuccessful) {
        function txFunction(tx) {
            var sql = "SELECT * FROM shippingInformation;";
            var options = [];
            tx.executeSql(sql, options, shippingSelectAllSuccessful, errorHandler);
        }

        function successTransaction() {
            console.info("Success: Select All Transaction successful.");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    }
};

var province = {
    bdselectAll: function(selectAllSuccessful) {
        function txFunction(tx) {
            var options = [];
            var sql = "SELECT * FROM province;";
            tx.executeSql(sql, options, selectAllSuccessful, errorHandler);
        }

        function successTransaction() {
            console.info("Success: Select All Transaction successful.");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    }
};

var cardType = {
    bdselectAll: function(selectAllSuccessful) {
        function txFunction(tx) {
            var options = [];
            var sql = "SELECT * FROM cardType;";
            tx.executeSql(sql, options, selectAllSuccessful, errorHandler);
        }

        function successTransaction() {
            console.info("Success: Select All Transaction successful.");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    }
};

var paymentInformation = {
    bdinsert: function(options) {

        function txFunction(tx) {
            var sql = "INSERT INTO paymentInformation(bdCardholder,bdCardNumber,cardTypeId,bdCVV,bdExpiryDate)" +
                " values(?,?,?,?,?);";
            tx.executeSql(sql, options, insertSuccessful, errorHandler);
        }

        function insertSuccessful() {
            console.info("Success: Insert into paymentInformation successful.");
        }

        db.transaction(txFunction, errorHandler, insertSuccessful);
    },

    bdselectAll: function(paymentSelectAllSuccessful) {
        function txFunction(tx) {
            var sql = "SELECT * FROM paymentInformation;";
            var options = [];
            tx.executeSql(sql, options, paymentSelectAllSuccessful, errorHandler);
        }

        function successTransaction() {
            console.info("Success: Select All Transaction successful.");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    }
};