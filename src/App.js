import React, { useState ,lazy} from "react";

import ButtonGroup from "./components/ButtonGroup";
//import CreateEntry from "./components/CreateFtEntries";
import PaymentTable from "./components/PaymentTable";
import StatusTable from "./components/StatusTable";
import Heading from "./components/HeadingComponent";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//import AlertDismissiable from "./components/AlertDismissible"

const CreateEntry = lazy(() => import("./components/CreateFtEntries"));
const AlertDismissiable = lazy(() => import("./components/AlertDismissible"));

function App() {
  const [showCreateEntry, setShowCreateEntry] = useState(false);
  const [paymentList, setPaymentList] = useState([]);
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div className="App">
      <Heading title="Yes Banking Services" headingStyle="maintitle"/>

      <br />

      {showAlert ? (
        <AlertDismissiable
        setShowAlert={setShowAlert}
        alertMessage={alertMessage}
        />
      ) : null}

<br />

      <ButtonGroup
        showCreateEntry={showCreateEntry}
        setShowCreateEntry={setShowCreateEntry}
        paymentList={paymentList}
        setPaymentList={setPaymentList}
        setShowAlert={setShowAlert}
        setAlertMessage={setAlertMessage}
      />

      <br />

      {showCreateEntry ? (
        <CreateEntry
          paymentList={paymentList}
          setPaymentList={setPaymentList}
        />
      ) : null}

      <br />

      <PaymentTable paymentList={paymentList} />

      <br />

      {!showCreateEntry ? <StatusTable paymentList={paymentList} /> : null}

      <br />
    </div>
  );
}

export default App;
