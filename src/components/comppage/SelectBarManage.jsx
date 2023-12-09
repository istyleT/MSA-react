import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { navitems } from "../../data/componentitem";

export default function SelectBarManage() {
  const navigate = useNavigate();
  const onChangeTab = (e) => {
    navigate(e.target.value);
  };
  return (
    <Form.Select
      onChange={(e) => onChangeTab(e)}
      defaultValue={window.location.pathname}
      style={{
        maxWidth: "1000px",
        fontWeight: "bold",
        border: "2px solid #000000",
      }}
    >
      {navitems.map((item) => {
        return (
          <option
            key={item.path}
            value={item.path}
            className="text-center fw-bold"
          >
            {item.tab}
          </option>
        );
      })}
    </Form.Select>
  );
}
