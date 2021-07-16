'use strict'

class AmigoController {

  async index({ view }){
    const data = {
      title: "Amigos",
      menu: "Amigos",
      submenu: null,
      type: "amigos"
    }

    return view.render('amigos', data)
  }
  
}

module.exports = AmigoController
