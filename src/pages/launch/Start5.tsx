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

const Start4: React.FC = () => {
  const dispatch = useAppDispatch();
  dispatch(setAgeUnder32(false));
  dispatch(setAge40To49(true));
  dispatch(setAgeOver55(false));
  dispatch(setScenarioStartLink('/start5'));

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
      {
        planNumber: 'TBP9898989',
        value: '£33,021',
        planName: 'Pension Co. Trust Based Pension Plan',
        charges: '3.99%',
        recievingPayments: false,
        adviserAttached: false,
      },
    ])
  );

  return <Home />;
};

export default Start4;
