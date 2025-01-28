import { Link, useNavigate } from "react-router-dom"
import React, { useEffect, useState } from "react";
import { RoleType } from "../../models";
import { jwtDecode } from "jwt-decode";
import { Button, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import handleUser from "../../pages/login/loginContext";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { setToastMessage } from "../../redux/action/toast";

function Header() {
  const getToken = localStorage.getItem('access_token') as string;
  const decodedUser: RoleType = jwtDecode(getToken);
  const [user, setUser] = useState('');
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = async () => {
    setAnchorEl(null);
    const user = await handleUser.doLogout(getToken);
    dispatch(setToastMessage(user.status.message));
    localStorage.clear();
    navigate('/login');
  }
  useEffect(() => {
    setUser(decodedUser.role);
  }, [decodedUser])
  return (
    <>
      <section className="flex justify-between mx-20 my-3 items-center">
        <figure>
          <Link to={"/dashboard"}>
            <img src="https://res.cloudinary.com/dhtfq9yw8/image/upload/v1717920310/uptd%20sdn%202%20kalimati/svg/vapqm0latukpxjjawzfu.svg" width={75} alt="logo" />
          </Link>
        </figure>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          endIcon={<KeyboardArrowDownIcon />}
          variant="contained">
          {
            user
          }
        </Button>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleLogout} id="logout-btn">Logout</MenuItem>
      </Menu>
      </section>
    </>
  )
}

export default Header