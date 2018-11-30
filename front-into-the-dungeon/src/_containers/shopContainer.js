import { connect } from "react-redux"
import Shop from "../Shop"
import {
  makeItemsListAction
} from "../_actions/actions"

const mapStateToProps = state => ({
  items: state.items
})

const mapDispatchToProps = dispatch => ({
  itemsList: items => dispatch(makeItemsListAction(items))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shop)