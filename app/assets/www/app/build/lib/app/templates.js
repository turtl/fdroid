var TurtlTemplates = {};
(function() {
  var template = Handlebars.template, templates = TurtlTemplates = TurtlTemplates || {};
templates['boards/edit'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "	<div class=\"edit-button move\">\n		<p>\n			<a href=\"#move\" rel=\"move\">"
    + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Move board to another space",{"name":"t","hash":{},"data":data}))
    + " &raquo;</a>\n		</p>\n	</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "	<div class=\"edit-button delete\">\n		<p>\n			<a href=\"#delete\" rel=\"delete\">"
    + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Delete this board",{"name":"t","hash":{},"data":data}))
    + " &raquo;</a>\n		</p>\n	</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : (container.nullContext || {});

  return "<input type=\"text\" dir=\"auto\" name=\"title\" value=\""
    + alias1(container.lambda(((stack1 = (depth0 != null ? depth0.board : depth0)) != null ? stack1.title : stack1), depth0))
    + "\" placeholder=\""
    + alias1((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(alias2,"Board title",{"name":"t","hash":{},"data":data}))
    + "\">\n\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.show_move : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.show_delete : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n";
},"useData":true});
templates['boards/move'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "			<option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias2).call(alias1,((stack1 = ((stack1 = (data && data.root)) && stack1.board)) && stack1.space_id),(depth0 != null ? depth0.id : depth0),{"name":"equal","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "selected";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<p>\n	"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Select the space to move to:",{"name":"t","hash":{},"data":data}))
    + "\n</p>\n<div class=\"space\">\n	<select name=\"space_id\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.spaces : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</select>\n</div>\n\n<p class=\"form-note\">\n	"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Note that when you move a board to another space, all of its notes will be moved with it.",{"name":"t","hash":{},"data":data}))
    + "\n</p>\n\n";
},"useData":true});
templates['error/index'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"help content\">\n	<h1>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"There was a problem loading:",{"name":"t","hash":{},"data":data}))
    + "</h1>\n	<pre><code>"
    + alias3(((helper = (helper = helpers.error_msg || (depth0 != null ? depth0.error_msg : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"error_msg","hash":{},"data":data}) : helper)))
    + "</code></pre>\n</div>\n\n";
},"useData":true});
templates['feedback/index'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "disabled";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"content\">\n	<h1>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Have an idea? A problem?",{"name":"t","hash":{},"data":data}))
    + "</h1>\n</div>\n\n<textarea name=\"text\" rows=\"4\" cols=\"80\" tabindex=\"3\" placeholder=\""
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Give your feedback",{"name":"t","hash":{},"data":data}))
    + "\"></textarea>\n<div class=\"buttons\">\n	<div class=\"button login\">\n		<input type=\"submit\" class=\"button\" "
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.connected : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " value=\""
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Send",{"name":"t","hash":{},"data":data}))
    + "\">\n	</div>\n</div>\n\n";
},"useData":true});
templates['feedback/thanks'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"content\">\n	<h1>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Thanks!",{"name":"t","hash":{},"data":data}))
    + "</h1>\n	<p>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"We appreciate you taking the time to help make Turtl better.",{"name":"t","hash":{},"data":data}))
    + "</p>\n</div>\n\n<div class=\"buttons\">\n	<div class=\"button login\">\n		<a href=\"/\" class=\"button\"><span>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Back to my notes",{"name":"t","hash":{},"data":data}))
    + "</span></a>\n	</div>\n</div>\n";
},"useData":true});
templates['help/bindings'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"help content\">\n	<table class=\"shortcuts\">\n		<tr>\n			<td><kbd>a</kbd><kbd>t</kbd></td>\n			<td>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Add a new text note",{"name":"t","hash":{},"data":data}))
    + "</td>\n		</tr>\n		<tr>\n			<td><kbd>a</kbd><kbd>b</kbd></td>\n			<td>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Add a new bookmark",{"name":"t","hash":{},"data":data}))
    + "</td>\n		</tr>\n		<tr>\n			<td><kbd>a</kbd><kbd>i</kbd></td>\n			<td>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Add a new image",{"name":"t","hash":{},"data":data}))
    + "</td>\n		</tr>\n		<tr>\n			<td><kbd>a</kbd><kbd>f</kbd></td>\n			<td>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Add a new file",{"name":"t","hash":{},"data":data}))
    + "</td>\n		</tr>\n		<tr>\n			<td><kbd>a</kbd><kbd>p</kbd></td>\n			<td>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Add a new password",{"name":"t","hash":{},"data":data}))
    + "</td>\n		</tr>\n		<tr>\n			<td><kbd>s</kbd></td>\n			<td>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Open spaces menu",{"name":"t","hash":{},"data":data}))
    + "</td>\n		</tr>\n		<tr>\n			<td><kbd>b</kbd></td>\n			<td>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Open boards menu",{"name":"t","hash":{},"data":data}))
    + "</td>\n		</tr>\n		<!--\n		<tr>\n			<td><kbd>enter</kbd></td>\n			<td>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Open current note",{"name":"t","hash":{},"data":data}))
    + "</td>\n		</tr>\n		-->\n		<tr>\n			<td><kbd>e</kbd></td>\n			<td>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Edit current note",{"name":"t","hash":{},"data":data}))
    + "</td>\n		</tr>\n		<tr>\n			<td><kbd>delete</kbd></td>\n			<td>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Delete current note",{"name":"t","hash":{},"data":data}))
    + "</td>\n		</tr>\n		<tr>\n			<td><kbd>/</kbd></td>\n			<td>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Search notes",{"name":"t","hash":{},"data":data}))
    + "</td>\n		</tr>\n		<tr>\n			<td><kbd>x</kbd></td>\n			<td>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Clear all current filters (show all notes in the board)",{"name":"t","hash":{},"data":data}))
    + "</td>\n		</tr>\n		<tr>\n			<td><kbd>?</kbd></td>\n			<td>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Show this help",{"name":"t","hash":{},"data":data}))
    + "</td>\n		</tr>\n		<tr>\n			<td><kbd>shift + L</kbd></td>\n			<td>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Log out",{"name":"t","hash":{},"data":data}))
    + "</td>\n		</tr>\n		<tr>\n			<td><kbd>ctrl + shift + L</kbd></td>\n			<td>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Clear local data and log out",{"name":"t","hash":{},"data":data}))
    + "</td>\n		</tr>\n	</table>\n	<h2>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Tips on keyboard navigation",{"name":"t","hash":{},"data":data}))
    + "</h2>\n	<p>\n		"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Open a space easily by hitting <kbd>s</kbd>, typing the name of the space you want, and hitting <kbd>Enter</kbd>. You will then be taken to the board selector. Hit <kbd>Enter</kbd> again for \"All notes\" or type the name of the board you want to open and hit <kbd>Enter</kbd> to open it.",{"name":"t","hash":{},"data":data}))
    + "\n	</p>\n	<p>\n		"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Open the board selector by hitting <kbd>b</kbd>. You can hit <kbd>Enter</kbd> with the search box blank to open \"All notes\" or you can type the name of the board you want and hit <kbd>Enter</kbd> to open it.",{"name":"t","hash":{},"data":data}))
    + "\n	</p>\n	<p>\n		"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Find a note by hitting <kbd>/</kbd> and typing your search followed by <kbd>Enter</kbd>. The note search box supports <a href=\"https://sqlite.org/fts3.html#full_text_index_queries\" target=\"_blank\">Sqlite's FTS3 syntax</a>.",{"name":"t","hash":{},"data":data}))
    + "\n	</p>\n</div>\n";
},"useData":true});
templates['help/markdown'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"markdown-tutorial content\">\n	<p>\n		"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Turtl notes use Markdown, a format that's easy to read and write and doesn't require a clunky editor.",{"name":"t","hash":{},"data":data}))
    + "\n	</p>\n\n	<ul>\n		<li>\n			<div># "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"One hash makes a large title",{"name":"t","hash":{},"data":data}))
    + "</div>\n			<div><h1>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"One hash makes a large title",{"name":"t","hash":{},"data":data}))
    + "</h1></div>\n		</li>\n		<li>\n			<div>## "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Two hashes for a smaller header",{"name":"t","hash":{},"data":data}))
    + "</div>\n			<div><h2>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Two hashes for a smaller header",{"name":"t","hash":{},"data":data}))
    + "</h2></div>\n		</li>\n		<li>\n			<div>- "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"dashes<br>- make<br>- bullets",{"name":"t","hash":{},"data":data}))
    + "</div>\n			<div><ul><li>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"dashes</li><li>make</li><li>bullets",{"name":"t","hash":{},"data":data}))
    + "</li></ul></div>\n		</li>\n		<li>\n			<div>1. "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"you can make<br>1. numbered bullets<br>1. as well",{"name":"t","hash":{},"data":data}))
    + "</div>\n			<div><ol><li>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"you can make</li><li>numbered bullets</li><li>as well",{"name":"t","hash":{},"data":data}))
    + "</li></ol></div>\n		</li>\n		<li>\n			<div>- [ ] "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"todo lists",{"name":"t","hash":{},"data":data}))
    + "<br>- [X] "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"works too",{"name":"t","hash":{},"data":data}))
    + "</div>\n			<div>\n				<ul class=\"task-list\">\n					<li class=\"task-list-item\"><input class=\"task-list-item-checkbox\" disabled=\"\" type=\"checkbox\"> "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"todo lists",{"name":"t","hash":{},"data":data}))
    + "</li>\n					<li class=\"task-list-item\"><input class=\"task-list-item-checkbox\" checked=\"\" disabled=\"\" type=\"checkbox\"> "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"works too",{"name":"t","hash":{},"data":data}))
    + "</li>\n				</ul>\n			</div>\n		</li>\n		<li>\n			<div>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"[Making links](https://turtlapp.com) is easy!",{"name":"t","hash":{},"data":data}))
    + "</div>\n			<div><a target=\"_blank\" href=\"https://turtlapp.com/\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Making links</a> is easy!",{"name":"t","hash":{},"data":data}))
    + "</div>\n		</li>\n		<li>\n			<div>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"You can also make text __bold__, *italic* or ~~strikethrough~~.",{"name":"t","hash":{},"data":data}))
    + "</div>\n			<div>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"You can also make text <strong>bold</strong>, <em>italic</em> or <strike>strikethrough</strike>.",{"name":"t","hash":{},"data":data}))
    + "</div>\n		</li>\n		<li>\n			<div>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Here's an image:<br>![](https://turtlapp.com/images<space> </space>/favicon.png)",{"name":"t","hash":{},"data":data}))
    + "</div>\n			<div>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Here's an image: ",{"name":"t","hash":{},"data":data}))
    + "<img src=\"https://turtlapp.com/images/favicon.png\" alt=\"\"></div>\n		</li>\n		<li>\n			<div>&gt; "
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Quote text with a caret",{"name":"t","hash":{},"data":data}))
    + "</div>\n			<div><blockquote>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Quote text with a caret",{"name":"t","hash":{},"data":data}))
    + "</blockquote></div>\n		</li>\n		<li>\n			<div>\n				```<br>\n				surround(<space> </space>code.by(<space> </space>'three backticks'<space> </space>));<br>\n				```\n			</div>\n			<div>\n				<pre><code>surround(code.by('three backticks'));</code></pre>\n			</div>\n		</li>\n		<li>\n			<div>\n				"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Use backticks for `inline_code()`",{"name":"t","hash":{},"data":data}))
    + "\n			</div>\n			<div>\n				"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Use backticks for <code>inline_code()</code>",{"name":"t","hash":{},"data":data}))
    + "\n			</div>\n		</li>\n	</ul>\n\n	<span class=\"markdown-link form-note\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Read more about <a href=\"https://guides.github.com/features/mastering-markdown/\" target=\"_blank\">markdown</a>.",{"name":"t","hash":{},"data":data}))
    + "</span>\n	<br><br>\n\n</div>\n\n";
},"useData":true});
templates['invites/index'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<p class=\"empty\">"
    + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"You have no pending invitations",{"name":"t","hash":{},"data":data}))
    + "</p>\n<ul class=\"item-list\"></ul>\n\n";
},"useData":true});
templates['invites/item'] = template({"1":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.icon || (depth0 && depth0.icon) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"lock",{"name":"icon","hash":{},"data":data}));
},"3":function(container,depth0,helpers,partials,data) {
    return "open";
},"5":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "		<form class=\"standard-form\">\n			<input name=\"passphrase\" type=\"password\" value=\"\" placeholder=\""
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Invite passphrase",{"name":"t","hash":{},"data":data}))
    + "\">\n			<p class=\"form-note\">\n				"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"This invite is passphrase-protected. You must enter the correct passphrase to unlock it.",{"name":"t","hash":{},"data":data}))
    + "\n			</p>\n			<div class=\"buttons\">\n				<div class=\"button login\">\n					<input type=\"submit\" class=\"button\" value=\""
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Unlock",{"name":"t","hash":{},"data":data}))
    + "\">\n				</div>\n			</div>\n		</form>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "		<p class=\"confirmation error\">"
    + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"You must confirm your account before accepting invites. If you no longer have your confirmation email, you can resend it from the Settings menu.",{"name":"t","hash":{},"data":data}))
    + "</p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression;

  return "<div class=\"invite-data\">\n	<div class=\"invite-actions\"></div>\n	<h2>\n		"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.invite : depth0)) != null ? stack1.is_passphrase_protected : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n		"
    + alias2(container.lambda(((stack1 = (depth0 != null ? depth0.invite : depth0)) != null ? stack1.title : stack1), depth0))
    + "\n	</h2>\n	<p>"
    + alias2((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(alias1,"From {{user}}",{"name":"t","hash":{"user":((stack1 = (depth0 != null ? depth0.invite : depth0)) != null ? stack1.from_username : stack1)},"data":data}))
    + "</p>\n</div>\n<div class=\"unseal "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.passphrase_open : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.confirmed : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "</div>\n\n";
},"useData":true});
templates['modules/actions'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression;

  return "	<a href=\"#action\" class=\"abutton\" title=\""
    + alias1(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.actions : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.title : stack1), depth0))
    + "\" rel=\"main\">\n		"
    + alias1((helpers.icon || (depth0 && depth0.icon) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? depth0.actions : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.icon : stack1),{"name":"icon","hash":{"class":((stack1 = ((stack1 = (depth0 != null ? depth0.actions : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.name : stack1)},"data":data}))
    + "\n	</a>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "	<a href=\"#action\" class=\"abutton\" rel=\"open\">\n		"
    + container.escapeExpression((helpers.icon || (depth0 && depth0.icon) || helpers.helperMissing).call(alias1,"add",{"name":"icon","hash":{"class":"add"},"data":data}))
    + "\n	</a>\n	<ul>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.actions : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</ul>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "			<li rel=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" title=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\" class=\"item-"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\n				<h4>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h4>\n				<a href=\"#"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" class=\"abutton\">"
    + alias4((helpers.icon || (depth0 && depth0.icon) || alias2).call(alias1,(depth0 != null ? depth0.icon : depth0),{"name":"icon","hash":{"class":(depth0 != null ? depth0.name : depth0)},"data":data}))
    + "</a>\n			</li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.equal || (depth0 && depth0.equal) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.actions : depth0)) != null ? stack1.length : stack1),1,{"name":"equal","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\n";
},"useData":true});
templates['modules/form-layout'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "novalidate";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression;

  return "			<div class=\"button-row clear\">\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.footer_actions : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				<div class=\"desc\">"
    + alias2(container.lambda(((stack1 = (depth0 != null ? depth0.state : depth0)) != null ? stack1.footer_desc : stack1), depth0))
    + "</div>\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.show_cancel : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				<div class=\"button flat submit "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.disabled : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.state : depth0)) != null ? stack1.highlight_button : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n					<input type=\"submit\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.tabindex : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " value=\""
    + alias2(((helper = (helper = helpers.action || (depth0 != null ? depth0.action : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"action","hash":{},"data":data}) : helper)))
    + "\">\n				</div>\n			</div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "					<ul>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.footer_actions : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "					</ul>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "							<li>\n								<a href=\"#"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" rel=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">\n									"
    + alias4((helpers.icon || (depth0 && depth0.icon) || alias2).call(alias1,(depth0 != null ? depth0.icon : depth0),{"name":"icon","hash":{},"data":data}))
    + "\n								</a>\n							</li>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "					<div class=\"button flat cancel\">\n						<span>"
    + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Cancel",{"name":"t","hash":{},"data":data}))
    + "</span>\n					</div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "disabled";
},"11":function(container,depth0,helpers,partials,data) {
    return "highlight";
},"13":function(container,depth0,helpers,partials,data) {
    var helper;

  return "tabindex=\""
    + container.escapeExpression(((helper = (helper = helpers.tabindex || (depth0 != null ? depth0.tabindex : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"tabindex","hash":{},"data":data}) : helper)))
    + "\"";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "<div class=\""
    + container.escapeExpression(((helper = (helper = helpers.formclass || (depth0 != null ? depth0.formclass : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"formclass","hash":{},"data":data}) : helper)))
    + " clear interface\">\n	<form class=\"standard-form\" autocomplete=\"off\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.disable_browser_validation : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n		"
    + ((stack1 = ((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"content","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.buttons : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</form>\n</div>\n\n";
},"useData":true});
templates['modules/header/actions'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "	<ul class=\"actions\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.actions : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</ul>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "			<li "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0["class"] : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " rel=\""
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">\n"
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias2).call(alias1,(depth0 != null ? depth0.name : depth0),"menu",{"name":"equal","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "			</li>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "class=\""
    + container.escapeExpression(((helper = (helper = helpers["class"] || (depth0 != null ? depth0["class"] : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"class","hash":{},"data":data}) : helper)))
    + "\"";
},"5":function(container,depth0,helpers,partials,data) {
    return "					<div class=\"menu-actions\"></div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "					<a href=\"#"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" title=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4((helpers.icon || (depth0 && depth0.icon) || alias2).call(alias1,(depth0 != null ? depth0.icon : depth0),{"name":"icon","hash":{},"data":data}))
    + "</a>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.actions : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n";
},"useData":true});
templates['modules/header/index'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "			"
    + container.escapeExpression((helpers.icon || (depth0 && depth0.icon) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"settings",{"name":"icon","hash":{},"data":data}))
    + "\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"title\">\n	<a class=\"logo\" href=\"#\">\n		<img src=\""
    + container.escapeExpression((helpers.asset || (depth0 && depth0.asset) || helpers.helperMissing).call(alias1,"/images/template/logo.svg",{"name":"asset","hash":{},"data":data}))
    + "\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.logged_in : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</a>\n	<h1><span>Turtl</span></h1>\n</div>\n\n<div class=\"actions-container\"></div>\n\n";
},"useData":true});
templates['modules/item-actions'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "			<div class=\"row\">\n				<ul>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</ul>\n			</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "						<li "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0["class"] : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n							<a href=\""
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.href : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "\" rel=\""
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.action : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(11, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\n								"
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\n							</a>\n						</li>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "class=\""
    + container.escapeExpression(((helper = (helper = helpers["class"] || (depth0 != null ? depth0["class"] : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"class","hash":{},"data":data}) : helper)))
    + "\"";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.href || (depth0 != null ? depth0.href : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"href","hash":{},"data":data}) : helper)));
},"7":function(container,depth0,helpers,partials,data) {
    return "#"
    + container.escapeExpression((helpers.sluggify || (depth0 && depth0.sluggify) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.name : depth0),{"name":"sluggify","hash":{},"data":data}));
},"9":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.action || (depth0 != null ? depth0.action : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"action","hash":{},"data":data}) : helper)));
},"11":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.sluggify || (depth0 && depth0.sluggify) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.name : depth0),{"name":"sluggify","hash":{},"data":data}));
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div rel=\""
    + alias3(((helper = (helper = helpers.cid || (depth0 != null ? depth0.cid : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"cid","hash":{},"data":data}) : helper)))
    + "\" class=\"item-actions\">\n	<a href=\"#actions\">"
    + alias3((helpers.icon || (depth0 && depth0.icon) || alias2).call(alias1,"menu",{"name":"icon","hash":{},"data":data}))
    + "</a>\n	<div class=\"menu\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.actions : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\n</div>\n\n";
},"useData":true});
templates['modules/loading'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div>\n	<p class=\"animate\">\n		<img src=\""
    + alias3((helpers.asset || (depth0 && depth0.asset) || alias2).call(alias1,"/images/template/logo.svg",{"name":"asset","hash":{},"data":data}))
    + "\">\n		<img src=\""
    + alias3((helpers.asset || (depth0 && depth0.asset) || alias2).call(alias1,"/images/template/logo.svg",{"name":"asset","hash":{},"data":data}))
    + "\">\n		<img src=\""
    + alias3((helpers.asset || (depth0 && depth0.asset) || alias2).call(alias1,"/images/template/logo.svg",{"name":"asset","hash":{},"data":data}))
    + "\">\n	</p>\n	<ul></ul>\n</div>\n";
},"useData":true});
templates['modules/modal'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "	<header></header>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.show_header : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<div class=\"modal-gutter\"></div>\n\n";
},"useData":true});
templates['notes/edit/file'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "	<p class=\"info\">\n		"
    + alias3((helpers.icon || (depth0 && depth0.icon) || alias2).call(alias1,"attach",{"name":"icon","hash":{},"data":data}))
    + "\n		"
    + alias3(container.lambda(((stack1 = (depth0 != null ? depth0.file : depth0)) != null ? stack1.name : stack1), depth0))
    + "\n	</p>\n	<p class=\"size\">\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.file : depth0)) != null ? stack1.size : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</p>\n	<p class=\"remove\">\n		<a href=\"#remove\" rel=\"remove\">"
    + alias3((helpers.icon || (depth0 && depth0.icon) || alias2).call(alias1,"remove",{"name":"icon","hash":{},"data":data}))
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Remove attachment",{"name":"t","hash":{},"data":data}))
    + "</a>\n	</p>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "			"
    + container.escapeExpression((helpers.bytes || (depth0 && depth0.bytes) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.file : depth0)) != null ? stack1.size : stack1),{"name":"bytes","hash":{},"data":data}))
    + "\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	<label for=\"note_file_"
    + alias4(((helper = (helper = helpers.note_id || (depth0 != null ? depth0.note_id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"note_id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4((helpers.icon || (depth0 && depth0.icon) || alias2).call(alias1,"attach",{"name":"icon","hash":{},"data":data}))
    + "</label>\n	<input\n		id=\"note_file_"
    + alias4(((helper = (helper = helpers.note_id || (depth0 != null ? depth0.note_id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"note_id","hash":{},"data":data}) : helper)))
    + "\"\n		type=\"file\"\n		"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.accept : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n		name=\"file\"\n		placeholder=\""
    + alias4((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Attach a file",{"name":"t","hash":{},"data":data}))
    + "\">\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "accept=\""
    + container.escapeExpression(((helper = (helper = helpers.accept || (depth0 != null ? depth0.accept : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"accept","hash":{},"data":data}) : helper)))
    + "\"";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.file : depth0)) != null ? stack1.name : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "\n";
},"useData":true});
templates['notes/edit/index'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "	<div class=\"board\">\n		<select name=\"board_id\">\n			<option id=\"note-editor-blank-board\" value=\"\" "
    + ((stack1 = helpers.unless.call(alias1,((stack1 = ((stack1 = (data && data.root)) && stack1.note)) && stack1.board_id),{"name":"unless","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(alias1,"Select a board",{"name":"t","hash":{},"data":data}))
    + "</option>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.boards : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</select>\n	</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "selected";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "				<option id=\"board-opt-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias2).call(alias1,((stack1 = ((stack1 = (data && data.root)) && stack1.note)) && stack1.board_id),(depth0 != null ? depth0.id : depth0),{"name":"equal","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "	<div class=\"file-container\"></div>\n"
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.type : depth0),"image",{"name":"equal","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    return "		<span class=\"url-or-file\">- "
    + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"OR",{"name":"t","hash":{},"data":data}))
    + " -</span>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "	<input type=\"text\" name=\"url\" value=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.note : depth0)) != null ? stack1.url : stack1), depth0))
    + "\" tabindex=\"1\" placeholder=\""
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.note : depth0)) != null ? stack1.type : stack1),"image",{"name":"equal","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(12, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\n	<div class=\"existing "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.state : depth0)) != null ? stack1.already_bookmarked : stack1),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n		<em>!</em>\n"
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.state : depth0)) != null ? stack1.already_bookmarked : stack1),1,{"name":"equal","hash":{},"fn":container.program(16, data, 0),"inverse":container.program(18, data, 0),"data":data})) != null ? stack1 : "")
    + "	</div>\n";
},"10":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Image URL",{"name":"t","hash":{},"data":data}));
},"12":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"URL",{"name":"t","hash":{},"data":data}));
},"14":function(container,depth0,helpers,partials,data) {
    return "open";
},"16":function(container,depth0,helpers,partials,data) {
    return "			"
    + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"This URL is already bookmarked in another note",{"name":"t","hash":{},"data":data}))
    + "\n";
},"18":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "			"
    + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"This URL is already bookmarked in {{ids_length}} notes",{"name":"t","hash":{"ids_length":((stack1 = (depth0 != null ? depth0.state : depth0)) != null ? stack1.already_bookmarked : stack1)},"data":data}))
    + "\n";
},"20":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=helpers.helperMissing;

  return "	<input type=\"text\" dir=\"auto\" name=\"username\" value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.note : depth0)) != null ? stack1.username : stack1), depth0))
    + "\" tabindex=\"3\" placeholder=\""
    + alias2((helpers.t || (depth0 && depth0.t) || alias4).call(alias3,"Username",{"name":"t","hash":{},"data":data}))
    + "\">\n	<div class=\"password\">\n		<a class=\"preview\" href=\"#preview\">"
    + alias2((helpers.icon || (depth0 && depth0.icon) || alias4).call(alias3,"preview",{"name":"icon","hash":{},"data":data}))
    + "</a>\n		<input type=\"password\" dir=\"auto\" name=\"password\" value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.note : depth0)) != null ? stack1.password : stack1), depth0))
    + "\" tabindex=\"4\" placeholder=\""
    + alias2((helpers.t || (depth0 && depth0.t) || alias4).call(alias3,"Password",{"name":"t","hash":{},"data":data}))
    + "\">\n	</div>\n";
},"22":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "style=\"height: "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.state : depth0)) != null ? stack1.text_height : stack1), depth0))
    + "px;\"";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.lambda, alias4=container.escapeExpression;

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.show_board_selector : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (helpers["equal-or"] || (depth0 && depth0["equal-or"]) || alias2).call(alias1,(depth0 != null ? depth0.type : depth0),"file","image",{"name":"equal-or","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers["equal-or"] || (depth0 && depth0["equal-or"]) || alias2).call(alias1,(depth0 != null ? depth0.type : depth0),"image","link",{"name":"equal-or","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n<input type=\"text\" dir=\"auto\" name=\"title\" value=\""
    + alias4(alias3(((stack1 = (depth0 != null ? depth0.note : depth0)) != null ? stack1.title : stack1), depth0))
    + "\" tabindex=\"2\" placeholder=\""
    + alias4((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Title",{"name":"t","hash":{},"data":data}))
    + "\">\n"
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias2).call(alias1,(depth0 != null ? depth0.type : depth0),"password",{"name":"equal","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n<textarea dir=\"auto\" name=\"text\" rows=\"1\" cols=\"80\" tabindex=\"5\" placeholder=\""
    + alias4((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Note text",{"name":"t","hash":{},"data":data}))
    + "\" "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.state : depth0)) != null ? stack1.text_height : stack1),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias4(alias3(((stack1 = (depth0 != null ? depth0.note : depth0)) != null ? stack1.text : stack1), depth0))
    + "</textarea>\n<div class=\"formatting clear\">\n	<a href=\"#formatting\" rel=\"formatting\">"
    + alias4((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Formatting help",{"name":"t","hash":{},"data":data}))
    + "</a>\n</div>\n\n\n";
},"useData":true});
templates['notes/edit/tags/index'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<input type=\"text\" dir=\"auto\" name=\"tags\" placeholder=\""
    + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"comma, separate, tags",{"name":"t","hash":{},"data":data}))
    + "\">\n<div class=\"tags-container\"></div>\n\n";
},"useData":true});
templates['notes/edit/tags/list'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "		<li "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n			<span>"
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</span>\n		</li>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "class=\"sel\"";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<ul class=\"tags\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.tags : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\n\n";
},"useData":true});
templates['notes/index'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"notes\"></div>\n";
},"useData":true});
templates['notes/item'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return ((stack1 = ((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"content","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n\n";
},"useData":true});
templates['notes/list'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "empty";
},"3":function(container,depth0,helpers,partials,data) {
    return "initial";
},"5":function(container,depth0,helpers,partials,data) {
    return "no-results";
},"7":function(container,depth0,helpers,partials,data) {
    return "		<a href=\"#prev\" rel=\"prev\">&lt; "
    + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Prev",{"name":"t","hash":{},"data":data}))
    + "</a>\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "		<a href=\"#next\" rel=\"next\">"
    + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Next",{"name":"t","hash":{},"data":data}))
    + " &gt;</a>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"view-states "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.empty : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.state : depth0)) != null ? stack1.initial : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.no_results : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n	<p class=\"page-empty initial\">\n		"
    + alias3((helpers.icon || (depth0 && depth0.icon) || alias2).call(alias1,"notes",{"name":"icon","hash":{},"data":data}))
    + "\n		"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Loading notes...",{"name":"t","hash":{},"data":data}))
    + "\n	</p>\n	<p class=\"page-empty no-results\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"No notes found.",{"name":"t","hash":{},"data":data}))
    + "</p>\n	<p class=\"page-empty empty\">\n		"
    + alias3((helpers.icon || (depth0 && depth0.icon) || alias2).call(alias1,"notes",{"name":"icon","hash":{},"data":data}))
    + "\n		"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"No notes here!",{"name":"t","hash":{},"data":data}))
    + "<br>\n		<small>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Tap <em>+</em> to start",{"name":"t","hash":{},"data":data}))
    + "</small>\n	</p>\n</div>\n\n<ul class=\"note-list clear "
    + alias3(container.lambda(((stack1 = (depth0 != null ? depth0.state : depth0)) != null ? stack1.mode : stack1), depth0))
    + "\"></ul>\n\n<p class=\"paginate\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.show_prev : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.show_next : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</p>\n\n";
},"useData":true});
templates['notes/move'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "			<option "
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias2).call(alias1,(depth0 != null ? depth0.id : depth0),((stack1 = (data && data.root)) && stack1.selected_space),{"name":"equal","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " id=\"sel-space-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "selected";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "			<option "
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias2).call(alias1,(depth0 != null ? depth0.id : depth0),((stack1 = (data && data.root)) && stack1.selected_board),{"name":"equal","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " id=\"sel-board-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<p>\n	"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Select the space to move to:",{"name":"t","hash":{},"data":data}))
    + "\n</p>\n<div class=\"space\">\n	<select name=\"space_id\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.spaces : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</select>\n</div>\n\n<div class=\"space\">\n	<select name=\"board_id\">\n		<option value=\"\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"No board selected",{"name":"t","hash":{},"data":data}))
    + "</option>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.boards : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</select>\n</div>\n\n";
},"useData":true});
templates['notes/search/index'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "sel";
},"3":function(container,depth0,helpers,partials,data) {
    return "desc";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "		<div class=\"filter-tags\">\n			<ul class=\"tags clear\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.tags : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			</ul>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.show_show_all_tags : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "					<li id=\"tag-"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" class=\""
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.negated : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.available : depth0),{"name":"unless","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n						<span>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</span>\n					</li>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "exclude";
},"9":function(container,depth0,helpers,partials,data) {
    return "empty";
},"11":function(container,depth0,helpers,partials,data) {
    return "				<a href=\"#show\" rel=\"all\">"
    + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Show all tags",{"name":"t","hash":{},"data":data}))
    + " &raquo;</a>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"clear-search\">\n	<a href=\"#clear-search\">"
    + alias3((helpers.icon || (depth0 && depth0.icon) || alias2).call(alias1,"close",{"name":"icon","hash":{},"data":data}))
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Reset search",{"name":"t","hash":{},"data":data}))
    + "</a>\n</div>\n<div class=\"filter-sort\">\n	<ul>\n		<li class=\""
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias2).call(alias1,(depth0 != null ? depth0.sort : depth0),"created",{"name":"equal","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias2).call(alias1,(depth0 != null ? depth0.dir : depth0),"desc",{"name":"equal","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n			<a href=\"#created\" rel=\"created\">"
    + alias3((helpers.icon || (depth0 && depth0.icon) || alias2).call(alias1,"sort",{"name":"icon","hash":{},"data":data}))
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Create date",{"name":"t","hash":{},"data":data}))
    + "</a>\n		</li>\n		<li class=\""
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias2).call(alias1,(depth0 != null ? depth0.sort : depth0),"mod",{"name":"equal","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias2).call(alias1,(depth0 != null ? depth0.dir : depth0),"desc",{"name":"equal","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n			<a href=\"#modified\" rel=\"mod\">"
    + alias3((helpers.icon || (depth0 && depth0.icon) || alias2).call(alias1,"sort",{"name":"icon","hash":{},"data":data}))
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Last edited",{"name":"t","hash":{},"data":data}))
    + "</a>\n		</li>\n	</ul>\n</div>\n\n<div class=\"filter-text\">\n	<form class=\"standard-form\">\n		<input type=\"text\" name=\"text\" value=\""
    + alias3(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "\" placeholder=\""
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Text search",{"name":"t","hash":{},"data":data}))
    + "\" autocomplete=\"off\">\n	</form>\n</div>\n\n<div class=\"tag-container\">\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.tags : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n\n\n";
},"useData":true});
templates['notes/types/common'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "	<div class=\"color "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.note : depth0)) != null ? stack1.color_name : stack1), depth0))
    + "\">&nbsp;</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "	<div class=\"file download "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.note : depth0)) != null ? stack1.file : stack1)) != null ? stack1.encrypting : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n		<strong>\n			<a href=\"#open\" rel=\"download\">\n				"
    + alias3((helpers.icon || (depth0 && depth0.icon) || alias2).call(alias1,"attachment",{"name":"icon","hash":{},"data":data}))
    + "\n				"
    + alias3((helpers.svg || (depth0 && depth0.svg) || alias2).call(alias1,"loading",{"name":"svg","hash":{},"data":data}))
    + "\n				"
    + alias3(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.note : depth0)) != null ? stack1.file : stack1)) != null ? stack1.name : stack1), depth0))
    + "\n			</a>\n		</strong>\n	</div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "encrypting";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "	<div class=\"info-container\">\n		<div class=\"tags-container\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.tags : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</div>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.board : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "				<ul>\n					<li class=\"icon\">"
    + container.escapeExpression((helpers.icon || (depth0 && depth0.icon) || helpers.helperMissing).call(alias1,"tag",{"name":"icon","hash":{},"data":data}))
    + "</li>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.tags : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</ul>\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "						<li>"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</li>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "		<div class=\"board\">"
    + alias3((helpers.icon || (depth0 && depth0.icon) || alias2).call(alias1,"board",{"name":"icon","hash":{},"data":data}))
    + " "
    + alias3(((helper = (helper = helpers.board || (depth0 != null ? depth0.board : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"board","hash":{},"data":data}) : helper)))
    + "</div>\n";
},"12":function(container,depth0,helpers,partials,data) {
    return "		<p class=\"empty\">"
    + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"(empty note)",{"name":"t","hash":{},"data":data}))
    + "</p>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "		<div class=\"content text\">\n"
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || helpers.helperMissing).call(alias1,((stack1 = (depth0 != null ? depth0.note : depth0)) != null ? stack1.type : stack1),"password",{"name":"equal","hash":{},"fn":container.program(15, data, 0),"inverse":container.program(22, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.has_body : depth0),{"name":"if","hash":{},"fn":container.program(28, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</div>\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "				<h1 dir=\"auto\" class=\"main-title password\">\n					<a href=\"#\" rel=\"password\">\n						"
    + container.escapeExpression((helpers.icon || (depth0 && depth0.icon) || helpers.helperMissing).call(alias1,"lock",{"name":"icon","hash":{},"data":data}))
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.note : depth0)) != null ? stack1.title : stack1),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.program(18, data, 0),"data":data})) != null ? stack1 : "")
    + "					</a>\n				</h1>\n				<div class=\"show-password\">\n					<form class=\"standard-form\">\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.note : depth0)) != null ? stack1.username : stack1),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "						<input type=\"password\" dir=\"auto\" name=\"password\" value=\"********\" readonly>\n					</form>\n				</div>\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "							"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.note : depth0)) != null ? stack1.title : stack1), depth0))
    + "\n";
},"18":function(container,depth0,helpers,partials,data) {
    return "							Password\n";
},"20":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "							<input type=\"text\" dir=\"auto\" name=\"username\" value=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.note : depth0)) != null ? stack1.username : stack1), depth0))
    + "\" readonly>\n";
},"22":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.note : depth0)) != null ? stack1.title : stack1),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"23":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "					<h1 dir=\"auto\" class=\"main-title\">\n						"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.note : depth0)) != null ? stack1.url : stack1),{"name":"if","hash":{},"fn":container.program(24, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n						"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.note : depth0)) != null ? stack1.title : stack1), depth0))
    + "\n						"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.note : depth0)) != null ? stack1.url : stack1),{"name":"if","hash":{},"fn":container.program(26, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n					</h1>\n";
},"24":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<a dir=\"auto\" href=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.note : depth0)) != null ? stack1.url : stack1), depth0))
    + "\" target=\"_blank\">";
},"26":function(container,depth0,helpers,partials,data) {
    return "</a>";
},"28":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "				<div class=\"body\">\n					"
    + ((stack1 = (helpers["note-body"] || (depth0 && depth0["note-body"]) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.note : depth0)) != null ? stack1.text : stack1),{"name":"note-body","hash":{},"data":data})) != null ? stack1 : "")
    + "\n				</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = ((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"content","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.note : depth0)) != null ? stack1.color_name : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.has_file : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.show_info : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n<div class=\"note-gutter\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.empty : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(14, data, 0),"data":data})) != null ? stack1 : "")
    + "</div>\n\n";
},"useData":true});
templates['notes/types/file'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.note || (depth0 && depth0.note) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.note : depth0),{"name":"note","hash":{"info":(depth0 != null ? depth0.show_info : depth0)},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n\n";
},"useData":true});
templates['notes/types/image'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "	<div class=\"backing\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.file : depth0)) != null ? stack1.name : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(8, data, 0),"data":data})) != null ? stack1 : "")
    + "	</div>\n	<div class=\"header-backing hide\">&nbsp;</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.file : depth0)) != null ? stack1.blob_url : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression;

  return "				<a href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.file : depth0)) != null ? stack1.blob_url : stack1), depth0))
    + "\" target=\"_blank\">\n					<img width=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.file : depth0)) != null ? stack1.meta : stack1)) != null ? stack1.width : stack1), depth0))
    + "\" height=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.file : depth0)) != null ? stack1.meta : stack1)) != null ? stack1.height : stack1), depth0))
    + "\" src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.file : depth0)) != null ? stack1.blob_url : stack1), depth0))
    + "\" alt=\""
    + alias2(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data}) : helper)))
    + "\">\n				</a>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "				<a href=\"#open\" rel=\"download\">\n					<span "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.file : depth0)) != null ? stack1.img_height : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n						"
    + container.escapeExpression((helpers.icon || (depth0 && depth0.icon) || helpers.helperMissing).call(alias1,"image",{"name":"icon","hash":{},"data":data}))
    + "\n					</span>\n				</a>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "class=\"has-size\" style=\"padding-top: "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.file : depth0)) != null ? stack1.img_height : stack1), depth0))
    + "%;\"";
},"8":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "			<a href=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\">\n				<img src=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\" />\n			</a>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.note || (depth0 && depth0.note) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.note : depth0),{"name":"note","hash":{"info":(depth0 != null ? depth0.show_info : depth0)},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n";
},"useData":true});
templates['notes/types/link'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.note || (depth0 && depth0.note) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.note : depth0),{"name":"note","hash":{"info":(depth0 != null ? depth0.show_info : depth0)},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n\n";
},"useData":true});
templates['notes/types/password'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.note || (depth0 && depth0.note) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.note : depth0),{"name":"note","hash":{"info":(depth0 != null ? depth0.show_info : depth0)},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n\n";
},"useData":true});
templates['notes/types/text'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.note || (depth0 && depth0.note) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.note : depth0),{"name":"note","hash":{"info":(depth0 != null ? depth0.show_info : depth0)},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n\n";
},"useData":true});
templates['notes/view'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return ((stack1 = ((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"content","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n";
},"useData":true});
templates['settings/delete_account'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<p class=\"warn\">\n	"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Are you sure you want to delete your account and all your data <em>forever</em>?",{"name":"t","hash":{},"data":data}))
    + "\n</p>\n\n<div class=\"buttons\">\n	<div class=\"button login\">\n		<input type=\"submit\" class=\"button\" value=\""
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Yes, delete my account",{"name":"t","hash":{},"data":data}))
    + "\" tabindex=\"7\">\n	</div>\n	<p class=\"load\">\n		"
    + alias3((helpers.svg || (depth0 && depth0.svg) || alias2).call(alias1,"loading",{"name":"svg","hash":{},"data":data}))
    + "\n	</p>\n</div>\n\n";
},"useData":true});
templates['settings/export'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "disabled";
},"3":function(container,depth0,helpers,partials,data) {
    return "active";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "				<div class=\"status\">\n					"
    + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Imported {{count}} items",{"name":"t","hash":{"count":((stack1 = (depth0 != null ? depth0.state : depth0)) != null ? stack1.import_count : stack1)},"data":data}))
    + "\n				</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"content\">\n	<section class=\"export\">\n		<div class=\"buttons\">\n			<div class=\"button "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.state : depth0)) != null ? stack1.exporting : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n				<span>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Export",{"name":"t","hash":{},"data":data}))
    + "</span>\n			</div>\n			<p class=\"load "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.state : depth0)) != null ? stack1.exporting : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">"
    + alias3((helpers.svg || (depth0 && depth0.svg) || alias2).call(alias1,"loading",{"name":"svg","hash":{},"data":data}))
    + "</p>\n		</div>\n		<p class=\"progress\">\n			"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"This process can take a while.",{"name":"t","hash":{},"data":data}))
    + "\n		</p>\n	</section>\n\n	<section class=\"import\">\n		<form>\n			<input type=\"file\" name=\"file\">\n			<div class=\"action\">\n				<label>\n					<input type=\"radio\" name=\"action\" value=\"restore\" checked>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Only import items missing from current profile",{"name":"t","hash":{},"data":data}))
    + "\n				</label>\n				<label>\n					<input type=\"radio\" name=\"action\" value=\"replace\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Import everything, overwriting current items",{"name":"t","hash":{},"data":data}))
    + "\n				</label>\n				<label>\n					<input type=\"radio\" name=\"action\" value=\"full\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Completely wipe current profile before importing",{"name":"t","hash":{},"data":data}))
    + "\n				</label>\n			</div>\n			<div class=\"buttons\">\n				<div class=\"button\">\n					<input "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.state : depth0)) != null ? stack1.importing : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " type=\"submit\" class=\"button\" value=\"Import\">\n				</div>\n				<p class=\"load "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.state : depth0)) != null ? stack1.importing : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">"
    + alias3((helpers.svg || (depth0 && depth0.svg) || alias2).call(alias1,"loading",{"name":"svg","hash":{},"data":data}))
    + "</p>\n			</div>\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.state : depth0)) != null ? stack1.importing : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</form>\n	</section>\n</div>\n";
},"useData":true});
templates['settings/index'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "		<li>\n			<a href=\"#resend-confirmation\">\n				"
    + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Resend confirmation",{"name":"t","hash":{},"data":data}))
    + "\n			</a>\n		</li>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "connected";
},"5":function(container,depth0,helpers,partials,data) {
    return "disconnected";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<ul class=\"item-list\">\n	<li>\n		<a href=\"/settings/password\">\n			"
    + alias3((helpers.icon || (depth0 && depth0.icon) || alias2).call(alias1,"next",{"name":"icon","hash":{"class":"next"},"data":data}))
    + "\n			"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Change password",{"name":"t","hash":{},"data":data}))
    + "\n		</a>\n	</li>\n	<li>\n		<a href=\"/settings/export\">\n			"
    + alias3((helpers.icon || (depth0 && depth0.icon) || alias2).call(alias1,"next",{"name":"icon","hash":{"class":"next"},"data":data}))
    + "\n			"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Import &amp; export",{"name":"t","hash":{},"data":data}))
    + "\n		</a>\n	</li>\n"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.confirmed : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\n<ul class=\"item-list\">\n	<li>\n		<a href=\"/settings/feedback\">\n			"
    + alias3((helpers.icon || (depth0 && depth0.icon) || alias2).call(alias1,"feedback",{"name":"icon","hash":{},"data":data}))
    + "\n			"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Feedback",{"name":"t","hash":{},"data":data}))
    + "\n		</a>\n	</li>\n</ul>\n<ul class=\"item-list\">\n	<li>\n		<a href=\"/settings/sync\">\n			"
    + alias3((helpers.icon || (depth0 && depth0.icon) || alias2).call(alias1,"next",{"name":"icon","hash":{"class":"next"},"data":data}))
    + "\n			"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Sync info",{"name":"t","hash":{},"data":data}))
    + "\n		</a>\n	</li>\n	<li>\n		<a href=\"/settings/logs\">\n			"
    + alias3((helpers.icon || (depth0 && depth0.icon) || alias2).call(alias1,"next",{"name":"icon","hash":{"class":"next"},"data":data}))
    + "\n			"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Debug log",{"name":"t","hash":{},"data":data}))
    + "\n		</a>\n	</li>\n</ul>\n<ul class=\"item-list\">\n	<li>\n		<a href=\"/users/logout\">\n			"
    + alias3((helpers.icon || (depth0 && depth0.icon) || alias2).call(alias1,"logout",{"name":"icon","hash":{},"data":data}))
    + "\n			"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Logout",{"name":"t","hash":{},"data":data}))
    + "\n		</a>\n	</li>\n	<li>\n		<a href=\"#wipe\">\n			"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Clear local data",{"name":"t","hash":{},"data":data}))
    + "\n		</a>\n	</li>\n	<li>\n		<a href=\"/settings/delete-account\">\n			"
    + alias3((helpers.icon || (depth0 && depth0.icon) || alias2).call(alias1,"next",{"name":"icon","hash":{"class":"next"},"data":data}))
    + "\n			"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Delete my account",{"name":"t","hash":{},"data":data}))
    + "\n		</a>\n	</li>\n</ul>\n\n<div class=\"connection "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.connected : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\n	"
    + alias3((helpers.icon || (depth0 && depth0.icon) || alias2).call(alias1,"connection",{"name":"icon","hash":{},"data":data}))
    + "\n	<span class=\"connected\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Connected",{"name":"t","hash":{},"data":data}))
    + "</span>\n	<span class=\"disconnected\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Offline mode",{"name":"t","hash":{},"data":data}))
    + "</span>\n</div>\n\n<div class=\"info\">\n	<p>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Logged in as <em>{{username}}</em> <small>(on {{server}})</small>",{"name":"t","hash":{"server":((stack1 = (depth0 != null ? depth0.state : depth0)) != null ? stack1.api_endpoint : stack1),"username":(depth0 != null ? depth0.username : depth0)},"data":data}))
    + "</p>\n	<p>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Client version: <em>{{version}}</em>",{"name":"t","hash":{"version":(depth0 != null ? depth0.version : depth0)},"data":data}))
    + "</p>\n</div>\n\n";
},"useData":true});
templates['settings/logs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"settings-logs\">\n	<select name=\"lines\">\n		<option value=\"256\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Load last {{lines}} lines",{"name":"t","hash":{"lines":256},"data":data}))
    + "</option>\n		<option value=\"4096\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Load last {{lines}} lines",{"name":"t","hash":{"lines":4096},"data":data}))
    + "</option>\n		<option value=\"-1\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Load everything (may be slow)",{"name":"t","hash":{},"data":data}))
    + "</option>\n	</select>\n	<textarea name=\"contents\" readonly></textarea>\n</div>\n\n";
},"useData":true});
templates['settings/password'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "	<div class=\"section\">\n		<h3>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Confirm your current login",{"name":"t","hash":{},"data":data}))
    + "</h3>\n		<input type=\"email\" name=\"cur_username\" value=\""
    + alias3(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"username","hash":{},"data":data}) : helper)))
    + "\" placeholder=\""
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Current email",{"name":"t","hash":{},"data":data}))
    + "\" tabindex=\"1\" autocorrect=\"off\" autocapitalize=\"none\">\n		<input type=\"password\" name=\"cur_password\" placeholder=\""
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Current passphrase",{"name":"t","hash":{},"data":data}))
    + "\" tabindex=\"2\">\n	</div>\n\n	<div class=\"section\">\n		<h3>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Enter a new email/password",{"name":"t","hash":{},"data":data}))
    + "</h3>\n		<input type=\"email\" name=\"new_username\" value=\""
    + alias3(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"username","hash":{},"data":data}) : helper)))
    + "\" placeholder=\""
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"New email",{"name":"t","hash":{},"data":data}))
    + "\" tabindex=\"3\" autocorrect=\"off\" autocapitalize=\"none\">\n		<input type=\"password\" name=\"new_password\" placeholder=\""
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"New passphrase",{"name":"t","hash":{},"data":data}))
    + "\" tabindex=\"4\">\n		<input type=\"password\" name=\"new_confirm\" placeholder=\""
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Confirm passphrase",{"name":"t","hash":{},"data":data}))
    + "\" tabindex=\"5\">\n	</div>\n\n	<div class=\"buttons\">\n		<div class=\"button login\">\n			<input type=\"submit\" class=\"button\" value=\""
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Change login",{"name":"t","hash":{},"data":data}))
    + "\" tabindex=\"7\">\n		</div>\n		<p class=\"load\">\n			"
    + alias3((helpers.svg || (depth0 && depth0.svg) || alias2).call(alias1,"loading",{"name":"svg","hash":{},"data":data}))
    + "\n		</p>\n		<p class=\"form-note\">\n			"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"(This process can take a while because we need to re-encrypt your keychain)",{"name":"t","hash":{},"data":data}))
    + "\n		</p>\n	</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "	<p class=\"page-empty\">\n		"
    + alias3((helpers.icon || (depth0 && depth0.icon) || alias2).call(alias1,"connection",{"name":"icon","hash":{},"data":data}))
    + "\n		"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Changing your password requires being connected.",{"name":"t","hash":{},"data":data}))
    + "\n		<small>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"You are currently in offline mode.",{"name":"t","hash":{},"data":data}))
    + "</small>\n	</p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.connected : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\n";
},"useData":true});
templates['settings/sync/index'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "connected";
},"3":function(container,depth0,helpers,partials,data) {
    return "disconnected";
},"5":function(container,depth0,helpers,partials,data) {
    return "		<p>"
    + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"You have one or more frozen sync items. Syncing will be stuck until you fix them. Try unfreezing first, and if that doesn't work, you can delete the frozen sync item(s).",{"name":"t","hash":{},"data":data}))
    + "</p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"content header\">\n	<h2>\n		"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"You have {{num}} pending sync item(s)",{"name":"t","hash":{"num":(depth0 != null ? depth0.count : depth0)},"data":data}))
    + "\n		<div class=\"connection "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.connected : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\n			"
    + alias3((helpers.icon || (depth0 && depth0.icon) || alias2).call(alias1,"connection",{"name":"icon","hash":{},"data":data}))
    + "\n			<span class=\"connected\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Connected",{"name":"t","hash":{},"data":data}))
    + "</span>\n			<span class=\"disconnected\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Offline mode",{"name":"t","hash":{},"data":data}))
    + "</span>\n		</div>\n	</h2>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.num_frozen : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n\n<ul class=\"item-list\"></ul>\n\n";
},"useData":true});
templates['settings/sync/item'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "		<p class=\"frozen\">"
    + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(alias1,"Frozen - This item is blocking syncing. Fix by unfreezing or deleting.",{"name":"t","hash":{},"data":data}))
    + "</p>\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.sync : depth0)) != null ? stack1.error : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "			<p class=\"sync-error\">\n				"
    + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"<strong>Error:</strong> {{errmsg}} ({{errcode}})",{"name":"t","hash":{"errcode":((stack1 = ((stack1 = (depth0 != null ? depth0.sync : depth0)) != null ? stack1.error : stack1)) != null ? stack1.code : stack1),"errmsg":((stack1 = ((stack1 = (depth0 != null ? depth0.sync : depth0)) != null ? stack1.error : stack1)) != null ? stack1.msg : stack1)},"data":data}))
    + "\n			</p>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.sync : depth0)) != null ? stack1.blocked : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    return "			<p class=\"blocked\">"
    + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Blocked by frozen syncs.",{"name":"t","hash":{},"data":data}))
    + "</p>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "			<p class=\"ready\">"
    + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Ready to sync",{"name":"t","hash":{},"data":data}))
    + "</p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"sync-item\">\n	<div class=\"share-actions\"></div>\n	<h2>\n		"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.sync : depth0)) != null ? stack1.type : stack1), depth0))
    + "\n		<small>("
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.sync : depth0)) != null ? stack1.action_text : stack1), depth0))
    + " - "
    + alias2((helpers["ago-time"] || (depth0 && depth0["ago-time"]) || helpers.helperMissing).call(alias3,(depth0 != null ? depth0.created : depth0),{"name":"ago-time","hash":{},"data":data}))
    + ")</small>\n	</h2>\n"
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.sync : depth0)) != null ? stack1.frozen : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "</div>\n\n";
},"useData":true});
templates['sidebar/boards'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "active";
},"3":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "			<a href=\"/boards/add\">\n				"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Boards",{"name":"t","hash":{},"data":data}))
    + "\n				"
    + alias3((helpers.icon || (depth0 && depth0.icon) || alias2).call(alias1,"add",{"name":"icon","hash":{},"data":data}))
    + "\n			</a>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "			<span>"
    + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Boards",{"name":"t","hash":{},"data":data}))
    + "</span>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, alias3=helpers.helperMissing;

  return "		<li class=\"board "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.in_all_notes : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n			<a class=\"go\" href=\"/spaces/"
    + alias2(container.lambda(((stack1 = ((stack1 = (data && data.root)) && stack1.cur_space)) && stack1.id), depth0))
    + "/notes\">\n				"
    + alias2((helpers.icon || (depth0 && depth0.icon) || alias3).call(alias1,"notes",{"name":"icon","hash":{},"data":data}))
    + "\n				"
    + alias2((helpers.t || (depth0 && depth0.t) || alias3).call(alias1,"All notes",{"name":"t","hash":{},"data":data}))
    + "\n			</a>\n		</li>\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "sel";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<li rel=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"board "
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias2).call(alias1,(depth0 != null ? depth0.id : depth0),((stack1 = (data && data.root)) && stack1.cur_board_id),{"name":"equal","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n			<a class=\"go\" href=\"/spaces/"
    + alias4(container.lambda(((stack1 = ((stack1 = (data && data.root)) && stack1.cur_space)) && stack1.id), depth0))
    + "/boards/"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "/notes\">\n				"
    + alias4((helpers.icon || (depth0 && depth0.icon) || alias2).call(alias1,"board",{"name":"icon","hash":{},"data":data}))
    + "\n				"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\n			</a>\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (data && data.root)) && stack1.can_edit_boards),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</li>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "				<a class=\"edit\" href=\"/boards/edit/"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3((helpers.icon || (depth0 && depth0.icon) || alias2).call(alias1,"account",{"name":"icon","hash":{},"data":data}))
    + "</a>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"filter "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.board_filter_active : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n	"
    + alias3((helpers.icon || (depth0 && depth0.icon) || alias2).call(alias1,"search",{"name":"icon","hash":{"class":"find"},"data":data}))
    + "\n	"
    + alias3((helpers.icon || (depth0 && depth0.icon) || alias2).call(alias1,"close",{"name":"icon","hash":{"class":"close"},"data":data}))
    + "\n	<input name=\"filter\" id=\"sidebar-board-filter\" type=\"text\" placeholder=\""
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Search for boards",{"name":"t","hash":{},"data":data}))
    + "\">\n</div>\n<ul class=\"boards\">\n	<li class=\"add\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.can_add_boards : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "	</li>\n"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.board_filter_active : depth0),{"name":"unless","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.boards : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\n\n";
},"useData":true});
templates['sidebar/index'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "show";
},"3":function(container,depth0,helpers,partials,data) {
    return "spaces-open";
},"5":function(container,depth0,helpers,partials,data) {
    return "open";
},"7":function(container,depth0,helpers,partials,data) {
    return "zin";
},"9":function(container,depth0,helpers,partials,data) {
    return "scroll";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression;

  return "<div class=\"overlay "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.open : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"></div>\n<div class=\"inner "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.space_state : depth0)) != null ? stack1.open : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n	<div class=\"header\">\n		<h2 class=\""
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.cur_space : depth0)) != null ? stack1.color : stack1)) != null ? stack1.txt : stack1), depth0))
    + "\" style=\"background-color: "
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.cur_space : depth0)) != null ? stack1.color : stack1)) != null ? stack1.bg : stack1), depth0))
    + ";\">\n			<em>"
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.cur_space : depth0)) != null ? stack1.title : stack1), depth0))
    + "</em>\n			"
    + alias3((helpers.icon || (depth0 && depth0.icon) || helpers.helperMissing).call(alias1,"arrow",{"name":"icon","hash":{},"data":data}))
    + "\n		</h2>\n	</div>\n\n	<div class=\"spaces-container "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.space_state : depth0)) != null ? stack1.open : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.space_state : depth0)) != null ? stack1.zin : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.space_state : depth0)) != null ? stack1.scroll : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n		<div class=\"gutter spaces\"></div>\n	</div>\n\n	<div class=\"gutter boards\"></div>\n</div>\n\n";
},"useData":true});
templates['sidebar/spaces'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "active";
},"3":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "		<li class=\"add\">\n			<a href=\"/spaces/add\">\n				"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Create a space",{"name":"t","hash":{},"data":data}))
    + "\n				"
    + alias3((helpers.icon || (depth0 && depth0.icon) || alias2).call(alias1,"add",{"name":"icon","hash":{},"data":data}))
    + "\n			</a>\n		</li>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<li rel=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"space "
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias2).call(alias1,(depth0 != null ? depth0.id : depth0),((stack1 = ((stack1 = (data && data.root)) && stack1.cur_space)) && stack1.id),{"name":"equal","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.shared : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n			<a class=\"go\" href=\"/spaces/"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "/notes\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.color : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</a>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.shared : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (data && data.root)) && stack1.state)) && stack1.edit_icons),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</li>\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "sel";
},"8":function(container,depth0,helpers,partials,data) {
    return "shared";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "style=\"border-color: "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.color : depth0)) != null ? stack1.bg : stack1), depth0))
    + ";\"";
},"12":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "				<a class=\"go\" href=\"/spaces/"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "/notes\" title=\""
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"This space is shared with you",{"name":"t","hash":{},"data":data}))
    + "\">"
    + alias3((helpers.icon || (depth0 && depth0.icon) || alias2).call(alias1,"share",{"name":"icon","hash":{},"data":data}))
    + "</a>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "				<a class=\"edit\" href=\"/spaces/edit/"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3((helpers.icon || (depth0 && depth0.icon) || alias2).call(alias1,"account",{"name":"icon","hash":{},"data":data}))
    + "</a>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<h2>\n	"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Your spaces",{"name":"t","hash":{},"data":data}))
    + "\n	<a href=\"#close\">"
    + alias3((helpers.icon || (depth0 && depth0.icon) || alias2).call(alias1,"close",{"name":"icon","hash":{},"data":data}))
    + "</a>\n</h2>\n<div class=\"filter "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.space_filter_active : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n	"
    + alias3((helpers.icon || (depth0 && depth0.icon) || alias2).call(alias1,"search",{"name":"icon","hash":{"class":"find"},"data":data}))
    + "\n	"
    + alias3((helpers.icon || (depth0 && depth0.icon) || alias2).call(alias1,"close",{"name":"icon","hash":{"class":"close"},"data":data}))
    + "\n	<input name=\"filter\" id=\"sidebar-space-filter\" type=\"text\" placeholder=\""
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Search for spaces",{"name":"t","hash":{},"data":data}))
    + "\" autocomplete=\"off\">\n</div>\n<ul class=\"spaces\">\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.state : depth0)) != null ? stack1.edit_icons : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.spaces : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\n\n";
},"useData":true});
templates['spaces/edit'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "disabled";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "	<p class=\"color\">\n		<label>\n			<input type=\"color\" name=\"color\" value=\""
    + alias3(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"color","hash":{},"data":data}) : helper)))
    + "\">\n			"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Select the color for this space",{"name":"t","hash":{},"data":data}))
    + "\n		</label>\n	</p>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "	<p class=\"default\">\n		<label>\n			<input type=\"checkbox\" name=\"default\" value=\"1\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.is_default : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n			"
    + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(alias1,"Set this as your default space",{"name":"t","hash":{},"data":data}))
    + "\n		</label>\n	</p>\n"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.is_new : depth0),{"name":"unless","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    return "checked";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression;

  return "		<p class=\"share\">\n			<a href=\"/spaces/"
    + alias1(container.lambda(((stack1 = (depth0 != null ? depth0.space : depth0)) != null ? stack1.id : stack1), depth0))
    + "/sharing\" rel=\"share\">"
    + alias1((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Share this space &raquo;",{"name":"t","hash":{},"data":data}))
    + "</a>\n		</p>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "	<div class=\"delete\">\n		<p>\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.last_space : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.program(13, data, 0),"data":data})) != null ? stack1 : "")
    + "		</p>\n	</div>\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "				<span class=\"last\">\n					"
    + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"This is your last space, and cannot be deleted.",{"name":"t","hash":{},"data":data}))
    + "\n				</span>\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.shared : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.program(16, data, 0),"data":data})) != null ? stack1 : "");
},"14":function(container,depth0,helpers,partials,data) {
    return "					<a href=\"#leave\" rel=\"leave\">"
    + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Leave this space &raquo;",{"name":"t","hash":{},"data":data}))
    + "</a>\n";
},"16":function(container,depth0,helpers,partials,data) {
    return "					<a href=\"#delete\" rel=\"delete\">"
    + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Delete this space &raquo;",{"name":"t","hash":{},"data":data}))
    + "</a>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : (container.nullContext || {});

  return "<input type=\"text\" dir=\"auto\" name=\"title\" value=\""
    + alias1(container.lambda(((stack1 = (depth0 != null ? depth0.space : depth0)) != null ? stack1.title : stack1), depth0))
    + "\" placeholder=\""
    + alias1((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(alias2,"Space title",{"name":"t","hash":{},"data":data}))
    + "\" "
    + ((stack1 = helpers.unless.call(alias2,(depth0 != null ? depth0.can_edit : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.can_edit : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers.unless.call(alias2,(depth0 != null ? depth0.shared : depth0),{"name":"unless","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.show_delete : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n";
},"useData":true});
templates['spaces/members/item'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "class=\"editing\"";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "		<select name=\"role\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.roles : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</select>\n		<a href=\"#save\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Save",{"name":"t","hash":{},"data":data}))
    + "</a> |\n		<a href=\"#cancel\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Cancel",{"name":"t","hash":{},"data":data}))
    + "</a>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "				<option value=\""
    + alias4(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias2).call(alias1,(data && data.key),((stack1 = (data && data.root)) && stack1.role),{"name":"equal","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias4(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "selected";
},"7":function(container,depth0,helpers,partials,data) {
    var helper;

  return "		"
    + container.escapeExpression(((helper = (helper = helpers.role || (depth0 != null ? depth0.role : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"role","hash":{},"data":data}) : helper)))
    + "\n";
},"9":function(container,depth0,helpers,partials,data) {
    return " - <em>"
    + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"You",{"name":"t","hash":{},"data":data}))
    + "</em>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"share-actions\"></div>\n<h2>"
    + container.escapeExpression(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"email","hash":{},"data":data}) : helper)))
    + "</h2>\n<p "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.edit_mode : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.edit_mode : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "	"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.is_me : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n</p>\n\n";
},"useData":true});
templates['spaces/members/list'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<p class=\"empty\">"
    + container.escapeExpression(((helper = (helper = helpers.empty_msg || (depth0 != null ? depth0.empty_msg : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"empty_msg","hash":{},"data":data}) : helper)))
    + "</p>\n<ul class=\"item-list\"></ul>\n\n";
},"useData":true});
templates['spaces/sharing/index'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "has-perm";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"members memlist\">\n	<h3>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Members",{"name":"t","hash":{},"data":data}))
    + "</h3>\n	<div class=\"container\"></div>\n</div>\n\n\n<div class=\"invites memlist "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.can_add_invite : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n	<h3>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Pending invites",{"name":"t","hash":{},"data":data}))
    + "</h3>\n	<div class=\"container\"></div>\n</div>\n\n";
},"useData":true});
templates['spaces/sharing/send'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "open "
    + container.escapeExpression(((helper = (helper = helpers.email_note_class || (depth0 != null ? depth0.email_note_class : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"email_note_class","hash":{},"data":data}) : helper)));
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<option value=\""
    + alias4(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias2).call(alias1,(data && data.key),"admin",{"name":"equal","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias4(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + " - "
    + alias4(container.lambda(depth0, depth0))
    + "</option>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "selected";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "<input name=\"title\" type=\"text\" placeholder=\""
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Invite title (shared with invitee)",{"name":"t","hash":{},"data":data}))
    + "\" value=\""
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Invite to &quot;{{board_title}}&quot;",{"name":"t","hash":{"board_title":((stack1 = (depth0 != null ? depth0.space : depth0)) != null ? stack1.title : stack1)},"data":data}))
    + "\">\n<input name=\"email\" type=\"email\" placeholder=\""
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Invitee's email address",{"name":"t","hash":{},"data":data}))
    + "\">\n<div class=\"email-note "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.email_note_class : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n	<p>"
    + alias3(((helper = (helper = helpers.email_note || (depth0 != null ? depth0.email_note : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"email_note","hash":{},"data":data}) : helper)))
    + "</p>\n</div>\n<select name=\"role\" class=\"role\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.roles : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</select>\n<input name=\"passphrase\" type=\"text\" placeholder=\""
    + alias3(((helper = (helper = helpers.passphrase_holder || (depth0 != null ? depth0.passphrase_holder : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"passphrase_holder","hash":{},"data":data}) : helper)))
    + "\">\n<p>\n	"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"This passphrase is used to encrypt the invite. You can communicate it to the invitee via a secure channel (in-person, encrypted email, encrypted chat, etc).",{"name":"t","hash":{},"data":data}))
    + "\n</p>\n\n\n";
},"useData":true});
templates['users/debug'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "\n<div class=\"settings-logs\">\n	<p>\n	Here are the results. Please copy all text and send to info@turtlapp.com\n	</p>\n	<textarea disabled>---- core v0 ----\n"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.results : depth0)) != null ? stack1.core_v0 : stack1), depth0))
    + "\n\n---- v0.6 v0 ----\n"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.results : depth0)) != null ? stack1.v6_v0 : stack1), depth0))
    + "\n\n---- core v1 ----\n"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.results : depth0)) != null ? stack1.core_v1 : stack1), depth0))
    + "\n\n---- v0.6 v1 ----\n"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.results : depth0)) != null ? stack1.v6_v1 : stack1), depth0))
    + "</textarea>\n</div>\n\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "\n<div class=\"settings-logs\">\n	<p>\n	This is a page for people who cannot login on Turtl v0.7+. It is\n	intended to help people who are getting \"Bad login\" messages when usng\n	their v0.6 login credentials.\n	</p>\n</div>\n<input type=\"text\" name=\"username\" placeholder=\"Your username\" value=\"\" tabindex=\"1\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\">\n<input type=\"password\" name=\"password\" placeholder=\"Your password\" autocomplete=\"off\" autocorrect=\"off\" tabindex=\"2\">\n\n<div class=\"buttons\">\n	<div class=\"button login\">\n		<input type=\"submit\" class=\"button\" value=\"Debug\">\n	</div>\n	<p class=\"load\">\n		"
    + container.escapeExpression((helpers.svg || (depth0 && depth0.svg) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"loading",{"name":"svg","hash":{},"data":data}))
    + "\n	</p>\n</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.results : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\n";
},"useData":true});
templates['users/index'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"user-main clear\">\n	<div class=\"login-main\">\n	</div>\n	<div class=\"join-main\">\n	</div>\n</div>\n\n";
},"useData":true});
templates['users/join'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "active";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4=container.lambda;

  return "<input id=\"inp_email\" type=\"email\" name=\"username\" placeholder=\""
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Email address",{"name":"t","hash":{},"data":data}))
    + "\" tabindex=\"4\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"none\" autocorrect=\"off\">\n<input id=\"inp_pass\" type=\"password\" name=\"password\" placeholder=\""
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Passphrase",{"name":"t","hash":{},"data":data}))
    + "\" autocomplete=\"off\" autocorrect=\"off\" tabindex=\"5\">\n<input id=\"inp_conf\" type=\"password\" name=\"confirm\" placeholder=\""
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Confirm passphrase",{"name":"t","hash":{},"data":data}))
    + "\" autocomplete=\"off\" autocorrect=\"off\" tabindex=\"6\">\n<div class=\"strength "
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.state : depth0)) != null ? stack1.strength_class : stack1), depth0))
    + "\">\n	<div class=\"progress-bar\">\n		<div class=\"inner\" style=\"width: "
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.state : depth0)) != null ? stack1.strength_width : stack1), depth0))
    + "%;\">&nbsp;</div>\n	</div>\n	<p>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Passphrase strength: ",{"name":"t","hash":{},"data":data}))
    + "<span class=\"status\">"
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.state : depth0)) != null ? stack1.strength_text : stack1), depth0))
    + "</span></p>\n</div>\n\n"
    + alias3((helpers["remember-me"] || (depth0 && depth0["remember-me"]) || alias2).call(alias1,(depth0 != null ? depth0.autologin : depth0),{"name":"remember-me","hash":{},"data":data}))
    + "\n\n<div class=\"buttons\">\n	<div class=\"button join\">\n		<input type=\"submit\" class=\"button\" value=\""
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Join",{"name":"t","hash":{},"data":data}))
    + "\">\n	</div>\n	<p class=\"load\">\n		"
    + alias3((helpers.svg || (depth0 && depth0.svg) || alias2).call(alias1,"loading",{"name":"svg","hash":{},"data":data}))
    + "\n	</p>\n	<p>\n		<a href=\"/users/login\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Login to an existing account",{"name":"t","hash":{},"data":data}))
    + "</a>\n	</p>\n</div>\n\n<a class=\"open-settings "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.state : depth0)) != null ? stack1.settings : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" href=\"#settings\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Advanced settings",{"name":"t","hash":{},"data":data}))
    + " "
    + alias3((helpers.icon || (depth0 && depth0.icon) || alias2).call(alias1,"more",{"name":"icon","hash":{},"data":data}))
    + "</a>\n<div class=\"settings-container "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.state : depth0)) != null ? stack1.settings : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n	<p class=\"settings\">\n		<label>\n			"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Turtl server",{"name":"t","hash":{},"data":data}))
    + "\n			<input type=\"text\" name=\"server\" value=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.state : depth0)) != null ? stack1.endpoint : stack1), depth0))
    + "\" placeholder=\"https://apiv3.turtlapp.com\">\n		</label>\n	</p>\n</div>\n\n";
},"useData":true});
templates['users/login'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "active";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4=container.lambda;

  return "<input type=\"email\" name=\"username\" placeholder=\""
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Email",{"name":"t","hash":{},"data":data}))
    + "\" value=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.state : depth0)) != null ? stack1.last_username : stack1), depth0))
    + "\" tabindex=\"1\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\">\n<input type=\"password\" name=\"password\" placeholder=\""
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Passphrase",{"name":"t","hash":{},"data":data}))
    + "\" autocomplete=\"off\" autocorrect=\"off\" tabindex=\"2\">\n"
    + alias3((helpers["remember-me"] || (depth0 && depth0["remember-me"]) || alias2).call(alias1,(depth0 != null ? depth0.autologin : depth0),{"name":"remember-me","hash":{},"data":data}))
    + "\n\n<div class=\"buttons\">\n	<div class=\"button login\">\n		<input type=\"submit\" class=\"button\" value=\""
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Login",{"name":"t","hash":{},"data":data}))
    + "\">\n	</div>\n	<p class=\"load\">\n		"
    + alias3((helpers.svg || (depth0 && depth0.svg) || alias2).call(alias1,"loading",{"name":"svg","hash":{},"data":data}))
    + "\n	</p>\n	<p>\n		<a href=\"/users/welcome\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Create an account",{"name":"t","hash":{},"data":data}))
    + "</a>\n	</p>\n</div>\n\n<a class=\"open-settings "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.state : depth0)) != null ? stack1.settings : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" href=\"#settings\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Advanced settings",{"name":"t","hash":{},"data":data}))
    + " "
    + alias3((helpers.icon || (depth0 && depth0.icon) || alias2).call(alias1,"more",{"name":"icon","hash":{},"data":data}))
    + "</a>\n<div class=\"settings-container old-server "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.state : depth0)) != null ? stack1.settings : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n	<p class=\"settings\">\n		<label>\n			"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Old Turtl server",{"name":"t","hash":{},"data":data}))
    + "\n			<input type=\"text\" name=\"old_server\" value=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.state : depth0)) != null ? stack1.old_endpoint : stack1), depth0))
    + "\" placeholder=\"https://api.turtlapp.com/v2\">\n		</label>\n		<label>\n			"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Turtl server",{"name":"t","hash":{},"data":data}))
    + "\n			<input type=\"text\" name=\"server\" value=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.state : depth0)) != null ? stack1.endpoint : stack1), depth0))
    + "\" placeholder=\"https://apiv3.turtlapp.com\">\n		</label>\n	</p>\n</div>\n\n<a class=\"trouble\" target=\"_blank\" href=\"https://turtlapp.com/docs/troubleshooting/logging-in/\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Trouble logging in?",{"name":"t","hash":{},"data":data}))
    + "</a>\n\n";
},"useData":true});
templates['users/migrate'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "active";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4=container.lambda;

  return "<p>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Your account needs to be upgraded! Please enter your Turtl login info.",{"name":"t","hash":{},"data":data}))
    + "</p>\n<input type=\"text\" name=\"v6_username\" placeholder=\""
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Email",{"name":"t","hash":{},"data":data}))
    + "\" value=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.state : depth0)) != null ? stack1.username : stack1), depth0))
    + "\" tabindex=\"1\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\">\n<input type=\"password\" name=\"v6_password\" placeholder=\""
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Passphrase",{"name":"t","hash":{},"data":data}))
    + "\" value=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.state : depth0)) != null ? stack1.password : stack1), depth0))
    + "\" autocomplete=\"off\" autocorrect=\"off\" tabindex=\"2\">\n\n<br>\n<br>\n<p>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Create a new account to migrate your data into.",{"name":"t","hash":{},"data":data}))
    + "</p>\n<input id=\"inp_email\" type=\"email\" name=\"username\" placeholder=\""
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"New email address",{"name":"t","hash":{},"data":data}))
    + "\" tabindex=\"4\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"none\" autocorrect=\"off\" tabindex=\"4\">\n<input id=\"inp_pass\" type=\"password\" name=\"password\" placeholder=\""
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Passphrase",{"name":"t","hash":{},"data":data}))
    + "\" autocomplete=\"off\" autocorrect=\"off\" tabindex=\"5\">\n<input id=\"inp_conf\" type=\"password\" name=\"confirm\" placeholder=\""
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Confirm passphrase",{"name":"t","hash":{},"data":data}))
    + "\" autocomplete=\"off\" autocorrect=\"off\" tabindex=\"6\">\n<div class=\"strength "
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.state : depth0)) != null ? stack1.strength_class : stack1), depth0))
    + "\">\n	<div class=\"progress-bar\">\n		<div class=\"inner\" style=\"width: "
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.state : depth0)) != null ? stack1.strength_width : stack1), depth0))
    + "%;\">&nbsp;</div>\n	</div>\n	<p>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Passphrase strength: ",{"name":"t","hash":{},"data":data}))
    + "<span class=\"status\">"
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.state : depth0)) != null ? stack1.strength_text : stack1), depth0))
    + "</span></p>\n</div>\n\n"
    + alias3((helpers["remember-me"] || (depth0 && depth0["remember-me"]) || alias2).call(alias1,(depth0 != null ? depth0.autologin : depth0),{"name":"remember-me","hash":{},"data":data}))
    + "\n\n<div class=\"buttons\">\n	<div class=\"button login\">\n		<input type=\"submit\" class=\"button\" value=\""
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Migrate",{"name":"t","hash":{},"data":data}))
    + "\">\n	</div>\n	<p class=\"load\">\n		"
    + alias3((helpers.svg || (depth0 && depth0.svg) || alias2).call(alias1,"loading",{"name":"svg","hash":{},"data":data}))
    + "\n	</p>\n	<p>\n		<a href=\"/users/login\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Login to an existing account",{"name":"t","hash":{},"data":data}))
    + "</a>\n	</p>\n</div>\n\n<a class=\"open-settings "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.state : depth0)) != null ? stack1.settings : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" href=\"#settings\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Advanced settings",{"name":"t","hash":{},"data":data}))
    + " "
    + alias3((helpers.icon || (depth0 && depth0.icon) || alias2).call(alias1,"more",{"name":"icon","hash":{},"data":data}))
    + "</a>\n<div class=\"settings-container old-server "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.state : depth0)) != null ? stack1.settings : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n	<p class=\"settings\">\n		<label>\n			"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Old Turtl server",{"name":"t","hash":{},"data":data}))
    + "\n			<input type=\"text\" name=\"old_server\" value=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.state : depth0)) != null ? stack1.old_endpoint : stack1), depth0))
    + "\" placeholder=\"https://api.turtlapp.com/v2\">\n		</label>\n		<label>\n			"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Turtl server",{"name":"t","hash":{},"data":data}))
    + "\n			<input type=\"text\" name=\"server\" value=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.state : depth0)) != null ? stack1.endpoint : stack1), depth0))
    + "\" placeholder=\"https://apiv3.turtlapp.com\">\n		</label>\n	</p>\n</div>\n\n";
},"useData":true});
templates['users/migration-report'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "---\nType: "
    + alias4(((helper = (helper = helpers.subtype || (depth0 != null ? depth0.subtype : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"subtype","hash":{},"data":data}) : helper)))
    + " (id: "
    + alias4(((helper = (helper = helpers.item_id || (depth0 != null ? depth0.item_id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"item_id","hash":{},"data":data}) : helper)))
    + ")\nAction: "
    + alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data}) : helper)))
    + "\nMsg: "
    + alias4(((helper = (helper = helpers.msg || (depth0 != null ? depth0.msg : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"msg","hash":{},"data":data}) : helper)))
    + "\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<p>"
    + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(alias1,"It looks like you had some problems during migration. Don't worry, your data is still safe on the old Turtl server and you can try again at any time. Please send this log to the turtl team at {{email}}",{"name":"t","hash":{"email":"info@turtlapp.com"},"data":data}))
    + "</p>\n\n<div class=\"settings-logs\">\n	<textarea disabled>"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.errors : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</textarea>\n</div>\n";
},"useData":true});
templates['users/must-login'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"content\">\n	<div class=\"msg\">\n		<h2>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"You must log in",{"name":"t","hash":{},"data":data}))
    + "</h2>\n		<p>\n			"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"You must be logged in to perform this action.",{"name":"t","hash":{},"data":data}))
    + "\n		</p>\n	</div>\n</div>\n\n";
},"useData":true});
templates['users/welcome'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"interface\">\n	<div class=\"confirm-text\">\n		<h2>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"A note on how Turtl works",{"name":"t","hash":{},"data":data}))
    + "</h2>\n		<p>\n			"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Your account password acts as the \"key\" that locks and unlocks your data.",{"name":"t","hash":{},"data":data}))
    + "\n			"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"We don't store your password anywhere, so <em class=\"error\">you need to remember your password</em> or keep it in a safe place (like a password manager).",{"name":"t","hash":{},"data":data}))
    + "\n		</p>\n		<p>\n			"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"Turtl has no \"Lost password\" feature. If you lose your password, your profile is gone forever!",{"name":"t","hash":{},"data":data}))
    + "\n		</p>\n	</div>\n\n	<div class=\"buttons\">\n		<div class=\"button confirm\">\n			<span>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias2).call(alias1,"I will remember my login!",{"name":"t","hash":{},"data":data}))
    + "</span>\n		</div>\n	</div>\n</div>\n\n";
},"useData":true});
})();