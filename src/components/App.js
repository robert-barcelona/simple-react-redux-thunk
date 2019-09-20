import React from "react";

import ControlPanel from "./ControlPanel";
import FriendList from "./FriendList";
import NewFriend from "./NewFriend";
import Error from "./Error"


const App = () => {

  return (
    <div>
      <ControlPanel />
      <NewFriend />
      <FriendList />
      <Error/>
    </div>
  );
};

export default App;
