import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rtIncrement, rtDecrement } from '../../../redux-toolkit/rt-slices/rt-counter';
import { RtRootState } from '../../../redux-toolkit/rt-configureStore';

const RtCounter = () => {
    const dispatch = useDispatch();
    const counter = useSelector<RtRootState>(state => state.counter);
    return (
        <div>
            <button type="button" onClick={() => dispatch(rtIncrement())}>
                Increment
            </button>
            <button type="button" onClick={() => dispatch(rtDecrement())}>
                Decrement
            </button>
            <p>{counter}</p>
        </div>
    );
};

export default memo(RtCounter);