/// <reference path="typings/decisions.controls/decisions.formhost.d.ts" />
/// <reference path="typings/formcontrols/form.contentcontrol.d.ts" />
/// <reference path="typings/formcontrols/form.datacontrol.d.ts" />

namespace $DP.Control {
    declare var braintree;
    const NONCE_TEXT = "Nonce";
    const TOKEN_ERROR_TEXT = "TokenError";
    const CLIENT_TOKEN_TEXT = "ClientToken";
    const CLIENT_TOKEN_ERROR_TEXT = "ClientTokenError";
    const CARDHOLDER_NAME_ERROR_TEXT = "CardHolder Name not provided.";
    export class BraintreeHostedFieldsFormControl extends DataContentBase {
        constructor(public $controlLayout: JQuery, public options) {
            super($controlLayout, options);
        }
                
        get CardHolderNameText(): string {
            return `card-holder-name_${this.options.componentId}`;
        }

        // Initialize call the base class method
        initialize(host: $DP.FormHost.DecisionsFormSurface): void {
            super.initialize(host);
        }

        clientToken?: string;
        shortTypeName?: string;
        hostedFieldsCreatedInstance: any;

        // Returns the Control HTML element
        getControl(){
            return this.$controlLayout.find(".brain-tree-hosted-fields");
        }

        // Once the HTML is Rendered it Initialize the Braintree control usnig ClientToken which is generated from server side
        setValue(data: FormHost.DecisionsControlData[], isFromStartUp: boolean): boolean {
            let controlData = data.filter(t => t.name == CLIENT_TOKEN_TEXT, null)[0];

            //Client token exist
            if (controlData != undefined) {
                this.clientToken = controlData.value;

                braintree.client.create({
                    authorization: this.clientToken
                }, (err, clientInstance) => {
                    if (err) {
                        console.error(err);
                        return;
                    }

                    braintree.hostedFields.create({
                        client: clientInstance,
                        fields: {
                            number: {
                                selector: `#card-number_${this.options.componentId}`,
                                placeholder: '1111 1111 1111 1111'
                            },
                            cvv: {
                                selector: `#cvv_${this.options.componentId}`,
                                placeholder: '111'
                            },
                            expirationDate: {
                                selector: `#expiration-date_${this.options.componentId}`,
                                placeholder: 'MM/YY'
                            },
                            postalCode: {
                                selector: `#postal-code_${this.options.componentId}`,
                                placeholder: '11111'
                            }
                        }
                    }, (err, hostedFieldsInstance) => {
                        if (err) {
                            console.error(err);
                            return;
                        }

                        this.hostedFieldsCreatedInstance = hostedFieldsInstance;
                    });
                });
            }
            //Client token not generated
            else {
                var clientTokenError = data.filter(t => t.name == CLIENT_TOKEN_ERROR_TEXT, null)[0];
                var braintreeHostedFields = this.getControl();
                braintreeHostedFields.html(`<div class="braintreeError">
                                                Error while initializing braintree control.
                                                   <br>Error: ${clientTokenError.value}                                                
                                            </div>`)
            }
            return false;
        }

        // Returned blank array as we have implemented getValueAsync() method
        getValue(): FormHost.DecisionsControlData[] {
            return [];
        }

        // It get called when the form is Submitted, here the Hosted Fields are Tokenize and if there is no Error than we get NONCE which is returned to server for further Transaction completion else actual error
        getValueAsync(): Promise<FormHost.DecisionsControlData[]> {
            return new Promise((resolve, reject) => {
                let returnValue: $DP.FormHost.DecisionsControlData[] = [];
                let controlValue = new $DP.FormHost.DecisionsControlData();
                const cardHolderName = this.$controlLayout.find(`#${this.CardHolderNameText}`).val();

                if (cardHolderName) {
                    this.hostedFieldsCreatedInstance.tokenize({
                        //Add card holder name
                        cardholderName: cardHolderName
                    }, (err, payload) => {
                        if (err) {
                            controlValue.name = TOKEN_ERROR_TEXT;
                            controlValue.value = err.message;
                        }
                        else {
                            controlValue.name = NONCE_TEXT;
                            controlValue.value = payload.nonce;
                        }

                        returnValue.push(controlValue);
                        resolve(returnValue);
                    });
                }
                else {
                    controlValue.name = TOKEN_ERROR_TEXT;
                    controlValue.value = CARDHOLDER_NAME_ERROR_TEXT;

                    returnValue.push(controlValue);
                    resolve(returnValue);
                }
            });
        };

