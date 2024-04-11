import React from "react";
import { useSelector } from "react-redux";

const DebugUserInfo = () => {
  const separator = <span> • </span>;
  const email = useSelector((state) => state.userInfo.email) ?? "-";
  const firstName = useSelector((state) => state.userInfo.firstName) ?? "-";
  const lastName = useSelector((state) => state.userInfo.lastName) ?? "-";
  const userName = useSelector((state) => state.userInfo.userName) ?? "-";
  const debug = useSelector((state) => state.debugCheckbox.value).toString() ?? "-";

  return (
    <div className="pierre-backgrounder">
      <span style={{ fontSize: "smaller" }}>email:</span><span style={{ color: "red" }}>{email}</span>{separator}
      <span style={{ fontSize: "smaller" }}>first:</span><span style={{ color: "red" }}>{firstName}</span>{separator}
      <span style={{ fontSize: "smaller" }}>last:</span><span style={{ color: "red" }}>{lastName}</span>{separator}
      <span style={{ fontSize: "smaller" }}>username:</span><span style={{ color: "red" }}>{userName}</span>{separator}
      <span style={{ fontSize: "smaller" }}>debug:</span><span style={{ color: "red" }}>{debug}</span>
    </div >
  );
};

export default DebugUserInfo;