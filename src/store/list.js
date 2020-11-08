import { action, extendObservable } from 'mobx';
import { getObject } from '@/api/demo'

const OBSERVABLE = {
};

class Demo {
  constructor() {
    extendObservable(this, {
      ...OBSERVABLE
    });
  }

  @action.bound async getInterfaceList() {
    return await getObject();
  }

  @action.bound reset() {
    Object.assign(this, OBSERVABLE);
  }

  @action.bound update(data) {
    Object.assign(this, data);
  }
}

export default new Demo();
