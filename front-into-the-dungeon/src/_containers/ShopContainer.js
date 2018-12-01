import { connect } from "react-redux"
import {
  makeItemsListAction, makeFetchApiAction
} from "../_actions/actions"
import Shop from "../Shop"

const mapStateToProps = state => ({
  items: state.items,
  loading: state.loading
})

const mapDispatchToProps = dispatch => ({
  itemsList: items => dispatch(makeItemsListAction(items)),
  fetchApi: () => dispatch(makeFetchApiAction())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shop)