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
};

export default function Button(props: Props) {
  const { handleClick, data, loading } = props;
  return (
    <section>
      <PrimaryButton onClick={handleClick} type="button">
        {loading ? 'loading' : 'label'}
      </PrimaryButton>
      <div>{`${data ? data.length : 0}`}</div>
    </section>
  );
}
