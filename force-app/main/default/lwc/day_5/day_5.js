import { LightningElement, api } from 'lwc';
import Account_Name from '@salesforce/schema/Account.Name';
import Account_Type from '@salesforce/schema/Account.Type';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class Day_5 extends LightningElement {
    @api recordId;
    @api objectApiName;

    fieldList = [Account_Name, Account_Type, ];

    handlerForAccountUpdate(event) {
        event.preventDefault(); // stop the form from submitting

        // Creating a toast event
        var evt = new ShowToastEvent({
            title: "Account Updated",
            message: "Name: " + event.detail.fields.Name.value,
            variant: "success",
        });

        // dispatching event
        this.dispatchEvent(evt);
    }


}