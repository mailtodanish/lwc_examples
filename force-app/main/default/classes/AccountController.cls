public with sharing class AccountController {
    public AccountController() {

    }
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(String type){
        try {
            String key = '%' + type + '%';
           
            return [select Id, Name, Type FROM Account where type like :key limit 10];
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
