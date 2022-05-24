import React from 'react';
import Home from '../../components/home/Home';
import { useAppDispatch } from '../../datamodel/hooks';
import {
  setAgeUnder32,
  setAge40To49,
  setAgeOver55,
  setInhousePensions,
  setScenarioStartLink,
} from '../../datamodel/appdataslice';
import { getPlatforms } from '@ionic/react';

const Start1: React.FC = () => {
  const dispatch = useAppDispatch();
  dispatch(setAgeUnder32(true));
  dispatch(setAge40To49(false));
  dispatch(setAgeOver55(false));
  dispatch(setScenarioStartLink('/start1'));

  dispatch(
    setInhousePensions([
      {
        planNumber: 'D123456789',
        value: '£55,045',
        planName: 'Pension Co. Flexible retirement Plan',
        charges: '3.017%',
        recievingPayments: true,
        adviserAttached: false,
      },
    ])
  );

  return <Home />;
};

export default Start1;
