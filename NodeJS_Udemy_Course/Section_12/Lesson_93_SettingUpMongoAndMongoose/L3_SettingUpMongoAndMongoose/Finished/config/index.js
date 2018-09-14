var configValues = require('./config');				// A simple object, with username, password properties, which can be used

module.exports = {
    
    getDbConnectionString: function() {				//Only this function will be exported
        return 'YOUR_MONGO_URL';
    }
    
}