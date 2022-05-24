import React from 'react';
import {
  IonContent,
  IonPage,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonFooter,
  IonToolbar,
} from '@ionic/react';
import AppHeader from '../components/appheader/AppHeader';
import { useAppDispatch, useAppSelector } from '../datamodel/hooks';
import { getInhousePensionForSelectedIndex, IInhousePension } from '../datamodel/appdataslice';
import Adviser from '../components/Adviser';

const ConfirmPensionToTransferInto: React.FC = () => {
  // used to update the central data store
  const dispatch = useAppDispatch();

  // get data this component needs from the central store
  const pension: IInhousePension = useAppSelector(getInhousePensionForSelectedIndex);

  return (
    <IonPage>
      <AppHeader routerLink={'/selectpensiontotransferinto'} />
      <IonContent fullscreen className="grey-bg-custom-prop">
        <IonGrid className="ion-no-padding ion-no-margin grey-bg pb-4">
          <IonRow className="pt-4 mb-3 px-3">
            <IonCol>
              <span className="h1 primary-blue fw-bold">Your transfer will go into this pension</span>
            </IonCol>
          </IonRow>
          <IonRow className="pt-3 mb-3 px-3">
            <IonCol>
              <span className="grey-color">
                Any pensions you transfer will be invested in line with your last regular paymnet.
              </span>
            </IonCol>
          </IonRow>
          <IonRow className="pt-1 px-3">
            <IonCol>
              <IonCard className="mx-1">
                <IonCardContent className="ps-0">
                  <IonGrid className="ps-0">
                    <IonRow className="ps-3 ms-1">
                      <IonCol className="primary-blue fs-2 fw-bold">{pension.value}</IonCol>
                      <IonCol className="fs-6 fw-bold primary-blue mt-2 ion-text-right">{pension.planNumber}</IonCol>
                    </IonRow>
                    <IonRow className={pension.recievingPayments ? 'mt-2 receiving-regular-payments-border' : 'mt-2'}>
                      <IonCol className="ps-3 ms-0">
                        <IonGrid className="p-0 m-0">
                          <IonRow>
                            <IonCol className="primary-blue fs-6 fw-bold">{pension.planName}</IonCol>
                          </IonRow>
                          <IonRow className={pension.recievingPayments ? '' : 'd-none'}>
                            <IonCol className="primary-blue positive-green-color small-font">
                              Receiving regular payments
                            </IonCol>
                          </IonRow>
                        </IonGrid>
                      </IonCol>
                    </IonRow>
                    <IonRow className="mt-3 ps-3 ms-1">
                      <IonCol>
                        Yearly charges <span className="fw-bold black-color">{pension.charges}</span>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow className={pension.adviserAttached ? 'mt-4 px-3' : 'd-none'}>
            <IonCol>
              <Adviser />
            </IonCol>
          </IonRow>
          <IonRow className="pt-4 px-3">
            <IonCol>
              <span className="grey-color">
                Make sure you're confortable with any difference in charges and investments between the pensions you're
                transferring and your Pension Co. plan.
              </span>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonFooter className="ion-no-border px-3">
        <IonToolbar className="grey-bg-custom-prop">
          <IonButton expand="block" routerLink="/finalchecks" color="appprimary">
            Final checks
          </IonButton>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default ConfirmPensionToTransferInto;
