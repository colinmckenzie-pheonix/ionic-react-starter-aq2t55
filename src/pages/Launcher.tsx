import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
  IonSelectOption,
  IonSelect,
  IonCheckbox,
} from '@ionic/react';
import { useAppDispatch, useAppSelector } from '../datamodel/hooks';
import {
  setAfterPensionsADay,
  setNumPensions,
} from '../datamodel/launcher/launcherSlice';

//Added import statements
import { useState } from 'react'; //for use with hooks

const Launcher: React.FC = () => {
  const { afterPensionsADay, numPensions } = useAppSelector(
    (state: any = {}) => state.launcher
  );

  const dispatch = useAppDispatch();
  const [afterPensionsADayValue, setAfterPensionsADay] =
    useState(afterPensionsADay);
  const [numPensionsValue, setNumPensions] = useState(numPensions);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Launcher</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonItem>
          <IonLabel>DOB after Pensions A Day: </IonLabel>
          <IonCheckbox
            checked={afterPensionsADayValue}
            onIonChange={(e) => {
              //setAfterPensionsADay(e.detail.checked);
              //              dispatch(setAfterPensionsADay(e.detail.checked));
              console.log('checkbox value: ' + e.detail.checked);
            }}
          />
        </IonItem>
        <IonItem>
          <IonLabel>Number of pensions already transferred</IonLabel>
          <IonSelect
            onIonChange={(e) => {
              console.log('selected pension number: ' + e.detail.value);
            }}
          >
            <IonSelectOption value="1">1</IonSelectOption>
            <IonSelectOption value="2">2</IonSelectOption>
            <IonSelectOption value="3">3</IonSelectOption>
            <IonSelectOption value="4">4</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonButton routerLink="/home">Home</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Launcher;
