import React from "react";
import "./invite-friend.scss";
import speaker from "../../asset/5143061 1.png";

export default function InviteFriend() {
  return (
    <div>
      <div className="holdInvite">
        <div className="holdImage">
          <img
            src={speaker}
            alt="Speaker"
            style={{
              marginRight: "10px",
            }}
          />
          <div className="holdText">
            <h6 className="earn">Refer and earn</h6>
            <span
              style={{
                fontSize: "15px",
              }}
            >
              Use the below link to invite friends
            </span>
          </div>
        </div>
        <button className="inviteButin">Invite Friends</button>
      </div>
    </div>
  );
}
