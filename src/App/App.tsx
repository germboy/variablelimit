//import {PopupBase as Popup} from '@enact/moonstone/Popup';
//import SpotlightRootDecorator from '@enact/spotlight/SpotlightRootDecorator';
//import Image from '@enact/ui/Image';
//import {FloatingLayerDecorator} from '@enact/ui/FloatingLayer';
// import { Cell, Row } from "@enact/ui/Layout";

import classNames from "classnames";
import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";

import { Cell, Row } from "../components/Layout/Layout";
import Delimiter from "../components/Delimiter";
import Divider from "../components/Divider";
import Header from "../components/Header";
import { items, Portfolio } from "../components/Portfolio";
//import Popup from './components/Popup';

import css from "./App.module.scss";

const glowLeftClasses = classNames(css.sideBar, css.left);
const glowRightClasses = classNames(css.sideBar, css.right);

const headerTitle = [
  {
    content: "Variable Limit",
    link: "/",
  },
];

//const Popup = FloatingLayerDecorator(PopupBase);

const getView = (item?: any) => {
  const titleBase = "Portfolio";
  let View, title;

  if (typeof item === "undefined") {
    title = titleBase;
    View = <Portfolio>{items}</Portfolio>;
  } else {
    title = (
      <>
        <Link to={headerTitle[0].link}>{titleBase}</Link>
        <Delimiter>&gt;</Delimiter>
        {(items[item].useSubtitle && items[item].subtitle) || items[item].title}
      </>
    );
    View = items[item].view;
  }
  return (
    <>
      <Divider>{title}</Divider>
      {View}
    </>
  );
};

const Page = ({ children, className, ...rest }: any) => {
  const classes = classNames(className, css.app);
  return (
    <Row className={classes} {...rest}>
      <Cell className={glowLeftClasses} />
      <Cell className={css.contentWrapper}>
        <div className={css.content}>
          <Header
            subTitle={["Jeremy Thomas", "Software Engineer"]}
            title={headerTitle}
            titleBelow={["Web", "Mobile", "TV"]}
          >
            Twitter
          </Header>
          {children}
        </div>
      </Cell>
      <Cell className={glowRightClasses} />
    </Row>
  );
};

const Home = getView();

const getPages = () => {
  return (
    <Switch>
      {items.map(({ key, link, subtitle, ...rest }: any, index: number) => {
        const View = getView(index);
        //console.log('key: ', rest, link, Content);
        return (
          <Route key={key} path={`/${link}`}>
            <Page>{View}</Page>
          </Route>
        );
      })}
      <Route path="/">
        <Page>{Home}</Page>
      </Route>
    </Switch>
  );
};

const pages = getPages();

class ScrollToTopBase extends React.Component {
  componentDidUpdate(prevProps: any) {
    // @ts-ignore
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    // @ts-ignore
    return this.props.children;
  }
}
// @ts-ignore
const ScrollToTop = withRouter(ScrollToTopBase);

const AppBase = () => {
  return (
    <Router>
      <ScrollToTop>{pages}</ScrollToTop>
    </Router>
  );
};

const App = //FloatingLayerDecorator(
  //SpotlightRootDecorator(
  AppBase;
//)
//);

export default App;
