import { connect } from "react-redux";
import Listing from "../components/Listing";
import { removeListing } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    listing: state.listing,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeListing: (listing) => dispatch(removeListing(listing)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Listing);
