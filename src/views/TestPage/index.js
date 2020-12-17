import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx';
import G6Editor from '@/components/g6Editor/Index';

@inject('list')
@observer
class Test extends Component {
  async componentDidMount() {
    console.log(toJS(this.props.list));
    const { list: { getInterfaceList } } = this.props;
    console.log(await getInterfaceList());
  }
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <div style={{ display: 'inline-block', marginTop: 100 }}>
          <G6Editor></G6Editor>
        </div>
      </div>
    );
  }

}

export default Test;
