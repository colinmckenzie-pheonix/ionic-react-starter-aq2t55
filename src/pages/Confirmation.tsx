import React from 'react';
import {
  IonContent,
  IonPage,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonCard,
  IonCardContent,
  IonFooter,
} from '@ionic/react';
import { checkmarkCircle } from 'ionicons/icons';
import AppHeader from '../components/appheader/AppHeader';
import { useAppDispatch } from '../datamodel/hooks';
import AppToolbar from '../components/AppToolbar';
const Confirmation: React.FC = () => {
  // used to update the central data store
  const dispatch = useAppDispatch();

  return (
    <IonPage>
      <AppHeader routerLink={''} />
      <IonContent fullscreen className="grey-bg-custom-prop">
        <IonGrid className="ion-no-padding ion-no-margin grey-bg pb-4">
          <IonRow className="pt-4 px-3 ion-align-items-center">
            <IonCol>
              <span className="h1 primary-blue fw-bold">Done</span>
            </IonCol>
            <IonCol className="ion-text-center">
              <IonIcon icon={checkmarkCircle} className="large-icon positive-green-color"></IonIcon>
            </IonCol>
            <IonCol></IonCol>
          </IonRow>
          <IonRow className="pt-4 px-3">
            <IonCol>
              <span className="grey-color">
                We will send confirmation of your transfer application to{' '}
                <a
                  className="text-nowrap"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  test_customer@test.com
                </a>
                .
              </span>
            </IonCol>
          </IonRow>
          <IonRow className="pt-4 px-3">
            <IonCol>
              <span className="grey-color fw-bold fs-3">Estimated transfer date</span>
            </IonCol>
          </IonRow>
          <IonRow className="px-3">
            <IonCol>
              <span className="primary-blue fw-bold fs-3">3 June - 18 June</span>
            </IonCol>
          </IonRow>
          <IonRow className="pt-4 px-3">
            <IonCol>
              <IonCard className="mx-1">
                <IonCardContent className="ion-no-padding">
                  <IonGrid>
                    <IonRow className="ms-3 me-2 mt-2">
                      <IonCol>
                        <span className="primary-blue fw-bold fs-5">What happens now?</span>
                      </IonCol>
                    </IonRow>
                    <div className="ps-3 d-flex justify-content-start align-items-center">
                      <div className="d-inline-flex justify-content-start align-items-center">
                        <div>
                          <IonIcon icon={checkmarkCircle} className="fs-2 positive-green-color"></IonIcon>
                        </div>
                      </div>
                      <div className="ps-3 grey-color fs-6">Transfer application submitted</div>
                    </div>
                    <div className="ps-4 d-flex justify-content-start align-items-center">
                      <div className="d-inline-flex justify-content-start align-items-center">
                        <div className="vertical-line vertical-line-middle"></div>
                      </div>
                      <div className="ps-4 ms-2">We contact your old providers</div>
                    </div>
                    <div className="ps-4 d-flex justify-content-start align-items-center">
                      <div className="d-inline-flex justify-content-start align-items-center">
                        <div className="vertical-line vertical-line-middle"></div>
                      </div>
                      <div className="ps-4 ms-2">If they need more information we'll let you know</div>
                    </div>
                    <div className="ps-4 d-flex justify-content-start align-items-center">
                      <div className="d-inline-flex justify-content-start align-items-center">
                        <div className="vertical-line vertical-line-bottom list-dot-bottom"></div>
                      </div>
                      <div className="ps-4 ms-2">We'll email you when the money arrives</div>
                    </div>
                  </IonGrid>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow className="pt-4 px-3">
            <IonCol>
              <IonButton expand="block" routerLink="/prototypecomplete" color="appprimary">
                Leave feedback
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonFooter className="ion-no-border mt-3">
        <AppToolbar routerLink={'/prototypecomplete'} />
      </IonFooter>
    </IonPage>
  );
};

export default Confirmation;
