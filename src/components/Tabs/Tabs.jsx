import { Component } from "react";
import styles from "./tabs.module.css";

class Tabs extends Component {
  static defaultProps = {
    elements: [],
  };
  state = {
    indx: 0,
  };
    
  switchTab(index) {
    this.setState({
      indx: index,
    });
  }

  render() {
    const { elements } = this.props;
    const { indx } = this.state;
      const { content } = elements[indx];
    const items = elements.map(({ id, title }, index) => (
      <li
        className={index !== indx ? styles.item: styles.itemActive}
        key={id}
        onClick={() => this.switchTab(index)}
      >
        {title}
      </li>
    ));
 
      return (
        <div>
              <ul className={styles.list}>{items}</ul>
              <div className={styles.content} >{content}</div>
      </div>
      );
  }
}

export default Tabs;

// Tabs.propTypes = {
//     elements: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.string.isRequired,
//             task:PropTypes.func,
//         })
//     )
// }
