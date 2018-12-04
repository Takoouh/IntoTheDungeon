import { connect } from "react-redux"
import {
  makeItemsListAction, makeLoadingApiAction
} from "../_actions/actions"
import Shop from "../Shop"

const mapStateToProps = state => ({
  items: state.items,
  isLoadingApi: state.loadingApi
})

const mapDispatchToProps = dispatch => ({
  itemsList: items => dispatch(makeItemsListAction(items)),
  loadingApi: () => dispatch(makeLoadingApiAction())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shop)