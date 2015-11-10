/**
 * Created by yasser.s on 10/05/2015.
 */
var Promise = require('bluebird');
var Account = require('../models/account');

function AccountDataStore() {
}

Promise.promisifyAll(Account);
Promise.promisifyAll(Account.prototype);

AccountDataStore.prototype.getByUsername = function(email){
    return Account.findAsync({username: email})
        .then(function(account, err){
            return account;
        })
        .catch(function(){
            throw new Error("Error in getByUsername() ");
        });
}

module.exports = AccountDataStore;
