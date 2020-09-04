const electron = window.require("electron")
const path = window.require('path');
const os = window.require('os');
const bright = window.require('win-brightness');
const nircmd = window.require('./../node_modules/nircmd')


export default class Crust {
    constructor() {

    }

    notify(content) {
        if (!(Array.isArray(content))) {
            return console.error(`${content} is not an array @notify`);
        }
        const notification = {
            title: content[0].toString(),
            body: content[1].toString()
        }
        if (content.length > 2) {
            notification.icon = path.join(__dirname, content[2])
        }
        const notify = new Notification(notification.title, notification)
    }

    getSystemInfo() {
        var sysInfo = {}
        try {
            sysInfo.arch = os.arch();
            sysInfo.cpus = os.cpus();
            sysInfo.freemem = os.freemem()
            sysInfo.totalmem = os.totalmem()
            sysInfo.uptime = os.uptime()
            sysInfo.homedir = os.homedir()
            sysInfo.hostname = os.hostname()
            sysInfo.networkInterfaces = os.networkInterfaces()
        } catch (err) {
            this.showError('Error',)
            console.error(err)
        }

        return sysInfo;
    }

    async showError(content) {
        if (!content) {
            return console.error("content is undefined @ showError")
        }
        // content should be an array [title, message]
        await electron.ipcRenderer.send('open-error-dialog', content);
    }

    async showAlert(content) {
        if (!content) {
            return console.error(`content "${content}" is undefined @ showAlert`)
        }
        // content is an object {type, title, buttons, defaultId, messages, detail}
        await electron.ipcRenderer.send('open-info-dialog', content)
    }

    async brightness(content) {
        // returns the brightness contentue as a value betwween 0 and 1
        if (!content) {
            return await bright.get(function (err, brightness) {
                if (err) { console.error(err) }
                return brightness
            })
        }

        // sets the brightness a specific value (note: input isn't sanitized)
        const brightnessValue = content
        if ((brightnessValue > 100) || (brightnessValue < 0) || (typeof brightnessValue !== "number")) {
            return console.error(`TypeError: content "${typeof content}" @ brightness`)
        }
        await bright.set(content, function (err) {
            if (err) { console.error(err) }
        })
    }

    // clipboard() {
    //     this.clipboard.set = function (content) {
    //         electron.clipboard.writeText(content)
    //     }
    //     this.clipboard.get = function () { }
    // }

    // sound() {
    //     this.set = function (content) {
    //         volume = range(content, 0, 100, 0, 65535)
    //         nircmd(['setsysvolume', volume], null, () => {
    //             console.log(`brightness changed to: ${volume}`)
    //         })
    //     }

    //     this.mute = function (content) {
    //         content ? 1 : 0
    //         nircmd(['setsysvolume', content,], null, () => {
    //             console.log(`brightness changed to: ${volume}`)
    //         })
    //     }
    // }
}





// function range(oldInput, oldMin, oldMax, newMin, newMax) {
//     // returns a number within the predefines range
//     let s1 = oldInput - oldMin;
//     let s2 = newMax - newMin;
//     let s3 = oldMax - oldMin;
//     let d1 = (s1 * s2) / s3;
//     return d1 + newMin;
// }

