import { connect } from "react-redux"
import { makeViewFloorListAction } from "../_actions/actions"
import NavComponent from "../NavComponent";

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  showFloorList: () => dispatch(makeViewFloorListAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavComponent)