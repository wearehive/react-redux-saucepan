// @flow

import React from 'react';
import styled, { css } from 'styled-components';

const Nav = styled.nav`
  /**
   * Lay out the children of this container with
   * flexbox, which is horizontal by default.
   */
  display: flex;

  /**
   * Make the container put as much space as possible
   * between its children, with the children at either
   * end laying flush against the container's edges.
   */
  justify-content: space-between;

  padding: 10px;
  background-color: #56727c;
`;

const Section = styled.section`
  /**
     * Lay out the children of this container with
     * flexbox.
     */
  display: flex;

  /**
     * Align the children in the center, along
     * the main axis. By default the children will
     * align along their top edges.
     */
  align-items: center;
`;

const Item = css`
  padding: 5px 15px;
  font-size: 12px;
  margin-right: 5px;
  color: ${props => (props.selected ? '#ffffff' : '0.5em 2em')};
  background-color: ${props => (props.selected ? '#415f69' : 'transparent')};
`;

const Logo = styled.div`
  ${Item};
  font-size: 20px;
  line-height: 0;
  color: white;
`;

const NavItem = styled.div`
  ${Item};
  cursor: pointer;
  color: #d9e9ef;
`;

const TopNav = () => (
  <Nav>
    <Section>
      <Logo>Logo</Logo>
      <NavItem>link</NavItem>
      <NavItem>link</NavItem>
      <NavItem>link</NavItem>
    </Section>
    <Section>
      <NavItem>link</NavItem>
      <NavItem>link</NavItem>
    </Section>
  </Nav>
);

export default TopNav;
