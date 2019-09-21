import React from "react";
import "bulma/bulma.sass"
import "../../styles/main.scss";
import "./app.scss";
import ReactModal from "react-modal";
import ControlPanel from "../controlpanel/ControlPanel";
import FriendList from "../friendlist/FriendList";
import Error from "../error/Error";
import ModalNewFriend from "../modalnewfriend/ModalNewFriend";

const App = () => {
  ReactModal.setAppElement("#root");
  return (
    <div className='app'>
        <ControlPanel />
      <FriendList />
      <ModalNewFriend />
      <Error />
    </div>
  );
};

export default App;
