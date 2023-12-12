import Card from "react-bootstrap/Card";
import ButtonEdit from "./ButtonEdit";
import ButtonDelete from "./ButtonDelete";

function CardManageNormal({
  data,
  children,
  accessedit,
  accessdelete,
  fnedit,
  fndelete,
}) {
  return (
    <Card
      style={{
        maxWidth: "45rem",
        width: "95vw",
        marginTop: "10px",
      }}
      bsPrefix="bg-light border border-dark border-2 rounded-3 p-2"
    >
      <Card.Body bsPrefix="p-1">
        <Card.Subtitle>
          <span className="fw-bold text-danger">ID ‣ </span>
          <span className="fw-bold text-primary fst-italic">{data._id}</span>
        </Card.Subtitle>
        <Card.Text bsPrefix="d-flex flex-column">{children}</Card.Text>
        <div className="d-flex justify-content-end">
          <ButtonEdit
            onClickEdit={() => fnedit(data)}
            accessedit={accessedit}
          />
          <ButtonDelete
            onClickDelete={() => fndelete(data._id)}
            accessdelete={accessdelete}
          />
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardManageNormal;
