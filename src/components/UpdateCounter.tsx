import React from 'react';
import {
  IonButton,
  IonCol,
  IonGrid,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonRow,
} from '@ionic/react';
import { useAppDispatch, useAppSelector } from '../datamodel/hooks';
import {
  decrementCounter,
  incrementCounter,
} from '../datamodel/example/exampleSlice';

const UpdateCounter = () => {
  const dispatch = useAppDispatch();
  const { counter } = useAppSelector((state: any = {}) => state.example);

  return (
    <IonList>
      <IonItem>
        <IonGrid>
          <IonRow>
            <IonCol useClass="ion-align-self-center">
              <IonButton onClick={() => dispatch(decrementCounter())}>
                Decrease
              </IonButton>
            </IonCol>
            <IonCol useClass="ion-align-self-center">{counter}</IonCol>
            <IonCol useClass="ion-align-self-center">
              <IonButton onClick={() => dispatch(incrementCounter())}>
                Increase
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonItem>
    </IonList>
  );
};

export default UpdateCounter;
