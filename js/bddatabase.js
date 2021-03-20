var db;

function errorHandler(tx, error) {
    console.error("SQL error: " + tx + error.message);
}

var DB = {

    bdCreateDatabase: function() {
        var shortName = "Primal";
        var version = "1.0";
        var displayName = "DB for primal app";
        var dbSize = 2 * 1024 * 1024;

        function dbCreateSuccess() {
            console.info("Success: Database creation successful.");

        }

        db = openDatabase(shortName, version, displayName, dbSize, dbCreateSuccess);
    },

    bdCreateTables: function() {
        function txFunction(tx) {
            var sql;
            var options = [];

            function successCreate() {
                console.info("Success: Table creation successful");
            }

            function successInsert() {
                console.info("Success: Table insertion successful");
            }

            function successDrop() {
                console.info("Success: Table drop successful");
            }

            sql = "CREATE TABLE IF NOT EXISTS cart( " +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "productName VARCHAR(30) NOT NULL," +
                "productWeight INTEGER," +
                "productPrice INTEGER);";
            tx.executeSql(sql, options, successCreate, errorHandler);

            sql = "DROP TABLE IF EXISTS province";
            tx.executeSql(sql, options, successDrop, errorHandler);

            sql = "CREATE TABLE IF NOT EXISTS province( " +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "provinceName VARCHAR(20) NOT NULL);";
            tx.executeSql(sql, options, successCreate, errorHandler);

            sql = "INSERT INTO province(provinceName)" +
                "VALUES ('Alberta');";
            tx.executeSql(sql, options, successInsert, errorHandler);

            sql = "INSERT INTO province(provinceName)" +
                "VALUES ('British Columbia');";
            tx.executeSql(sql, options, successInsert, errorHandler);

            sql = "INSERT INTO province(provinceName)" +
                "VALUES ('Manitoba');";
            tx.executeSql(sql, options, successInsert, errorHandler);

            sql = "INSERT INTO province(provinceName)" +
                "VALUES ('New Brunswick');";
            tx.executeSql(sql, options, successInsert, errorHandler);

            sql = "INSERT INTO province(provinceName)" +
                "VALUES ('Newfoundland and Labrador');";
            tx.executeSql(sql, options, successInsert, errorHandler);

            sql = "INSERT INTO province(provinceName)" +
                "VALUES ('Northwest Territories');";
            tx.executeSql(sql, options, successInsert, errorHandler);

            sql = "INSERT INTO province(provinceName)" +
                "VALUES ('Nova Scotia');";
            tx.executeSql(sql, options, successInsert, errorHandler);

            sql = "INSERT INTO province(provinceName)" +
                "VALUES ('Nunavut');";
            tx.executeSql(sql, options, successInsert, errorHandler);

            sql = "INSERT INTO province(provinceName)" +
                "VALUES ('Ontario');";
            tx.executeSql(sql, options, successInsert, errorHandler);

            sql = "INSERT INTO province(provinceName)" +
                "VALUES ('Prince Edward Island');";
            tx.executeSql(sql, options, successInsert, errorHandler);

            sql = "INSERT INTO province(provinceName)" +
                "VALUES ('Quebec');";
            tx.executeSql(sql, options, successInsert, errorHandler);

            sql = "INSERT INTO province(provinceName)" +
                "VALUES ('Saskatchewan');";
            tx.executeSql(sql, options, successInsert, errorHandler);

            sql = "INSERT INTO province(provinceName)" +
                "VALUES ('Yukon');";
            tx.executeSql(sql, options, successInsert, errorHandler);

            sql = "CREATE TABLE IF NOT EXISTS shippingInformation( " +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "bdAddressLine1 VARCHAR(30) NOT NULL," +
                "bdAddressLine2 VARCHAR(30)," +
                "bdCity VARCHAR(30)," +
                "provinceId INTEGER NOT NULL," +
                "bdPostalCode VARCHAR(30)," +
                "bdEmailAddress VARCHAR(30)," +
                "bdPhone VARCHAR(30)," +
                "FOREIGN KEY(provinceId) REFERENCES province(id));";
            tx.executeSql(sql, options, successCreate, errorHandler);

            sql = "DROP TABLE IF EXISTS cardType";
            tx.executeSql(sql, options, successDrop, errorHandler);

            sql = "CREATE TABLE IF NOT EXISTS cardType( " +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "cardType VARCHAR(20) NOT NULL);";
            tx.executeSql(sql, options, successCreate, errorHandler);

            sql = "INSERT INTO cardType(cardType)" +
                "VALUES ('Visa');";
            tx.executeSql(sql, options, successInsert, errorHandler);

            sql = "INSERT INTO cardType(cardType)" +
                "VALUES ('MasterCard');";
            tx.executeSql(sql, options, successInsert, errorHandler);

            sql = "INSERT INTO cardType(cardType)" +
                "VALUES ('American Express');";
            tx.executeSql(sql, options, successInsert, errorHandler);

            sql = "INSERT INTO cardType(cardType)" +
                "VALUES ('Discover');";
            tx.executeSql(sql, options, successInsert, errorHandler);

            sql = "INSERT INTO cardType(cardType)" +
                "VALUES ('Interac');";
            tx.executeSql(sql, options, successInsert, errorHandler);

            sql = "CREATE TABLE IF NOT EXISTS paymentInformation( " +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "bdCardholder VARCHAR(30) NOT NULL," +
                "bdCardNumber VARCHAR(30)," +
                "cardTypeId INTEGER NOT NULL," +
                "bdCVV VARCHAR(30)," +
                "bdExpiryDate VARCHAR(30)," +
                "FOREIGN KEY(cardTypeId) REFERENCES cardType(id));";
            tx.executeSql(sql, options, successCreate, errorHandler);
        }

        function successTransaction() {
            console.info("Success: Create table transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },

    bdDropPaymentInformation: function() {
        function txFunction(tx) {
            var sql;
            var options = [];

            function successDrop() {
                console.info("Success: Payment Information dropped successfully.");
            }

            sql = "DROP TABLE IF EXISTS paymentInformation;";
            tx.executeSql(sql, options, successDrop, errorHandler);
        }

        function successTransaction() {
            console.info("Success: Table drop transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },

    bdDropCart: function() {
        function txFunction(tx) {
            var sql;
            var options = [];

            function successDrop() {
                console.info("Success: Cart dropped successfully.");
            }

            sql = "DROP TABLE IF EXISTS cart;";
            tx.executeSql(sql, options, successDrop, errorHandler);
        }

        function successTransaction() {
            console.info("Success: Table drop transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    bdDropShippingInformation: function() {
        function txFunction(tx) {
            var sql;
            var options = [];

            function successDrop() {
                console.info("Success: Shipping Information dropped successfully.");
            }
            sql = "DROP TABLE IF EXISTS shippingInformation;";
            tx.executeSql(sql, options, successDrop, errorHandler);
        }

        function successTransaction() {
            console.info("Success: Table drop transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    }
};