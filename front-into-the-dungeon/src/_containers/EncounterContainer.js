import { connect } from "react-redux"
import Encounter from "../fight/Encounter";

const mapStateToProps = state => ({
  monster: state.monster
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Encounter)