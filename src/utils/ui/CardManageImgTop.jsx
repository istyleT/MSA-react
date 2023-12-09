import Card from "react-bootstrap/Card";
import ButtonEdit from "./ButtonEdit";
import ButtonDelete from "./ButtonDelete";

function CardManageImgTop({
  data,
  imagelink,
  heightimg,
  children,
  accessedit,
  accessdelete,
  fnedit,
  fndelete,
}) {
  return (
    <Card
      style={{
        maxWidth: "50rem",
        width: "95vw",
        marginTop: "10px",
      }}
      bsPrefix="border border-dark border-2 rounded-3 p-2"
    >
      <Card.Img
        variant="top"
        height={heightimg}
        src={data.branchurlpic ? `../${data.branchurlpic}` : imagelink}
      />
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

export default CardManageImgTop;
