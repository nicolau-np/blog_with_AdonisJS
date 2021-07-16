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

}

module.exports = HomeController
