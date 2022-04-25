import { useSelector } from "react-redux";

export default () => {
  const password = useSelector((state) => state.password);
  return (
    <div className="field-cont">{ password || 'CLICK GENERATE' }</div>
  );
};
