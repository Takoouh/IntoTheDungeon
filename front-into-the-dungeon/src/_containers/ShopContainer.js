import { connect } from "react-redux"
import {
  makeGetItemsListAction, makeLoadingApiAction
} from "../_actions/actions"
import Shop from "../Shop"

const mapStateToProps = state => ({
  items: state.items,
  isLoadingApi: state.loadingApi
})

const mapDispatchToProps = dispatch => ({
  itemsList: items => dispatch(makeGetItemsListAction(items)),
  loadingApi: () => dispatch(makeLoadingApiAction())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shop)