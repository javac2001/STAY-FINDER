if (process.env.NODE_ENV != "production") {
    require('dotenv').config()
}
const express = require('express');
const app = express();
const port = process.env.PORT;
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const engine = require('ejs-mate');
const ExpressError = require("./utils/expressError.js");
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require("./models/userModel.js")
// =============================== ROUTES ===============================
const listings = require('./routes/listing.js')
const reviews = require('./routes/review.js')
const userAuth = require('./routes/user.js')

// Mongo-Store
const store = MongoStore.create({
    mongoUrl: process.env.CLOUD_MONGODB_ATLAS,
    crypto : {
        secret: process.env.SECRETCODE
    },
    touchAfter: 24 * 3600 // time period in seconds
})
store.on("error", ()=>{
    console.log("ERROR in MONGO Session Store");
})
// Express-session setup
let sessionOption = {
    store : store,
    secret: process.env.SECRETCODE,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true
    }
}

// View Engine Setup
app.engine('ejs', engine);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware Setup
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(session(sessionOption));
app.use(flash());

// Passport middleware setup
app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Flash message display middleware
app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    res.locals.currentUser = req.user;
    next();
});

// Add logger here
app.use((req, res, next) => {
    console.log("Incoming request path:", req.path, req.method);
    next();
});

// MongoDB Connection
async function main() {
    await mongoose.connect(process.env.CLOUD_MONGODB_ATLAS);
}
main()
    .then(() => console.log("Connection Established by MONGOOSE"))
    .catch(err => console.log("MongoDB Error:", err));

// Routes
app.get("/", (req, res) => {
    res.redirect("/stayfinder");
});

// ================================================================= Listing
app.use('/stayfinder', listings);

// ================================================================= Reviews
app.use('/stayfinder/:id/review', reviews)

// ================================================================= Login & SignUp
app.use('/stayfinder', userAuth)


// 404 Route - catch all
app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page not found"));
});

// Error Handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
        error: err,
        lang: req.query.lang || 'en'
    });
});

// Start Server
app.listen(port, () => {
    console.log(`Connected to port ${port}`);
});
