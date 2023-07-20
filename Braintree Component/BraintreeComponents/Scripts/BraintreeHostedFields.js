/// <reference path="typings/decisions.controls/decisions.formhost.d.ts" />
/// <reference path="typings/formcontrols/form.contentcontrol.d.ts" />
/// <reference path="typings/formcontrols/form.datacontrol.d.ts" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var $DP;
(function ($DP) {
    var Control;
    (function (Control) {
        var NONCE_TEXT = "Nonce";
        var TOKEN_ERROR_TEXT = "TokenError";
        var CLIENT_TOKEN_TEXT = "ClientToken";
        var CLIENT_TOKEN_ERROR_TEXT = "ClientTokenError";
        var CARDHOLDER_NAME_ERROR_TEXT = "CardHolder Name not provided.";
        var BraintreeHostedFieldsFormControl = /** @class */ (function (_super) {
            __extends(BraintreeHostedFieldsFormControl, _super);
            function BraintreeHostedFieldsFormControl($controlLayout, options) {
                var _this = _super.call(this, $controlLayout, options) || this;
                _this.$controlLayout = $controlLayout;
                _this.options = options;
                return _this;
            }
            Object.defineProperty(BraintreeHostedFieldsFormControl.prototype, "CardHolderNameText", {
                get: function () {
                    return "card-holder-name_".concat(this.options.componentId);
                },
                enumerable: false,
                configurable: true
            });
            // Initialize call the base class method
            BraintreeHostedFieldsFormControl.prototype.initialize = function (host) {
                _super.prototype.initialize.call(this, host);
            };
            // Returns the Control HTML element
            // @ts-ignore
            BraintreeHostedFieldsFormControl.prototype.getControl = function () {
                return this.$controlLayout.find(".brain-tree-hosted-fields");
            };
            // Once the HTML is Rendered it Initialize the Braintree control usnig ClientToken which is generated from server side
            BraintreeHostedFieldsFormControl.prototype.setValue = function (data, isFromStartUp) {
                var _this = this;
                var controlData = data.filter(function (t) { return t.name == CLIENT_TOKEN_TEXT; }, null)[0];
                //Client token exist
                if (controlData != undefined) {
                    this.clientToken = controlData.value;
                    braintree.client.create({
                        authorization: this.clientToken
                    }, function (err, clientInstance) {
                        if (err) {
                            console.error(err);
                            return;
                        }
                        braintree.hostedFields.create({
                            client: clientInstance,
                            fields: {
                                number: {
                                    selector: "#card-number_".concat(_this.options.componentId),
                                    placeholder: '1111 1111 1111 1111'
                                },
                                cvv: {
                                    selector: "#cvv_".concat(_this.options.componentId),
                                    placeholder: '111'
                                },
                                expirationDate: {
                                    selector: "#expiration-date_".concat(_this.options.componentId),
                                    placeholder: 'MM/YY'
                                },
                                postalCode: {
                                    selector: "#postal-code_".concat(_this.options.componentId),
                                    placeholder: '11111'
                                }
                            }
                        }, function (err, hostedFieldsInstance) {
                            if (err) {
                                console.error(err);
                                return;
                            }
                            _this.hostedFieldsCreatedInstance = hostedFieldsInstance;
                        });
                    });
                }
                //Client token not generated
                else {
                    var clientTokenError = data.filter(function (t) { return t.name == CLIENT_TOKEN_ERROR_TEXT; }, null)[0];
                    var braintreeHostedFields = this.getControl();
                    braintreeHostedFields.html("<div class=\"braintreeError\">\n                                                Error while initializing braintree control.\n                                                   <br>Error: ".concat(clientTokenError.value, "                                                \n                                            </div>"));
                }
                return false;
            };
            // Returned blank array as we have implemented getValueAsync() method
            BraintreeHostedFieldsFormControl.prototype.getValue = function () {
                return [];
            };
            // It get called when the form is Submitted, here the Hosted Fields are Tokenize and if there is no Error than we get NONCE which is returned to server for further Transaction completion else actual error
            BraintreeHostedFieldsFormControl.prototype.getValueAsync = function () {
                var _this = this;
                return new Promise(function (resolve, reject) {
                    var returnValue = [];
                    var controlValue = new $DP.FormHost.DecisionsControlData();
                    var cardHolderName = _this.$controlLayout.find("#".concat(_this.CardHolderNameText)).val();
                    if (cardHolderName) {
                        _this.hostedFieldsCreatedInstance.tokenize({
                            //Add card holder name
                            cardholderName: cardHolderName
                        }, function (err, payload) {
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
            ;
            // This renders the controls HTML in the DOM, this content will be rendered inside the parent element returned by renderLayout method. 
            // The control is not rendered on the design time, because to render control we need the Client Token which can only be genrated when the flow is ran, hence only form control name will be visible on the design time.
            BraintreeHostedFieldsFormControl.prototype.renderhtml = function () {
                var bthfHtml = "<div IsControl=\"true\" IsControlLoaded=\"false\">Braintree Control</div>";
                if (!this.options.isInDesignMode) {
                    bthfHtml = "<div class=\"brain-tree-hosted-fields\">\n                                <div class=\"panel__content\">\n                                    <div class=\"textfield--float-label-Cardholder\">\n                                        <label for=\"".concat(this.CardHolderNameText, "\" class=\"hosted-field--label\">Card Holder Name</label>\n                                        <input class=\"hosted-field\" id=\"").concat(this.CardHolderNameText, "\" placeholder=\"Cardholder Name\"/>\n                                    </div>\n                                    <div class=\"textfield--float-label\">\n                                        <label for=\"card-number_").concat(this.options.componentId, "\" class=\"hosted-field--label\">Card Number</label>\n                                        <div class=\"hosted-field\" id=\"card-number_").concat(this.options.componentId, "\"></div>\n                                    </div>\n                                    <div class=\"textfield--float-label\">\n                                        <label for=\"expiration-date_").concat(this.options.componentId, "\" class=\"hosted-field--label\">Expiration Date</label>\n                                        <div class=\"hosted-field\" id=\"expiration-date_").concat(this.options.componentId, "\"></div>\n                                    </div>\n                                    <div class=\"textfield--float-label\">\n                                        <label for=\"cvv_").concat(this.options.componentId, "\" class=\"hosted-field--label\">CVV</label>\n                                        <div class=\"hosted-field\" id=\"cvv_").concat(this.options.componentId, "\"></div>\n                                    </div>\n                                    <div class=\"textfield--float-label\">\n                                        <label for=\"postal-code_").concat(this.options.componentId, "\" class=\"hosted-field--label\">Postal Code</label>\n                                        <div class=\"hosted-field\" id=\"postal-code_").concat(this.options.componentId, "\"></div>\n                                    </div>\n                                </div>\n                            </div>");
                }
                return $(bthfHtml);
            };
            // It renders the layout for control and inside it the control is rendered using render method which is present above.
            BraintreeHostedFieldsFormControl.prototype.renderLayout = function (layoutProperties) {
                var originalCompIdAttr = '';
                if (this.options.originalComponentId) {
                    originalCompIdAttr = "originalComponentid=".concat(this.options.originalComponentId);
                }
                var section = $("<section \n                                ".concat((layoutProperties) ? "style=\"".concat(layoutProperties.style, "\"") : "", " \n                                ").concat(originalCompIdAttr, " \n                                id=\"").concat(this.options.componentId, "\" \n                                class=\"SilverFormComponentBase LayoutSection ").concat(this.shortTypeName, "-1 ComponentOnly\"\n                                data-requested-height=\"").concat(this.options.requestedHeight, "\"\n                                data-requested-width=\"").concat(this.options.requestedWidth, "\"\n                                data-requested-max-height=\"").concat(this.options.requestedMaxHeight, "\"\n                                data-requested-max-width=\"").concat(this.options.requestedMaxWidth, "\"\n                                data-requested-min-width=\"").concat(this.options.requestedMinWidth, "\"\n                                data-requested-min-height=\"").concat(this.options.requestedMinHeight, "\"\n                                data-component-id=\"").concat(this.options.componentId, "\"\n                                data-component-name=\"").concat(this.shortTypeName, "\"\n                                data-parent-component-id=\"").concat(this.options.parentId, "\"\n                                data-help-message-key=\"").concat(this.options.helpMessageKey, "\" \n                                ").concat((layoutProperties) ? layoutProperties.data : "", "                              \n                                data-is-tooltip-set=\"false\">                                           \n                            </section>"));
                section.addClass("p_c_id_".concat(this.options.parentId || "Unknown"))
                    .css("max-width", this.options.requestedMaxWidth).css("max-height", this.options.requestedMaxHeight);
                this.$controlLayout = section;
                return section;
            };
            return BraintreeHostedFieldsFormControl;
        }(Control.DataContentBase));
        Control.BraintreeHostedFieldsFormControl = BraintreeHostedFieldsFormControl;
    })(Control = $DP.Control || ($DP.Control = {}));
})($DP || ($DP = {}));
//# sourceMappingURL=BraintreeHostedFields.js.map