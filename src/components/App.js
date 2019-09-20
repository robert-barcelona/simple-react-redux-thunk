import React from "react";
import '../styles/main.scss'
import ReactModal from 'react-modal'
import ControlPanel from "./ControlPanel";
import FriendList from "./FriendList";
import Error from "./Error";
import ModalNewFriend from "./ModalNewFriend"

const App = () => {
  ReactModal.setAppElement('#root');
  return (
    <div>
      <ControlPanel />
      <ModalNewFriend />
      <FriendList />
      <Error />
    </div>
  );
};

export default App;
