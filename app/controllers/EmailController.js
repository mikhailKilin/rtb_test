
class EmailString {

    constructor(name, isValid) {
        this.name = name
        this.isValid = isValid
    }
}

class EmailController {

    constructor($scope) {
        this.checker = $scope.checker
        this.emails = []
        this.emailString = ""
    }

    addEmails(emails) {
        var newOrder = this.emails.length + 1
        emails.forEach(element => {
            this.emails.push(new EmailString(element, this.checker(element)))
        })
    }

    getEmails() {
        return this.emails.map((item) => {
            return item.name
        })
    }

    addEmail(emailString) {
        if (emailString.length > 0) {
            this.emails.push(new EmailString(emailString, this.checker(emailString)))
            this.emailString = ""
        }
    }

    addEmailWithEvent($event) {

        if ($event.keyCode === 13) {
            this.addEmail(this.emailString)
        }
        else if ($event.keyCode === 188) {
            var subEmailString = this.emailString.substr(0, this.emailString.length - 1)
            this.addEmail(subEmailString)
        } else if ($event.ctrlKey && $event.keyCode === 86) {
        }
    }

    setInputFocus(event) {
        $('#inputFocus', event.target).focus()
    }

    onBlur($event) {
        this.addEmail(this.emailString)
    }

    deleteEmailString($index) {
        this.emails = [
            ...this.emails.slice(0, $index),
            ...this.emails.slice($index + 1)
        ]
    }

    getRandomEmail() {
        var text = ""
        var possible = "abcdefghijklmnopqrstuvwxyz0123456789"
        for (var i = 0; i < Math.floor(Math.random() * possible.length); i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length))
        }
        text += "@ya.ru"
        return [text]
    }

    getEmailsCount() {
        alert("Emails count is " + this.emails.length)
    }
}

export default EmailController