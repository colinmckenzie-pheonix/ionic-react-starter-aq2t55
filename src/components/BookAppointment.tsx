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
import {
  closeCircleOutline,
  informationCircleOutline,
  desktopOutline,
  openOutline,
  personOutline,
  callOutline,
} from 'ionicons/icons';

const BookAppointment: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <IonModal isOpen={showModal} className="my-custom-class">
        <IonItemDivider>
          <IonGrid>
            <IonRow>
              <IonCol className="ion-text-center primary-blue fs-5 pt-2">Transfer pensions</IonCol>
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
              <IonCol className="h2 primary-blue fw-bold">Get free guidance from Pension Wise</IonCol>
            </IonRow>
            <IonRow>
              <IonCol className="fs-6 grey-color">
                PensionWise offer free impartial advice and are a service recommended by the UK government.
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonCard className="mx-2">
                  <IonCardContent className="ion-no-padding">
                    <IonGrid>
                      <IonRow className="px-2 pt-2">
                        <IonCol size="1">
                          <IonIcon color="appprimary" icon={desktopOutline} className="fs-4 me-1"></IonIcon>
                        </IonCol>
                        <IonCol className="fs-6 fw-bold primary-blue">Online</IonCol>
                        <IonCol size="1">
                          <IonIcon color="appprimary" icon={openOutline} className="fs-4 me-1"></IonIcon>
                        </IonCol>
                      </IonRow>
                      <IonRow className="px-2">
                        <IonCol size="1"></IonCol>
                        <IonCol>The quickest way to book an appointment is online</IonCol>
                      </IonRow>
                      <IonRow className="px-2 pb-2">
                        <IonCol size="1"></IonCol>
                        <IonCol>
                          <a
                            className="text-nowrap"
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                            }}
                          >
                            www.moneyhelper.org.uk/nudge-public
                          </a>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonCard className="mx-2">
                  <IonCardContent className="ion-no-padding">
                    <IonGrid>
                      <IonRow className="px-2 pt-2">
                        <IonCol size="1">
                          <IonIcon color="appprimary" icon={callOutline} className="fs-4 me-1"></IonIcon>
                        </IonCol>
                        <IonCol className="fs-6 fw-bold primary-blue">Phone</IonCol>
                      </IonRow>
                      <IonRow className="px-2">
                        <IonCol size="1"></IonCol>
                        <IonCol>Call Pension Wise for free on</IonCol>
                      </IonRow>
                      <IonRow className="px-2 pb-2">
                        <IonCol size="1"></IonCol>
                        <IonCol>
                          <a
                            className="text-nowrap"
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                            }}
                          >
                            0800 123 456
                          </a>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonCard className="mx-2">
                  <IonCardContent className="ion-no-padding">
                    <IonGrid>
                      <IonRow className="px-2 pt-2">
                        <IonCol size="1">
                          <IonIcon color="appprimary" icon={personOutline} className="fs-4 me-1"></IonIcon>
                        </IonCol>
                        <IonCol className="fs-6 fw-bold primary-blue">We're here to help</IonCol>
                      </IonRow>
                      <IonRow className="px-2">
                        <IonCol size="1"></IonCol>
                        <IonCol>Call us and we will help you book an appointment</IonCol>
                      </IonRow>
                      <IonRow className="px-2 pb-2">
                        <IonCol size="1"></IonCol>
                        <IonCol>
                          <a
                            className="text-nowrap"
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                            }}
                          >
                            0345 123 456
                          </a>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  </IonCardContent>
                </IonCard>
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
                  <IonCol className="fs-6 grey-color">
                    As you're planning to withdraw money, we strongly recommend you seek guidance or Financial Advice
                    before deciding what to do with your pension savings.
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol className="pt-3 fs-6 grey-color">
                    Pension Wise offer free and impartial guidance with a pension specialist, you can book an
                    appointment to help you make an informed decision.
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol className="pt-3 fs-6">
                    <IonButton
                      onClick={(e) => {
                        setShowModal(true);
                      }}
                      fill="outline"
                      color="appprimary"
                      className="secondary-blue fw-bold"
                    >
                      Book an appointment
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

export default BookAppointment;
