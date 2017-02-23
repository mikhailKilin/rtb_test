interface IController {
    addEmails(emails:string[]):void
    getEmails():string[]
}

class EmailString {
    public name:string;
    public isValid:boolean;

    constructor(name:string, isValid:boolean) {
        this.name = name;
        this.isValid = isValid;
    }
}

class EmailController implements IController {

    emails:Array<EmailString>;
    emailString:string;
    checker:Function

    constructor($scope) {
        this.checker = $scope.checker
        this.emails = new Array<EmailString>()
        this.emailString = "";
    }

    addEmails(emails:string[]):void {
        var newOrder = this.emails.length + 1;
        emails.forEach(element => {
            this.emails.push(new EmailString(element, this.checker(element)));
        });
    }

    getEmails():string[] {
        return this.emails.map(function (item) {
            return item.name
        });
    }

    addEmail(emailString:string):void {
        if (emailString.length > 0) {
            this.emails.push(new EmailString(emailString, this.checker(emailString)));
            this.emailString = "";
        }
    }

    addEmailWithEvent($event:KeyboardEvent):void {

        if ($event.keyCode === 13) {
            this.addEmail(this.emailString);
        }
        else if ($event.keyCode === 188) {
            var subEmailString = this.emailString.substr(0, this.emailString.length - 1);
            this.addEmail(subEmailString);
        } else if ($event.ctrlKey && $event.keyCode === 86) {
            this.addEmail(this.emailString);
        }
    }

    setInputFocus(event:MouseEvent):void {
        $('#inputFocus', event.target).focus();
    }

    onBlur($event):void {
        this.addEmail(this.emailString)
    }

    deleteEmailString($index:number):void {
        this.emails = [
            ...this.emails.slice(0, $index),
            ...this.emails.slice($index + 1)
        ]
    }

    getRandomEmail():string[] {
        var text = "";
        var possible = "abcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < Math.floor(Math.random() * possible.length); i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        text += "@ya.ru";
        return [text];
    }

    getEmailsCount():void {
        alert("Emails count is " + this.emails.length);
    }
}

export default EmailController