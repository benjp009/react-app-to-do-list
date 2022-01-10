import React from "react";

const InputTodo = () => {
  return <div></div>
}

export default InputTodo


// export default class InputTodo extends Component {
//   state = {
//     title: ""
//   };
//   onChange = e => {
//     this.setState({
//       title: e.target.value
//     });
//   };
//   handleSubmit = e => {
//     e.preventDefault();
//     if (this.state.title.trim()) {
//       this.props.addTodoProps(this.state.title);
//       this.setState({
//         title: ""
//       });
//     } else {
//       alert("Please write your todo")
//     }
//   };
//   render() {
//     return (
//       <form
//         onSubmit={this.handleSubmit}
//         className="form-container">
//         <input
//           type="text"
//           className="input-text"
//           placeholder="Add your list of things to do today"
//           onChange={this.onChange}
//           value={this.state.title}
//         />
//         <button
//           className="input-submit">
//           Submit
//         </button>
//       </form>
//     )
//   }
// }
