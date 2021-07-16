'use strict'

class NoticiaController {

  async index({ view }){
    const data = {
      title: "Noticias",
      menu: "Noticias",
      submenu: null,
      type: "noticias"
    }

    return view.render('noticias', data)
  }

}

module.exports = NoticiaController
