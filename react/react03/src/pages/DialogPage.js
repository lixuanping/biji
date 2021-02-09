import React, { useState, Component } from "react";
import Dialog from "../components/Dialog";

export default function DialogPage() {
  const [showDialog, setShowDialog] = useState(false);
  return (
    <div className="dialogPgae">
      <h1>DialogPage</h1>
      <button onClick={() => setShowDialog(!showDialog)}>toggle</button>
      {showDialog && <Dialog />}
    </div>
  );
}

// export default class DialogPage extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       showDialog: false
//     }
//   }
//   rander() {
//     return 
//       <div className="dialogPgae">
//         <h1>DialogPage</h1>
//         <button onClick={() => !showDialog}>toggle</button>
//         {showDialog && <Dialog />}
//       </div>
//   }
// }
