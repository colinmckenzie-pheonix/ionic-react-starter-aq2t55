import React from 'react';
import { IonContent, IonPage, IonButton, IonGrid, IonRow, IonCol, IonIcon, IonLabel, IonCard } from '@ionic/react';
import AppHeader from '../components/appheader/AppHeader';
import { useAppDispatch, useAppSelector } from '../datamodel/hooks';
import {
  getNumIncomingPensions,
  getSelectedIncomingPension,
  IIncomingPension,
  setEmployerPayingInForSelectedPension,
  setMoneyTakenOutForSelectedPension,
  setOnHoldForSelectedPension,
  addIncomingPension,
  setNewSelectedIncomingPension,
  isAgeUnder32,
  isAgeOver55,
} from '../datamodel/appdataslice';
import { addCircleOutline } from 'ionicons/icons';
import CapturedPensionDetails from '../components/CapturedPensionDetails';
import PayingIn from '../components/PayingIn';
import CheckFees from '../components/CheckFees';
import CheckBenefits from '../components/CheckBenefits';
import CallToTransfer from '../components/CallToTransfer';

const CaptureEmployerPayingIn: React.FC = () => {
  // used to update the central data store
  const dispatch = useAppDispatch();

  // get data this component needs from the central store
  const selectedIncomingPension: IIncomingPension = useAppSelector(getSelectedIncomingPension);
  const numIncomingPensions: number = useAppSelector(getNumIncomingPensions);
  const ageUnder32: boolean = useAppSelector(isAgeUnder32);
  const ageOver55: boolean = useAppSelector(isAgeOver55);

  // handle events
  const handleYesButtonClick = () => {
    dispatch(setEmployerPayingInForSelectedPension(true));
    dispatch(setMoneyTakenOutForSelectedPension(undefined));
  };

  const handleNoButtonClick = () => {
    dispatch(setEmployerPayingInForSelectedPension(false));
  };

  const handleMoneyTakenOutYesButtonClick = () => {
    dispatch(setMoneyTakenOutForSelectedPension(true));
  };

  const handleMoneyTakenOutNoButtonClick = () => {
    dispatch(setMoneyTakenOutForSelectedPension(false));
  };

  const handleContinueNextButtonClick = () => {
    dispatch(setOnHoldForSelectedPension(false));
    dispatch(addIncomingPension());
  };

  const handleOnHoldNextButtonClick = () => {
    dispatch(setOnHoldForSelectedPension(true));
    dispatch(addIncomingPension());
  };
  const handleAddAnotherButtonClick = () => {
    if (ageOver55 && selectedIncomingPension.moneyTakenOut === true) {
      dispatch(setNewSelectedIncomingPension());
    } else {
      dispatch(setOnHoldForSelectedPension(true));
      dispatch(addIncomingPension());
      dispatch(setNewSelectedIncomingPension());
    }
  };

  return (
    <IonPage>
      <AppHeader routerLink={'/capturevalue'} />
      <IonContent fullscreen className="grey-color">
        <IonGrid className="ion-no-padding ion-no-margin">
          <IonRow className="pt-4 ps-3 primary-blue-bg">
            <IonCol>
              <h1 className="white-color fw-bold">Transfer details</h1>
            </IonCol>
          </IonRow>
          <IonRow className="primary-blue-bg">
            <IonCol className="top-corners"></IonCol>
          </IonRow>
          <IonRow className="pt-2">
            <IonCol>
              <CapturedPensionDetails
                pension={selectedIncomingPension}
                isPastPolicyNumberPage={true}
                isPastValuePage={true}
              />
            </IonCol>
          </IonRow>
          <IonRow className="pt-4 px-3">
            <IonCol>
              <IonLabel position="stacked">Is your employer currently paying into this pension?</IonLabel>
            </IonCol>
          </IonRow>
          <IonRow className="pt-2 px-3">
            <IonCol>
              <IonCard
                id="yesButton"
                button={true}
                color={selectedIncomingPension.employerPayingIn === true ? 'appprimary' : 'appsecondary'}
                onClick={handleYesButtonClick}
                className="ms-0 me-2 no-ripple card-as-button"
              >
                <div className="ion-text-center fs-6 py-2">Yes</div>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard
                id="yesButton"
                button={true}
                color={selectedIncomingPension.employerPayingIn === false ? 'appprimary' : 'appsecondary'}
                onClick={handleNoButtonClick}
                className="ms-2 me-0 no-ripple card-as-button"
              >
                <div className="ion-text-center fs-6 py-2">No</div>
              </IonCard>
            </IonCol>
          </IonRow>
          <div className={ageOver55 && selectedIncomingPension.employerPayingIn === false ? '' : 'd-none'}>
            <IonRow className="pt-4 px-3">
              <IonCol>
                <IonLabel position="stacked">Have you taken money out of this pension?</IonLabel>
              </IonCol>
            </IonRow>
            <IonRow className="pt-2 px-3">
              <IonCol>
                <IonCard
                  id="yesButton"
                  button={true}
                  color={selectedIncomingPension.moneyTakenOut === true ? 'appprimary' : 'appsecondary'}
                  onClick={handleMoneyTakenOutYesButtonClick}
                  className="ms-0 me-2 no-ripple card-as-button"
                >
                  <div className="ion-text-center fs-6 py-2">Yes</div>
                </IonCard>
              </IonCol>
              <IonCol>
                <IonCard
                  id="yesButton"
                  button={true}
                  color={selectedIncomingPension.moneyTakenOut === false ? 'appprimary' : 'appsecondary'}
                  onClick={handleMoneyTakenOutNoButtonClick}
                  className="ms-2 me-0 no-ripple card-as-button"
                >
                  <div className="ion-text-center fs-6 py-2">No</div>
                </IonCard>
              </IonCol>
            </IonRow>
          </div>

          <IonRow className={selectedIncomingPension.employerPayingIn === true ? 'mt-4 px-3' : 'd-none'}>
            <IonCol>
              <PayingIn />
            </IonCol>
          </IonRow>

          <IonRow className={ageOver55 && selectedIncomingPension.moneyTakenOut === true ? 'mt-4 px-3' : 'd-none'}>
            <IonCol>
              <CallToTransfer />
            </IonCol>
          </IonRow>

          <div
            className={
              selectedIncomingPension.employerPayingIn === false &&
              ((ageOver55 && selectedIncomingPension.moneyTakenOut === false) || ageOver55 === false) &&
              (selectedIncomingPension.provider.isCheckBenefits || selectedIncomingPension.provider.isCheckFees)
                ? ''
                : 'd-none'
            }
          >
            <IonRow className="pt-4 px-3">
              <IonCol>
                <div className={selectedIncomingPension.provider.isCheckBenefits && !ageUnder32 ? '' : 'd-none'}>
                  <CheckBenefits />
                </div>
                <div
                  className={
                    selectedIncomingPension.provider.isCheckFees &&
                    (ageUnder32 || !selectedIncomingPension.provider.isCheckBenefits)
                      ? ''
                      : 'd-none'
                  }
                >
                  <CheckFees />
                </div>
              </IonCol>
            </IonRow>
            <IonRow className="pt-4 px-3">
              <IonCol>
                <IonButton
                  expand="block"
                  routerLink="/transferdetails"
                  fill="outline"
                  onClick={handleOnHoldNextButtonClick}
                  className="ms-0 me-2"
                >
                  Put on hold
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton
                  expand="block"
                  fill="clear"
                  routerLink="/transferdetails"
                  color="appprimary"
                  className="ms-2 me-0"
                  onClick={handleContinueNextButtonClick}
                >
                  Continue transfer
                </IonButton>
              </IonCol>
            </IonRow>
          </div>
          <IonRow
            className={
              selectedIncomingPension.employerPayingIn === false && !selectedIncomingPension.provider.isCheckBenefits
                ? 'mt-4 px-3'
                : 'd-none'
            }
          >
            <IonCol>
              <IonButton
                expand="block"
                routerLink="/transferdetails"
                color="appprimary"
                onClick={handleContinueNextButtonClick}
              >
                Next
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow
            className={
              selectedIncomingPension.employerPayingIn === true || (ageOver55 && selectedIncomingPension.moneyTakenOut)
                ? 'mt-4 px-3'
                : 'd-none'
            }
          >
            <IonCol className={selectedIncomingPension.isAdded ? 'd-none' : ''}>
              <IonButton
                expand="block"
                fill="outline"
                routerLink="/captureprovidername"
                onClick={handleAddAnotherButtonClick}
                className="ms-0 me-2"
              >
                <IonIcon icon={addCircleOutline}></IonIcon>
                Add another pension
              </IonButton>
            </IonCol>
            <IonCol className={numIncomingPensions > 0 ? 'd-none' : ''}>
              <IonButton
                expand="block"
                fill="clear"
                routerLink="/prototypecomplete"
                color="appprimary"
                className="ms-2 me-0"
              >
                Exit
              </IonButton>
            </IonCol>
            <IonCol className={numIncomingPensions > 0 ? '' : 'd-none'}>
              <IonButton
                expand="block"
                routerLink="/transferdetails"
                color="appprimary"
                onClick={handleOnHoldNextButtonClick}
                className="ms-2 me-0"
              >
                Next
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default CaptureEmployerPayingIn;
