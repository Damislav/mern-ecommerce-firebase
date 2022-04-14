import React, { useState } from "react";
import UserNav from "../../components/nav/UserNav";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

const Password = () => {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await auth.currentUser
      .updatePassword(password)
      .then(() => {
        setPassword("");
        setLoading(false);
        toast.success("Password updated");
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err.message);
      });
  };
  const passwordUpdateForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Your Password</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="enter new password ..."
          className="form-control"
          value={password}
          disabled={loading}
        />
      </div>
      <button
        disabled={!password || password.length < 6 || loading}
        className="btn btn-primary"
        type="submit"
      >
        Submit
      </button>
    </form>
  );

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <UserNav />
        </div>
        <div className="col-4">
          {loading ? (
            <span class="sr-only">Loading...</span>
          ) : (
            <h4>Password Update</h4>
          )}
          {passwordUpdateForm()}{" "}
        </div>
      </div>
    </div>
  );
};

export default Password;
