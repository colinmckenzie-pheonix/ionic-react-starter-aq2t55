import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
} from '@ionic/react';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonButton routerLink="/example1">Example 1</IonButton>
        <IonButton routerLink="/example2">Example 2</IonButton>
        <IonButton routerLink="/launcher">Launcher</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
