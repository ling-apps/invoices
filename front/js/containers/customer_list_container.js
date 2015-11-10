var API = require('../api')
var CustomerList = require('../components/customer_list')
var {Component} = require('react')

function mapDispatchToProps(dispatch) {
  onDelete: (id) => {
    disptach({type: ON_DELETE, id: id})
  }
}

function mapStateToProps(state) {
  return {
    customers: state
  }
}

const CustomerListContainer = container(mapStateToProps, mapDispatchToProps)(CustomerList)

function container(store, mapStateToProps, mapDispatchToProps) {
  return function wrapWithConnect(WrappedComponent) {
    class Container extends Component {
      constructor(props) {
        super(props)
        this.state = store.getState()
        this.__storeListener__  = store.listenTo('change', this.onStoreChange.bind(this))
      }

      componentWillUnmount() {
        this.__storeListener__.remove()
      }

      onStoreChange() {
        this.setState(store.getState())
      }

      render() {
        let props = mapStateToProps(this.state)
        props = Object.assign(props, mapDispatchToProps(dispatch))
        return WrappedComponent(props, this.children)
      }
    }
  }
}

module.exports = CustomerListContainer

