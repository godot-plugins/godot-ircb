var godot       = require('godot'),
    ircb        = require('godot-ircb');

godot.reactor.register('ircb', ircb.reactor);

godot.createServer({
  type: 'tcp',
  multiplex: false,
  reactors: [
    godot.reactor()
      .console()
      .ircb({
        host: 'irc.freenode.net',
        secure: false,
        username: 'godot',
        realName: 'godot',
        nick: 'godot',
        channels: ['#godot'],
      })
  ]
}).listen(1337);
