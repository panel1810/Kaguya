/*####################################
                 KAGUYA SAMA
             MADE BY LEXIC TEAM
       
✅ WhatsApp: wa.me/6281389103794
👥 Github: https://github.com/LEXIC-TEAM
#####################################*/

const { createHash } = require('crypto');

let handler = async function (m, { text, usedPrefix, command }) {
  conn.register = conn.register ? conn.register : {};
  let user = global.db.data.users[m.sender];
  if (user.registered === true) throw `*❕ You are already registered*`;
  if (!text) return m.reply(Func.example(usedPrefix, command, 'name.age'));
  let [name, age] = text.split(".");
  if (!name) return m.reply(Func.example(usedPrefix, command, 'name.age'));
  if (!age) return m.reply(Func.example(usedPrefix, command, 'name.age'));
  age = parseInt(age);
  if (age > 120) return m.reply(Func.Styles('Maximum Age *50* years'));
  if (age < 5) return m.reply(Func.Styles('Minimum Age *5* years'));
  let sn = createHash('md5').update(m.sender).digest('hex');

  m.reply(Func.Styles(`╭─「 *ACCOUNT INFO* 」
│Name: ${name}
│Age: ${age} years
╰────
Are you sure about your information?
Type *Y* to continue
Type *N* to cancel`));
  conn.register[m.sender] = {
    status: 'PROCESS',
    name: name,
    age: age,
    sn: sn
  };
};

handler.before = async function (m, { conn, usedPrefix, command }) {
  conn.register = conn.register ? conn.register : {};
  if (!m.text) return;
  if (!conn.register[m.sender]) return;
  let user = global.db.data.users[m.sender];
  if (user.registered === true) return;
  if (m.text === "Y") {
    const success =
      `*✅ VERIFY SUCCESS*\n` +
      Func.Styles(`Thank you for registering at ${namebot}, we will store all your information properly in our database, please type *.menu* to access the ${namebot} features

╭─「 *ACCOUNT INFO* 」
│Name: ${conn.register[m.sender].name}
│Age: ${conn.register[m.sender].age} years
╰────
Serial Number: ${conn.register[m.sender].sn}`)

    await m.reply(success);
    conn.register[m.sender].status = 'FINISH';
    user.name = conn.register[m.sender].name;
    user.age = conn.register[m.sender].age;
    user.regTime = +new Date();
    user.sn = conn.register[m.sender].sn;
    user.registered = true;
    delete conn.register[m.sender];
  } else if (m.text === "N") {
    m.reply('*✅ Registration cancelled*');
    delete conn.register[m.sender];
  } else m.reply('*❕ Select Y/N*');
};

handler.help = ['register', 'reg', 'daftar'].map(v => v + ' *[name.age]*');
handler.tags = ['main'];
handler.command = ['register', 'reg', 'daftar']

module.exports = handler;