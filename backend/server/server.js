import express from 'express';
import cors from 'cors';
import passport from 'passport';
import { session } from 'passport';
import {Strategy as LocalStrategy} from 'passport-local';


const app = express();
const PORT = 5000;

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

app.use(express.json());


//  session 
 app.use(session({
 secret: 'your-secret-key',
 resave: false,
 saveUninitialized: false
 }));

 app.use(passport.initialize());
 app.use(passport.session());




const users = [
    {
        id:1, username: 'user', password: 'password',
        id:2, username: 'ruchi', password: 'ruchi',
    }
];


passport.use(new LocalStrategy(
    (username,password,done) => {
        const user = users.find( u=> u.username === username);
        if(!user){return done(null,false,{message: 'Incorrect Username'})}
        if(user.password !== password){return done(null,false,{message: 'Incorrect Password'})}
        return done(null,user);
    }
));


passport.serializeUser((user,done)=>{
    done(null,user.id);
});

passport.deserializeUser((id,done)=>{
    const user = users.find(u=>u.id === id);
    done(null,user);
});

app.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) return next(err);
        if (!user) return res.status(401).json({ message: info.message });

        req.logIn(user, (err) => {
            if (err) return next(err);
            return res.status(200).json({ message: "Login successful", user });
        });
    })(req, res, next);
});

app.get('/check-auth', (req, res) => {
    if (req.isAuthenticated()) {
        res.json({ authenticated: true, user: req.user });
    } else {
        res.json({ authenticated: false });
    }
});


app.post('/logout', (req, res) => {
    req.logout(() => {
        res.json({ message: "Logged out successfully" });
    });
});
// app.get('/Header',(req,res)=>{
//     if(req.isAuthenticated()){
//         res.send('Welcome to your profile');
//     }
//     else {
//         res.redirect('/login');
//     }
// });

// app.get('/login',(req,res)=>{
//     res.send('Login Page');
// });


app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});