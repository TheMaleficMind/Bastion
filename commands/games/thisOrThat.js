/**
 * @file thisOrThat command
 * @author Sankarsan Kampa (a.k.a k3rn31p4nic)
 * @license GPL-3.0
 */

const question = xrequire('./assets/thisOrThat.json');

exports.exec = async (Bastion, message) => {
  await message.channel.send({
    embed: {
      color: Bastion.colors.BLUE,
      description: question.getRandom()
    }
  });
};

exports.config = {
  aliases: [ 'thisthat' ],
  enabled: true
};

exports.help = {
  name: 'thisOrThat',
  description: 'Asks a this or that question. See how you and your friends choose!',
  botPermission: '',
  userTextPermission: '',
  userVoicePermission: '',
  usage: 'thisOrThat',
  example: []
};
