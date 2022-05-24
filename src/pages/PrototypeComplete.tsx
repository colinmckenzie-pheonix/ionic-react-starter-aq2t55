import React from 'react';
import { IonContent, IonPage, IonButton, IonGrid, IonRow, IonCol, IonIcon } from '@ionic/react';
import { checkmarkCircle } from 'ionicons/icons';
import AppHeader from '../components/appheader/AppHeader';
import { useAppDispatch } from '../datamodel/hooks';
const PrototypeComplete: React.FC = () => {
  // used to update the central data store
  const dispatch = useAppDispatch();

  const handleNextButtonClick = (event: React.UIEvent) => {
    event.preventDefault();
    window.location.href = '/';
  };

  return (
    <IonPage>
      <AppHeader routerLink={''} />
      <IonContent fullscreen>
        <IonGrid className="ion-no-padding ion-no-margin pb-4">
          <IonRow className="pt-4 px-3 ion-align-items-center">
            <IonCol>
              <h1 className="primary-blue fw-bold ion-text-center">Thanks</h1>
            </IonCol>
          </IonRow>
          <IonRow className="pt-4 px-3 ion-text-center">
            <IonCol>
              <IonIcon icon={checkmarkCircle} className="large-icon positive-green-color"></IonIcon>
            </IonCol>
          </IonRow>
          <IonRow className="pt-4 px-3">
            <IonCol>
              <IonButton expand="block" routerLink="/" color="appprimary" onClick={handleNextButtonClick}>
                You have completed the prototype
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default PrototypeComplete;
