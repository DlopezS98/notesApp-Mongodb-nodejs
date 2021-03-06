const userCtrl = {};
const User = require("../models/Users");
const passport = require('passport');

//Renderizando la vista para registrarse
userCtrl.renderSignUpForm = (req, res) => {
  res.render("users/signup");
};

//Validando el registro
userCtrl.signUp = async (req, res) => {
  const errors = [];
  const { name, email, password, confirm_password } = req.body;
  if (password != confirm_password) {
    errors.push({ text: "Passwords do not match...!" });
  }
  if (password.length < 4) {
    errors.push({ text: "Passwords must be at least 4 characters!" });
  }
  if (errors.length > 0) {
    res.render("users/signup", {
      errors,
      name,
      email,
    });
  } else {
    const emailUser = await User.findOne({ email: email });
    if (emailUser) {
      req.flash("error_msg", "The email is already in use.!");
      res.redirect("/users/signup");
    } else {
      const newUser = new User({
        name: name,
        email: email,
        password: password,
      });
      newUser.password = await newUser.encryptPassword(password);
      await newUser.save();
      req.flash('success_msg', 'You are registered');
      res.redirect("/users/signin");
    }
  }
};

//Renderizando la vista para loggearse
userCtrl.renderSingInForm = (req, res) => {
  res.render("users/signin");
};

userCtrl.signIn = passport.authenticate('local', {
  failureRedirect: '/users/signin',
  successRedirect: '/notes',
  failureFlash: true,
});

userCtrl.logout = (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are logged out now!');
  res.redirect('/users/signin');
}

module.exports = userCtrl;
