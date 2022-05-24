import React from 'react';
import { IonContent, IonPage, IonButton, IonGrid, IonRow, IonCol, IonLabel, IonInput } from '@ionic/react';
import AppHeader from '../components/appheader/AppHeader';
import { useAppDispatch, useAppSelector } from '../datamodel/hooks';
import {
  getSelectedIncomingPension,
  IIncomingPension,
  setPlanNumberForSelectedPension,
} from '../datamodel/appdataslice';
import CapturedPensionDetails from '../components/CapturedPensionDetails';

const CapturePlanNumber: React.FC = () => {
  // used to update the central data store
  const dispatch = useAppDispatch();

  // get data this component needs from the central store
  const selectedIncomingPension: IIncomingPension = useAppSelector(getSelectedIncomingPension);

  // handle events
  const handlePlanNumberValueInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPlanNumberForSelectedPension(event.target.value));
  };

  return (
    <IonPage>
      <AppHeader routerLink={'/captureprovidername'} />
      <IonContent fullscreen className="grey-color">
        <IonGrid className="ion-no-padding ion-no-margin">
          <IonRow className="pt-4 px-3 primary-blue-bg">
            <IonCol>
              <h1 className="white-color fw-bold">What's the policy number?</h1>
            </IonCol>
          </IonRow>
          <IonRow className="primary-blue-bg">
            <IonCol className="top-corners"></IonCol>
          </IonRow>
          <IonRow className="pt-2">
            <IonCol>
              <CapturedPensionDetails
                pension={selectedIncomingPension}
                isPastPolicyNumberPage={false}
                isPastValuePage={false}
              />
            </IonCol>
          </IonRow>
          <IonRow className="pt-3 px-3">
            <IonCol>
              <IonLabel position="stacked">Pension Policy Number</IonLabel>
              <IonInput
                type="text"
                placeholder="Policy number"
                value={selectedIncomingPension.planNumber}
                onIonChange={(e: any = {}) => handlePlanNumberValueInput(e)}
              />
            </IonCol>
          </IonRow>
          <IonRow
            className={
              selectedIncomingPension.planNumber &&
              selectedIncomingPension.planNumber.length &&
              selectedIncomingPension.planNumber.length > 0
                ? 'pt-4 px-3'
                : 'd-none'
            }
          >
            <IonCol>
              <IonButton expand="block" routerLink="/capturevalue" color="appprimary">
                Next
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default CapturePlanNumber;
