'use strict'

class HomeController {

  async index({ view }){
    const data = {
      title: "Blogueiros",
      menu: "Home",
      submenu: null,
      type: "home",
    }
    return view.render('home', data)
  }

  async sobre({ view }){
      const data = {
        title: "Sobre",
        menu: "sobre",
        submenu: null,
        type: "sobre"
      }

      return view.render('sobre', data)
  }

}

module.exports = HomeController
