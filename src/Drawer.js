import React from "react";
import "./styles.css";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <h1>
            <code>
              {">>"} class <span className="rainbow-text-animated">SRE</span>{" "}
              implements <span className="rainbow-text-animated">DevOps</span>
            </code>
          </h1>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {[
            <a href="https://www.youtube.com/watch?v=uTEL8Ff1Zvk&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&index=1">
              SRE & DevOps
            </a>,
            <a href="https://www.youtube.com/watch?v=tEylFyxbDLE&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&index=2">
              SLIs, SLOs & SRAs
            </a>,
            <a href="https://www.youtube.com/watch?v=y2ILKr8kCJU&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&index=3">
              Risk & Error Budgets
            </a>,
            <a href="https://www.youtube.com/watch?v=IvQ-15-yE_c&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&index=4">
              Toil & Toil Budgets
            </a>,
            <a href="https://www.youtube.com/watch?v=GQPzaq-owYM&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&index=5">
              CRE
            </a>,
            <a href="https://www.youtube.com/watch?v=4kGu1_M7Igg&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&index=6">
              Managing Risk
            </a>,
            <a href="https://www.youtube.com/watch?v=CGldVD5wR-g&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&index=7">
              Actionable Alerting
            </a>,
            <a href="https://www.youtube.com/watch?v=SoZZzB-yTOk&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&index=8">
              Observability
            </a>,
            <a href="https://www.youtube.com/watch?v=n4y9dwinPBQ&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&index=9">
              Incident Management
            </a>,
            <a href="https://www.youtube.com/watch?v=UBe7U2b3tsA&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&index=10">
              Postmortems & Retrospectives
            </a>
          ].map((text, index) => (
            <ListItem button key={text}>
              <PlayCircleOutlineIcon>
                {index % 2 === 0 ? (
                  <PlayCircleOutlineIcon />
                ) : (
                  <PlayCircleOutlineIcon />
                )}
              </PlayCircleOutlineIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    </div>
  );
}
