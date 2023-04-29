import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ThelastdanceQ4 extends LightningElement {

  handleSuccess(event) {
    const toastEvent = new ShowToastEvent({
      title: 'Oportunidade Criada',
      message: 'Sua oportunidade foi criada com sucesso',
      variant: 'success'
    });
    this.dispatchEvent(toastEvent); 
  }
  

  clearForm(event) {
        const inputFields = this.template.querySelectorAll( 
            'lightning-input-field'
        );
        if (inputFields) {
            inputFields.forEach(field => { 
                field.reset();
            });
        }
  }
}
