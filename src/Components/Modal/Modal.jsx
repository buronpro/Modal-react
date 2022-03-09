import React from "react";
import "./Modal.scss";

function Modal({ elModal }) {
  return (
    <>
      <div
        className="modal"
        ref={elModal}
        onClick={(evt) => {
          if (
            evt.target.matches(".modal") ||
            evt.target.matches(".modal__close--btn")
          ) {
            elModal.current.classList.remove("modal--show");
          }
        }}
      >
        <div className="modal__inner">
          <div className="info">
            <h2 className="modal__heading">Assalomu alaykum boy aka</h2>
            <p className="modal__p">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore nam expedita dicta eius eos. Magni fugiat voluptate, consectetur fuga ullam ad aspernatur explicabo et laboriosam mollitia doloremque, beatae nesciunt? Nihil enim perferendis distinctio aliquam, natus optio nostrum rerum, minima tempora odit quam voluptate obcaecati illum, soluta voluptates pariatur molestias repellat!
            </p>
          </div>

          <button className="modal__close--btn">X</button>
        </div>
      </div>
    </>
  );
}

export default Modal;
