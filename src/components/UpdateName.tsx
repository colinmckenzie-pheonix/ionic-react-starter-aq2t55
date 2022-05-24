import React from 'react';
import { IonButton, IonInput, IonItem, IonLabel, IonList } from '@ionic/react';
import { useAppDispatch, useAppSelector } from '../datamodel/hooks';
import { setName, setNameInput } from '../datamodel/example/exampleSlice';

const UpdateName = () => {
  const dispatch = useAppDispatch();
  const { nameInput } = useAppSelector((state: any = {}) => state.example);

  return (
    <IonList>
      <IonItem>
        <IonLabel>Name:</IonLabel>
        <IonInput
          type="text"
          placeholder="Add name"
          value={nameInput}
          onIonChange={(e: any = {}) => dispatch(setNameInput(e.detail.value))}
        />
        <IonButton onClick={() => dispatch(setName(nameInput))}>
          Change Name
        </IonButton>
      </IonItem>
    </IonList>
  );
};

export default UpdateName;
