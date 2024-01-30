import Timeline from "../Timeline";

const Monitoring = () => {
  return (
    <div className="skills parts__layout" id="monitoringPart">
      <Timeline number={4} />
      <div className="canva">
        <div
          style={{
            position: "relative",
            width: "90%",
            height: 0,
            paddingTop: "56.2500%",
            paddingBottom: 0,
            boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
            marginTop: "1.6em",
            marginBottom: "0.9em",
            overflow: "hidden",
            borderRadius: "8px",
            willChange: "transform",
            left: "5vw",
          }}
        >
          <iframe
            loading="lazy"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              border: "none",
              padding: 0,
              margin: 0,
            }}
            src="https://www.canva.com/design/DAFsXLQprLM/view?embed"
            allowFullScreen={true}
            allow="fullscreen"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Monitoring;
