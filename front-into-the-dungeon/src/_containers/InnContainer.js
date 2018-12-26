import { connect } from "react-redux"
import { makeUseInnAction } from "../_actions/actions";
import Inn from "../Inn";



const mapStateToProps = state => ({
  adventurer: state.adventurer
})

const mapDispatchToProps = dispatch => ({
  useInn: (adventurer) => dispatch(makeUseInnAction(adventurer))
})

export default connect(mapStateToProps, mapDispatchToProps)(Inn)