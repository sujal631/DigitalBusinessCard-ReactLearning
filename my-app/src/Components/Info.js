import React from 'react';

export default function Info() {
  return (
    <div className="info">
      <img src="./pp1.jpeg" alt="" className="info--img"></img>
      <p className="info--name">Shilpa Joshi</p>
      <p className="info--position">Founder and Mentor</p>
      <a
        href="https://www.think-digital.co/"
        target="self"
        className="info--website"
      >
        www.think-digital.co
      </a>
      <div className="info--btn">
        <button className="info--btn_email">
          <i class="fa-solid fa-envelope"></i>Email
        </button>
        <button className="info--btn_linkedin">
          <i class="fa-brands fa-linkedin"></i>LinkedIn
        </button>
      </div>
    </div>
  );
}
