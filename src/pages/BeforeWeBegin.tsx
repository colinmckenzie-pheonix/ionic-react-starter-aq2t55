import React, { useState } from 'react';
import {
  IonContent,
  IonPage,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonLabel,
  IonInput,
  IonCard,
  IonCheckbox,
} from '@ionic/react';
import AppHeader from '../components/appheader/AppHeader';
import { useAppDispatch, useAppSelector } from '../datamodel/hooks';
import { getNumIncomingPensions, setEstimatedValueForSelectedPension } from '../datamodel/appdataslice';
import BookAppointment from '../components/BookAppointment';

const BeforeWeBegin: React.FC = () => {
  const [planningToWithdraw, setPlanningToWithdraw] = useState<boolean>();
  const [hadAppointment, setHadAppointment] = useState<boolean>();
  const [paidForAdvice, setPaidForAdvice] = useState<boolean>();
  const [choseNo, setChoseNo] = useState<boolean>();

  const isNextDisabled = (): boolean => {
    let result = true;
    if (planningToWithdraw === false) {
      result = false;
    } else if (planningToWithdraw === true && (hadAppointment === true || paidForAdvice === true || choseNo === true)) {
      result = false;
    }
    return result;
  };

  return (
    <IonPage>
      <AppHeader routerLink={'/startcheck'} />
      <IonContent fullscreen className="grey-color">
        <IonGrid className="ion-no-padding ion-no-margin">
          <IonRow className="pt-4 px-3 primary-blue-bg">
            <IonCol>
              <h1 className="white-color fw-bold">Before we begin</h1>
            </IonCol>
          </IonRow>
          <IonRow className="primary-blue-bg">
            <IonCol className="top-corners"></IonCol>
          </IonRow>
          <IonRow className="pt-3 px-3">
            <IonCol>
              <IonLabel position="stacked">Are you planning to withdraw pension savings in the next 5 years?</IonLabel>
            </IonCol>
          </IonRow>
          <IonRow className="pt-4 px-3">
            <IonCol>
              <IonCard
                id="yesButton"
                button={true}
                color={planningToWithdraw === true ? 'appprimary' : 'appsecondary'}
                onClick={() => setPlanningToWithdraw(true)}
                className="ms-0 me-2 no-ripple card-as-button"
              >
                <div className="ion-text-center fs-6 py-2">Yes</div>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard
                id="yesButton"
                button={true}
                color={planningToWithdraw === false ? 'appprimary' : 'appsecondary'}
                onClick={() => setPlanningToWithdraw(false)}
                className="ms-2 me-0 no-ripple card-as-button"
              >
                <div className="ion-text-center fs-6 py-2">No</div>
              </IonCard>
            </IonCol>
          </IonRow>
          <div className={planningToWithdraw === true ? '' : 'd-none'}>
            <IonRow className="pt-4 px-3">
              <IonCol>
                <BookAppointment />
              </IonCol>
            </IonRow>
            <IonRow className="pt-4 px-3">
              <IonCol>
                Have you had a free appointment with Pension Wise or taken financial advice about this decision?
              </IonCol>
            </IonRow>
            <IonRow className="ms-3 me-2 mt-2">
              <IonCol size="1" className="d-flex align-items-center">
                <IonCheckbox
                  mode="md"
                  color="appprimary"
                  checked={hadAppointment}
                  onIonChange={(e) => {
                    setHadAppointment(e.detail.checked);
                    if (e.detail.checked) {
                      setChoseNo(false);
                    }
                  }}
                />
              </IonCol>
              <IonCol>Yes I have had a Pension Wise appointment</IonCol>
            </IonRow>
            <IonRow className="ms-3 me-2 mt-2">
              <IonCol size="1" className="d-flex align-items-center">
                <IonCheckbox
                  mode="md"
                  color="appprimary"
                  checked={paidForAdvice}
                  onIonChange={(e) => {
                    setPaidForAdvice(e.detail.checked);
                    if (e.detail.checked) {
                      setChoseNo(false);
                    }
                  }}
                />
              </IonCol>
              <IonCol>Yes I've paid for financial advice</IonCol>
            </IonRow>
            <IonRow className="ms-3 me-2 mt-2">
              <IonCol size="1" className="d-flex align-items-center">
                <IonCheckbox
                  mode="md"
                  color="appprimary"
                  checked={choseNo}
                  onIonChange={(e) => {
                    setChoseNo(e.detail.checked);
                    if (e.detail.checked) {
                      setPaidForAdvice(false);
                      setHadAppointment(false);
                    }
                  }}
                />
              </IonCol>
              <IonCol>No I chose not to use Pension Wise or pay for financial advice</IonCol>
            </IonRow>
          </div>
          <IonRow className="pt-4 px-3">
            <IonCol>
              <IonButton
                expand="block"
                routerLink="/captureprovidername"
                color="appprimary"
                disabled={isNextDisabled()}
              >
                {planningToWithdraw === false ? "Let's get started" : 'Next'}
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default BeforeWeBegin;
