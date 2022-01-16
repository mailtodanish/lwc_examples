public with sharing class ContactController {
    public ContactController() {

    }
    @AuraEnabled(cacheable=true)
    public static List<Contact>  getContacts(){
        try {
            //SOQL
            return [Select Id,Name from Contact limit 10];
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
