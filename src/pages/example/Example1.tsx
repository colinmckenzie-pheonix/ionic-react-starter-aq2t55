import React from 'react';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCheckbox,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { useAppDispatch, useAppSelector } from '../../datamodel/hooks';
import {
  setTrueFalse,
  setSelectedPensionProviderId,
  KeyValuePair,
  selectCombinedIds,
  getSelectedPensionProvider,
} from '../../datamodel/example/exampleSlice';
import UpdateName from '../../components/UpdateName';
import UpdateCounter from '../../components/UpdateCounter';
import './Example.css';

const Example1 = () => {
  const dispatch = useAppDispatch();
  const { trueFalse, pensionProviders, selectedPensionProviderId } =
    useAppSelector((state: any = {}) => state.example);

  const combinedIdResult = useAppSelector(selectCombinedIds);
  const selectedProvider = useAppSelector(getSelectedPensionProvider);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Example 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonItem>
          <IonLabel>TrueFalse: {'' + trueFalse}</IonLabel>
          <IonCheckbox
            checked={trueFalse}
            onIonChange={(e) => dispatch(setTrueFalse(e.detail.checked))}
          />
        </IonItem>
        <UpdateCounter />
        <IonItem>
          Selector combining counter and provider ids: {combinedIdResult}
        </IonItem>
        <UpdateName />
        <IonItem>
          <IonLabel>Provider</IonLabel>
          <IonSelect
            value={selectedPensionProviderId}
            okText="OK"
            cancelText="Dismiss"
            onIonChange={(e) =>
              dispatch(setSelectedPensionProviderId(e.detail.value))
            }
          >
            {pensionProviders.map((provider: KeyValuePair) => (
              <IonSelectOption key={provider.key} value={provider.key}>
                {provider.value} (id: {provider.key})
              </IonSelectOption>
            ))}
          </IonSelect>
        </IonItem>
        <IonItem>
          Selected Provider Id: {selectedPensionProviderId ?? '(none selected)'}
        </IonItem>
        <IonItem>
          Selected Provider:{' '}
          {selectedProvider ? selectedProvider.value : '(none selected)'}
        </IonItem>
      </IonContent>
      <IonButton routerLink="/home">Home</IonButton>
      <IonButton routerLink="/example2">Example2</IonButton>
    </IonPage>
  );
};

export default Example1;
