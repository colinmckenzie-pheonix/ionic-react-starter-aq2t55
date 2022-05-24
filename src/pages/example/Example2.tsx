import React from 'react';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { useAppSelector } from '../../datamodel/hooks';
import UpdateName from '../../components/UpdateName';
import UpdateCounter from '../../components/UpdateCounter';
import {
  selectCombinedIds,
  getSelectedPensionProvider,
} from '../../datamodel/example/exampleSlice';

const Example2 = () => {
  const { trueFalse, selectedPensionProviderId, selectedId } = useAppSelector(
    (state: any = {}) => state.example
  );

  const combinedIdResult = useAppSelector(selectCombinedIds);
  const selectedProvider = useAppSelector(getSelectedPensionProvider);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Example 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonItem>
          <IonLabel>TrueFalse: {'' + trueFalse}</IonLabel>
        </IonItem>
        <UpdateCounter />
        <IonItem>
          Selector combining counter and provider ids: {combinedIdResult}
        </IonItem>
        <UpdateName />
        <IonItem>
          Selected Provider Id: {selectedPensionProviderId ?? '(none selected)'}
        </IonItem>
        <IonItem>
          Selected Provider:{' '}
          {selectedProvider ? selectedProvider.value : '(none selected)'}
        </IonItem>
      </IonContent>
      <IonButton routerLink="/home">Home</IonButton>
      <IonButton routerLink="/example1">Example1</IonButton>
    </IonPage>
  );
};

export default Example2;
