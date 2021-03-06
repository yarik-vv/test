const inputs = document.getElementsByTagName('input');
const errors = document.getElementsByTagName('p');

import { validate, reset } from '../../validation';
import { initPagination, setState, buttonState } from '../../pagination';

class StepThreeController {
  constructor($scope) {
    //инициализация основного
    $scope.prevPage = '/step-2';
    $scope.nextPage = '/step-4';
    $scope.page3 = true;
    $scope.title = 'Третий шаг анкеты';
    $scope.stepName = '3. Отметьте социальные сети';

    initPagination($scope.page1, $scope.page2, $scope.page3, $scope.page4, 3);
    setState($scope.page3);

    //вешаем вотчеры на инпуты ввода даных и валидируем
    $scope.$watch('user.facebook', text => {
      const fbInput = inputs[4];
      const fbError = errors[0];

      if (fbInput.value.length !== 0) {
        $scope.page3 = false;
        setState(false);

        if (validate('^[a-zA-Z-_?/.:https?]{5,20}$', text, fbInput, fbError)) {
          $scope.page3 = true;
          setState(true);
        } else {
          $scope.page3 = false;
          setState(false);
        }
      } else {
        reset(fbInput, fbError);
        $scope.page3 = true;
        setState(true);
      }
    }, true);

    $scope.$watch('user.vk', text => {
      const vkInput = inputs[5];
      const vkError = errors[1];

      if (vkInput.value.length !== 0) {
        $scope.page3 = false;
        setState(false);

        if (validate('^[a-zA-Z-_?/.:https?]{5,20}$', text, vkInput, vkError)) {
          $scope.page3 = true;
          setState(true);
        } else {
          $scope.page3 = false;
          setState(false);
        }
      } else {
        reset(vkInput, vkError);
        $scope.page3 = true;
        setState(true);
      }
    }, true);

    $scope.$watch('user.twitter', text => {
      const twInput = inputs[6];
      const twError = errors[2];

      if (twInput.value.length !== 0) {
        $scope.page3 = false;
        setState(false);

        if (validate('^[a-zA-Z-_?/.:https?]{5,20}$', text, twInput, twError)) {
          $scope.page3 = true;
          setState(true);
        } else {
          $scope.page3 = false;
          setState(false);
        }
      } else {
        reset(twInput, twError);
        $scope.page3 = true;
        setState(true);
      }
    }, true);

    $scope.$watch('user.odnoklasniki', text => {
      const odInput = inputs[7];
      const odError = errors[3];

      if (odInput.value.length !== 0) {
        $scope.page3 = false;
        setState(false);

        if (validate('^[a-zA-Z-_?/.:https?]{5,20}$', text, odInput, odError)) {
          $scope.page3 = true;
          setState(true);
        } else {
          $scope.page3 = false;
          setState(false);
        }
      } else {
        reset(odInput, odError);
        $scope.page3 = true;
        setState(true);
      }
    }, true);
  }
}

StepThreeController.$inject = ['$rootScope'];
export default StepThreeController;
