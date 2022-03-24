import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchSuccess, fetchStart, fetchFail, getActivity} from './../actions'
import axios from 'axios';

const Activity = ({ data, isFetching, error, dispatch }) => {
  
  useEffect(()=> {
    dispatch(getActivity())
  }, [])
  console.log(data)
  if (error) {
    return <h2>We got an error:{error}</h2>;
  }

  if (isFetching) {
    return <h2>Fetching the activity for ya!</h2>;
  }
const handleClick = () => {
    dispatch(getActivity());
}
  
  return (
    <>
      <div className='activity'> 
         <h2>{data.activity}</h2>
         <p>Type: {data.type}</p>
         </div>
         <div className='button'>
        <button onClick={handleClick}>Click for more</button>
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