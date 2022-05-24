import React from 'react';
import { IonToolbar, IonHeader, IonButtons, IonTitle, IonButton, IonIcon } from '@ionic/react';
import './AppHeader.css';
import { chevronBack } from 'ionicons/icons';

const AppHeader: React.FC<{ routerLink: string }> = ({ routerLink }) => {
  return (
    <IonHeader className="ion-no-border">
      <IonToolbar color="appdarkblue">
        <IonButtons slot="start">
          <IonButton
            color="light"
            fill="clear"
            routerLink={routerLink}
            mode="ios"
            className={'' !== routerLink ? 'p-0 m-0 fs-5' : 'd-none'}
          >
            <IonIcon color="light" className="primary-blue back-icon" icon={chevronBack}></IonIcon>
            Back
          </IonButton>
        </IonButtons>
        <IonTitle className="ion-text-center ps-0">Transfer pensions</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default AppHeader;
