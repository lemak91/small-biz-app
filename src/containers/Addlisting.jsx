import { connect } from "react-redux";
import Addlisting from "../components/Addlisting";
import { addListing } from "../redux/actions";

const mapDispatchToProps = (dispatch) => {
  return {
    addListing: (listing) => dispatch(addListing(listing)),
  };
};

export default connect(null, mapDispatchToProps)(Addlisting);
