import React, { useState } from 'react';
import {
  IonIcon,
  IonCard,
  IonCardContent,
  IonCol,
  IonGrid,
  IonRow,
  IonAccordion,
  IonAccordionGroup,
  IonButton,
  IonContent,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonModal,
} from '@ionic/react';
import { closeCircleOutline, warningOutline } from 'ionicons/icons';

const CheckFees: React.FC = () => {
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
              <IonCol className="h2 primary-blue fw-bold">Investment guarantees</IonCol>
            </IonRow>
            <IonRow>
              <IonCol className="fs-6">
                Some pensions are invested in funds that are guaranteed to grow at a minimum rate.
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol className="fs-6">Check the investments section of your annual statement for terms like:</IonCol>
            </IonRow>
            <IonRow>
              <IonCol className="fs-6 fw-bold">
                <ul>
                  <li>&ldquo;guaranteed&rdquo;</li>
                  <li>&ldquo;with profits&rdquo;</li>
                </ul>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol className="fs-6">
                If you have an investment guarantee and transfer early, your provider may apply a &ldquo;market value
                reduction&rdquo;. Ask them if you're not sure.
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonModal>
      <IonCard className="mx-2 check-benefits-content">
        <IonCardContent>
          <IonGrid>
            <IonRow className="py-1">
              <IonCol size="1">
                <IonIcon icon={warningOutline} className="fs-4 me-1 warning-icon"></IonIcon>
              </IonCol>
              <IonCol>
                <IonRow>
                  <IonCol className="fs-6 black-color">
                    You might want to check if this pension has an{' '}
                    <a
                      className="text-nowrap"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowModal(true);
                      }}
                    >
                      investment guarantee
                    </a>
                    , or if an exit fee applies.
                  </IonCol>
                </IonRow>
                <IonRow className="mt-4">
                  <IonCol className="fs-6 black-color">
                    You can usually tell from your annual statement. If you're unsure, put this transfer on hold while
                    you contact your provider.
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

export default CheckFees;
