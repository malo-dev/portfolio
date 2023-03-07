import React  from "react";

class ErrorBounders extends React.Component{
	constructor(props) {
		super(props);
		this.state = {hasError : false}
	}
	 static getDerivedStateFromError(error) {
    return { hasError: true };
	 }
	
	  static componentDidCatch(error, errorInfo) {
    logErrorToMyService(error, errorInfo);
  }

	render() {
		if (this.state.hasError) {
			return <h1>Something has wrong...</h1>
		} else {
			return this.props.children
		}
	}
}
export default ErrorBounders