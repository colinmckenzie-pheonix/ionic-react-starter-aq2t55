import React from 'react';
import { Provider } from 'react-redux';
import store from './datamodel/store';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import 'bootstrap/dist/css/bootstrap.css';
import './globalStyle.css';

import Start1 from './pages/launch/Start1';
import Start2 from './pages/launch/Start2';
import Start3 from './pages/launch/Start3';
import Start4 from './pages/launch/Start4';
import Start5 from './pages/launch/Start5';
import StartCheck from './pages/StartCheck';
import CaptureProviderName from './pages/CaptureProviderName';
import CapturePlanNumber from './pages/CapturePlanNumber';
import CaptureEstimatedValue from './pages/CaptureEstimatedValue';
import CaptureEmployerPayingIn from './pages/CaptureEmployerPayingIn';
import PrototypeComplete from './pages/PrototypeComplete';
import TransferDetails from './pages/TransferDetails';
import SelectPensionToTransferInto from './pages/SelectPensionToTransferInto';
import ConfirmPensionToTransferInto from './pages/ConfirmPensionToTransferInto';
import FinalChecks from './pages/FinalChecks';
import Confirmation from './pages/Confirmation';
import BeforeWeBegin from './pages/BeforeWeBegin';
import Launcher from './pages/launch/Launcher';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <Provider store={store}>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/">
            <Redirect to="/launcher" />
          </Route>
          <Route exact path="/launcher">
            <Launcher />
          </Route>
          <Route exact path="/start1">
            <Start1 />
          </Route>
          <Route exact path="/start2">
            <Start2 />
          </Route>
          <Route exact path="/start3">
            <Start3 />
          </Route>
          <Route exact path="/start4">
            <Start4 />
          </Route>
          <Route exact path="/start5">
            <Start5 />
          </Route>
          <Route exact path="/startcheck">
            <StartCheck />
          </Route>
          <Route exact path="/beforewebegin">
            <BeforeWeBegin />
          </Route>
          <Route exact path="/captureprovidername">
            <CaptureProviderName />
          </Route>
          <Route exact path="/captureplannumber">
            <CapturePlanNumber />
          </Route>
          <Route exact path="/capturevalue">
            <CaptureEstimatedValue />
          </Route>
          <Route exact path="/capturepayingin">
            <CaptureEmployerPayingIn />
          </Route>
          <Route exact path="/transferdetails">
            <TransferDetails />
          </Route>
          <Route exact path="/selectpensiontotransferinto">
            <SelectPensionToTransferInto />
          </Route>
          <Route exact path="/confirmpensiontotransferinto">
            <ConfirmPensionToTransferInto />
          </Route>
          <Route exact path="/finalchecks">
            <FinalChecks />
          </Route>
          <Route exact path="/confirmation">
            <Confirmation />
          </Route>
          <Route exact path="/prototypecomplete">
            <PrototypeComplete />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </Provider>
  </IonApp>
);

export default App;
