// Fetch Salesforce data without @wire
// connectedCallback is same as ComponentMount in React
// executed when component loaded.
import { LightningElement, track } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts'

export default class Three extends LightningElement {
    @track accounts_data;
    @track error;
    connectedCallback() {

        getAccounts({ type: 'Customer - Direct' })
            .then(result => {
                console.log(result);
                this.accounts_data = result
                this.error = undefined;
            })
            .catch(error => {
                console.log(error);
                this.error = error;
                this.accounts_data = undefined;
            });
    }
}