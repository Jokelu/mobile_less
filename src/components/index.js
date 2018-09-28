import Menu from './menu'
import Submenu from './menu/submenu'
import Table from './table'
import List from './listTemp'
const components = {
  Menu,
  Submenu,
  Table,
  List
}
export default {
  install(Vue) {
    for (let k in components) {
      Vue.component('z' + k, components[k])
    }
  }
}
