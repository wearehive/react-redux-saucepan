// @flow

import React from 'react';
import styled from 'styled-components';

const PrimaryButton = styled.button`
  background: blue;
`;

type Props = {
  handleClick: Function,
  data: [],
  loading: boolean,
  message: string,
};

export default function Button(props: Props) {
  const {
    handleClick, data, loading, message,
  } = props;
  return (
    <section>
      <p>{message}</p>
      <PrimaryButton onClick={handleClick} type="button">
        {loading ? 'loading' : 'label'}
      </PrimaryButton>
      <div>loaded items: {`${data ? data.length : 0}`}</div>
    </section>
  );
}
