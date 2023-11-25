type Props = {
  type: String;
};
const Project__card = (props: Props) => {
  const handleContent = (type: String) => {
    if (type === "badg-heure") {
      return "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quas. Unde ex autem officia numquam totam nihil facere illo repellendus fugiat, hic dolore provident cupiditate debitis asperiores nulla, voluptate voluptatum.";
    } else if (type === "GestionB") {
      return "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quas. Unde ex autem officia numquam totam nihil facere illo repellendus fugiat, hic dolore provident cupiditate debitis asperiores nulla, voluptate voluptatum.";
    } else if (type === "Other") {
      return "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quas. Unde ex autem officia numquam totam nihil facere illo repellendus fugiat, hic dolore provident cupiditate debitis asperiores nulla, voluptate voluptatum.";
    }
  };
  return (
    <div className="projects__card">
      <h2>{props.type}</h2>
      <p>{handleContent(props.type)}</p>
    </div>
  );
};

export default Project__card;
