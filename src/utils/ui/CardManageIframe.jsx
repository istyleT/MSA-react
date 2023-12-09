import Card from "react-bootstrap/Card";
import Ratio from "react-bootstrap/Ratio";
import ButtonEdit from "./ButtonEdit";

export default function CardManageIframe({
  data,
  vdolink,
  children,
  accessedit,
  fnedit,
}) {
  return (
    <Card
      style={{
        maxWidth: "45rem",
        width: "95vw",
        marginTop: "10px",
      }}
      bsPrefix="border border-dark border-2 rounded-3 p-2"
    >
      <Card.Header>
        <Ratio aspectRatio="16x9">
          <iframe
            src={vdolink}
            title={data.title}
            loading="lazy"
            allowFullScreen={true}
          ></iframe>
        </Ratio>
      </Card.Header>
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
        </div>
      </Card.Body>
    </Card>
  );
}
