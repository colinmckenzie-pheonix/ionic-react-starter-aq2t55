import React from 'react';
import { IonContent, IonPage, IonButton, IonGrid, IonRow, IonCol, IonCard, IonCardContent } from '@ionic/react';
import AppHeader from '../components/appheader/AppHeader';
import { useAppDispatch, useAppSelector } from '../datamodel/hooks';
import { IInhousePension, getInhousePensions, setSelectedInhousePensionIndex } from '../datamodel/appdataslice';
import {} from 'ionicons/icons';

const SelectPensionToTransferInto: React.FC = () => {
  // used to update the central data store
  const dispatch = useAppDispatch();

  // get data this component needs from the central store
  const inhousePensions: IInhousePension[] = useAppSelector(getInhousePensions);

  return (
    <IonPage>
      <AppHeader routerLink={'/transferdetails'} />
      <IonContent fullscreen className="grey-color grey-bg-custom-prop">
        <IonGrid className="ion-no-padding ion-no-margin grey-bg pb-4">
          <IonRow className="pt-4 mb-3 px-3">
            <IonCol>
              <span className="h1 primary-blue fw-bold">Which pension do you want to transfer money into</span>
            </IonCol>
          </IonRow>
          {inhousePensions.map((pension: IInhousePension, index: number) => (
            <IonRow className="pt-1 px-3" key={pension.planNumber}>
              <IonCol>
                <IonCard className="mx-1">
                  <IonCardContent className="ps-0">
                    <IonGrid className="ps-0">
                      <IonRow className="ps-3 ms-1">
                        <IonCol className="primary-blue fs-2 fw-bold">{pension.value}</IonCol>
                        <IonCol className="fs-6 mt-2 ion-text-right">{pension.planNumber}</IonCol>
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
                      <IonRow className="mt-4 ps-3 ms-1">
                        <IonCol>
                          <IonButton expand="block" fill="clear" color="appprimary" className="mx-2">
                            Full details
                          </IonButton>
                        </IonCol>
                        <IonCol>
                          <IonButton
                            expand="block"
                            fill="outline"
                            routerLink="/confirmpensiontotransferinto"
                            color="appprimary"
                            onClick={() => dispatch(setSelectedInhousePensionIndex(index))}
                          >
                            Select pension
                          </IonButton>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          ))}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default SelectPensionToTransferInto;
