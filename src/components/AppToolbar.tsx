import React from 'react';
import { IonToolbar, IonGrid, IonRow, IonCol, IonIcon, IonButton } from '@ionic/react';
import { home, mailOutline, addCircleOutline, helpCircleOutline, personOutline } from 'ionicons/icons';

const AppToolbar: React.FC<{ routerLink: string }> = ({ routerLink }) => {
  return (
    <IonToolbar>
      <IonGrid>
        <IonRow>
          <IonCol className="d-flex justify-content-center secondary-blue">
            <div className="text-center">
              <div>
                <IonButton icon-only fill="clear" routerLink={routerLink}>
                  <IonIcon icon={home} className="toolbar-icon"></IonIcon>
                </IonButton>
              </div>
              <div>Home</div>
            </div>
          </IonCol>
          <IonCol className="d-flex justify-content-center">
            <div className="text-center">
              <div>
                <IonButton icon-only fill="clear" routerLink={routerLink}>
                  <IonIcon icon={mailOutline} className="toolbar-icon grey-color"></IonIcon>
                </IonButton>
              </div>
              <div>Mail</div>
            </div>
          </IonCol>
          <IonCol className="d-flex justify-content-center">
            <div className="text-center">
              <div>
                <IonButton icon-only fill="clear" routerLink={routerLink}>
                  <IonIcon icon={addCircleOutline} className="toolbar-icon grey-color"></IonIcon>
                </IonButton>
              </div>
              <div>Actions</div>
            </div>
          </IonCol>
          <IonCol className="d-flex justify-content-center">
            <div className="text-center">
              <div>
                <IonButton icon-only fill="clear" routerLink={routerLink}>
                  <IonIcon icon={helpCircleOutline} className="toolbar-icon grey-color"></IonIcon>
                </IonButton>
              </div>
              <div>Help</div>
            </div>
          </IonCol>
          <IonCol className="d-flex justify-content-center">
            <div className="text-center">
              <div>
                <IonButton icon-only fill="clear" routerLink={routerLink}>
                  <IonIcon icon={personOutline} className="toolbar-icon grey-color"></IonIcon>
                </IonButton>
              </div>
              <div>Profile</div>
            </div>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonToolbar>
  );
};

export default AppToolbar;
