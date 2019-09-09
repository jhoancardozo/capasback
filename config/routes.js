/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
   *                                                                          *
   * Make the view located at `views/homepage.ejs` your home page.            *
   *                                                                          *
   * (Alternatively, remove this and add an `index.html` file in your         *
   * `assets` directory)                                                      *
   *                                                                          *
   ***************************************************************************/
  '/': {
    view: 'pages/index'
  },
  /**destroy
   * 
    '/user/formularioUsuario': {
      controller: 'UserController',
      action: 'registro'
    },
    'POST /user/create': 'UserController.create',
   */
  '/vistas': {
    view: 'vist/prueba'
  },

  '/user/destroy/:id': {
    controller: 'UserController',
    action: 'destroy'
  },
  '/user/show/:id': {
    controller: 'UserController',
    action: 'show'
  },
  '/user/edit/:id': {
    controller: 'UserController',
    action: 'edit'
  },
  '/user/update/:id': {
    controller: 'UserController',
    action: 'update'
  }



  /***************************************************************************
   *                                                                          *
   * More custom routes here...                                               *
   * (See https://sailsjs.com/config/routes for examples.)                    *
   *                                                                          *
   * If a request to a URL doesn't match any of the routes in this file, it   *
   * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
   * not match any of those, it is matched against static assets.             *
   *                                                                          *
   ***************************************************************************/


};