        // This renders the controls HTML in the DOM, this content will be rendered inside the parent element returned by renderLayout method. 
        // The control is not rendered on the design time, because to render control we need the Client Token which can only be genrated when the flow is ran, hence only form control name will be visible on the design time.
        renderhtml(): JQuery {
            let bthfHtml = `<div IsControl="true" IsControlLoaded="false">Braintree Control</div>`;

            if (!this.options.isInDesignMode) {
                bthfHtml = `<div class="brain-tree-hosted-fields">
                                <div class="panel__content">
                                    <div class="textfield--float-label-Cardholder">
                                        <label for="${this.CardHolderNameText}" class="hosted-field--label">Card Holder Name</label>
                                        <input class="hosted-field" id="${this.CardHolderNameText}" placeholder="Cardholder Name"/>
                                    </div>
                                    <div class="textfield--float-label">
                                        <label for="card-number_${this.options.componentId}" class="hosted-field--label">Card Number</label>
                                        <div class="hosted-field" id="card-number_${this.options.componentId}"></div>
                                    </div>
                                    <div class="textfield--float-label">
                                        <label for="expiration-date_${this.options.componentId}" class="hosted-field--label">Expiration Date</label>
                                        <div class="hosted-field" id="expiration-date_${this.options.componentId}"></div>
                                    </div>
                                    <div class="textfield--float-label">
                                        <label for="cvv_${this.options.componentId}" class="hosted-field--label">CVV</label>
                                        <div class="hosted-field" id="cvv_${this.options.componentId}"></div>
                                    </div>
                                    <div class="textfield--float-label">
                                        <label for="postal-code_${this.options.componentId}" class="hosted-field--label">Postal Code</label>
                                        <div class="hosted-field" id="postal-code_${this.options.componentId}"></div>
                                    </div>
                                </div>
                            </div>`;
            }
            return $(bthfHtml);
        }

        // It renders the layout for control and inside it the control is rendered using render method which is present above.
        renderLayout(layoutProperties): JQuery {
            let originalCompIdAttr = '';
            if (this.options.originalComponentId) {
                originalCompIdAttr = `originalComponentid=${this.options.originalComponentId}`;
            }

            let section = $(`<section 
                                ${(layoutProperties) ? `style="${layoutProperties.style}"` : ""} 
                                ${originalCompIdAttr} 
                                id="${this.options.componentId}" 
                                class="SilverFormComponentBase LayoutSection ${this.shortTypeName}-1 ComponentOnly"
                                data-requested-height="${this.options.requestedHeight}"
                                data-requested-width="${this.options.requestedWidth}"
                                data-requested-max-height="${this.options.requestedMaxHeight}"
                                data-requested-max-width="${this.options.requestedMaxWidth}"
                                data-requested-min-width="${this.options.requestedMinWidth}"
                                data-requested-min-height="${this.options.requestedMinHeight}"
                                data-component-id="${this.options.componentId}"
                                data-component-name="${this.shortTypeName}"
                                data-parent-component-id="${this.options.parentId}"
                                data-help-message-key="${this.options.helpMessageKey}" 
                                ${(layoutProperties) ? layoutProperties.data : ""}                              
                                data-is-tooltip-set="false">                                           
                            </section>`);

            section.addClass(`p_c_id_${this.options.parentId || "Unknown"}`)
                .css("max-width", this.options.requestedMaxWidth).css("max-height", this.options.requestedMaxHeight);

            this.$controlLayout = section;

            return section;
        }
    }
}