//imports
require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require("fs");
const path = require("path");
const cookieParser = require("cookie-parser");

// Function to save error messages
function logError(errorMessage) {
    // Create log folder
    const logDir = path.join(__dirname, "logs");
    if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir);
    }

    // Define o arquivo de log (um arquivo por dia, por exemplo)
    const logFile = path.join(logDir, `${new Date().toISOString().slice(0, 10)}.log`);

    // Formata a mensagem de erro
    const logMessage = `[${new Date().toISOString()}] - ${errorMessage}\n`;

    // Adiciona a mensagem ao arquivo de log
    fs.appendFileSync(logFile, logMessage, "utf8");
}

//Models
const User = require("./models/User");

//run server
const app = express();

//Config json response
app.use(express.json());

//Use cookies
app.use(cookieParser());

app.use(express.urlencoded({extended: false}));

//static file for css and javascript
app.use(express.static(path.join(__dirname, 'public')));

//File for images
app.use('/imgs', express.static('imgs'));

//Use ejs as view engine
app.set("view engine", "ejs");

//public route - page of login and register
app.get('/', (req, res) => {
    res.render("index", { message: "", messageType: "none" });
});

//Register and login on the public page
app.post('/process-action', async (req, res) => {
  data = {
       username: req.body.username,
       password: req.body.password,
       action: req.body.action
   }

   //Register user
   if(data.action === "register") {
        //Check if username already exists
        const userExists = await User.findOne({username: data.username});
        if(userExists) {
            return res.render("index", { message: "Usuário já existe!", messageType: "error" });
        }

        //Create password
        const salt = await bcrypt.genSalt(12);
        const passwordHash = await bcrypt.hash(data.password, salt);

        //Create new user
        const user = new User({
            username: data.username,
            password: passwordHash
        });

        //Save user and finish register
        try {
            await user.save();
            return res.render("index", { message: "Usuário criado com sucesso!", messageType: "sucess" });
        } catch(err) {
            logError(err.message || "Erro Desconhecido");
            return res.render("index", { message: "Erro na criação do usuário. Tente novamente", messageType: "error" });
        }
   } 
   
   //Login user
   else if (data.action === "login") {

        //Check if user exists
        const user = await User.findOne({username: data.username});
        if(!user) {
            return res.render("index", { message: "Usuário não encontrado!", messageType: "error" });
        }

        //Check if password match
        const checkPassword = await bcrypt.compare(data.password, user.password);
        if(!checkPassword) {
            return res.render("index", { message: "Senha incorreta", messageType: "error" });
        }

        //Create token, finifh autenticating and seding user to the main page
        try {
            const secret = process.env.SECRET;
            const token = jwt.sign(
                {
                id: user._id,
                },
                secret,
            );
            res.cookie("token", token, {
                httpOnly: true,
                secure: false,  // true in production
                maxAge: 24 * 60 * 60 * 1000 // one day
            });
            res.redirect(`/user/${user._id}`);
        } catch(err) {
            logError(err.message || "Erro Desconhecido");
            return res.render("index", { message: "Erro no login do usuário. Tente novamente", messageType: "error" });
        }
   }

});

//Private route - main page
app.get("/user/:id", checkToken, async(req, res) => {
    //Stops page to acessed using the comand to go back one page
    res.set('Cache-Control', 'no-store');

    const userId = req.params.id;

    //Check if user exists
    const user = await User.findById(userId, "-password");

    if(!user) {
        return res.render("index", { message: "Erro ao Acessar Página", messageType: "error" });
    }

    

    try {
        const user = await User.findById(userId, "-password");
        return res.render('main', { user });
    } catch {
        logError(err.message || "Erro Desconhecido");
        return res.render("index", { message: "Erro no login do usuário. Tente novamente", messageType: "error" });
    }

});

//Function to check token and safe guard tha user page
function checkToken(req, res, next) {
    const token = req.cookies.token;
    //console.log(token);
    if(!token) {
    logError("Token Inválido");
    return res.render("index", { message: "Token não identificado. Faça login novamente", messageType: "error" });
    }

    try {
        const secret = process.env.SECRET;
        const decoded = jwt.verify(token, secret);
        req.user = decoded;
        next();

    } catch (err) {
        logError(err.message || "Erro Desconhecido");
        return res.render("index", { message: "Acesso Negado. Faça login novamente", messageType: "error" });
    }
}

//Logout route to end user session
app.get('/logout', (req, res) => {
    res.clearCookie('token');
    return res.redirect('/');
});

//Private route - return to main
app.get('/user/:id/main', checkToken, async (req, res) => {
    res.set('Cache-Control', 'no-store');
    const userId = req.params.id;
    const user = await User.findById(userId, "-password");
    return res.render('main', { user });
});

//Private route - character page
app.get('/user/:id/personagem', checkToken, async (req, res) => {
    res.set('Cache-Control', 'no-store');
    const userId = req.params.id;
    const user = await User.findById(userId, "-password");
    return res.render('personagem', { user });
});

//Private route - rules page
app.get('/user/:id/regras', checkToken, async (req, res) => {
    res.set('Cache-Control', 'no-store');
    const userId = req.params.id;
    const user = await User.findById(userId, "-password");
    return res.render('regras', { user });
});

//Credentials
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;


//connect to mongoDB
mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.ipu4x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
.then(() => {
    //listen to the port
    const port = process.env.PORT;
    app.listen(port);
}).catch(err => console.log(err));
