module.exports.home = function(req,res){
    return res.render('home')
}

module.exports.projects = function(req,res){
    return res.render('projects')
}

module.exports.blogs = function(req,res){
    return res.render('blogs')
}

module.exports.about = function(req,res){
    return res.render('about')
}