import React from "react";
import styles from "./AnimateDiv.module.css";

class AnimateDiv extends React.Component {
    divRef = React.createRef<HTMLDivElement>();
    state = {
        show: null
    }
    componentWillUnmount() {
        setTimeout(() => {
            console.log(this.divRef.current);
            if (!this.divRef.current) return;
            this.divRef.current.classList.remove(styles.in);
        }, 1200);
    };
    componentDidMount() {
        this.setState({
            show: this.props.children
        });
        setTimeout(() => {
            if (!this.divRef.current) return;
            this.divRef.current.classList.add(styles.in);
        }, 100);
    }
    render() {
        return (
            <div ref={this.divRef} className={`${styles.page}`}>
                {this.state.show}
            </div>
        );
    }
}

export default AnimateDiv;