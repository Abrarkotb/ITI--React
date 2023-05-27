import  {Component} from "react";

class ClassProps extends Component {
  render() {
    const { cour1, cour2, children } = this.props;

    return (
      <div>
        <h1>Courses:</h1>
        <h2>Course 1: {cour1}</h2>
        <p>Course 2: {cour2}</p>
        <h2>Child Component:</h2>
        {children}
      </div>
    );
  }
}

export default ClassProps;