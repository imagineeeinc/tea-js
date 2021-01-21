var vdom = document.createElement("body")
const ver = "1.0.0"
const Tea = {
    require: (function(module) {
        switch (module) {
            case "Creamy":
              return Creamy
              break;
            case "Salt":
              return Salt
              break;
            case "Ink":
              return Ink
              break;
            case "Version":
              return ver
              break;
          }
    })
}
const Creamy = (function(body, options) {
    if (!(this instanceof Creamy)
    ) {
      console.warn('Tea.Creamy Module is a constructor and should be called with the `new` keyword');
    }
    this.b = body
    this.o = options
    this.ele = []
    var e = this.b;
    //body building
    if (this.o !== undefined) {
        for (i = 0; i < this.b.length; i++) {
            var e = this.b[i]
            this.ele.push(structure(e))
        }
        if (this.o.insert_location !== undefined) {
            for (i = 0; i < this.ele.length; i++) {
                document.querySelector(this.o.insert_location).append(this.ele[i])
            }
        } else {
            for (i = 0; i < this.ele.length; i++) {
                document.body.append(this.ele[i])
            }
        }
    } else {
    
        for (i = 0; i < this.b.length; i++) {
            var e = this.b[i]
            this.ele.push(structure(e))
        }
        for (i = 0; i < this.ele.length; i++) {
            vdom.appendChild(this.ele[i])
            document.body.append(this.ele[i])
        }
    }
    function structure(e) {
        var ele = document.createElement(e.ele)
        if (e.id !== undefined) {
            ele.id = e.id
        }
        if (e.class !== undefined) {
            for (i = 0; i < e.class.length; i++) {
                ele.classList.add(e.class[i])
            }
        }
        if (e.attributes !== undefined) {
            for (i = 0; i < e.attributes.length; i++) {
                ele.setAttribute(e.attributes[i].att, e.attributes[i].value)
            }
        }
        if (e.css !== undefined) {
            ele.setAttribute("style", e.css)
        }
        for (i = 0; i < e.child.length; i++) {
            var c = e.child
            if(c[i].ele === undefined) {
                ele.innerHTML = c[i]
            } else if(c[i].ele !== undefined) {
                ele.appendChild(structure(c[i]))
            }
        }
        return ele
    }
})

const Salt = function(selector) {
    function cons(ele) {
        this.selector = document.querySelector(selector) || null;
        this.element = null;
    }
    /* template: 
    cons.prototype.func_name = function (parms) {
        'use strict';
        //this.selector is baisicly the document.querySelector()
        this.selector.whatever(parms)
        //this is for the chainable functions
        return this
    }
    */
    //append
    cons.prototype.append = function(html) {
        'use strict';
        this.selector.append(html)
        return this
    }
    //prepend
    cons.prototype.prepend = function (html) {
        'use strict';
        this.selector.prepend(html)
        return this
    }
    //innerHTML
    cons.prototype.html = function(html) {
        if (html === undefined) {
        return this.element.innerHTML;
        }
        this.selector.innerHTML = html;
        return this
    };
    //addClass
    cons.prototype.addclass = function(clas) {
        this.selector.classList.add(clas);
        return this
    }
    //fadeout
    cons.prototype.fadeout = function () {
        'use strict';
        var ele = this.selector
        var op = 1;
        var timer = setInterval(function () {
            if (op <= 0.1){
                clearInterval(timer);
                ele.style.display = 'none';
            }
            ele.style.opacity = op;
            ele.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= op * 0.1;
        }, 10);
        return this
    }
    //fadein
    cons.prototype.fadein = function () {
        'use strict';
        var ele = this.selector
        var op = 0.1;  // initial opacity
        ele.style.display = 'block';
        var timer = setInterval(function () {
            if (op >= 1){
                clearInterval(timer);
            }
            ele.style.opacity = op;
            ele.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op += op * 0.1;
        }, 10);
        return this
    }
    //fadeoutspeed
    cons.prototype.fadeoutspeed = function (speed) {
        'use strict';
        var ele = this.selector
        var op = 1;
        var timer = setInterval(function () {
            if (op <= 0.1){
                clearInterval(timer);
                ele.style.display = 'none';
            }
            ele.style.opacity = op;
            ele.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= op * 0.1;
        }, speed);
        return this
    }
    //fadeinspeed
    cons.prototype.fadeinspeed = function (speed) {
        'use strict';
        var ele = this.selector
        var op = 0.1;  // initial opacity
        ele.style.display = 'block';
        var timer = setInterval(function () {
            if (op >= 1){
                clearInterval(timer);
            }
            ele.style.opacity = op;
            ele.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op += op * 0.1;
        }, speed);
        return this
    }
    //addeventlistener
    cons.prototype.evelis = function (type, callback) {
        'use strict';
        this.selector.addEventListener(type, callback)
        return this
    }
    //removeeventlisener
    cons.prototype.remevelis = function (type, callback) {
        'use strict';
        this.selector.removeEventListener(type, callback)
        return this
    }
    return new cons(selector)
};
const Ink = (function(opts) {
    if (!(this instanceof Ink)
    ) {
      console.warn('Tea.Ink Module is a constructor and should be called with the `new` keyword');
    }
    this.o = opts
    var elem = document.querySelector(opts.el)
    elem.setAttribute("data-tml", elem.innerHTML)
    var vars = []
    for (i = 0; i < this.o.data.length; i++) {
        vars.push(this.o.data[i])
    }
    var inner = elem.dataset.tml
    for (i = 0; i < vars.length; i++) {
        inner = inner.replaceAll("{{" + vars[i].name + "}}", vars[i].value)
    }
    elem.innerHTML = inner
})
//Console
const con = {
    log: (function (txt) {
        'use strict';
        return console.log(txt)
    }),
    error: (function (txt) {
        'use strict';
        return console.error(txt)
    }),
    cls: (function (txt) {
        'use strict';
        return console.clear(txt)
    }),
    debug: (function (txt) {
        'use strict';
        return console.debug(txt)
    }),
    dir: (function (txt) {
        'use strict';
        return console.dir(txt)
    }),
    dirxml: (function (txt) {
        'use strict';
        return console.dirxml(txt)
    }),
    assert: (function (txt) {
        'use strict';
        return console.assert(txt)
    }),
    tabel: (function (txt) {
        'use strict';
        return console.table(txt)
    }),
    time: {
        start: (function (txt) {
            'use strict';
            return console.time(txt)
        }),
        end: (function (txt) {
            'use strict';
            return console.timeEnd(txt)
        }),
        log: (function (txt) {
            'use strict';
            return console.timeLog(txt)
        }),
        stamp: (function (txt) {
            'use strict';
            return console.timeStamp(txt)
        })
    },
    trace: (function (txt) {
        'use strict';
        return console.trace(txt)
    }),
    warn: (function (txt) {
        'use strict';
        return console.warn(txt)
    }),
    info: (function (txt) {
        'use strict';
        return console.info(txt)
    })
}
const conlog = (function (txt) {
    'use strict';
    return console.log(txt)
})