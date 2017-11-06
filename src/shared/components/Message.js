// @flow

import React from 'react';

type Props = {
  data: Array<Object>,
}

const Message = ({ data }: Props) =>
  <p>{ data }</p>;

export default Message;
