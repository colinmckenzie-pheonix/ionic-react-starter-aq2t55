import React from 'react';
import { IonContent, IonPage, IonButton, IonGrid, IonRow, IonCol, IonLabel, IonInput } from '@ionic/react';
import AppHeader from '../components/appheader/AppHeader';
import { useAppDispatch, useAppSelector } from '../datamodel/hooks';
import {
  getSelectedIncomingPension,
  IIncomingPension,
  setEstimatedValueForSelectedPension,
} from '../datamodel/appdataslice';
import CapturedPensionDetails from '../components/CapturedPensionDetails';

const CaptureEstimatedValue: React.FC = () => {
  // used to update the central data store
  const dispatch = useAppDispatch();

  // get data this component needs from the central store
  const selectedIncomingPension: IIncomingPension = useAppSelector(getSelectedIncomingPension);

  // handle events
  const handleEstimatedValueInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEstimatedValueForSelectedPension(Number.parseInt(event.target.value)));
  };

  return (
    <IonPage>
      <AppHeader routerLink={'/captureplannumber'} />
      <IonContent fullscreen className="grey-color">
        <IonGrid className="ion-no-padding ion-no-margin">
          <IonRow className="pt-4 px-3 primary-blue-bg">
            <IonCol>
              <h1 className="white-color fw-bold">What is the rough value?</h1>
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
                isPastValuePage={false}
              />
            </IonCol>
          </IonRow>
          <IonRow className="pt-3 px-3">
            <IonCol>
              <IonLabel position="stacked">Rough value</IonLabel>
              <IonInput
                type="number"
                value={selectedIncomingPension.estimatedValue}
                onIonChange={(e: any = {}) => handleEstimatedValueInput(e)}
              />
            </IonCol>
          </IonRow>
          <IonRow
            className={
              selectedIncomingPension.estimatedValue && selectedIncomingPension.estimatedValue > 0
                ? 'pt-4 px-3'
                : 'd-none'
            }
          >
            <IonCol>
              <IonButton expand="block" routerLink="/capturepayingin" color="appprimary">
                Next
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default CaptureEstimatedValue;
