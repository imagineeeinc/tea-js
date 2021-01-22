var cream = Tea.require("Creamy")
var salt = Tea.require("Salt")
var ink = Tea.require("Ink")

new cream(
    [
        {
            tag
            : "div",
            id: "my-block",
            class: ["btn", "bg-green"],
            attributes: [
                {
                    att: "data-action",
                    value: "blast"
                }
            ],
            child: [
                "{{mes}} ",
                {
                    tag
                    : "span",
                    css: `
                    color: brown;
                    `,
                    child: [
                        " from {{lib}}"
                    ]
                }
            ]
        }
    ]//, {mount: "header"}
)
var m = "tea"
var ins = new ink(
    {
        el: '#my-block',
        data: [
            {
                name: "mes",
                value: "Hello, World!"
            },
            {
                name: "lib",
                value: m
            }
        ]
    }
)
conlog(Tea.require("Version"))