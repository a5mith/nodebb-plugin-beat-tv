(function(module) {
    "use strict";

    var beat = {},
        embed = '<iframe class="be-at" width="720" height="455" style="border:0" src="http://www.be-at.tv/$1.frame" allowfullscreen></iframe>';


    beat.parse = function(postContent, callback) {
        postContent = postContent.replace(/<a href="(?:http?:\/\/)?(?:www\.be-at\.tv)\/?(.+)">.+<\/a>/g, embed);
        callback(null, postContent);
    };

    module.exports = beat;
}(module));
