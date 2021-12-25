import { LightningElement, track } from 'lwc';

export default class Day1 extends LightningElement {

    @track greeting;

    handleChanges(event) {
        this.greeting = event.target.value;
    }
}