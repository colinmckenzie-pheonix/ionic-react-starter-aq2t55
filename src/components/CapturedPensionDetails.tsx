import React from 'react';
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import { IIncomingPension } from '../datamodel/appdataslice';

const CapturedPensionDetails: React.FC<{
  pension: IIncomingPension;
  isPastPolicyNumberPage: boolean;
  isPastValuePage: boolean;
}> = ({ pension, isPastPolicyNumberPage, isPastValuePage }) => {
  return (
    <IonGrid
      className={
        isPastValuePage
          ? 'ion-no-padding ion-no-margin pt-1 pb-2 primary-blue'
          : 'ion-no-padding ion-no-margin pt-1 primary-blue'
      }
    >
      <IonRow className="px-3">
        <IonCol>
          Provider:&nbsp;
          <span className="fw-bold">{pension && pension.provider ? pension.provider.name : ''}</span>
        </IonCol>
      </IonRow>
      <IonRow className={pension.isAdded || isPastPolicyNumberPage ? 'pt-3 px-3' : 'd-none'}>
        <IonCol>
          Policy number:&nbsp;
          <span className={pension.isAdded || isPastPolicyNumberPage ? 'fw-bold' : 'd-none'}>
            {pension ? pension.planNumber : ''}
          </span>
        </IonCol>
      </IonRow>
      <IonRow className={pension.isAdded || isPastValuePage ? 'pt-3 px-3' : 'd-none'}>
        <IonCol>
          Rough value:&nbsp;
          <span className={pension.isAdded || isPastValuePage ? 'fw-bold' : 'd-none'}>
            {pension && pension.estimatedValue ? pension.estimatedValue : ''}
          </span>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default CapturedPensionDetails;
