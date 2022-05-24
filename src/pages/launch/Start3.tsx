import React from 'react';
import Home from '../../components/home/Home';
import { useAppDispatch } from '../../datamodel/hooks';
import {
  setInhousePensions,
  setAge40To49,
  setAgeOver55,
  setAgeUnder32,
  setScenarioStartLink,
} from '../../datamodel/appdataslice';

const Start3: React.FC = () => {
  const dispatch = useAppDispatch();
  dispatch(setAgeUnder32(false));
  dispatch(setAge40To49(false));
  dispatch(setAgeOver55(true));
  dispatch(setScenarioStartLink('/start3'));

  dispatch(
    setInhousePensions([
      {
        planNumber: 'D123456789',
        value: '£55,045',
        planName: 'Pension Co. Flexible retirement Plan',
        charges: '3.017%',
        recievingPayments: false,
        adviserAttached: false,
      },
    ])
  );

  return <Home />;
};

export default Start3;
