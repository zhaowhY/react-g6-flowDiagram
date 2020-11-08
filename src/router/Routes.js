import React, { Component } from 'react';
import { Switch, Redirect } from 'react-router-dom';
// eslint-disable-next-line
import Loadable from '@loadable/component';
import _ from 'lodash';
import RouteWithSubRoutes from './RouteWithSubRoutes';

class Routes extends Component {
  getRouterData = () => {
    const { routes } = this.props;
    const redirectRoutes = [];
    function recursive(deepRoutes) {
      return deepRoutes.reduce((pre, i) => {
        let nPre = pre;
        const item = i;
        if (item.redirect) {
          redirectRoutes.push({
            from: item.path,
            to: item.redirect
          });
          return nPre;
        }
        if (item.routes) {
          nPre = nPre.concat(recursive(item.routes));
        }
        if (item.component && !item.loadabled && !item.component.loadable) {
          item.component = Loadable(item.component);
          item.loadabled = true;
        }
        nPre = nPre.concat(_.omit(item, 'routes'));
        return nPre;
      }, []);
    }
    const flatRoutes = recursive(routes);
    return {
      redirectRoutes,
      flatRoutes
    };
  }

  render() {
    const { redirectRoutes, flatRoutes } = this.getRouterData();
    return (
      <Switch>
        {redirectRoutes.map(item => (
          <Redirect key={item.from} exact from={item.from} to={item.to} />
        ))}
        <RouteWithSubRoutes routes={flatRoutes} />
      </Switch>
    );
  }
}

export default Routes;
