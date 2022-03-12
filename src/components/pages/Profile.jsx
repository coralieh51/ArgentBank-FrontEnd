import Transaction from "../Transaction";
import UserHeader from "../UserHeader";
import { useSelector, useStore } from "react-redux";
import { postUserProfileRequest } from "../../services/getData"
import { useEffect } from "react";
import { selectUserToken } from "../../utils/selectors";

export default function Profile() {
  const token = useSelector(selectUserToken)
  console.log(token)
  useEffect(() => {
    postUserProfileRequest(token)
  }, [token])

  const selectFirstname = useSelector(state =>(state.firstname))
  const selectLastname = useSelector(state =>(state.lastname))

  return (
    <main className="main bg-dark">
      <UserHeader firstname={selectFirstname} lastname={selectLastname} />
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
