var turtl_core_config = {
  "wrap_errors": false,
  "messaging": {
    "reqres": "inproc://turtl-req",
    "events": "inproc://turtl-events",
    "reqres_append_mid": false
  },
  "data_folder": "/tmp/turtl",
  "logging": {
    "level": "info",
    "file": "core.log",
    "rotation": {
      "keep": 3,
      "size": 1048576
    }
  },
  "api": {
    "endpoint": "https://apiv3.turtlapp.com",
    "client_version_string": "core",
    "v6": {
      "endpoint": "https://api.turtlapp.com/v2"
    }
  },
  "sync": {
    "enable_incoming": true,
    "enable_outgoing": true,
    "enable_files_incoming": true,
    "enable_files_outgoing": true,
    "poll_timeout": 25
  },
  "integration_tests": {
    "data_folder": "/tmp/turtl/integration",
    "login": {
      "username": "testdata@turtlapp.com",
      "password": "omgitsatest"
    },
    "v6_login": {
      "username": "duck duck",
      "password": "juice"
    }
  }
}
