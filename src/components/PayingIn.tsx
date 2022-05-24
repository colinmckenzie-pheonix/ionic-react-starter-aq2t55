import React from 'react';
import { IonIcon, IonCard, IonCardContent, IonCol, IonGrid, IonRow } from '@ionic/react';
import { warningOutline } from 'ionicons/icons';

const PayingIn: React.FC = () => {
  return (
    <IonCard className="mx-2 check-benefits-content">
      <IonCardContent>
        <IonGrid>
          <IonRow className="py-1">
            <IonCol size="1">
              <IonIcon icon={warningOutline} className="fs-4 me-1 warning-icon"></IonIcon>
            </IonCol>
            <IonCol>
              <IonRow>
                <IonCol className="h5 fw-bold black-color">Sorry, you can't transfer this pension.</IonCol>
              </IonRow>
              <IonRow>
                <IonCol className="fs-6 black-color">
                  You'll miss out on valuable As your employer contributions if you transfer this pension now. We'll
                  save teh details so you can carry on later.
                </IonCol>
              </IonRow>
              <IonRow className="mt-4">
                <IonCol className="fs-6 black-color">You can still transfer other pensions.</IonCol>
              </IonRow>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>
  );
};

export default PayingIn;
