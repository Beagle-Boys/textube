import React from 'react';
import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import styles from "./App.module.css";
import Loading from './components/Loading/Loading';

const Home = React.lazy(() => import("./pages/Home/Home"));
const Error = React.lazy(() => import("./pages/Error/Error"));

const classNames = {
  appear: styles.appear,
  appearActive: styles.appearActive,
  appearDone: styles.appearDone,
  enter: styles.enter,
  enterActive: styles.enterActive,
  enterDone: styles.enterDone,
  exit: styles.exit,
  exitActive: styles.exitActive,
  exitDone: styles.exitDone,
};

function App() {
  return (
    <>
      <Route exact path="/">
        {({ match }) => (
          <CSSTransition
            in={match != null}
            timeout={300}
            classNames={classNames}
            unmountOnExit
          >
            <div className={styles.page}>
              <React.Suspense fallback={Loading}>
                <Home />
              </React.Suspense>
            </div>
          </CSSTransition>
        )}
      </Route>
      <Route path="/some">
        {({ match }) => (
          <CSSTransition
            in={match != null}
            timeout={300}
            unmountOnExit
            classNames={classNames}
          >
            <div className={styles.page}>
              <React.Suspense fallback={Loading}>
                <Error />
              </React.Suspense>
            </div>
          </CSSTransition>
        )}
      </Route>
    </>
  );
}

export default App;
