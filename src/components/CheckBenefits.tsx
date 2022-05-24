import React, { useRef, useState } from 'react';
import {
  IonIcon,
  IonCard,
  IonCardContent,
  IonCol,
  IonGrid,
  IonRow,
  IonModal,
  IonItemDivider,
  IonButton,
  IonAccordion,
  IonItem,
  IonLabel,
  IonAccordionGroup,
  IonContent,
} from '@ionic/react';
import { closeCircleOutline, warningOutline } from 'ionicons/icons';

const CheckBenefits: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <IonModal isOpen={showModal} className="my-custom-class">
        <IonItemDivider>
          <IonGrid>
            <IonRow>
              <IonCol className="ion-text-center primary-blue fs-5 pt-2">Pension type information</IonCol>
              <IonCol className="ion-text-right" size="1">
                <IonButton className="narrow-icon-button" size="small" fill="clear" onClick={() => setShowModal(false)}>
                  <IonIcon color="appprimary" icon={closeCircleOutline} className="fs-3" slot="icon-only"></IonIcon>
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonItemDivider>
        <IonContent>
          <IonGrid className="pt-3 px-3">
            <IonRow>
              <IonCol className="h2 primary-blue fw-bold">Benefits and guarantees</IonCol>
            </IonRow>
            <IonRow>
              <IonCol className="fs-6">
                Some pensions, generally older ones, can have valuable benefits or guarantees you'd lose on transfer.
                Check your pension statement or call your other provider to see if these apply:
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol className="fs-6">
                <IonAccordionGroup>
                  <IonAccordion>
                    <IonItem slot="header">
                      <IonLabel className="primary-blue fw-bold">Guaranteed income</IonLabel>
                    </IonItem>
                    <div slot="content" className="pt-2">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget ligula ac erat
                        pellentesque gravida. Nullam aliquam purus nibh, ut lacinia magna consectetur eu. Quisque vitae
                        mauris sem. Vivamus lacinia lacus non suscipit congue. Vivamus sagittis metus ut elementum
                        maximus. Donec lacus risus, posuere in blandit nec, volutpat sed metus. Donec ultrices orci in
                        velit congue, et consectetur magna tempus. Vivamus aliquet aliquam mi. Donec sed sem lectus.
                      </p>
                      <p>
                        Pellentesque convallis quam sit amet lacus facilisis placerat. Praesent tempus dictum semper.
                        Nunc tempor dapibus velit, quis sodales nibh ornare a. Vestibulum dapibus faucibus purus,
                        convallis faucibus dui faucibus nec. Sed est nulla, gravida vel erat eget, posuere maximus est.
                        Nulla vel convallis nibh, ut laoreet eros. Pellentesque consectetur mollis libero, id iaculis
                        ligula semper vel. Aliquam venenatis neque eu felis dapibus, sit amet congue sem egestas.
                        Pellentesque rhoncus nisl eget urna tincidunt, et viverra libero condimentum. Suspendisse
                        potenti. Duis eget eros ipsum. Sed scelerisque, est quis vestibulum suscipit, arcu sapien
                        pellentesque dolor, eu scelerisque ante nisl et leo. Vivamus et libero eleifend, imperdiet quam
                        nec, maximus massa. Nullam eget quam a elit rutrum pretium. Aenean mattis porta sagittis.
                      </p>
                      <p>
                        Etiam consectetur massa vitae egestas semper. Mauris dolor mi, dapibus ullamcorper bibendum et,
                        elementum eu augue. Maecenas eget erat eget risus pulvinar ullamcorper ut ac mi. Vivamus
                        ultrices nunc sit amet risus blandit, eget laoreet mauris imperdiet. Donec purus tellus,
                        suscipit ut auctor porta, accumsan ac nulla. Sed non metus eget erat bibendum consequat. Fusce
                        convallis dolor a ligula placerat facilisis nec id mi. Fusce vel tortor a lorem vehicula
                        tristique. Morbi malesuada lobortis libero eu ullamcorper. Quisque bibendum nibh nec sem mollis
                        accumsan. Suspendisse at imperdiet orci. Curabitur elementum nisi sed ipsum tristique
                        scelerisque. Mauris eleifend augue in lectus laoreet, a consequat nibh scelerisque.
                      </p>
                    </div>
                  </IonAccordion>
                  <IonAccordion>
                    <IonItem slot="header">
                      <IonLabel className="primary-blue fw-bold">Other benefits</IonLabel>
                    </IonItem>
                    <div slot="content" className="pt-2">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget ligula ac erat
                        pellentesque gravida. Nullam aliquam purus nibh, ut lacinia magna consectetur eu. Quisque vitae
                        mauris sem. Vivamus lacinia lacus non suscipit congue. Vivamus sagittis metus ut elementum
                        maximus. Donec lacus risus, posuere in blandit nec, volutpat sed metus. Donec ultrices orci in
                        velit congue, et consectetur magna tempus. Vivamus aliquet aliquam mi. Donec sed sem lectus.
                      </p>
                      <p>
                        Pellentesque convallis quam sit amet lacus facilisis placerat. Praesent tempus dictum semper.
                        Nunc tempor dapibus velit, quis sodales nibh ornare a. Vestibulum dapibus faucibus purus,
                        convallis faucibus dui faucibus nec. Sed est nulla, gravida vel erat eget, posuere maximus est.
                        Nulla vel convallis nibh, ut laoreet eros. Pellentesque consectetur mollis libero, id iaculis
                        ligula semper vel. Aliquam venenatis neque eu felis dapibus, sit amet congue sem egestas.
                        Pellentesque rhoncus nisl eget urna tincidunt, et viverra libero condimentum. Suspendisse
                        potenti. Duis eget eros ipsum. Sed scelerisque, est quis vestibulum suscipit, arcu sapien
                        pellentesque dolor, eu scelerisque ante nisl et leo. Vivamus et libero eleifend, imperdiet quam
                        nec, maximus massa. Nullam eget quam a elit rutrum pretium. Aenean mattis porta sagittis.
                      </p>
                      <p>
                        Etiam consectetur massa vitae egestas semper. Mauris dolor mi, dapibus ullamcorper bibendum et,
                        elementum eu augue. Maecenas eget erat eget risus pulvinar ullamcorper ut ac mi. Vivamus
                        ultrices nunc sit amet risus blandit, eget laoreet mauris imperdiet. Donec purus tellus,
                        suscipit ut auctor porta, accumsan ac nulla. Sed non metus eget erat bibendum consequat. Fusce
                        convallis dolor a ligula placerat facilisis nec id mi. Fusce vel tortor a lorem vehicula
                        tristique. Morbi malesuada lobortis libero eu ullamcorper. Quisque bibendum nibh nec sem mollis
                        accumsan. Suspendisse at imperdiet orci. Curabitur elementum nisi sed ipsum tristique
                        scelerisque. Mauris eleifend augue in lectus laoreet, a consequat nibh scelerisque.
                      </p>
                      <p>
                        Phasellus dignissim, magna a feugiat tristique, ante sem elementum velit, at faucibus enim
                        sapien non mi. Pellentesque quis nisi sit amet nisi iaculis ornare a at nisl. Curabitur vel
                        tortor sed sem viverra pretium. Integer pharetra semper lacus eu interdum. Vivamus maximus
                        sapien vel nisi bibendum placerat. Etiam non viverra ex. Nunc fringilla tempor urna, non
                        convallis urna fringilla vel. Ut urna felis, accumsan quis massa id, sodales vulputate felis.
                        Sed orci ligula, tristique ac ex non, porta luctus mi. Integer tincidunt ultricies enim at
                        sodales.
                      </p>
                      <p>
                        Duis nec orci nisi. Donec bibendum ut leo sit amet maximus. Curabitur imperdiet dictum nisi, eu
                        aliquet ante pharetra ac. Nulla in nisi vel diam viverra luctus id consectetur arcu. Aenean
                        felis sapien, imperdiet quis libero sed, ultrices dapibus justo. Nullam in hendrerit risus, non
                        varius urna. Ut a orci id nisl vestibulum bibendum fermentum sed mi. Suspendisse et fringilla
                        neque, at blandit enim. Nunc justo sem, finibus non dapibus eu, congue a ligula. Morbi in ligula
                        mattis, viverra libero eu, mattis mi. Pellentesque laoreet urna in cursus cursus.
                      </p>
                    </div>
                  </IonAccordion>
                  <IonAccordion>
                    <IonItem slot="header">
                      <IonLabel className="primary-blue fw-bold">Investment guarantees</IonLabel>
                    </IonItem>
                    <div slot="content" className="pt-2">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget ligula ac erat
                        pellentesque gravida. Nullam aliquam purus nibh, ut lacinia magna consectetur eu. Quisque vitae
                        mauris sem. Vivamus lacinia lacus non suscipit congue. Vivamus sagittis metus ut elementum
                        maximus. Donec lacus risus, posuere in blandit nec, volutpat sed metus. Donec ultrices orci in
                        velit congue, et consectetur magna tempus. Vivamus aliquet aliquam mi. Donec sed sem lectus.
                      </p>
                      <p>
                        Pellentesque convallis quam sit amet lacus facilisis placerat. Praesent tempus dictum semper.
                        Nunc tempor dapibus velit, quis sodales nibh ornare a. Vestibulum dapibus faucibus purus,
                        convallis faucibus dui faucibus nec. Sed est nulla, gravida vel erat eget, posuere maximus est.
                        Nulla vel convallis nibh, ut laoreet eros. Pellentesque consectetur mollis libero, id iaculis
                        ligula semper vel. Aliquam venenatis neque eu felis dapibus, sit amet congue sem egestas.
                        Pellentesque rhoncus nisl eget urna tincidunt, et viverra libero condimentum. Suspendisse
                        potenti. Duis eget eros ipsum. Sed scelerisque, est quis vestibulum suscipit, arcu sapien
                        pellentesque dolor, eu scelerisque ante nisl et leo. Vivamus et libero eleifend, imperdiet quam
                        nec, maximus massa. Nullam eget quam a elit rutrum pretium. Aenean mattis porta sagittis.
                      </p>
                      <p>
                        Etiam consectetur massa vitae egestas semper. Mauris dolor mi, dapibus ullamcorper bibendum et,
                        elementum eu augue. Maecenas eget erat eget risus pulvinar ullamcorper ut ac mi. Vivamus
                        ultrices nunc sit amet risus blandit, eget laoreet mauris imperdiet. Donec purus tellus,
                        suscipit ut auctor porta, accumsan ac nulla. Sed non metus eget erat bibendum consequat. Fusce
                        convallis dolor a ligula placerat facilisis nec id mi. Fusce vel tortor a lorem vehicula
                        tristique. Morbi malesuada lobortis libero eu ullamcorper. Quisque bibendum nibh nec sem mollis
                        accumsan. Suspendisse at imperdiet orci. Curabitur elementum nisi sed ipsum tristique
                        scelerisque. Mauris eleifend augue in lectus laoreet, a consequat nibh scelerisque.
                      </p>
                      <p>
                        Phasellus dignissim, magna a feugiat tristique, ante sem elementum velit, at faucibus enim
                        sapien non mi. Pellentesque quis nisi sit amet nisi iaculis ornare a at nisl. Curabitur vel
                        tortor sed sem viverra pretium. Integer pharetra semper lacus eu interdum. Vivamus maximus
                        sapien vel nisi bibendum placerat. Etiam non viverra ex. Nunc fringilla tempor urna, non
                        convallis urna fringilla vel. Ut urna felis, accumsan quis massa id, sodales vulputate felis.
                        Sed orci ligula, tristique ac ex non, porta luctus mi. Integer tincidunt ultricies enim at
                        sodales.
                      </p>
                    </div>
                  </IonAccordion>
                </IonAccordionGroup>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonModal>
      <IonCard className="mx-2 check-benefits-content">
        <IonCardContent>
          <IonGrid>
            <IonRow className="py-1">
              <IonCol size="1">
                <IonIcon icon={warningOutline} className="fs-4 me-1 warning-icon"></IonIcon>
              </IonCol>
              <IonCol>
                <IonRow>
                  <IonCol className="fs-6 black-color">
                    Some pensions, generally older ones, have valuable{' '}
                    <strong>
                      <a
                        className="text-nowrap"
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setShowModal(true);
                        }}
                      >
                        benefits and guarantees
                      </a>
                    </strong>{' '}
                    you'd lose on transfer.
                  </IonCol>
                </IonRow>
                <IonRow className="mt-4">
                  <IonCol className="fs-6 black-color">
                    You can usually tell from your annual statement. If you're unsure, put this transfer on hold while
                    you contact your provider.
                  </IonCol>
                </IonRow>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCardContent>
      </IonCard>
    </div>
  );
};

export default CheckBenefits;
