import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { getActivity} from './../actions'
import axios from 'axios';

const Activity = ({ data, isFetching, error, dispatch }) => {
  
  useEffect( () => {
    dispatch(getActivity())
  }, [])
  
  if (error) {
    return <h2> Error:{error}</h2>;
  }

  if (isFetching) {
    return <h2>Fetching the activity</h2>;
  }
const handleClick = () => {
    dispatch(getActivity());
}
  
  return (
    <>
      <div className='activity'> 
         <h2>{data.activity}</h2>
         <p>Category: {data.type}</p>
         </div>
         <div className='button'>
        <button onClick={handleClick}>CLICK ME</button>
     </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    data: state.data,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps)(Activity);