import React, { useState } from 'react';
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
  IonIcon,
  IonLabel,
  useIonAlert,
  IonCheckbox,
} from '@ionic/react';
import AppHeader from '../components/appheader/AppHeader';
import { useAppDispatch, useAppSelector } from '../datamodel/hooks';
import {
  deleteIncomingPension,
  getIncomingPensions,
  getInhousePensionForSelectedIndex,
  getNumIncomingPensionsForTransfer,
  IIncomingPension,
  IInhousePension,
  setSelectedIncomingPensionForIndex,
} from '../datamodel/appdataslice';
import { pencilOutline, trashOutline, documentTextOutline } from 'ionicons/icons';

const FinalChecks: React.FC = () => {
  const [present] = useIonAlert();

  // used to update the central data store
  const dispatch = useAppDispatch();

  // get data this component needs from the central store
  const incomingPensions: IIncomingPension[] = useAppSelector(getIncomingPensions);
  const numIncomingPensions: number = useAppSelector(getNumIncomingPensionsForTransfer);
  const pension: IInhousePension = useAppSelector(getInhousePensionForSelectedIndex);

  // local state
  const [checked, setChecked] = useState(false);

  // handle events
  const handleEditButtonClick = (id: number) => {
    dispatch(setSelectedIncomingPensionForIndex(id));
  };
  const handleDeleteButtonClick = (id: number) => {
    //    dispatch(setSelectedIncomingPensionForIndex(id));
    dispatch(deleteIncomingPension(id));
  };
  return (
    <IonPage>
      <AppHeader routerLink={'/confirmpensiontotransferinto'} />
      <IonContent fullscreen className="grey-bg-custom-prop">
        <IonGrid className="ion-no-padding ion-no-margin grey-bg pb-4">
          <IonRow className="pt-4 mb-3 px-3">
            <IonCol>
              <span className="h1 primary-blue fw-bold">Final checks</span>
            </IonCol>
          </IonRow>
          <IonRow className={numIncomingPensions > 0 ? 'px-3' : 'd-none'}>
            <IonCol>
              <span className="primary-blue fw-bold fs-3">Pensions to transfer</span>
            </IonCol>
          </IonRow>
          {incomingPensions
            .filter((pension: IIncomingPension) => pension && !pension.onHold)
            .map((pension: IIncomingPension) => (
              <IonRow key={pension.id.toString()} className="pt-2 px-2">
                <IonCol>
                  <IonCard className="mx-2">
                    <IonCardContent className="ion-no-padding">
                      <IonGrid>
                        <IonRow className="ms-3 me-2 mt-2">
                          <IonCol>
                            <IonLabel className="primary-blue fs-6">
                              <strong>{pension.provider.name}</strong>
                            </IonLabel>
                          </IonCol>
                        </IonRow>
                        <IonRow className="ms-3">
                          <IonCol>
                            <IonLabel className="fs-6">{pension.planNumber}</IonLabel>
                          </IonCol>
                        </IonRow>
                        <IonRow className="me-4">
                          <IonCol>
                            <IonButton
                              fill="clear"
                              routerLink="/captureprovidername"
                              color="appprimary"
                              className="fw-bold"
                              onClick={() => handleEditButtonClick(pension.id)}
                              mode="ios"
                            >
                              <IonIcon color="appprimary" icon={pencilOutline} className="fs-4 me-1"></IonIcon>
                              Edit
                            </IonButton>
                          </IonCol>
                          <IonCol size="1">
                            <IonButton
                              fill="clear"
                              onClick={() =>
                                present({
                                  cssClass: 'my-css',
                                  header: 'Delete transfer?',
                                  buttons: [
                                    'Cancel',
                                    {
                                      text: 'Ok',
                                      handler: () => handleDeleteButtonClick(pension.id),
                                    },
                                  ],
                                })
                              }
                            >
                              <IonIcon color="appprimary" icon={trashOutline} className="fs-4"></IonIcon>
                            </IonButton>
                          </IonCol>
                        </IonRow>
                      </IonGrid>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>
            ))}
          <IonRow className="pt-4 mb-2 px-3">
            <IonCol>
              <span className="primary-blue fw-bold fs-3">Receiving pension</span>
            </IonCol>
          </IonRow>
          <IonRow className="px-3">
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
          <IonRow className="pt-4 px-3">
            <IonCol>
              <span className="primary-blue fw-bold fs-3">Check your address</span>
            </IonCol>
          </IonRow>
          <IonRow className="pt-2 px-3">
            <IonCol>
              <span className="grey-color">
                14 New Street,
                <br />
                Edinburgh, EH1 7NY
              </span>
            </IonCol>
            <IonCol className="ion-text-right">
              <IonButton fill="clear" color="appprimary" className="fw-bold" mode="ios">
                <IonIcon color="appprimary" icon={pencilOutline} className="fs-4 me-1"></IonIcon>
                Edit
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow className="pt-4 px-3">
            <IonCol>
              <IonCard className="mx-1">
                <IonCardContent className="ion-no-padding">
                  <IonGrid>
                    <IonRow className="ms-3 me-2 mt-2">
                      <IonCol>
                        <IonCheckbox
                          mode="md"
                          color="appprimary"
                          checked={checked}
                          onIonChange={(e) => setChecked(e.detail.checked)}
                        />
                        <span className="primary-blue fw-bold fs-3 ps-3">Declarations</span>
                      </IonCol>
                    </IonRow>
                    <IonRow className="pt-2 pb-3 px-3">
                      <IonCol>
                        <span className="grey-color">
                          I've had the opportunity to read the{' '}
                          <a
                            className="text-nowrap"
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                            }}
                          >
                            Full Declarations
                          </a>{' '}
                          <IonIcon
                            color="appprimary"
                            icon={documentTextOutline}
                            className="fs-4 me-1 align-bottom"
                          ></IonIcon>
                          and I'm happy to proceed with the transfer
                        </span>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonFooter className="ion-no-border px-3">
        <IonToolbar className="grey-bg-custom-prop">
          <IonButton
            expand="block"
            routerLink="/confirmation"
            color="appprimary"
            disabled={!checked || numIncomingPensions === 0}
          >
            Submit
          </IonButton>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default FinalChecks;
