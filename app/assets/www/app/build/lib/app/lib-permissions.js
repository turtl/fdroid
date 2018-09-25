(function() {
"use strict";

var process = function(permdata) {
	function to_kv(arr) {
		var obj = {};
		arr.forEach(function(item) {
			var key = item.replace(/-/g, '_');
			obj[key] = item;
		});
		return obj;
	};

	var roles = to_kv(Object.keys(permdata.roles));
	var permissions = to_kv(permdata.permissions);
	var desc = {};

	Object.keys(roles).forEach(function(k) {
		desc[k] = permdata.roles[k].desc;
	});

	var role_permissions = {};
	var copy = {};
	Object.keys(permdata.role_permissions).forEach(function(role) {
		var spec = permdata.role_permissions[role];
		if(!role_permissions[role]) role_permissions[role] = [];
		var perms = role_permissions[role];
		if(spec.copy) {
			// handle copies later
			copy[role] = spec;
			return;
		}
		if(spec.all_but) {
			permdata.permissions.forEach(function(role) {
				if(spec.all_but.indexOf(role) >= 0) return;
				perms.push(role);
			});
		}
		(spec.perms || []).forEach(function(perm) {
			perms.push(perm);
		});
	});
	Object.keys(copy).forEach(function(role) {
		var spec = copy[role];
		var perms = role_permissions[role];
		if(!spec.copy) return;
		role_permissions[spec.copy].forEach(function(perm) {
			perms.push(perm);
		});
		(spec.perms || []).forEach(function(perm) {
			perms.push(perm);
		});
	});

	return {
		roles: roles,
		permissions: permissions,
		role_permissions: role_permissions,
		desc: desc,
	};
};
this.Permissions = {process: process};

}).call(typeof(exports) === 'undefined' ? window : exports);

(function() {
var permdata = {
	"roles": {
		"owner": {
			"desc": "Can do anything"
		},
		"admin": {
			"desc": "Can invite and moderate users, edit boards and notes"
		},
		"moderator": {
			"desc": "Can edit boards and notes"
		},
		"member": {
			"desc": "Can edit notes"
		},
		"guest": {
			"desc": "Read-only"
		}
	},
	"permissions": [
		"edit-space",
		"delete-space",
		"set-space-owner",
		"edit-space-member",
		"delete-space-member",
		"add-space-invite",
		"edit-space-invite",
		"delete-space-invite",

		"add-board",
		"edit-board",
		"delete-board",

		"add-note",
		"edit-note",
		"delete-note"
	],
	"role_permissions": {
		"owner": {
			"copy": "admin",
			"perms": [
				"set-space-owner",
				"delete-space"
			]
		},
		"admin": {
			"all_but": [
				"set-space-owner",
				"delete-space"
			]
		},
		"moderator": {
			"perms": [
				"add-board",
				"edit-board",
				"delete-board",
				"add-note",
				"edit-note",
				"delete-note"
			]
		},
		"member": {
			"perms": [
				"add-note",
				"edit-note",
				"delete-note"
			]
		},
		"guest": {
			"perms": []
		}
	}
}
Composer.object.merge(Permissions, Permissions.process(permdata))
})();
