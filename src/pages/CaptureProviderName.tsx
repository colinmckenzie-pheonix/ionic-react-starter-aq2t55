import React from 'react';
import {
  IonContent,
  IonPage,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonInput,
  IonLabel,
  IonSelect,
  IonSelectOption,
} from '@ionic/react';
import AppHeader from '../components/appheader/AppHeader';
import { useAppDispatch, useAppSelector } from '../datamodel/hooks';
import {
  getSelectedIncomingPension,
  IIncomingPension,
  IPensionProvider,
  isAgeOver55,
  NOT_LISTED_PROVIDER_ID,
  PENSION_PROVIDERS,
  setProviderForSelectedPension,
  setUnlistedProviderNameForSelectedPension,
} from '../datamodel/appdataslice';

import CapturedPensionDetails from '../components/CapturedPensionDetails';

const compareWith = (o1: IPensionProvider, o2: IPensionProvider) => {
  return o1 && o2 ? o1.id === o2.id : o1 === o2;
};

const CaptureProviderName: React.FC = () => {
  // used to update the central data store
  const dispatch = useAppDispatch();

  // get data this component needs from the central store
  const selectedIncomingPension: IIncomingPension = useAppSelector(getSelectedIncomingPension);
  const ageOver55: boolean = useAppSelector(isAgeOver55);

  let backLink = '/startcheck';
  if (ageOver55) {
    backLink = '/beforewebegin';
  }

  // handle events
  const handleUnlistedProviderNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setUnlistedProviderNameForSelectedPension(event.target.value));
  };
  const handleProviderNameSelect = (provider: IPensionProvider) => {
    dispatch(setProviderForSelectedPension(provider));
  };
  const handleNextButtonClick = (event: React.UIEvent) => {
    if (NOT_LISTED_PROVIDER_ID !== selectedIncomingPension.provider.id) {
      dispatch(setUnlistedProviderNameForSelectedPension(''));
    } else {
      const unlistedProvider: IPensionProvider = {
        id: NOT_LISTED_PROVIDER_ID,
        name: selectedIncomingPension.unlistedProviderName ? selectedIncomingPension.unlistedProviderName : '',
        isCheckBenefits: true,
        isCheckFees: true,
      };
      dispatch(setProviderForSelectedPension(unlistedProvider));
    }
  };

  return (
    <IonPage>
      <AppHeader routerLink={backLink} />
      <IonContent fullscreen className="grey-color">
        <IonGrid className="ion-no-padding ion-no-margin">
          <IonRow className="pt-4 px-3 primary-blue-bg">
            <IonCol>
              <h1 className="white-color fw-bold">Who's the pension provider?</h1>
            </IonCol>
          </IonRow>
          <IonRow className="primary-blue-bg">
            <IonCol className="top-corners"></IonCol>
          </IonRow>
          <IonRow className={selectedIncomingPension.isAdded ? 'py-2' : 'd-none'}>
            <IonCol>
              <CapturedPensionDetails
                pension={selectedIncomingPension}
                isPastPolicyNumberPage={false}
                isPastValuePage={false}
              />
            </IonCol>
          </IonRow>
          <IonRow className="pt-2 px-3 primary-blue">
            <IonCol>
              <IonLabel>Pension Provider Name</IonLabel>
            </IonCol>
          </IonRow>
          <IonRow className="pt-2 px-3">
            <IonCol>
              <IonSelect
                compareWith={compareWith}
                value={selectedIncomingPension.provider}
                onIonChange={(e) => handleProviderNameSelect(e.detail.value)}
              >
                {PENSION_PROVIDERS.map((pension) => (
                  <IonSelectOption key={pension.id} value={pension}>
                    {pension.name}
                  </IonSelectOption>
                ))}
              </IonSelect>
            </IonCol>
          </IonRow>
          <IonRow
            id="unlistedProvider"
            className={NOT_LISTED_PROVIDER_ID === selectedIncomingPension.provider.id ? 'pt-2 px-3' : 'd-none'}
          >
            <IonCol>
              <IonInput
                type="text"
                placeholder="Unlisted provider name"
                value={selectedIncomingPension.unlistedProviderName}
                onIonChange={(e: any = {}) => handleUnlistedProviderNameInput(e)}
              />
            </IonCol>
          </IonRow>
          <IonRow
            className={
              (NOT_LISTED_PROVIDER_ID !== selectedIncomingPension.provider.id &&
                selectedIncomingPension.provider.id > 0) ||
              (NOT_LISTED_PROVIDER_ID === selectedIncomingPension.provider.id &&
                selectedIncomingPension.unlistedProviderName &&
                selectedIncomingPension.unlistedProviderName.length > 0)
                ? 'pt-4 px-3'
                : 'd-none'
            }
          >
            <IonCol>
              <IonButton
                expand="block"
                routerLink="/captureplannumber"
                color="appprimary"
                onClick={handleNextButtonClick}
              >
                Next
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default CaptureProviderName;
