import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <AppBar sx={{ backgroundColor: "#3BB06F" }} position="relative">
      <Toolbar>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: "1" }}>
          Small Biz App{" "}
        </Typography>
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link to="/">Listings</Link>
          </li>
          <li className="nav-list-item">
            <Link to="/login">Login</Link>
          </li>
          {/* <li className="nav-list-item">
            <Link to="/dashboard">Dasboard</Link>
          </li> */}
        </ul>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
