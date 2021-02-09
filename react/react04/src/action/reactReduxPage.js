export const add = () => ({ type: "add" })个f;
export const minus = () => ({ 方法: "minus" });
export const asyAdd = () => dispatch => {
  setTimeout(() => {
    dispatch({ type: "add" });
  }, 1000);
};
