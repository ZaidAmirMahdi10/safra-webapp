import classes from "./Modal.module.css";

export default function Modal({ toggleModal, pageTwo, setPageTwo, children }) {
  return (
    <div className={classes.popupContainer}>
      <div className={classes.overlay} onClick={() => toggleModal(false)}></div>
      <div className={classes.popup}>
        <section className={classes.popupHeader}>
          {pageTwo.active ? (
            <img
              src="/assets/img/trip/arrow-left.svg"
              alt="back to customers"
              className={classes.backIcon}
              onClick={() => setPageTwo(false)}
            />
          ) : null}
          <img
            src="/assets/img/trip/close.svg"
            alt="close popup"
            className={classes.closeIcon}
            onClick={() => toggleModal(false)}
          />
        </section>
        <section className={classes.popupBody}>{children}</section>
      </div>
    </div>
  );
}
