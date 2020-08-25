const electron = require("electron")
const path = require('path');
const os = require('os');
const bright = require('win-brightness');
const nircmd = require('./../node_modules/nircmd')


export default class Crust {
    constructor() {

    }

    notify(head, body, img) {
        const notification = {
            title: head,
            body: body
        }
        if (img) {
            notification.icon = path.join(__dirname, img)
        }
        const notif = new Notification(notification.title, notification)
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

        return JSON.stringify(sysInfo);
    }

    showError(content) {
        // content should be an array [title, message]
        electron.ipcRenderer.send('open-error-dialog', content)
        console.log(content)
    }

    showAlert(content) {
        // content is an object {type, title, buttons, defaultId, messages, detail}
        electron.ipcRenderer.send('open-info-dialog', content)
    }

    brightness() {
        // returns the brightness contentue as a value betwween 0 and 1
        this.get = function () {
            bright.get(function (err, brightness) {
                if (err) { this.showError(err) }
                return brightness
            })
        }
        // sets the brightness a specific value (note: input isn't sanitized)
        this.set = function (content) {
            let input = content / 100
            bright.set(input, function (err) {
                if (err) { this.ShowError(['Error', err]) }
            });
        }
    }

    clipboard() {
        this.clipboard.set = function (content) {
            electron.clipboard.writeText(content)
        }
        this.clipboard.get = function () { }
    }

    sound() {
        this.set = function (content) {
            volume = range(content, 0, 100, 0, 65535)
            nircmd(['setsysvolume', volume], null, () => {
                console.log(`brightness changed to: ${volume}`)
            })
        }

        this.mute = function (content) {
            content ? 1 : 0
            nircmd(['setsysvolume', content,], null, () => {
                console.log(`brightness changed to: ${volume}`)
            })
        }
    }
}

function range(oldInput, oldMin, oldMax, newMin, newMax) {
    // returns a number within the predefines range
    let s1 = oldInput - oldMin;
    let s2 = newMax - newMin;
    let s3 = oldMax - oldMin;
    let d1 = (s1 * s2) / s3;
    return d1 + newMin;
}

