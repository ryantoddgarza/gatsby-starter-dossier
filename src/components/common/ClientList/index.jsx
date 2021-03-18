import React from 'react';
import { clientList } from '~/constants';
import { Wrapper, ChevronLeft, ChevronRight, List, ListItem } from './styled';

const ClientList = () => (
  <Wrapper>
    <ChevronLeft />
    <ChevronRight />
    <List>
      {clientList.map(({ name }) => (
        <ListItem key={name}>{name}</ListItem>
      ))}
    </List>
  </Wrapper>
);

export default ClientList;
