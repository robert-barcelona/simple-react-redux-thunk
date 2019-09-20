import React from "react";

import ControlPanel from "./ControlPanel";
import FriendList from "./FriendList";
import NewFriend from "./NewFriend";

const App = () => {

  return (
    <div>
      <ControlPanel />
      <NewFriend />
      <FriendList />
    </div>
  );
};

export default App;
