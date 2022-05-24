import React, { useState } from 'react';
import {
  IonContent,
  IonPage,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonModal,
  IonItemDivider,
} from '@ionic/react';
import { checkmarkCircleOutline, timeOutline, closeCircleOutline } from 'ionicons/icons';
import AppHeader from '../components/appheader/AppHeader';
import { getScenarioStartLink, getNumIncomingPensions, isAgeOver55 } from '../datamodel/appdataslice';
import { useAppSelector } from '../datamodel/hooks';
import { helpCircleOutline } from 'ionicons/icons';
const StartCheck: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  // get data this component needs from the central store
  const backLink: string = useAppSelector(getScenarioStartLink);
  const numIncomingPensions: number = useAppSelector(getNumIncomingPensions);
  const ageOver55: boolean = useAppSelector(isAgeOver55);

  let forwardLink = '/captureprovidername';
  if (numIncomingPensions > 0) {
    forwardLink = '/transferdetails';
  } else if (ageOver55) {
    forwardLink = '/beforewebegin';
  }

  return (
    <IonPage>
      <AppHeader routerLink={backLink} />
      <IonContent fullscreen className="grey-color">
        <IonModal isOpen={showModal} className="my-custom-class">
          <IonItemDivider>
            <IonGrid>
              <IonRow>
                <IonCol className="ion-text-right">
                  <IonButton
                    className="narrow-icon-button"
                    size="small"
                    fill="clear"
                    onClick={() => setShowModal(false)}
                  >
                    <IonIcon color="appprimary" icon={closeCircleOutline} className="fs-3" slot="icon-only"></IonIcon>
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonItemDivider>
          <IonGrid className="pt-3 px-3">
            <IonRow>
              <IonCol className="h1 primary-blue">Defined benefit pensions</IonCol>
            </IonRow>
            <IonRow>
              <IonCol className="fs-6">
                Sometimes called <strong>final salary pensions</strong> - promise to pay an income based on how much you
                earn.
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol className="fs-6">
                These pensions are now rare and provide guarantees that are hard to beat. You're more likely to have one
                if you're older and worked for a larger employer.
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol className="fs-6">
                If you're unsure,&nbsp;
                <a
                  className="text-nowrap"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  Pension Wise
                </a>
                &nbsp;have an online tool to help you check.
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol className="fs-6 fw-bold">
                If you have a defined benefits pension do not proceed with this transfer online.
                <br />
                Call us or speak to your financial adviser.
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonModal>
        <IonGrid className="ion-no-padding ion-no-margin">
          <IonRow className="pt-4 px-3 primary-blue-bg">
            <IonCol>
              <h1 className="white-color fw-bold">Transfer pensions in</h1>
            </IonCol>
          </IonRow>
          <IonRow className="px-3 primary-blue-bg">
            <IonCol>
              <div className="h5 white-color">Let's move your pension</div>
            </IonCol>
          </IonRow>
          <IonRow className="primary-blue-bg">
            <IonCol className="top-corners"></IonCol>
          </IonRow>
          <IonRow className="pt-2 px-3">
            <IonCol>
              <h3 className="primary-blue fw-bold">What you'll need</h3>
            </IonCol>
          </IonRow>
          <IonRow className="pt-2 px-4">
            <IonCol>
              <div>
                <span>
                  <IonIcon icon={checkmarkCircleOutline} className="grey-color fs-4"></IonIcon>
                </span>
                <span className="align-top ps-3">Provider name</span>
              </div>
            </IonCol>
          </IonRow>
          <IonRow className="pt-2 px-4">
            <IonCol>
              <div>
                <span>
                  <IonIcon icon={checkmarkCircleOutline} className="grey-color fs-4"></IonIcon>
                </span>
                <span className="align-top ps-3">Plan number</span>
              </div>
            </IonCol>
          </IonRow>
          <IonRow className="pt-2 px-4">
            <IonCol>
              <div>
                <span>
                  <IonIcon icon={checkmarkCircleOutline} className="grey-color fs-4"></IonIcon>
                </span>
                <span className="align-top ps-3">A rough value</span>
              </div>
            </IonCol>
          </IonRow>
          <IonRow className="pt-4 px-3">
            <IonCol>
              <h3 className="primary-blue fw-bold">This process is not for...</h3>
            </IonCol>
          </IonRow>
          <IonRow className="pt-2 px-3">
            <IonCol>
              <ul>
                <li>Transfers as part of a divorce settlement</li>
                <li className="mt-2">
                  Public sector, final salary or other defined benefit&nbsp;
                  <span className="text-nowrap">
                    pensions&nbsp;
                    <IonButton
                      className="narrow-icon-button"
                      size="small"
                      fill="clear"
                      onClick={() => setShowModal(true)}
                    >
                      <IonIcon color="appprimary" icon={helpCircleOutline} className="fs-3" slot="icon-only"></IonIcon>
                    </IonButton>
                  </span>
                </li>
                <li className={ageOver55 ? '' : 'd-none'}>Penions you've taken money from</li>
              </ul>
            </IonCol>
          </IonRow>
          <IonRow className="pt-2 px-3">
            <IonCol>
              For these, phone us on&nbsp;
              <a
                className="text-nowrap"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                0131 23455
              </a>
              .
            </IonCol>
          </IonRow>
          <IonRow className="pt-4 px-3">
            <IonCol>
              Transferring will not be right for everyone and doesn't guarantee a better pension. If you're unsure seek
              financial advice.
            </IonCol>
          </IonRow>
          <IonRow className="pt-4 px-3">
            <IonCol>
              <IonButton expand="block" routerLink={forwardLink} color="appprimary">
                {numIncomingPensions > 0 ? 'Continue' : 'Start'}
              </IonButton>
            </IonCol>
            <IonCol className="mt-2 ms-5">
              <div>
                <span>
                  <IonIcon icon={timeOutline} className="grey-color fs-4 align-middle"></IonIcon>
                </span>
                <span className="align-middle ps-1 tiny-font">10 minutes</span>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default StartCheck;
