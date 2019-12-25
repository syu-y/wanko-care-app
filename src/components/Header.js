import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  flex-grow: 1;
`

const StyledAppBar = styled(AppBar)`
  display: flex;
  position: static;
`

const StyledToolbar = styled(Toolbar)`

`

const StyledIconButton = styled(IconButton)`
  margin-right: spacing(2);
  -moz-float-edge: start;
  color: inherit;
`

const StyledTypography = styled(Typography)`
  flex-grow: 1;
  margin: 100px;
  font-variant: h6;
`

const StyledButton = styled(Button)`
  color: inherit;
`

function Header() {
  return(
    <HeaderWrapper>
      <StyledAppBar>
        <StyledToolbar>
          <StyledIconButton>
            <MenuIcon />
          </StyledIconButton>
          <StyledTypography>わんこボード</StyledTypography>
          <StyledButton>Login</StyledButton>
        </StyledToolbar>
      </StyledAppBar>
    </HeaderWrapper>
  );
}

export default Header;
