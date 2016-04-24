hexo.extend.filter.register('after_post_render', function(data) {
	if(data.layout=='post'||data.layout=='page'||data.layout=='about'){
		data.content=data.content.replace(/(<img *src=")(?!http:\/\/|https:\/\/|\/\/)(.*?)"/g, '$1' +hexo.config.root+ data.path.replace(/([^\/]+).html$/g,'') + '$2"');
	}
    return data;
});
