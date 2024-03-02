/*####################################
                 KAGUYA SAMA
             MADE BY LEXIC TEAM
       
✅ WhatsApp: wa.me/6281389103794
👥 Github: https://github.com/LEXIC-TEAM
#####################################*/

let handler = m => m

handler.all = async function (m) {
    if (!m.message)
        return
    this.spam = this.spam ? this.spam : {}
    if (m.sender in this.spam) {
        this.spam[m.sender].count++
        if (m.messageTimestamp.toNumber() - this.spam[m.sender].lastspam > 10) {
            if (this.spam[m.sender].count > 10) {
             db.data.users[m.sender].banned = true
                await m.reply('*Spam Detected:* Not spam bot')
            }
            this.spam[m.sender].count = 0
            this.spam[m.sender].lastspam = m.messageTimestamp.toNumber()
            setTimeout(() => {
            db.data.users[m.sender].banned = false 
            },5000)
        }
    }
    else
        this.spam[m.sender] = {
            jid: m.sender,
            count: 0,
            lastspam: 0
        }
}

module.exports = handler