// @flow

import React from 'react';

type Props = {
  handleClick: Function,
  data: [],
  loading: boolean,
};

export default function Button(props: Props) {
  const { handleClick, data, loading } = props;
  return (
    <section>
      <button onClick={handleClick} className="btn btn-primary" type="button">
        {loading ? 'loading' : 'label'}
      </button>
      <div>{`${data ? data.length : 0}`}</div>
    </section>
  );
}
