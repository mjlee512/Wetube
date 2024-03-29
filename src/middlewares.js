export const localsMiddleware = (req, res, next) => {
    res.locals.loggedIn = Boolean(req.session.loggedIn);
    res.locals.siteName = "Wetube";
    res.locals.loggedInUser = req.session.user || {};
    console.log(res.locals);
    next();
}

export const protectorMiddleware = (req, res, next) => {
    if(req.session.loggedIn){
        next();
    } else {
        res.redirect("/login");
    }
}

export const publicOnlyMiddlewware = (req, res, next) =>{
    if(!req.session.loggedIn){
        next();
    } else {
        return res.redirect("/");
    }
}