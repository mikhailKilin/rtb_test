import EmailController from '../controllers/EmailController'

export const emailsEditor = ():ng.IDirective => {
    return {
        restrict: "E",
        controller: EmailController,
        controllerAs: 'ctrl',
        template: `<div class ='email-container'
                         ng-click="ctrl.setInputFocus($event)">
                        <div ng-repeat="email in ctrl.emails track by $index">
                            <div class="email-div">
                                <div class="{{email.isValid ? 'email-name' : 'email-name invalid'}}">
                                    <div class="email-under-div">{{email.name}}</div>
                                </div>
                                <div ng-click="ctrl.deleteEmailString($index)" class="close-button">&#xD7</div>
                            </div>
                        </div>
                        <input id="inputFocus"
                               type="text"
                               class="email-string"
                               ng-model="ctrl.emailString"
                               ng-keyup="ctrl.addEmailWithEvent($event)"
                               ng-blur="ctrl.onBlur($event)"
                               placeholder="add more people..."/>
                    </div>`,
        scope: {
            ctrl: "="
        }
    }
}

export default emailsEditor