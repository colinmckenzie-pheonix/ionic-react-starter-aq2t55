import React from 'react';
import {
  IonContent,
  IonPage,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonLabel,
  IonCard,
  IonCardContent,
  useIonAlert,
} from '@ionic/react';
import AppHeader from '../components/appheader/AppHeader';
import { useAppDispatch, useAppSelector } from '../datamodel/hooks';
import {
  getNumIncomingPensionsForTransfer,
  getIncomingPensions,
  IIncomingPension,
  setSelectedIncomingPensionForIndex,
  deleteIncomingPension,
  setNewSelectedIncomingPension,
  getNumIncomingPensionsOnHold,
} from '../datamodel/appdataslice';
import { timeOutline, pencilOutline, trashOutline, addCircleOutline, checkmarkCircleOutline } from 'ionicons/icons';

const TransferDetails: React.FC = () => {
  const [present] = useIonAlert();

  // used to update the central data store
  const dispatch = useAppDispatch();

  // get data this component needs from the central store
  const incomingPensions: IIncomingPension[] = useAppSelector(getIncomingPensions);
  const numIncomingPensionsForTransfer: number = useAppSelector(getNumIncomingPensionsForTransfer);
  const numIncomingPensionsOnHold: number = useAppSelector(getNumIncomingPensionsOnHold);

  // handle events
  const handleAddAnotherButtonClick = () => {
    dispatch(setNewSelectedIncomingPension());
  };
  const handleEditButtonClick = (id: number) => {
    dispatch(setSelectedIncomingPensionForIndex(id));
  };
  const handleDeleteButtonClick = (id: number) => {
    dispatch(deleteIncomingPension(id));
  };

  return (
    <IonPage>
      <AppHeader routerLink={'/startcheck'} />
      <IonContent fullscreen className="grey-color">
        <IonGrid className="ion-no-padding ion-no-margin">
          <div className={numIncomingPensionsOnHold > 0 ? 'grey-bg pb-3' : 'd-none'}>
            <IonRow className="pt-4 px-3">
              <IonCol>
                <span className="h1 primary-blue fw-bold">Transfers on hold</span>
              </IonCol>
            </IonRow>
            {incomingPensions
              .filter((pension: IIncomingPension) => pension.onHold)
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
                            <IonCol size="1">
                              <IonIcon icon={timeOutline} className="primary-blue fs-3"></IonIcon>
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
                                Resume
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
          </div>
          <div className={numIncomingPensionsForTransfer > 0 ? '' : 'd-none'}>
            <IonRow className="pt-4 px-3">
              <IonCol>
                <span className="h1 primary-blue fw-bold">Pensions to transfer</span>
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
                            <IonCol size="1">
                              <IonIcon icon={checkmarkCircleOutline} className="positive-green-color fs-3"></IonIcon>
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
          </div>
          <IonRow className="pt-4 px-3">
            <IonCol>
              <IonButton
                expand="block"
                routerLink="/captureprovidername"
                fill="outline"
                onClick={handleAddAnotherButtonClick}
                className="ms-0 me-2"
              >
                <IonIcon icon={addCircleOutline}></IonIcon>
                Add another pension
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow className={numIncomingPensionsForTransfer < 1 ? 'd-none' : 'pt-4 px-3'}>
            <IonCol>
              <IonButton expand="block" routerLink="/selectpensiontotransferinto" color="appprimary">
                Next
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow className={numIncomingPensionsForTransfer > 0 ? 'd-none' : 'mt-4'}>
            <IonCol className="ion-text-center">
              <IonButton fill="clear" routerLink="/prototypecomplete" color="appprimary">
                Exit
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default TransferDetails;
