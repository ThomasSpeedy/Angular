import {Directive} from '@angular/core';
import {
  FormGroup,
  AbstractControl,
  NG_VALIDATORS,
} from '@angular/forms';


export function ifNotBacklogThenAssignee(controlGroup: FormGroup): {[key: string]: boolean} {
  const assigneeName = controlGroup.get('assignee/name');
  const state = controlGroup.get('state');
  if (!assigneeName || !state) {
    return;
  }
  if ((state.value && state.value !== 'BACKLOG') &&
      (!assigneeName.value || assigneeName.value === '')) {
    return {'assigneeRequired': true};
  }
  return null;
}

export function asyncIfNotBacklogThenAssignee(control): Promise<any> {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ifNotBacklogThenAssignee(control));
    }, 500);
  });
  return promise;
}

@Directive({
  selector: '[ifNotBacklogThenAssignee]',
  providers: [
    {provide: NG_VALIDATORS,
     useExisting: IfNotBacklogThenAssigneeValidator, multi: true}]
})
export class IfNotBacklogThenAssigneeValidator {

  validate(formGroup: FormGroup): {[key: string]: any} {
    const nameControl = formGroup.get('assignee/name');
    const stateControl = formGroup.get('state');
    if (!nameControl || !stateControl ||
        stateControl.value === 'BACKLOG') {
      return null;
    }
    if (!nameControl.value || nameControl.value === '') {
      return {'assigneeRequired': true};
    }
    return null;
  }
}

@Directive({
  selector: '[emailValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: EmailValidator, multi: true
  }]
})
export class EmailValidator {
  validate(control: AbstractControl): {[key: string]: any} {
    const re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (!control.value || control.value === '' || re.test(control.value)) {
      return null;
    } else {
      return {'invalidEMail': true};
    }
  }
}

export function emailValidator(control): {[key: string]: any} {
  const re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  if (!control.value || control.value === '' || re.test(control.value)) {
    return null;
  } else {
    return {'invalidEMail': true};
  }
}


export const APPLICATION_VALIDATORS = [IfNotBacklogThenAssigneeValidator, EmailValidator];
