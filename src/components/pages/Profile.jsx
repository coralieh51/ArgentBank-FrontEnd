import Transaction from "../Transaction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectUserInfos } from "../../utils/selectors";
import { useNavigate } from "react-router-dom";
import UserProfileHeader from "../UserProfileHeader";
import { fetchProfile } from "../../features/fetchProfile";

export default function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const token = useSelector(selectUserInfos("token"))
  useEffect(() => {
    try {
      dispatch(fetchProfile());
    }catch (error) {
      navigate("/login")
    }
    !token && navigate("/login") 
  }, [dispatch]);
  const firstname = useSelector(selectUserInfos("firstname"));
  const lastname = useSelector(selectUserInfos("lastname"));

  return (
    <main className="main bg-dark">
      <UserProfileHeader firstname={firstname} lastname={lastname} />
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
