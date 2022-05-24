import React, { useState } from 'react';
import {
  IonIcon,
  IonCard,
  IonCardContent,
  IonCol,
  IonGrid,
  IonRow,
  IonButton,
  IonContent,
  IonItemDivider,
  IonModal,
} from '@ionic/react';
import { closeCircleOutline, informationCircleOutline } from 'ionicons/icons';

const Adviser: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <IonModal isOpen={showModal} className="my-custom-class">
        <IonItemDivider>
          <IonGrid>
            <IonRow>
              <IonCol className="ion-text-center primary-blue fs-5 pt-2">Pension type information</IonCol>
              <IonCol className="ion-text-right" size="1">
                <IonButton className="narrow-icon-button" size="small" fill="clear" onClick={() => setShowModal(false)}>
                  <IonIcon color="appprimary" icon={closeCircleOutline} className="fs-3" slot="icon-only"></IonIcon>
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonItemDivider>
        <IonContent>
          <IonGrid className="pt-3 px-3">
            <IonRow>
              <IonCol className="h2 primary-blue fw-bold">This scheme has a nominated adviser:</IonCol>
            </IonRow>
            <IonRow>
              <IonCol className="fs-5 fw-bold grey-color">Mulberry Wealth Limited</IonCol>
            </IonRow>
            <IonRow>
              <IonCol className="fs-6 grey-color">
                <strong>If you don't recognise them,</strong> they may have been used by your previous employer to set
                up their workplace scheme. We'll remove their details if you proceed with this transfer.
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol className="fs-6 grey-color">
                <strong>If you added this adviser yourself,</strong> you may wish to contact them before transferring.
                If you proceed with this transfer, we'll remove their details.
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonModal>
      <IonCard className="mx-2 adviser-content">
        <IonCardContent>
          <IonGrid>
            <IonRow className="py-1">
              <IonCol size="1">
                <IonIcon color="appprimary" icon={informationCircleOutline} className="fs-4 me-1"></IonIcon>
              </IonCol>
              <IonCol>
                <IonRow>
                  <IonCol className="fs-6 fw-bold primary-blue">Financial adviser</IonCol>
                </IonRow>
                <IonRow>
                  <IonCol className="fs-6 grey-color">
                    There's a financial adviser linked to this plan. If you're happy to continue, we'll remove their
                    details on transfer.
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol className="fs-6">
                    <IonButton
                      onClick={(e) => {
                        setShowModal(true);
                      }}
                      color="appsecondary"
                      className="secondary-blue fw-bold"
                    >
                      More info
                    </IonButton>
                  </IonCol>
                </IonRow>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCardContent>
      </IonCard>
    </div>
  );
};

export default Adviser;
