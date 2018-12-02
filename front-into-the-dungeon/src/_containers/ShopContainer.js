import { connect } from "react-redux"
import {
  makeItemsListAction, makeLoadingItemsAction
} from "../_actions/actions"
import Shop from "../Shop"

const mapStateToProps = state => ({
  items: state.items,
  loadingItems: state.loadingItems
})

const mapDispatchToProps = dispatch => ({
  itemsList: items => dispatch(makeItemsListAction(items)),
  loadingItems: () => dispatch(makeLoadingItemsAction())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shop)