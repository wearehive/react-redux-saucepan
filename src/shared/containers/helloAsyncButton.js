// @flow

import { connect } from 'react-redux';

import { fetchData, type Dispatch } from '../reducers/hello';
import Button from '../components/Button';

const mapStateToProps = ({ hello }) => ({
  loaded: hello.loaded,
  loading: hello.loaded,
  data: hello.data,
});

const mapDispatchToProps = (dispatch: Dispatch): {} => ({
  handleClick: () => {
    dispatch(fetchData());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
