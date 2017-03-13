import constants from "../shared/constants";

class EmailController {
  
  constructor($scope, checkerService) {
    this.emailString = ""
    this.emails = $scope.emails
    this.checker = checkerService.checker
  }

  setInputFocus(event) {
    $('#inputFocus', event.target).focus()
  }

  addEmail(emailString) {
    if (emailString.length > 0) {
      this.emails.push(emailString)
      this.emailString = ""
    }
  }

  deleteEmail($index) {
    this.emails.splice($index, 1)
  }

  onBlur() {
    this.addEmail(this.emailString)
  }

  addEmailWithEvent($event) {
    if ($event.keyCode === constants.enter) {
      this.addEmail(this.emailString)
    }
    else if ($event.keyCode === constants.comma) {
      let subEmailString = this.emailString.substr(0, this.emailString.length - 1)
      this.addEmail(subEmailString)
    } else if ($event.ctrlKey && $event.keyCode === constants.letter_v) {
      this.addEmail(this.emailString)
    }
  }
}

export default EmailController