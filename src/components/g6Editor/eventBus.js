class Bus {
  constructor() {
    this.subs = {};
  }

  $on(type, handler) {
    // 判断是否是第一次注册
    this.subs[type] = this.subs[type] || [];
    this.subs[type].push(handler);
  }

  $emit(type, ...rest) {
    this.subs[type] = this.subs[type] || [];
    this.subs[type].forEach(typeItem => {
      typeItem(...rest);
    });
  }
}

export default new Bus();
