import Card from "react-bootstrap/Card";
import ButtonEdit from "./ButtonEdit";
import ButtonDelete from "./ButtonDelete";

function CardManageImgSide({
  data,
  imagelink,
  children,
  accessedit,
  accessdelete,
  fnedit,
  fndelete,
}) {
  return (
    <Card
      style={{
        minHeight: "15rem",
        maxWidth: "50rem",
        width: "95vw",
        marginTop: "10px",
      }}
      bsPrefix="bg-light position-relative d-flex border border-dark border-2 rounded-3 p-2"
    >
      <Card.Img bsPrefix="w-50 h-100" src={imagelink} />
      <Card.Body bsPrefix="p-1 w-50">
        <Card.Subtitle>
          <span className="fw-bold text-danger">ID ‣ </span>
          <span className="fw-bold text-primary fst-italic">{data._id}</span>
        </Card.Subtitle>
        <Card.Text bsPrefix="d-flex flex-column">{children}</Card.Text>
        <div className="d-flex position-absolute bottom-0 end-0">
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

export default CardManageImgSide;
