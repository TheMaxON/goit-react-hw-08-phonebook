import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledAppBar = styled.header`
  width: 100%;
  height: 60px;
  padding: 0 40px;
  margin-bottom: 30px;
  background-color: var(--color-secondary);
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
`;

export const Nav = styled.div`
  display: flex;
  gap: 20px;
`;

export const NavBtnPrimary = styled(NavLink)`
  color: var(--color-additional);
  padding: 6px 14px;
  border-radius: 5px;
  font-size: 16px;
  background-color: var(--color-accent);

  &:hover {
    text-decoration: none;
    color: var(--color-additional);
  }
`;

export const NavBtn = styled(NavLink)`
  color: var(--color-text);
  padding: 6px 14px;
  border-radius: 5px;
  font-size: 16px;

  &:hover {
    text-decoration: none;
    color: var(--color-text);
    background-color: var(--color-additional);
  }
`;
