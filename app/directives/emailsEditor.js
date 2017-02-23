import EmailController from '../controllers/EmailController'
import html from '../html/inputEmail.html'
export const emailsEditor = () => {
  return {
    restrict: "E",
    controller: EmailController,
    controllerAs: 'ctrl',
    template: html,
    scope: {
      ctrl: "="
    }
  }
}

export default emailsEditor