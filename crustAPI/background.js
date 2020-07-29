const electron = require("electron");
const path = require("path");
const os = require("os");
const bright = require("win-brightness");

class Crust {
  constructor() {
    console.log("A");
  }

  notify(head, body, img) {
    const notification = {
      title: head,
      body: body
    };
    if (img) {
      notification.icon = path.join(__dirname, img);
    }
    const notif = new Notification(notification.title, notification);
  }

  getSystemInfo() {
    var sysInfo = new Object();

    try {
      sysInfo.arch = os.arch();
      sysInfo.cpus = os.cpus();
      sysInfo.freemem = os.freemem();
      sysInfo.totalmem = os.totalmem();
      sysInfo.uptime = os.uptime();
      sysInfo.homedir = os.homedir();
      sysInfo.hostname = os.hostname();
      sysInfo.networkInterfaces = os.networkInterfaces();
    } catch (err) {
      console.error(err);
    }

    return JSON.stringify(sysInfo);
  }

  ShowError(content) {
    // content should be an array [title, message]
    electron.ipcRenderer.send("open-error-dialog", content);
  }

  ShowAlert(content) {
    // content is an object {type, title, buttons, defaultId, messages, detail}
    electron.ipcRenderer.send("open-info-dialog", content);
  }

  brightnessSet(val) {
    let input = val / 100;
    bright.set(input, function(err) {
      if (err) {
        this.ShowError(["Error", err]);
      }
    });
  }

  get currentBrightness() {
    return bright.get(function(err, brightness) {
      if (err) console.log(brightness);
      //=> 0.5
    });
  }
}
let x = new Crust();

// JQuery stuff
$(() => {
  $("#notif").click(function(e) {
    e.preventDefault();
    var body = $("#inputnotif").val();
    x.notify("Notification Header", body);
  });

  $("#devProperties").click(function(e) {
    e.preventDefault();
    var out = x.getSystemInfo();
    $("#propOutput").val(out);
  });

  $("#error").click(function(e) {
    e.preventDefault();
    var errorContent = ["Error Title", "Error message"];
    x.ShowError(errorContent);
  });

  $("#info").click(function(e) {
    e.preventDefault();
    var infoContent = {
      type: "info",
      title: "Information",
      message: "I have something for you",
      buttons: ["ok", "cancel"],
      defaultId: 0
    };
    x.ShowAlert(infoContent);
  });

  $("#brightset").click(function(e) {
    e.preventDefault();
    var inputbright = $("#inputbright").val();
    x.brightnessSet(parseFloat(inputbright));
  });
});

// see not hard at all
