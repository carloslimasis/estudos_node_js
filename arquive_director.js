var arquives = {
	'/' : '/artigo.html',
	'/artigo' : '/artigo.html',
	'/contato' : '/contato.html'
};

exports.getArquive = function(pathname) {
    if(arquives[pathname] == null){
    	return '/erro.html';
    }

    return arquives[pathname];
};
