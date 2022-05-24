import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonRow,
  IonGrid,
  IonCard,
  IonCol,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  getPlatforms,
} from '@ionic/react';

const Launcher: React.FC = () => {
  const platforms = getPlatforms(); // returns ["iphone", "ios", "mobile", "mobileweb"] from an iPhone
  let simulateMobile = !(platforms.indexOf('iphone') >= 0 || platforms.indexOf('android') >= 0);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Launcher</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color="light">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Platform</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <div>Platforms: {platforms}</div>
                  <div>Screen width: {window.innerWidth}</div>
                  <div>On Mobile: {'' + simulateMobile}</div>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Age under 32, one in-house pension with payments, no IFA</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonButton expand="block" routerLink="/start1">
                    Start
                  </IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Age under 32, two in-house pensions - one with payments, has IFA</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonButton expand="block" routerLink="/start2">
                    Start
                  </IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Age over 55, one in-house pension without payments, no IFA, closed fund</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonButton expand="block" routerLink="/start3">
                    Start
                  </IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Age over 55, two in-house pensions - one with payments, no IFA</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonButton expand="block" routerLink="/start4">
                    Start
                  </IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Age 40 - 49, two in-house pensions - no payments, no IFA, GPP to PP</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonButton expand="block" routerLink="/start5">
                    Start
                  </IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Launcher;
