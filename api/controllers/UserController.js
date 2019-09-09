/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  new: (req, res) => {
    sails.log.debug('\n\n\n\nPAso por formulario para registro');
    // res.view('usuario/register');
    res.view();
  },
  create: (req, res) => {
    // sails.log.debug(req.allParams());
    User.create(req.allParams())
      .then((usuario) => {
        res.redirect('/user/index');
      })
      .catch((err) => {
        sails.log.debug(err);
        res.redirect('/user/new');
      });
  },
  show: function (req, res, next) {
    User.findOne(req.param('id'), function userFounded(err, user) {
      if (err)
        return next(err);
      res.view({
        user: user
      });
    });

  },
  edit: function (req, res, next) {
    User.findOne(req.param('id'), function userFounded(err, user) {
      if (err)
        return next(err);
      if (!user)
        return next();
      res.view({
        user: user
      });
    });
  },
  update: function (req, res, next) {
    
    User.update(req.param('id'),req.allParams(), function userUpdated(err, user) {
      if (err) {
        sails.log.debug(err)
        req.session.flash = {
          err: err
        }
        return res.redirect('/user/edit/' + req.param('id'));
      }
      sails.log.debug(user)
      res.redirect('/user/show/' + req.param('id'));
    });
    // body...
  },
  index: function (req, res, next) {
    User.find().
    then((usuarios) => {
      if (!usuarios || usuarios.lenght === 0) {
        return res.send({
          'success': false,
          'mesagge': 'no hay usuario'
        });
      }
      return res.send({
        'success': true,
        'mesagge': 'exito',
        'data': usuarios
      });
    }).
    catch((err) => {
      sails.log.debug(err);
      return res.send({
        'success': false,
        'mesagge': 'salio error'
      });
    });
    // User.find(function userFounded(err, users) {
    //   if (err) {
    //     console.log(err);
    //     return next(err);
    //   }

    //   res.view({
    //     users: users
    //   });
    // });
  },
  destroy: function (req, res, next) {
    sails.log.debug('\n\n\nempezar a eliminar');
    User.destroy(req.param('id'), function userDestroyed(err) {
      if (err) {
        sails.log.debug(err);
        return next(err);
      }
      res.redirect('/user/index');
    });
  }


};
