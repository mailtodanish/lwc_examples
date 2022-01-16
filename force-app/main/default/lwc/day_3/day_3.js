import { LightningElement, track } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts'

export default class Day_3 extends LightningElement {
    @track accounts_detail;
    @track error;
    connectedCallback() {
        getAccounts({ type: 'Customer - Direct' }).then(result => {
            this.accounts_detail = result;
            this.error = undefined;
        }).catch(error => {
            this.error = error;
            this.accounts_detail = undefined;
        });
    }
}