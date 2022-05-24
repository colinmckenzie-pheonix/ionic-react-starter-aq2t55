import React from 'react';
import {
  IonContent,
  IonPage,
  IonButton,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
  IonSegment,
  IonSegmentButton,
  IonChip,
  IonFooter,
} from '@ionic/react';
import './Home.css';
import AppToolbar from '../../components/AppToolbar';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="ion-content-blue-bg">
        <h1 className="text-center fw-bold text-white mt-3">Pension Co.</h1>
        <IonGrid className="ion-no-padding mt-2 mx-3">
          <IonRow>
            <IonCol>
              <IonSegment mode="md" color="appselect">
                <IonSegmentButton className="text-white border-bottom border-2 segment-border-active">
                  <IonLabel>Pensions</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton className="text-white border-bottom border-2 segment-border-inactive">
                  <IonLabel>Savings</IonLabel>
                </IonSegmentButton>
              </IonSegment>
            </IonCol>
          </IonRow>
          <IonRow className="mt-5 pt-3 ion-justify-content-center">
            <IonCol className="inset maxw-400">
              <div className="py-5">
                <div className="text-center text-white">Total value</div>
                <div className="text-center text-white fw-bold value">£80,127</div>
                <div className="text-center text-white mt-4">Investment growth to date</div>
                <div className="text-center text-white fw-bold fs-4">£22,800</div>
                <div className="text-center mt-4">
                  <IonChip outline={true} color="light" className="border-2 p-3">
                    <IonLabel color="light">View details</IonLabel>
                  </IonChip>
                </div>
              </div>
            </IonCol>
          </IonRow>
          <IonRow className="mt-5">
            <IonCol>
              <div className="text-white d-flex justify-content-center">
                <div className="position-relative">
                  <div className="position-absolute left-white-line"></div>
                </div>
                <div className="px-2">Money invested is at risk</div>
                <div className="position-relative">
                  <div className="position-absolute right-white-line"></div>
                </div>
              </div>
            </IonCol>
          </IonRow>
          <IonRow className="mt-5">
            <IonCol className="pe-1 d-flex justify-content-center">
              <IonButton className="fw-bold maxw-300  w-100" expand="block" color="appsecondary" mode="ios">
                Top up
              </IonButton>
            </IonCol>
            <IonCol className="ps-1 d-flex justify-content-center">
              <IonButton
                className="fw-bold maxw-300 w-100"
                expand="block"
                color="appsecondary"
                mode="ios"
                routerLink="/startcheck"
              >
                Transfer pension in
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonFooter className="ion-no-border mt-3">
        <AppToolbar routerLink={''} />
      </IonFooter>
    </IonPage>
  );
};

export default Home;
