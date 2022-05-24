import React from 'react';
import { IonIcon, IonCard, IonCardContent, IonCol, IonGrid, IonRow, IonButton } from '@ionic/react';
import { callOutline, warningOutline } from 'ionicons/icons';

const CallToTransfer: React.FC = () => {
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
                <IonCol className="h5 fw-bold black-color">Call us to transfer</IonCol>
              </IonRow>
              <IonRow>
                <IonCol className="fs-6 black-color">
                  As you've already taken money out of this pension, you need to call us if you want to transfer it.
                  Call charges will vary.
                </IonCol>
              </IonRow>
              <IonRow className="mt-4">
                <IonCol>
                  <IonButton fill="outline" className="ms-0 me-2">
                    <IonIcon icon={callOutline}></IonIcon>
                    0345 123 456
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>
  );
};

export default CallToTransfer;
