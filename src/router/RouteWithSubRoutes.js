import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

let count = 0;

class RouteWithSubRoutes extends React.Component {
  render() {
    const { routes } = this.props;
    return (
      <Switch>
        {routes.map((route, idx) => {
          count += 1;
          const { path, exact } = route;
          return (
            <Route
              key={`${count}-${idx}`}
              exact={!!exact}
              path={path}
              render={props => {
                const Comp = route.component;
                return (
                  <Comp {...props} routes={route.routes} meta={route.meta} />
                );
              }}
            />
          );
        })}
      </Switch>
    );
  }
}
export default withRouter(RouteWithSubRoutes);
