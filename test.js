const rage = require('./index')
const myIp = 'xxxxx:00000'
const x = async () => {
    const rege = new rage(myIp, {})


    const url = await rege.getAllInfo()
    console.log(url);

}

x()