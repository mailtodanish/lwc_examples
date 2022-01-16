import { LightningElement } from 'lwc';
import Account_Name from '@salesforce/schema/Account.Name';
import Account_Type from '@salesforce/schema/Account.Type';
import Account_Industry from '@salesforce/schema/Account.Industry';
import Account_Number from '@salesforce/schema/Account.AccountNumber';
import Nick_Name from '@salesforce/schema/Account.NickName__c';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';

export default class Day4 extends NavigationMixin(LightningElement) {
    objectApiName = 'Account';
    fieldList = [Account_Name, Account_Number, Account_Type, Account_Industry, Nick_Name];
    handlerForAccountCreate(event) {
        event.preventDefault(); // stop the form from submitting

        // Creating a toast event
        var evt = new ShowToastEvent({
            title: "Account Created",
            message: "ID: " + event.detail.id,
            variant: "success",
        });

        // dispatching event
        this.dispatchEvent(evt);

        // naviagte
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: event.detail.id,
                objectApiName: 'Account',
                actionName: 'view'
            },
        });

    }

}