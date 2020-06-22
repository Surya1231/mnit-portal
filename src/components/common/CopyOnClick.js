import React from "react";

class CopyOnClick extends React.Component {
  state = {
    text: this.props.text,
  };

  constructor(props) {
    super(props);
    this.textArea = React.createRef();
  }

  onClick = () => {
    this.textArea.current.classList.toggle("d-none");
    this.textArea.current.select();
    document.execCommand("copy");
    this.textArea.current.classList.toggle("d-none");
    this.setState({
      text: "Copied!",
    });
    setTimeout(() => {
      this.setState({
        text: this.props.text,
      });
    }, 1000);
  };

  render() {
    return (
      <>
        <span onClick={this.onClick} className="w-100">
          {this.state.text}
        </span>
        <input
          className="d-none"
          ref={this.textArea}
          defaultValue={this.props.link}
        />
      </>
    );
  }
}

export default CopyOnClick;
