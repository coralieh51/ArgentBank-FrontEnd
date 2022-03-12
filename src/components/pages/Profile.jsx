import Transaction from "../Transaction";
import UserHeader from "../UserHeader";
import { useSelector } from "react-redux";

export default function Profile() {
  const firstname = useSelector(state =>(state.firstname))
  const lastname = useSelector(state =>(state.lastname))

  return (
    <main className="main bg-dark">
      <UserHeader firstname={firstname} lastname={lastname} />
      <h2 className="sr-only">Accounts</h2>
      <Transaction
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        description="Available Balance"
      />
      <Transaction
        title="Argent Bank Savings (x6712)"
        amount="$10,928.42"
        description="Available Balance"
      />
      <Transaction
        title="Argent Bank Credit Card (x8349)"
        amount="$184.30"
        description="Current Balance"
      />
    </main>
  );
}
