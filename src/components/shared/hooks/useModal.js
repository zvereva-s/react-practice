import { useEffect } from "react";

export function useModal({ closeModal }) {
  useEffect(() => {
    window.addEventListener("keydown", handleClose);
  }, []);
  useEffect(() => {
    return () => {
      window.removeEventListener("keydown", handleClose);
    };
  }, []);

  function handleClose(e) {
    if (e.target === e.currentTarget) {
      closeModal();
      return;
    }
    if (e.code === "Escape") {
      closeModal();
    }
  }
  return { handleClose };
}
